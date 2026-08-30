# Standalone Mode

*Category from Fluent Snippets documentation*

---

## Standalone mode

**Source:** [https://fluentsnippets.com/docs/standalone-mode](https://fluentsnippets.com/docs/standalone-mode)

Standalone mode lets your snippets keep working when FluentSnippets is not installed. It exists so
that choosing this plugin is not a commitment you cannot back out of, and so that an agency can hand
over a finished site without handing over a dependency.

## Turning it on

**FluentSnippets → Settings → Standalone Mode → Turn on Standalone Mode.**

That writes a single small file, 
```
wp-content/mu-plugins/fluent-snippets-mu.php
```

. It is a must-use
plugin, so WordPress loads it automatically and it cannot be deactivated from the Plugins screen.

That file contains a copy of the snippet runner: the same code that reads your storage directory’s

```
index.php
```

, evaluates conditional logic, and includes your snippet files at the right hooks. It does
not contain your snippets. Those stay where they were, in

```
wp-content/fluent-snippet-storage/
```

.

## What happens when you remove the plugin

| Action | Standalone off | Standalone on |
| --- | --- | --- |
| Deactivate the plugin | Snippets stop running | Snippets keep running |
| Delete the plugin | Snippets stop running | Snippets keep running |
| Admin screens | Gone | Gone |
| Snippet files | Left on disk, inert | Left on disk, running |
| Reactivate later | Everything reappears as it was | Everything reappears as it was |
In both cases your snippet files are never deleted, so nothing is lost either way. The difference is
only whether they keep executing.

## Managing snippets while standalone

You cannot. The mu-plugin runs snippets; it has no admin interface. To add, edit or remove a snippet
you either reinstall FluentSnippets, which brings everything back exactly as it was because the state
is in the files, or edit the snippet files directly and rebuild the index by hand.

For most people, reinstalling is the answer. Standalone mode is not meant to be a permanent way of
working, it is a guarantee that removing the plugin does not break the site.

## Staying up to date

The mu-plugin records the plugin version it was written from. When you update FluentSnippets, the
first admin request after the update notices the runner is older than the plugin and rewrites it.
That matters because the stale copy is precisely what takes over the moment the plugin is
deactivated.

Deactivating the plugin also refreshes the mu-plugin first, so what takes over is always current.

If you delete the plugin directory by hand, without deactivating through the admin, the mu-plugin
stays at whatever version it last wrote. It keeps working; it just will not gain later fixes.

## Turning it off

**Settings → Disable Standalone Mode** removes 
```
wp-content/mu-plugins/fluent-snippets-mu.php
```

. With
the plugin still active, nothing changes for visitors. Snippets carry on running, just through the
plugin rather than the mu-plugin.

## Requirements and caveats

- WordPress must be able to create 
```
wp-content/mu-plugins/
```

 if it does not exist. On a host that
makes that directory unwritable, enabling standalone mode returns an error rather than failing
silently.
- If you use a custom 
```
WPMU_PLUGIN_DIR
```

, the file goes there.
- Some managed hosts manage 
```
mu-plugins
```

 themselves and may remove files they did not put there.
Check after enabling it, and check again after a host-side migration.
- The runner is a copy, not a symlink. Editing it by hand is pointless: it is overwritten on the next
plugin update or standalone toggle.

## When to use it

**Client handover.** Build the site, enable standalone mode, remove FluentSnippets. The client owns a
site that works, with the custom code visible in 
```
wp-content
```

 as ordinary files, and no plugin they
have to keep installed or updated.

**Reducing the active plugin count.** On a site where the snippets are finished and unlikely to
change, standalone mode gets you the behaviour without the plugin loading its admin code on every
request.

**Proving there is no lock-in.** Enable it, delete the plugin, watch the site carry on. That is a
reasonable thing to check before committing to any tool.

NOTE
  Standalone mode does not change how snippets behave. Types, run locations, priorities, conditional logic and [Safe Mode](/docs/safe-mode) all work exactly the same, because it is the same runner code. The 
```
FLUENT_SNIPPETS_SAFE_MODE
```

 constant still works with the plugin deleted, which is worth knowing before you delete it.   Something wrong or missing on this page? [Open an issue on GitHub ↗](https://github.com/WPManageNinja/easy-code-manager/issues)

---

