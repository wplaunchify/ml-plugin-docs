# Constants And Hooks

*Category from Fluent Snippets documentation*

---

## Constants and hooks

**Source:** [https://fluentsnippets.com/docs/constants-and-hooks](https://fluentsnippets.com/docs/constants-and-hooks)

FluentSnippets is small on purpose, and so is its developer surface. This is all of it.

## Constants

Define these in 
```
wp-config.php
```

, above the 
```
/* That's all, stop editing! */
```

 line, so they are set
before plugins load.

### FLUENT_SNIPPETS_STORAGE_DIR

Moves the storage directory. Defaults to 
```
WP_CONTENT_DIR . '/fluent-snippet-storage'
```

.

```
define( 'FLUENT_SNIPPETS_STORAGE_DIR', WP_CONTENT_DIR . '/uploads/fluent-snippets' );
```

Use it when 
```
wp-content/
```

 is not writable, or when you want snippets inside a directory your host
already backs up. Move any existing files to the new path and load an admin page once so the index
rebuilds.

The plugin derives the public URL for cached 
```
.css
```

 and 
```
.js
```

 files from this path, so it must be
somewhere under 
```
wp-content
```

 or the uploads directory for the
[load-as-file option](/docs/css-snippets#load-as-stylesheet-file) to work.

### FLUENT_SNIPPETS_SAFE_MODE

Turns every snippet off. See [Safe Mode](/docs/safe-mode).

```
define( 'FLUENT_SNIPPETS_SAFE_MODE', true );
```

### Constants the plugin defines

Read-only, but useful to check for:

| Constant | Meaning |
| --- | --- |
| FLUENT_SNIPPETS_PLUGIN_PATH | Filesystem path to the plugin |
| FLUENT_SNIPPETS_PLUGIN_URL | URL to the plugin |
| FLUENT_SNIPPETS_PLUGIN_VERSION | Version string |
| FLUENT_SNIPPETS_RUNNING_MU | Defined when snippets are being run by the standalone mu-plugin |
| FLUENT_SNIPPETS_RUNNING_MU_VERSION | The plugin version the standalone runner was written from |

## Filters

### fluent_snippets/run_snippets

Return 
```
false
```

 to stop all snippets from running, the same as Safe Mode.

```
add_filter( 'fluent_snippets/run_snippets', function ( $run ) {
    return ! ( defined( 'WP_CLI' ) && WP_CLI );
} );
```

Must be registered before 
```
plugins_loaded
```

 priority 9, so put it in a must-use plugin or

```
wp-config.php
```

, not in a snippet, which is loaded by the very thing you are trying to disable.

### fluent_snippets/snippet_types

Filters the array of snippet types and their run locations. Use it to add a run location to an
existing type:

```
add_filter( 'fluent_snippets/snippet_types', function ( $types ) {
    $types['php_content']['running_locations']['wp_footer_late'] = [
        'label'       => 'Footer (late)',
        'description' => 'Prints at the very end of the footer.',
    ];
    return $types;
} );
```

Note that adding a location to the picker does not teach the runner how to handle it. The runner
only recognises the built-in values. Treat this filter as a way to relabel and reorder what is
already there.

### fluent_snippets/protect_storage_dir

Return 
```
false
```

 to stop the plugin writing an 
```
.htaccess
```

 into the storage directory.

```
add_filter( 'fluent_snippets/protect_storage_dir', '__return_false' );
```

Only useful on nginx, or on a host that rejects the directives. If you do disable it, block direct
access to 
```
wp-content/fluent-snippet-storage/*.php
```

 in your server config instead. The 
```
ABSPATH
```

guard in each file already covers the normal case; this is defence in depth.

### fluent_snippets/sanitize_mixed_content

Runs over a Content snippet’s code before it is written to disk, on both save and import. Return a

```
WP_Error
```

 to refuse the save.

```
add_filter( 'fluent_snippets/sanitize_mixed_content', function ( $code, $meta ) {
    if ( str_contains( $code, 'eval(' ) ) {
        return new WP_Error( 'blocked', 'eval() is not allowed in Content snippets on this site.' );
    }
    return $code;
}, 10, 2 );
```

### fluent_snippets/skip_no_conflict

Controls the plugin’s no-conflict mode on its own admin screens, which strips other plugins’
stylesheets and scripts from the FluentSnippets pages.

## Actions

### fluent_snippets/snippet_created

Fires after a snippet file is written. Receives the filename.

```
add_action( 'fluent_snippets/snippet_created', function ( $file_name ) {
    error_log( "Snippet created: {$file_name}" );
} );
```

### fluent_snippets/snippet_updated

Fires after a snippet is saved. Receives the filename.

### fluent_snippets/snippet_deleted

Fires after a snippet file is deleted. Receives the filename.

### fluent_snippets/snippet_status_updated

Fires when a snippet is published or unpublished.

### fluent_snippets/rebuild_index

Both an action you can listen to and one you can fire yourself to force a rebuild of the generated
index:

```
do_action( 'fluent_snippets/rebuild_index' );
```

Useful after deploying snippet files with a script, when you would rather not wait for the next admin
page load. See [Rebuilding the index](/docs/how-it-works#rebuilding-the-index).

### fluent_snippets/after_run_snippets

Fires once all published snippets have been registered on their hooks, during 
```
plugins_loaded
```

. This
is the earliest point at which you can be sure every snippet’s callbacks exist.

## Auditing snippet changes

The four snippet lifecycle actions are enough to build a change log. In a must-use plugin:

```
foreach ( [ 'created', 'updated', 'deleted', 'status_updated' ] as $event ) {
    add_action( "fluent_snippets/snippet_{$event}", function ( $file_name ) use ( $event ) {
        error_log( sprintf(
            '[fluent-snippets] %s %s by user %d',
            $event,
            is_string( $file_name ) ? $file_name : '(unknown)',
            get_current_user_id()
        ) );
    } );
}
```

A must-use plugin rather than a snippet, so that a snippet cannot disable its own auditing.

   Something wrong or missing on this page? [Open an issue on GitHub ↗](https://github.com/WPManageNinja/easy-code-manager/issues)

---

