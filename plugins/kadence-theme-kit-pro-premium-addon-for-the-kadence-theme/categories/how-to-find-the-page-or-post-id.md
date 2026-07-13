# How To Find The Page Or Post Id

*Category from Kadence Theme Kit Pro - Premium addon for the Kadence Theme documentation*

---

## How to Find the Page or Post ID

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-theme/how-to-find-the-page-or-post-id/](https://www.kadencewp.com/help-center/docs/kadence-theme/how-to-find-the-page-or-post-id/)

Post and Page IDs in WordPress are unique identifiers assigned to every post, page, and custom post type. These IDs are essential when targeting specific content with custom CSS, JavaScript, or functions in theme development. Understanding how to find these IDs allows for more precise control and customization of your WordPress website, especially when dealing with advanced customizations or targeted functionality tasks.

## Method 1

Go to the list of all Pages in the WordPress admin at Pages > All Pages.

Place your mouse on top of the Page whose ID you would like to get and take a look at the URL in the status bar.

The number that appears after 
```
post=
```

 is the ID of that Page.

![Getting the ID of a Page](https://docs.nexcess.com/wp-content/uploads/2026/06/page-id-from-url.png)109 is the ID of this specific Page

The same process applies to all Post Types.

Method 2

You can also find the Post ID by directly editing the post and checking the URL of the editor page. The Post ID will appear after the 
```
post=
```

 parameter in the URL, just like the method mentioned above.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/howtofindid.png)

Method 3

Additionally, you can use your browser’s Inspector Tools to locate the Post or Page ID from the front end of your WordPress site. Right-click on the page and select Inspect or Inspect Element. In the HTML code, look for the 
```
<body>
```

 tag, which will contain various classes. One of these classes will follow the format 
```
postid-####
```

 or 
```
page-id-####
```

, where the numbers represent the Post or Page ID. This method provides an easy way to grab the ID directly from the front end.

![Inspector Tools](https://docs.nexcess.com/wp-content/uploads/2026/06/Inspector-Tools.gif)

![Inspector Sample](https://docs.nexcess.com/wp-content/uploads/2026/06/Inspector-Sample.jpg)

---

