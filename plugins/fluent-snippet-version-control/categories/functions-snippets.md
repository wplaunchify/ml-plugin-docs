# Functions Snippets

*Category from Fluent Snippet Version Control documentation*

---

## Functions (PHP) snippets

**Source:** [https://fluentsnippets.com/docs/functions-snippets](https://fluentsnippets.com/docs/functions-snippets)

A **Functions** snippet holds plain PHP. Anything you would put in a theme’s 
```
functions.php
```

 or a
small site-specific plugin belongs here: hooks, filters, helper functions, classes, integrations with
other plugins.

## Writing one

Write the code without an opening 
```
<?php
```

 tag. FluentSnippets writes that itself when it saves the
file, and it refuses to save a snippet that starts with one, because a second tag would be printed
onto the page as text.

```
add_action( 'init', function () {
    remove_post_type_support( 'post', 'comments' );
    remove_post_type_support( 'page', 'comments' );
} );
```

A closing 
```
?>
```

 at the end is stripped for you, so you can leave one in if you paste code that has it.

## Run locations

| Location | Effect |
| --- | --- |
| Run Everywhere | Front end and admin |
| Admin Only | /wp-admin/ requests only |
| Frontend Only | Front-end requests only |
“Admin Only” is checked with 
```
is_admin()
```

, so it also covers 
```
admin-ajax.php
```

 requests, which
WordPress treats as admin requests. If that matters for your snippet, add your own 
```
wp_doing_ajax()
```

check.

## When your code runs

This is the one thing worth understanding properly, because it changes depending on a setting you
might not connect to timing.

- **Without conditional logic**, a Functions snippet is attached to 
```
setup_theme
```

. That is very early:
before the theme’s 
```
functions.php
```

 is loaded, and before 
```
init
```

.
- **With conditional logic enabled**, it is attached to 
```
wp
```

 instead. That is much later, after the
main query has run, because the conditions need to know what page is being requested before they
can be evaluated.

Why it matters: something like 
```
add_filter( 'template_include', … )
```

 works fine in an unconditional
snippet but is too late to have any effect if you enable conditional logic on the same snippet.

TIP
  Hook your own code rather than running it at the top level of the snippet. 
```
add_action( 'init', … )
```

 inside the snippet fires at the right time regardless of whether the snippet itself was attached at 
```
setup_theme
```

 or 
```
wp
```

, which makes the timing difference above stop mattering.
Within a hook, the **Priority** field controls ordering. See
[Priority](/docs/snippet-types#priority).

## Validation on save

PHP snippets are checked before the file is written. The check has two parts:

1. **A parse pass** over the code’s tokens, looking for syntax errors and for functions, classes or
interfaces you are redeclaring.
2. **A runtime pass** that briefly evaluates the code to surface errors a parse cannot see.

If either fails, you get the error and nothing is saved. This is why a typo produces a message in the
editor rather than a white screen on the front end.

The second pass means your code is executed once at save time. Keep that in mind for a snippet with
side effects, such as one that writes a file or sends a request the moment it is loaded. Wrap that
work in a hook rather than running it at the top level, which you want to be doing anyway.

## Redeclaration errors

Because every published Functions snippet is loaded on the same request, two snippets that both
define 
```
function my_helper()
```

 will fatal. The validator catches the obvious case at save time, but it
cannot see a function defined by your theme or another plugin.

Prefix your function names, or guard them:

```
if ( ! function_exists( 'acme_price_suffix' ) ) {
    function acme_price_suffix( $price ) {
        return $price . ' inc. VAT';
    }
}
```

## Things Functions snippets cannot do

- **Print output directly.** A Functions snippet runs long before the page is rendered, so 
```
echo
```

 at
the top level either goes nowhere or lands somewhere unhelpful. Use a
[Content snippet](/docs/content-snippets) for output.
- **Run before plugins load.** Snippets are attached from 
```
plugins_loaded
```

, so you cannot use one to
affect something that happens earlier in the WordPress boot. That belongs in 
```
wp-config.php
```

 or a
must-use plugin.

## Examples

**Register a custom shortcode**

```
add_shortcode( 'current_year', function () {
    return esc_html( gmdate( 'Y' ) );
} );
```

**Remove the WordPress version from the head**

```
remove_action( 'wp_head', 'wp_generator' );
```

**Change the excerpt length**

```
add_filter( 'excerpt_length', function () {
    return 30;
}, 999 );
```

**Add a body class on a specific template**

```
add_filter( 'body_class', function ( $classes ) {
    if ( is_page( 'pricing' ) ) {
        $classes[] = 'is-pricing';
    }
    return $classes;
} );
```

   Something wrong or missing on this page? [Open an issue on GitHub ↗](https://github.com/WPManageNinja/easy-code-manager/issues)

---

