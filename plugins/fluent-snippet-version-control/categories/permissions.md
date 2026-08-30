# Permissions

*Category from Fluent Snippet Version Control documentation*

---

## Permissions and security

**Source:** [https://fluentsnippets.com/docs/permissions](https://fluentsnippets.com/docs/permissions)

Writing a snippet means putting executable code on the site. FluentSnippets treats that as the
privileged operation it is, and the capability requirements reflect that rather than being tied to a
role name.

## Capabilities

| Action | Required capabilities |
| --- | --- |
| View the snippet list and open snippets | install_plugins |
| Create, edit or import a snippet | install_plugins and unfiltered_html |
| Change settings, Safe Mode, standalone mode | manage_options and unfiltered_html |
| Export or download a snippet | install_plugins |
On a standard single site, an Administrator has all of these. Every other default role has none of
them, so Editors and below cannot see the plugin at all.

Requests are also nonce-protected. If you leave an editor tab open long enough for the nonce to
expire, saving fails with a message telling you to reload. Copy your code before you do, because
reloading loses unsaved changes.

## The unfiltered_html requirement

This is the one that surprises people, and it is deliberate. 
```
unfiltered_html
```

 is WordPress’s
“this user may put raw markup and scripts on the site” capability, and a snippet is a stronger
version of the same thing.

Three situations remove it, and in each the plugin will refuse to save even for an Administrator:

**Multisite.** Only Super Admins have 
```
unfiltered_html
```

. A site Administrator on a multisite network
cannot author snippets, which is the correct default for a network you do not fully control.

**DISALLOW_UNFILTERED_HTML.** If 
```
wp-config.php
```

 contains:

```
define( 'DISALLOW_UNFILTERED_HTML', true );
```

then nobody has the capability, including you. Snippet authoring is closed site-wide until the
constant is removed. Some managed hosts and security-hardening setups define it.

**A security or role-editor plugin** that strips the capability from the Administrator role.

The plugin’s error message names the capability and lists these causes, so you are not left guessing.

NOTE
  Importing a JSON file requires the same pair as writing a snippet by hand. It is the same operation: code arrives on the site and PHP snippets are validated by evaluating them. There is no lower-privileged import path.

## Granting access to a non-administrator

There is no settings screen for this, and that is intentional. If you genuinely need a non-admin to
manage snippets, grant the capabilities explicitly from a must-use plugin:

```
add_action( 'init', function () {
    $role = get_role( 'editor' );
    if ( $role ) {
        $role->add_cap( 'install_plugins' );
        $role->add_cap( 'unfiltered_html' );
    }
} );
```

Understand what that means before you do it: 
```
install_plugins
```

 lets that user install arbitrary
plugins, and 
```
unfiltered_html
```

 lets them put arbitrary scripts on your pages. Between them they are
close to administrator access. In almost every case the right answer is to make the person an
administrator instead of pretending they are not one.

## How the storage directory is protected

Snippet files hold your source code, and the generated 
```
index.php
```

 holds the
[Safe Mode](/docs/safe-mode) secret. Two layers keep them out of reach:

**Every file has an ABSPATH guard.** A snippet file starts with a check that WordPress is loaded
and returns immediately otherwise, so a direct HTTP request to a snippet file returns nothing even
when PHP processes it.

**An .htaccess denies direct access to .php files** in the directory. This covers the case where
PHP *stops* being processed there: a lost server config, an nginx location that never matched, a
host serving 
```
.php
```

 as plain text. In that state the guard is just text and the directory would
otherwise hand out every snippet’s source.

The rule is scoped to 
```
.php
```

 only, because 
```
cached/
```

 serves 
```
.css
```

 and 
```
.js
```

 to visitors and inherits
the same file. It is written once and never overwrites an existing file, and it can be turned off
with [fluent_snippets/protect_storage_dir](/docs/constants-and-hooks#fluent_snippetsprotect_storage_dir).

CARE
  On nginx the 
```
.htaccess
```

 does nothing, because nginx does not read it. The 
```
ABSPATH
```

 guard still applies, so you are not exposed under normal operation, but if you want the second layer, add a location block denying 
```
wp-content/fluent-snippet-storage/*.php
```

 to your server config.

## Practical hardening

- **Keep the Safe Mode URL private.** It disables your site’s custom code with no login. See
[Safe Mode](/docs/safe-mode).
- **Review before you publish.** Snippets are saved as drafts by default; leave that setting alone
unless you have a reason.
- **Only import files you trust.** Everything in
[Import and export](/docs/import-export#importing) applies.
- **Audit changes if several people have access.** The
[lifecycle actions](/docs/constants-and-hooks#auditing-snippet-changes) give you a change log in a
dozen lines.
- **Track the storage directory in Git** on sites where you can. A snippet appearing that nobody
wrote is then visible as a diff.

   Something wrong or missing on this page? [Open an issue on GitHub ↗](https://github.com/WPManageNinja/easy-code-manager/issues)

---

