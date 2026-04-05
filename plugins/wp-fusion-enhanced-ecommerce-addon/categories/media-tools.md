# Media Tools

*Category from WP Fusion - Enhanced Ecommerce Addon documentation*

---

## Bunny Stream Integration

**Source:** [https://wpfusion.com/documentation/media-tools/bunny-stream-integration/](https://wpfusion.com/documentation/media-tools/bunny-stream-integration/)

### Overview

WP Fusion’s [Media Tools addon](https://wpfusion.com/documentation/media-tools/media-tools-overview/) includes an integration with [Bunny Stream](https://bunny.net/stream/), which allows you to apply tags [in your CRM or email marketing platform](https://wpfusion.com/documentation/faq/crm-compatibility-table/) when:

- A video is played
- A video is completed
- One or more video timecodes are reached

### Setup

Since Bunny doesn’t have a WordPress plugin or visual UI, the player is configured by adding data attributes to the iFrame element containing the video.

Each attribute can accept any number of tags (comma-separated), and you can use tag names or tag IDs interchangeably.

The attribute parameters are:

- **data-wpf_tags_start**: These tags will be applied when the video is first played
- **data-wpf_timecode**: This is a specific timecode at which you’d like to apply tags, either in seconds, mm:ss, or a percentage
- **data-wpf_tags_timecode**: These tags will be applied at the timecode specified by 
```
wpf_timecode
```
- **data-wpf_tags_complete:**These tags will be applied when the video is complete (when play percentage is greater than 95%)

For example:

```
<iframe data-wpf_tags_start="Started Video" data-wpf_timecode="60" data-wpf_tags_timecode="Watched One Minute, Engaged" src="https://iframe.mediadelivery.net/embed/759/eb1c4f77-0cda-46be-b47d-1118ad7c2ffe?autoplay=true">
```

These attributes would apply the tag *Started Video* when the video is first played, and *Watched One Minute* and *Engaged* after one minute.

Timecodes can also be added using percentages.

```
<iframe data-wpf_timecode="50%" data-wpf_tags_timecode="Watched Half - Video A" src="https://iframe.mediadelivery.net/embed/759/eb1c4f77-0cda-46be-b47d-1118ad7c2ffe?autoplay=true">
```

This shortcode will apply the tag *Watched Half – Video A* when 50% of the video has been watched.

#### Multiple Timecodes

Multiple timecodes can be added in the format 
```
wpf_timecode_2="mm:ss"
```

 
```
wpf_tags_timecode_2="123,456"
```

 where the tags for the second property are a comma separated list of tags to be applied.

For example, to apply tags at 1:20, 1:40, and 2:40, your shortcode would look something like the following:

```
<iframe wpf_timecode="1:20" wpf_tags_timecode="Min Twenty" wpf_timecode_2="1:40" wpf_tags_timecode_2="Tag Three, Tag Four" src="https://iframe.mediadelivery.net/embed/759/eb1c4f77-0cda-46be-b47d-1118ad7c2ffe?autoplay=true">
```

---

## FV Player Integration

**Source:** [https://wpfusion.com/documentation/media-tools/fv-player-integration/](https://wpfusion.com/documentation/media-tools/fv-player-integration/)

### Overview

WP Fusion’s [Media Tools addon](https://wpfusion.com/documentation/media-tools/media-tools-overview/) includes an integration with [FV Player](https://wordpress.org/plugins/fv-wordpress-flowplayer/), which allows you to apply tags [in your CRM or email marketing platform](https://wpfusion.com/documentation/faq/crm-compatibility-table/) when:

- A video is played
- A video is completed
- One or more video timecodes are reached

### Setup

First create a new FV Player video and copy the video shortcode.

![](https://wpfusion.com/wp-content/uploads/2024/03/fv-player-copy-shortcode-1024x299.jpg)

Then paste the shortcode into the post or page where you’d like your video displayed.

#### Shortcode parameters

WP Fusion’s media engagement tracking with Presto Player is handled via shortcode attributes added to the 
```
[fvplayer]
```

 shortcode.

Each parameter can accept any number of tags (comma-separated), and you can use tag names or tag IDs interchangeably.

The shortcode parameters are:

- **wpf_tags_start**: These tags will be applied when the video is first played
- **wpf_timecode**: This is a specific timecode at which you’d like to apply tags, either in seconds, mm:ss, or a percentage
- **wpf_tags_timecode**: These tags will be applied at the timecode specified by 
```
wpf_timecode
```
- **wpf_tags_complete:**These tags will be applied when the video is complete (when play percentage is greater than 95%)

For example:

```
[fvplayer id=8912 wpf_tags_start="Video A Play, Media Engagement" wpf_timecode="1:30" wpf_tags_timecode="Watched Half - Video A" wpf_tags_complete="Video A Complete"]
```

That shortcode would apply the tags *Video A Play* and *Media Engagement* when the video is first played, *Watched Half – Video A*after 90 seconds, and then *Video A Complete* once the progress had reached 95%.

Or, using percents:

```
[fvplayer id=8912 wpf_timecode="50%" wpf_tags_timecode="Video A - 50%"]
```

This shortcode will apply the tag *Watched Half – Video A* when 50% of the video has been watched.

#### Multiple Timecodes

Multiple timecodes can be added in the format 
```
wpf_timecode_2="mm:ss"
```

 
```
wpf_tags_timecode_2="123,456"
```

 where the tags for the second property are a comma separated list of tags to be applied.

For example, to apply tags at 1:20, 1:40, and 2:40, your shortcode would look something like the following:

```
[fvplayer id=8912 wpf_timecode="1:20" wpf_tags_timecode="Min Twenty" wpf_timecode_2="1:40" wpf_tags_timecode_2="Min Forty" wpf_timecode_3="2:40" wpf_tags_timecode_3="Two Mins Forty"]
```

---

## Presto Player Integration

**Source:** [https://wpfusion.com/documentation/media-tools/presto-player-integration/](https://wpfusion.com/documentation/media-tools/presto-player-integration/)

### Overview

WP Fusion’s [Media Tools addon](https://wpfusion.com/documentation/media-tools/media-tools-overview/) includes an integration with [Presto Player](https://prestoplayer.com/), which allows you to apply tags [in your CRM](https://wpfusion.com/documentation/faq/crm-compatibility-table/) when:

- A video is played
- A video is completed
- One or more video timecodes are reached

### Setup

First create a new Presto Player video, either via the Media Hub, or by adding a Presto Player block to a page.

Enter the URL to your video, and once the preview appears, click on your video to access the settings panel.

The WP Fusion settings will appear on the right alongside the other video settings.

![](https://wpfusion.com/wp-content/uploads/2022/03/presto-player-block-UI-970x1024.jpg)

The options are :

- **Start tags:**These tags will be applied when the video is first played.
- **Timecode:**You can add one or more timecode-based triggers. For each timecode you can either enter a time (like 
```
1:35
```

) or a percentage (like 
```
35%
```

). The selected tags will be applied when the video progresses to that timecode or percentage.
- **End tags:**These tags will be applied when the video is complete (playback reaches 95%).

### Setup – Shortcode Method

**Note:** This is the older method of configuring Presto Player with WP Fusion and is more difficult to work with than the visual editor.
First create your Presto Player video, and the from the Media Hub page, copy the shortcode.

![](https://wpfusion.com/wp-content/uploads/2021/04/presto-player-shortcode-1024x321.jpg)

Then paste the shortcode into the post or page where you’d like your video displayed.

#### Shortcode parameters

WP Fusion’s media engagement tracking with Presto Player is handled via shortcode attributes added to the 
```
[presto_player]
```

 shortcode.

Each parameter can accept any number of tags (comma-separated), and you can use tag names or tag IDs interchangeably.

The shortcode parameters are:

- **wpf_tags_start**: These tags will be applied when the video is first played
- **wpf_timecode**: This is a specific timecode at which you’d like to apply tags, either in seconds, mm:ss, or a percentage
- **wpf_tags_timecode**: These tags will be applied at the timecode specified by 
```
wpf_timecode
```
- **wpf_tags_complete:**These tags will be applied when the video is complete (when play percentage is greater than 95%)

For example:

```
[presto_player id=8912 wpf_tags_start="Video A Play, Media Engagement" wpf_timecode="1:30" wpf_tags_timecode="Watched Half - Video A" wpf_tags_complete="Video A Complete"]
```

That shortcode would apply the tags *Video A Play* and *Media Engagement* when the video is first played, *Watched Half – Video A*after 90 seconds, and then *Video A Complete* once the progress had reached 95%.

Or, using percents:

```
[presto_player id=8912 wpf_timecode="50%" wpf_tags_timecode="Watched Half - Video A"]
```

This shortcode will apply the tag *Watched Half – Video A* when 50% of the video has been watched.

#### Multiple Timecodes

Multiple timecodes can be added in the format 
```
wpf_timecode_2="mm:ss"
```

 
```
wpf_tags_timecode_2="123,456"
```

 where the tags for the second property are a comma separated list of tags to be applied.

For example, to apply tags at 1:20, 1:40, and 2:40, your shortcode would look something like the following:

```
[presto_player id=8912 wpf_timecode="1:20" wpf_tags_timecode="Min Twenty" wpf_timecode_2="1:40" wpf_tags_timecode_2="Min Forty" wpf_timecode_3="2:40" wpf_tags_timecode_3="Two Mins Forty"]
```

---

## Elementor Integration

**Source:** [https://wpfusion.com/documentation/media-tools/elementor-integration/](https://wpfusion.com/documentation/media-tools/elementor-integration/)

### Overview

The Media Tools addon also has an integration with Elementor to allow configuring the settings inside the Video widget.

These settings appear in the *WP Fusion Media Tools* panel, and are the same as the options when using the Classic Editor.

- **Apply tags when media started:** These tags will be applied to the user as soon as they click the “Play” button.
- **Apply tags when media completed:** These tags will be applied to the user once the media file completes playing.
- **Timecodes:**Here you can specify multiple timecodes, and for each set tags to be applied when the video progress has passed the timecode.

![](https://wpfusion.com/wp-content/uploads/2019/01/media-tools-elementor-1-573x1024.jpg)

---

## Changelog

**Source:** [https://wpfusion.com/documentation/media-tools/media-tools-changelog/](https://wpfusion.com/documentation/media-tools/media-tools-changelog/)

#### #1.5.2 - 11/24/2025

- ✨ New Added support for Presto Player reusable video blocks (Media Hub)
- ⚡️ Improved Presto Player template rendering now properly applies WP Fusion attributes
- ⚡️ Improved Refactored data attribute generation into reusable helper methods
- ⚡️ Improved Added proper escaping for all output attributes
- ⚡️ Improved Enhanced null safety checks in JavaScript player initialization
- 🔧 Fixed Fixed duplicate ID attributes on Presto Player elements that could interfere with player functionality
- Updated 
```
wpfselect
```

 package to 1.1.6

#### #1.5.1 - 12/27/2024

- ⚡️ Improved YouTube players added to a page via 
```
<iframe>
```

 HTML will now automatically add the 
```
enablejsapi=1
```

 parameter to the URL
- ⚡️ Improved Updated for latest versions of Gutenberg, YouTube player APIs, and Presto Player
- ⚡️ Improved Updated React tags select UI to show a loading indicator while tags are being fetched
- 🔧 Fixed Fixed PHP warning "Undefined array key "providerNameSlug"" when using unsupported video providers
- 🔧 Fixed Fixed React admin warning "Each child in a list should have a unique "key" prop"

#### #1.5.0 - 3/22/2024

- ✨ New Added [FV Player integration](https://wpfusion.com/documentation/media-tools/fv-player-integration/)
- ✨ New Added [Bunny Stream integration](https://wpfusion.com/documentation/media-tools/bunny-stream-integration/)
- 🔧 Fixed Fixed tracking not working in Elementor lightboxes
- Updated select UI to use the new WPFSelect package

#### #1.4.1 - 8/7/2023

- 🔧 Fixed Fixed controls not showing on Presto Player Vimeo videos

#### #1.4.0 - 7/21/2023

- ✨ New Added [block editor integration](https://wpfusion.com/documentation/media-tools/usage-guide/)
- Removed jQuery dependency on the frontend

#### #1.3.0 - 6/16/2023

- Updated [Presto Player integration](https://wpfusion.com/documentation/media-tools/presto-player-integration/) to use the block editor
- 🔧 Fixed Fixed fatal error trying to activate the addon alongside WP Fusion Lite
- 🔧 Fixed Fixed settings and resources loading when WP Fusion was not connected to a CRM

#### #1.2.5 - 12/12/2022

- ✨ New Added support for Self Hosted videos with Elementor

#### #1.2.4 - 11/2/2022

- ✨ New Added support for percentage based timecodes with Presto Player
- 🔧 Fixed Fixed Presto Player tags not applying with multiple players on the page

#### #1.2.3 - 4/20/2021

- ✨ New Added option to enqueue tracking scripts on every page

#### #1.2.2 - 4/19/2021

- ⚡️ Improved If the YouTube player is time seeked, multiple timecode tags will be combined into a single AJAX request
- 🔧 Fixed Fixed "Cannot read property 'addAction' of undefined" JavaScript error

#### #1.2.1 - 4/7/2021

- Presto player bugfixes

#### #1.2 - 4/5/2021

- ✨ New Added Presto Player integration
- Additional compatibility fixes for Elementor 3.1.0+

#### #1.1.3 - 3/2/2021

- ✨ New Added compatibility warning with Borlabs Cookie Opt-In
- 🔧 Fixed Fixed YouTube player not applying tags in Elementor 3.1.0+

#### #1.1.2 - 10/27/2020

- ✨ New Added 350ms delay before initializing iFrames to get around FitVids.js in BuddyBoss Theme

#### #1.1.1 - 6/30/2020

- ✨ New Added percentage based tracking for Vimeo
- Wistia tracking bugfixes

#### #1.1 - 3/29/2020

- ✨ New Added multiple timecodes support to Elementor
- ✨ New Added support for Memberoni course videos
- 🔧 Fixed Fix for start tags not applying when an Elementor video overlay image is used

#### #1.0.1 - 8/5/2019

- 🔧 Fixed Fix for tags not applying with multiple YouTube players on a page

#### #1.0 - 2/28/2019

- VooPlayer timecode tracking bugfixes

#### #0.9 - 1/29/2019

- Elementor bugfixes

#### #0.8 - 1/22/2019

- Elementor support

#### #0.7 - 1/6/2019

- 🔧 Fixed Fix for settings sometimes not saving in admin

#### #0.6 - 9/28/2018

- ✨ New Added VooPlayer support

#### #0.5 - 3/15/2018

- ✨ New Added Wistia player support

#### #0.4 - 8/29/2017

- Updates for WPF v3.3
- ✨ New Added support for multiple timecodes via shortcode

#### #0.3 - 12/28/2016

- ✨ New Added YouTube player support

#### #0.2 - 8/23/2018

- ✨ New Added Vimeo player support

#### #0.1 - 7/14/2016

- Initial release

---

## Usage Guide

**Source:** [https://wpfusion.com/documentation/media-tools/usage-guide/](https://wpfusion.com/documentation/media-tools/usage-guide/)

### Block editor

To use the Media Tools integration with the block editor, first add a video to your page. The supported video blocks are Video, YouTube, and Vimeo.

![](https://wpfusion.com/wp-content/uploads/2016/07/media-tools-video-block.jpg)

After inserting your video URL, click on the video, and expand the WP Fusion panel to access the WP Fusion settings.

![](https://wpfusion.com/wp-content/uploads/2016/07/media-tools-block-controls-844x1024.jpg)

The options are:

- **Start tags:** These tags will be applied to the user as soon as they click the “Play” button.
- **Timecodes:**You can enter one or more timecodes, either as a timecode or a percentage. When the player reaches this point, the selected tags will be applied.
- **End tags:** These tags will be applied to the user once the media file completes playing (reaches 95% progress).

![](https://wpfusion.com/wp-content/uploads/2016/07/media-tools-gutenberg-1024x682.jpg)WP Fusion’s block editor integration lets you apply tags in your CRM based on engagement with videos on your site.

### Classic editor

To set up tracking for media content on your site, first click “Add Media” in the WordPress post editor and upload the audio or video file to your site. After the upload is finished, click “Insert Into Post” to add the player to your post.

You can also add embedded media by going to the Insert from URL tab and including a link to a video hosted elsewhere.

After the media is inserted, you’ll see a preview in the post editor. Click once on the preview and click the pencil icon to open up the media details window.

![editor1](https://wpfusion.com/wp-content/uploads/2016/07/editor1-1024x582.jpg)

In the media details window, you’ll see the WP Fusion Media Tracking box appear below the video, with several settings:

- **Apply tags when media started:** These tags will be applied to the user as soon as they click the “Play” button.
- **Apply tags when media completed:** These tags will be applied to the user once the media file completes playing.
- **Apply tags at timecode (timecode):** Enter a timecode at which additional tags (configured in the next field) should be applied. Timecode can either be in seconds (like “45”), or in delineated time notation (like “1:45”, for 1 minute 45 seconds).
- **Apply tags at timecode (tags):** These tags will be applied when the timecode specified in the field above is reached.

Any of these fields can be left blank to disable that specific trigger.

![editor2](https://wpfusion.com/wp-content/uploads/2016/07/editor2-831x1024.jpg)

### Multiple timecodes

For those with more advanced tracking needs, you can track multiple timecodes by editing the shortcode directly. Switch over to the Text tab in the editor, and you’ll see the embed code for your media, something like:

```
{embed wpf_tags_start="93" wpf_tags_complete="118" wpf_timecode="1:20" wpf_tags_timecode="118"] https://www.youtube.com/watch?v=1234567 [/embed]
```

Multiple timecodes can be added in the format 
```
wpf_timecode_2="mm:ss"
```

 
```
wpf_tags_timecode_2="123,456"
```

 where the tags for the second property are a comma separated list of tag IDs to be applied (Infusionsoft and Ontraport) or tag names for other CRMs.

For example, to apply tags at 1:20, 1:40, and 2:40, your shortcode would look something like the following:

```
{embed wpf_timecode="1:20" wpf_tags_timecode="118" wpf_timecode_2="1:40" wpf_tags_timecode_2="119" wpf_timecode_3="2:40" wpf_tags_timecode_3="120"]]https://www.youtube.com/watch?v=1234567[/embed]
```

### Spotlightr (formerly vooPlayer)

WP Fusion doesn’t support vooPlayer’s “vooPlayer Shortcode” popup, but you can still configure media tracking by editing the shortcode it generates. After insering a video, you’ll see a shortcode like:

```
[vooplayer type="video" id="OTU3MzM="]
```

You can configure tags to be applied by editing the shortcode attributes. The parameters are:

- **wpf_tags_start:** Comma separated list of tags to apply when the video begins to play
- **wpf_timecode:**A timecode at which to apply specific tags
- **wpf_tags_timecode:** The tags to apply at the timecode specified with wpf_timecode
- **wpf_tags_complete:**The tags to apply when the video is finished

For example:

```
[vooplayer type="video" id="OTU3MzM=" wpf_tags_start="VooStart" wpf_tags_complete="VooComplete" wpf_timecode="1:20" wpf_tags_timecode="Voo120"]
```

### (Advanced) iFrame tracking

It’s preferable to use an embed shortcode (or the [Elementor](https://wpfusion.com/documentation/media-tools/elementor-integration/) or [Presto Player](https://wpfusion.com/documentation/media-tools/presto-player-integration/) integrations) with the Media Tools addon, since this allows WP Fusion to detect which videos (and which types of videos) are being tracked, and thus the required tracking scripts are only loaded on those specific pages.

But there are some cases where you may want to set up WP Fusion’s media tracking directly on an 
```
<iframe>
```

 embed code.

To do that, first enable the setting **Load Scripts Everywhere** at Settings » WP Fusion » Addons, and then select which players you will be using.

![](https://wpfusion.com/wp-content/uploads/2016/07/media-tools-settings-panel-1-1024x451.jpg)

This will enqueue WP Fusion’s tracking script, as well as the video player APIs for any selected players, on every page of your site.

Then, you can add data attributes directly to the 
```
<iframe>
```

 of any of the supported players to enable tracking on that player.

For example:

```
<iframe id="player_1" data-player_type="vimeo" data-wpf_tags_start="Started Video" data-wpf_tags_complete="Video Complete, Video ID 1 Complete" src="https://player.vimeo.com/video/56282283" width="640" height="480" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
```

The parameters are:

- **id:***(required)* Every iFrame must have a unique ID to be tracked correctly
- **data-player_type:***(required)* The type of player, either 
```
youtube
```

, 
```
vimeo
```

, or 
```
wistia
```
- **data-wpf_tags_start:** Comma separated list of tags to apply when the video begins to play
- **data-wpf_timecode:**A timecode at which to apply specific tags
- **data-wpf_tags_timecode:** The tags to apply at the timecode specified with wpf_timecode
- **data-wpf_tags_complete:**The tags to apply when the video is finished

You can also use multiple timecodes, following the example documented above.

---

## Overview

**Source:** [https://wpfusion.com/documentation/media-tools/media-tools-overview/](https://wpfusion.com/documentation/media-tools/media-tools-overview/)

### Overview

WP Fusion’s Media Tools addon allows you to track engagement with embedded videos and audio on your site by applying tags [in your CRM](https://wpfusion.com/documentation/faq/crm-compatibility-table/) based on different types of user interaction— like video started, completed, and timecode(s) reached.

By using tag triggers in combination with WP Fusion’s content restriction features you can restrict access to pages on your site until users have completed watching a video or a percentage of a video.

![](https://wpfusion.com/wp-content/uploads/2016/07/media-tools-alt-player-1024x689.jpg)WP Fusion’s Media Tools addon lets you apply tags in your CRM based on engagement with videos on your site.
The Media Tools addon supports videos embedded with the following players:

- The *Video*, *YouTube* and *Vimeo* blocks [in the block editor](https://wpfusion.com/documentation/media-tools/usage-guide/)
- [Bunny Stream](https://wpfusion.com/documentation/media-tools/bunny-stream-integration/)
- [Elementor](https://wpfusion.com/documentation/media-tools/elementor-integration/)
- [FV Player](https://wpfusion.com/documentation/media-tools/fv-player-integration/)
- [Presto Player](https://wpfusion.com/documentation/media-tools/presto-player-integration/)

Using this addon with a learning management system such as [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/) or [LearnDash](https://wpfusion.com/documentation/learning-management/learndash/) adds a new level of control to your LMS, letting you unlock courses or lessons only after students have completed watching a video or listening to an audio file.

---

