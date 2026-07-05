# Kadence Blocks Pexels Integration

*Category from Kadence Blocks — Page Builder Toolkit for Gutenberg Editor documentation*

---

## Kadence Blocks Pexels Integration

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-blocks/kadence-blocks-pexels-integration/](https://www.kadencewp.com/help-center/docs/kadence-blocks/kadence-blocks-pexels-integration/)

In Kadence Blocks 3.1.16 a new feature was added that allows you to easily search and download images from [Pexels](https://www.pexels.com/) (a popular free image source) within your WordPress media library. If enabled you can open the media library modal, and you will see a new tab next to the media library for pexels.  Features of our Pexels integration include:

1. Search Pexels image library
2. Single or multi-select images to download
3. Images sized for web
4. Images downloaded with better file names for SEO

![](https://www.liquidweb.com/wp-content/uploads/2023/09/kadence-blocks-pexels-search-1024x395.png)
## How to disable Pexels Integration

You can choose to disable the Pexels integration by going to the Kadence Blocks settings in your editor and toggling the disabled option.

![](https://www.liquidweb.com/wp-content/uploads/2023/09/disable-pexels-kadence-blocks.png)Or you can add this snippet in a code snippet plugin:

```
add_filter('kadence_blocks_show_image_picker', '__return_false' );
```

Or you can disable by adding this define in your WordPress config file:

```
define( 'KADENCE_BLOCKS_DISABLE_IMAGE_SEARCH', true );
```

Was this article helpful?Yes NoThank you for your input.Thank you for your feedback.

---

