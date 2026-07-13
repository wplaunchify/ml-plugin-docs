# Video Backgrounds Row Layout Block

*Category from Kadence Blocks — Page Builder Toolkit for Gutenberg Editor documentation*

---

## Adding Video Backgrounds to Row Layout

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-blocks/video-backgrounds-row-layout-block/](https://www.kadencewp.com/help-center/docs/kadence-blocks/video-backgrounds-row-layout-block/)

Have you ever wished to enhance your content by adding captivating videos to the background? Imagine the dynamic visual appeal it could bring to your website. In this article, we explore the possibilities of integrating video backgrounds into your WordPress pages using Kadence Blocks, unraveling the steps to create an engaging and immersive user experience. Say goodbye to static imagery and embrace the power of video to elevate your online presence.

*The Video Background feature is designed for decorative purposes to enhance designs. While it does offer basic controls like pause and mute, it’s not a full video player and isn’t meant for delivering primary playable or interactive video content.* *For a full-on video player, consider the Video Popup Block available in Kadence Blocks Pro.*

Row Layout Block

The best way to add a background video is using the [Row Layout](https://docs.nexcess.com/software/kadence/row-layout-block/) block. In the Row Layout, you can find the Background Settings under the style tab and click the video type option to include a background video. The video will play in the background of the row’s content, letting you add text, buttons, and other elements on top of it. If you’ve uploaded a video or want to play a video from a specific URL, select the **Local**background video type, and select your video from your Media Library or add the HTML5 Video File URL

![Row Layout Background Settings for Video](https://docs.nexcess.com/wp-content/uploads/2026/06/Row-Layout-Background-Settings-for-Video.jpeg)

After adding the video, you have options to start the video muted, loop the video, and whether or not the play and pause buttons should appear. You can also add a background color behind the video if you need. Also, you can add a picture for the video poster that shows before the video plays.

Due to security, some browsers will not autoplay videos if there is sound. Generally, you should start video backgrounds muted.

![Row Layout Video Background extended settings](https://docs.nexcess.com/wp-content/uploads/2026/06/Row-Layout-Video-Background-extended-settings-1024x490-1.jpeg)

YouTube/Vimeo

Ideally, you should consider hosting background videos locally. However, the Row Layout block lets you add YouTube and Vimeo videos too. Choosing a YouTube or Vimeo video requires the video ID, which you can find in the video URL or share link. Additionally, you can adjust the background video ratio for YouTube and Vimeo videos.

![Row Layout Video Background YouTube settings](https://docs.nexcess.com/wp-content/uploads/2026/06/Row-Layout-Video-Background-YouTube-settings.jpeg)

![Vimeo video ID](https://docs.nexcess.com/wp-content/uploads/2026/06/Vimeo-video-ID.jpeg)

![YouTube Video ID](https://docs.nexcess.com/wp-content/uploads/2026/06/YouTube-Video-ID-1024x577-1.jpeg)

Dynamic Video URLs (Blocks Pro)

When using the **Local (MP4) Background Type**,  Yoy can use **Dynamic** Content to grab the URL dynamically. This allows you to create dynamic row layout blocks that display different videos based on the current post.

For example, you can create a custom field for each post to store a **unique** **local** **MP4 video URL**. Then, using [Hooked Elements](https://docs.nexcess.com/software/kadence/theme/use-element-hooks/) and [Dynamic Content](https://docs.nexcess.com/software/kadence/dynamic-content/), you can dynamically display the video by selecting that custom field.

![Dynamic Backgrounds](https://docs.nexcess.com/wp-content/uploads/2026/06/Dynamic-Backgrounds.gif)

---

