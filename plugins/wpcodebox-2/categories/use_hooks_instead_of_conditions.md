# Use_hooks_instead_of_conditions

*Category from WPCodeBox 2 documentation*

---

## Using hooks instead of conditions

**Source:** [https://docs.wpcodebox.com/use_hooks_instead_of_conditions](https://docs.wpcodebox.com/use_hooks_instead_of_conditions)

How to use hooks instead of conditions
# Using hooks instead of conditions

WPCodeBox 2 introduces a more advanced hook system. It is recommended to use this instead of conditions when possible. This will give you better
performance. Also, the hooks, unlike conditions, are saved to the cloud, because they are universal and not specific to a single WordPress website.

## When can you use hooks instead of conditions?

### For PHP Snippets

- Instead of the "Admin Area" condition, you can use the admin_init" hook.
- Instead of the "Frontend" condition, you can use the "wp" hook.
- Instead of the "Login Page" condition, you can use the "login_init" hook.

### For CSS/SCSS/JS/HTML Snippets

- Instead of the "Admin Area" condition, you can use the "Admin Header" or "Admin Footer" hooks.
- Instead ot the "Frontend" condition, you can use the "Frontend Header" or "Frontend Footer" hooks.
- Instead of the "Login Page" condition, you can use the "Login Header" or "Login Footer" hooks.

[Documentation in Editor](/documentation_in_editor)[Add Google Tag Manager to WordPress](/google_tag_manager)

---

