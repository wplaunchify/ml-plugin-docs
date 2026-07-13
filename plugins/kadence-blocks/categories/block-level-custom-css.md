# Block Level Custom Css

*Category from Kadence Blocks documentation*

---

## Applying Block-Level Custom CSS in Kadence Blocks

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-blocks/block-level-custom-css/](https://www.kadencewp.com/help-center/docs/kadence-blocks/block-level-custom-css/)

Kadence Blocks provides an easy way to apply **block-level custom CSS** directly inside the WordPress editor. This feature is available in the **Row Layout** and **Section** blocks under the **Advanced tab**.

**Steps to Add Block Level Custom CS**S

1. Select the Row or Section Block

- Click on the Row Layout or Section block in the editor.
- Go to the **Block settings** sidebar on the right.

2. Navigate to Advanced tab

- Click the **Advanced** tab.
- Scroll down until you see the **Custom CSS** panel.

3. Insert Your CSS

- Inside the editor, you’ll see a pre-filled keyword selector.
- Use *selector* as a placeholder. It automatically maps to the **current block** you’re editing.

Example:

```
selector {
    background-color: #f5f5f5;
    border-radius: 10px;
    padding: 20px;
}
```

This ensures that your CSS only applies to the selected block, without affecting other elements on the page.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-381x1024-1.png)

**Example Use Case**s

Targeting all Info Box blocks inside the specific Row or Section Block

```
selector .wp-block-kadence-infobox {
    height: 100%;
}
```

Targeting all Kadence Buttons (Adv) Block

```
selector .kb-button:hover {
  transform: scale(1.2);
}
```

**Advantages of Using Block-Level CSS**

- **Scoped Styling**– CSS applies only to the specific Row or Section block, avoiding global overrides.
- **No Child Theme Needed** – You don’t have to modify theme files or enqueue extra CSS.
- **Quick Testing** – Ideal for designers who want to preview styling changes immediately.
- **Granular Control** – Perfect for customizing specific sections without touching the entire page.

**Best Practice:** For repeated styles across multiple blocks or pages, place your CSS in the **Customizer’s Additional CSS** or your **child theme stylesheet** to keep things consistent and maintainable.

---

