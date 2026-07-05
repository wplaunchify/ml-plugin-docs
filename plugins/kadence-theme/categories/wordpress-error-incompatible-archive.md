# Wordpress Error Incompatible Archive

*Category from Kadence Theme documentation*

---

## WordPress Error “Incompatible Archive”

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-theme/wordpress-error-incompatible-archive/](https://www.kadencewp.com/help-center/docs/kadence-theme/wordpress-error-incompatible-archive/)

![](https://res.cloudinary.com/lwcom/images/w_1022,h_247,c_scale/f_auto,q_auto/v1778705270/prod/incompatible-archive-wordpress-error/incompatible-archive-wordpress-error.png?_i=AA)When attempting to upload a theme or plugin to WordPress (specifically WordPress version 6.4.3), you may run into this error: Incompatible Archive.

Don’t worry; While this error is undescriptive, it simply means that there was an error verifying the compressed .zip file you are trying to upload and couldn’t continue. This most likely happened because the zip file you were trying to use was compressed on a Mac operating system using Apple’s native compress folder function.

## How to fix Incompatible Archive

A couple of options are available to resolve this. For most the easiest solution is going to be A.

### Option A (Windows Users): Extract the zip file you are trying to upload and recompress it.

Wherever your zip file is located locally, you can extract the zip (double-click on the file) and then recompress it (right click -> compress)

Then upload that newly compressed file and it will work.

### Option B: Add a filter using a code snippet plugin.

First, install and activate a [code snippet plugin](https://www.liquidweb.com/docs/kadence-theme/how-to-add-a-custom-filter-or-function-with-code-snippets/) from the plugins > add new. Then, add this code snippet to run everywhere.

```
add_filter( 'unzip_file_use_ziparchive', '__return_false' );
```

### Option C (Mac Users): Extract the zip file you are trying to upload and recompress it.

Wherever your zip file is located locally, move it to your name user directory (this will make it easier to compress with the command line). Then you can extract the zip (double-click on the file).

Now, using a tool like [Keka](https://www.keka.io/) or the command line, you can recompress the folder and then reupload.

An example of using the command line looks like this:

1. Open up terminal (command + space to open search and type terminal)
2. Changing out “custom_plugin” with the plugin folder name, paste the command below into the terminal.

```
zip -vr custom-plugin.zip custom_plugin/
```

## How to prevent the Incompatible Archive error for your users

If you are not using a Mac operating system, then you can compress your usual way.

If you create a zip file on Mac OS of a theme or plugin to distribute to users, ensure it’s compressed using a tool like [Keka](https://www.keka.io/) or the command line. An example of using the command line looks like this:

```
zip -vr custom-plugin.zip custom_plugin/
```

## More information about the bug in incompatible archive bug in WordPress 6.4.3

This happened because of a bug introduced in WordPress 6.4.3, specifically this changeset: [https://core.trac.wordpress.org/changeset/57388](https://core.trac.wordpress.org/changeset/57388).

There is a bug fix and core trac ticket to follow about this issue here: [https://core.trac.wordpress.org/ticket/60398](https://core.trac.wordpress.org/ticket/60398)

Was this article helpful?Yes NoThank you for your input.Thank you for your feedback.

---

