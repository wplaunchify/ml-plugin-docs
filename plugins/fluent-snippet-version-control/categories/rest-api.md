# Rest Api

*Category from Fluent Snippet Version Control documentation*

---

## REST API

**Source:** [https://fluentsnippets.com/docs/rest-api](https://fluentsnippets.com/docs/rest-api)

FluentSnippets has a small REST API for deploy scripts, site-management tools and other
integrations. Reading, activating, deactivating and deleting snippets work out of the box. Adding
and editing snippets is **off until you turn it on**, because it lets anyone holding an admin’s
Application Password put code on your site.

Every write goes through the same checks as the editor. A PHP snippet with a syntax error, a name
that is already declared, or anything else the editor would refuse is refused here too, with the
same explanation.

## Turning it on

Go to **FluentSnippets → Settings**, switch on **Enable REST API to manage snippets**, and click **Save Settings**.

To manage it in configuration instead, add this to 
```
wp-config.php
```

:

```
define( 'FLUENT_SNIPPETS_REST_AUTHORING', true );  // or false to keep it off
```

The constant wins over the setting, and the switch on the Settings screen is locked while it is
defined. 
```
true
```

, 
```
1
```

, 
```
'yes'
```

, 
```
'on'
```

 and 
```
'true'
```

 turn it on. Any other value, including the
string 
```
'false'
```

, keeps it off.

The switch can only be changed on the Settings screen. A 
```
POST settings
```

 request made with an
Application Password that tries to change it is refused with **403**, so a leaked password cannot
turn the endpoints on for itself.

CARE
  Only turn this on if something you use needs it. You do not need it to use FluentSnippets in wp-admin; the editor never goes through these endpoints.

## Authentication

Use an [Application Password](https://make.wordpress.org/core/2020/11/05/application-passwords-integration-guide/)
for an administrator account: **Users → Profile → Application Passwords**. Send it with HTTP Basic
auth on every request. Give each integration its own password, so you can revoke one without
breaking the others.

The account needs the same capabilities as the editor. See
[Permissions and security](/docs/permissions).

| Action | Needs |
| --- | --- |
| List and read snippets | install_plugins |
| Activate, deactivate, delete | install_plugins and unfiltered_html |
| Add and edit | install_plugins and unfiltered_html, and the setting turned on |
Nothing can be changed while 
```
DISALLOW_FILE_MODS
```

 is set in 
```
wp-config.php
```

, because every snippet is
a file in 
```
wp-content
```

.

## Endpoints

All of them live under 
```
/wp-json/fluent-snippets/
```

. Snippets are identified by their file name, such
as 
```
23-header-tweaks.php
```

, which every response includes as 
```
file_name
```

.

| Method and path | Does |
| --- | --- |
| GET snippets | List snippets. Takes search, type, tag, per_page, page |
| GET snippets/find?snippet_name=… | Read one snippet, including its code and code_hash |
| POST snippets/create | Add a snippet |
| POST snippets/update | Change an existing snippet |
| POST snippets/update_status | Activate or deactivate: fluent_saving_snippet_name, status |
| POST snippets/delete_snippet | Delete: fluent_saving_snippet_name |

## Reading a snippet

```
curl -u 'admin:xxxx xxxx xxxx xxxx xxxx xxxx' \
  'https://example.com/wp-json/fluent-snippets/snippets/find?snippet_name=23-header-tweaks.php'
```

```
{
  "snippet": {
    "file_name": "23-header-tweaks.php",
    "status": "published",
    "code": "add_action('wp_head', function () {\n    echo '<meta name=\"x\" content=\"y\">';\n});",
    "code_hash": "9f2c…",
    "meta": { "name": "Header tweaks", "type": "PHP", "run_at": "wp_head", "status": "published", "…": "…" }
  }
}
```

```
code
```

 is exactly what you see in the editor, without the opening 
```
<?php
```

 line. 
```
code_hash
```

 is the
SHA-256 of that code, so you can also work it out yourself from code you already hold.

## Editing a snippet

Send only what you are changing. Everything you leave out keeps its current value. In particular,
editing the code does not change whether the snippet is active.

```
curl -u 'admin:xxxx xxxx xxxx xxxx xxxx xxxx' \
  -H 'Content-Type: application/json' \
  -X POST 'https://example.com/wp-json/fluent-snippets/snippets/update' \
  -d '{
    "file_name": "23-header-tweaks.php",
    "code": "add_action(\"wp_head\", function () {\n    echo \"<meta name=\\\"x\\\" content=\\\"z\\\">\";\n});",
    "expected_hash": "9f2c…"
  }'
```

| Field |  |
| --- | --- |
| file_name | Required. The snippet to change |
| code | The new code, in the same form find returns it. Leave it out to change only meta |
| meta | Only the fields you are changing: name, description, tags, group, type, status, run_at, priority, condition, load_as_file, load_in_block_editor. condition is an object; every other field is a string or a number. Other fields are ignored |
| expected_hash | Recommended. The code_hash you last read. If the snippet has changed since, nothing is saved |
| reactivate | Clears a recorded fatal error, like the editor’s save-and-reactivate |
The reply is the saved snippet, read back from disk, in the same shape as 
```
find
```

, with its new

```
code_hash
```

. Keep that hash if you are going to edit again.

### Avoiding overwrites

If someone else saved the snippet after you read it, an update with 
```
expected_hash
```

 is refused with
**409** and nothing is written:

```
{
  "code": "snippet_changed",
  "message": "This snippet has changed since you read it, so nothing was saved. …",
  "data": { "status": 409, "current_hash": "41ab…" }
}
```

Read the snippet again, reapply your change, and send the new hash. Without 
```
expected_hash
```

, the
update always wins.

## Adding a snippet

```
curl -u 'admin:xxxx xxxx xxxx xxxx xxxx xxxx' \
  -H 'Content-Type: application/json' \
  -X POST 'https://example.com/wp-json/fluent-snippets/snippets/create' \
  -d '{
    "code": "add_filter(\"login_errors\", fn () => \"Login failed.\");",
    "meta": { "name": "Generic login errors", "type": "PHP", "run_at": "wp" }
  }'
```

```
name
```

, 
```
type
```

 and 
```
run_at
```

 are required. A new snippet is saved as a **draft**, the same as in the
editor, unless **Publish new snippets straight away** is on in Settings. To make it live, call

```
snippets/update_status
```

 with 
```
"status": "published"
```

 afterwards.

## Errors

Errors come back as JSON with a 
```
code
```

, a 
```
message
```

 and an HTTP status.

| Status | Means |
| --- | --- |
| 400 | The request is malformed: no file_name on update, no code on create, unreadable meta, a meta field with the wrong shape, an unknown status |
| 401 | Not signed in. Check the Application Password |
| 403 | The setting is off, DISALLOW_FILE_MODS is set, or the account is missing a capability. The message says which |
| 404 | No snippet with that file name |
| 409 | The snippet changed since you read it (see above) |
| 413 | The code is larger than 1 MB |
| 422 | The snippet itself was refused, for the same reasons the editor would refuse it |
A 422 carries the editor’s explanation under 
```
data.error_details
```

, with a 
```
title
```

, the 
```
reason
```

and the 
```
fix
```

, plus the 
```
line
```

 for a syntax error:

```
{
  "code": "code",
  "message": "This snippet has a PHP syntax error on line 3",
  "data": {
    "error_details": {
      "title": "This snippet has a PHP syntax error",
      "reason": "PHP could not parse the snippet, so nothing was saved. …",
      "fix": "Look at the reported line and the one above it for a missing closing brace, semicolon, bracket or quote.",
      "line": 3
    }
  }
}
```

## Logging remote changes

Every add or edit made through the REST API fires 
```
fluent_snippets/rest_snippet_written
```

, with the
file name, the operation (
```
create
```

 or 
```
update
```

), and who made it, including which Application
Password was used:

```
add_action( 'fluent_snippets/rest_snippet_written', function ( $file_name, $operation, $actor ) {
    error_log( sprintf(
        'Snippet %s via REST: %s by user %d (app password %s)',
        $operation,
        $file_name,
        $actor['user_id'],
        $actor['app_password_uuid'] ?? 'none'
    ) );
}, 10, 3 );
```

The usual [lifecycle actions](/docs/constants-and-hooks#actions) fire as well, so an existing change
log picks these edits up without any changes.

## Older integrations

The request format used before 10.56 still works: 
```
fluent_saving_snippet_name
```

 instead of

```
file_name
```

, and 
```
meta
```

 as a JSON string with 
```
code
```

 inside it. 
```
POST snippets
```

 is an alias of

```
snippets/create
```

. The only difference is that fields left out of 
```
meta
```

 now keep their current
value instead of being reset.

   Something wrong or missing on this page? [Open an issue on GitHub ↗](https://github.com/WPManageNinja/easy-code-manager/issues)

---

