# Customize Template Files

*Category from The Events Calendar documentation*

---

## Customizing The Events Calendar Templates

**Source:** [https://docs.nexcess.com/software/the-events-calendar/customize-template-files/](https://docs.nexcess.com/software/the-events-calendar/customize-template-files/)

The Events Calendar uses a template system it calls *views* to render the calendar and event pages. You can customize these templates by placing copies of them in your theme — this is called a template override. This article covers the template folder structure, how to locate the files you need, and how to create overrides for both theme and plugin developers.

⚠️ **Never edit template files directly inside the plugin.** Changes made there will be lost every time the plugin updates. Always make overrides in a child theme so your customizations are preserved.

## Template Structure

The main template folder for calendar views is located at 
```
/src/views/v2/
```

 within each plugin. This directory contains the primary templates responsible for rendering each calendar view, including the looping logic that populates the calendar with events.

### Top-Level View Templates

The top-level template files define the overall layout and structure of each view.

**The Events Calendar:**

- ```
month.php
```
- ```
list.php
```
- ```
day.php
```

![The top-level template files for The Events Calendar views inside the /src/views/v2/ folder](https://docs.nexcess.com/wp-content/uploads/2026/06/image-2-9.jpg)

**Events Calendar Pro:**

- ```
map.php
```
- ```
photo.php
```
- ```
summary.php
```
- ```
week.php
```

![The top-level template files for Events Calendar Pro views inside the /src/views/v2/ folder](https://docs.nexcess.com/wp-content/uploads/2026/06/image-3-8.jpg)

You might need to customize a top-level view template if you want to add custom HTML classes to the main container, alter the overall layout of a view, or make other structural changes.

### Template Parts Within Each View

Each top-level view template has a corresponding subfolder inside 
```
/src/views/v2/
```

 containing the parts that make up that view. For example, 
```
/list
```

, 
```
/month
```

, 
```
/day
```

 (TEC) and 
```
/photo
```

, 
```
/week
```

 (ECP).

Three template part files appear consistently across all view folders and are important reference points when customizing:

- ```
top-bar.php
```

 — renders the calendar header/toolbar area
- ```
nav.php
```

 — renders the navigation controls
- ```
event.php
```

 — renders each individual event within the view

### Visual Reference: List View

![A visual guide showing how the List View template files map to the rendered HTML elements of the calendar](https://docs.nexcess.com/wp-content/uploads/2026/06/List_View_Visual_Guide-1024x996-1.jpg)

## Locating Template Files

All plugin files live in your server’s 
```
/wp-content/plugins
```

 folder. Here’s where to find the 
```
/src/views/v2/
```

 template directory for each plugin:

| Plugin | Template Files |
| --- | --- |
| The Events Calendar | /the-events-calendar/src/views/v2/ |
| Events Calendar Pro | /events-calendar-pro/src/views/v2/ |
| Event Tickets | /event-tickets/src/views/v2/ |
| Event Tickets Plus | /event-tickets-plus/src/views/v2/ |
| Community Events | /the-events-calendar-community-events/src/views/ |

💡 A quick way to find the correct override path for any template is to open the file itself. The header comment at the top of every template file includes the path to use for your theme override.

![A template file open in a code editor, showing the override path in the header comment](https://docs.nexcess.com/wp-content/uploads/2026/06/image-1-8.jpg)

### Exceptions: Single Event, Organizer, and Venue Pages

Single event, organizer, and venue pages still use files from the legacy design, with both classic editor and block editor versions.

| Plugin | Template File | Theme Override Location |
| --- | --- | --- |
| Classic Editor |
| The Events Calendar | /the-events-calendar/src/views/single-event.php | [your-theme]/tribe-events/single-event.php |
| The Events Calendar | /the-events-calendar/src/views/modules/ | [your-theme]/tribe-events/modules/ |
| Events Calendar Pro | /events-calendar-pro/src/views/pro/modules/ | [your-theme]/tribe-events/pro/modules/ |
| Block Editor |
| The Events Calendar | /the-events-calendar/src/views/single-event-blocks.php | [your-theme]/tribe/events/single-event-blocks.php |
| The Events Calendar | /the-events-calendar/src/views/single-event/ | [your-theme]/tribe/events/single-event/ |
| Events Calendar Pro | /events-calendar-pro/src/views/blocks/ | [your-theme]/tribe/events-pro/blocks/ |

### JavaScript Templates

💡 The Events Calendar is not fully compatible with Full Site Editing themes. We recommend testing with Twenty Twenty if you encounter compatibility issues.

JavaScript is used to power mobile calendar views and the tooltips in Month and Week views. The JavaScript template files are located at:

- **Month View:** 
```
wp-content/plugins/the-events-calendar/src/views/month/single-event.php
```
- **Week View:** 
```
wp-content/plugins/events-calendar-pro/src/views/week/single-event-allday.php
```
- **Mobile Month View:** 
```
wp-content/plugins/the-events-calendar/src/views/month/mobile.php
```
- **Mobile Week View:** 
```
wp-content/plugins/events-calendar-pro/src/views/week/mobile.php
```
- **Month View Tooltips:** 
```
wp-content/plugins/events-calendar-pro/src/views/month/tooltip.php
```
- **Week View Tooltips:** 
```
wp-content/plugins/events-calendar-pro/src/views/week/tooltip.php
```

Overriding JavaScript templates follows the same process as overriding any other plugin template file, described in the sections below.

## Creating a Template Override

The override process has three steps: locate the file, set up the correct folder structure in your theme, and drop your customized copy there. The plugin’s template engine checks your theme folder first and loads your version instead of the plugin’s.

### Set Up the Theme Folder Structure

In your theme’s root directory, create a 
```
tribe
```

 folder if one doesn’t exist. Inside it, create the subfolder that corresponds to the plugin you are customizing:

| Plugin | Theme Folder |
| --- | --- |
| The Events Calendar (legacy views) | /tribe/events/ |
| The Events Calendar (current views) | /tribe/events/v2/ |
| Events Calendar Pro | /tribe/events-pro/v2/ |
| Event Tickets | /tribe/tickets/ |
| Event Tickets Plus | /tribe/tickets-plus/ |
| Community Events | /tribe-events/community/ |

The subfolder structure after that point must exactly mirror the plugin’s 
```
/src/views/v2/
```

 directory. For example, to override 
```
the-events-calendar/src/views/v2/list/event/featured-image.php
```

, the file must be placed at:

```
wp-content/themes/your-theme/tribe/events/v2/list/event/featured-image.php
```

![The correct folder structure for overriding a The Events Calendar template in a theme, showing tribe/events/v2/ containing view subfolders](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2020-02-13-at-16.18.32.jpg)

### Template Overrides with the Block Editor

For block editor single event pages, the override location depends on which plugin’s blocks you are customizing.

**The Events Calendar blocks** — place overrides at 
```
[your-theme]/tribe/events/blocks/
```

. The Events Calendar blocks include: Classic Event Details, Event Category, Event Datetime, Event Links, Event Organizer, Event Price, Event Tags, Event Venue, Event Website, and Featured Image.

You can find all Events Calendar template files [here](https://docs.nexcess.com/software/the-events-calendar/calendar-templates/).

**Events Calendar Pro blocks** — place overrides at 
```
[your-theme]/tribe/events-pro/blocks/
```

. Events Calendar Pro blocks include: Additional Fields, Recurrence, and Related Events.

You can find all Events Calendar Pro template files [here](https://theeventscalendar.com/knowledgebase/k/events-calendar-pro-template-files/).

## Example: Removing the Featured Image from List View

Here’s a practical walkthrough that shows the full override process. We’ll remove the featured image from the calendar’s List view.

![The Events Calendar in List view, showing events with featured images](https://docs.nexcess.com/wp-content/uploads/2026/06/list-view-template-1.png)

![A closer look at the featured images in the List view that we want to remove](https://docs.nexcess.com/wp-content/uploads/2026/06/list-featured-image.png)

#### Step 1: Locate the Template File

Navigate to 
```
/wp-content/plugins/the-events-calendar/src/views/v2/list/
```

. Inside it is an 
```
event/
```

 folder containing 
```
featured-image.php
```

 — that’s the file we need.

![The /list directory inside the Events Calendar plugin, showing the event subfolder](https://docs.nexcess.com/wp-content/uploads/2026/06/list-view-template-directory.png)

![The /list/event/ directory showing featured-image.php](https://docs.nexcess.com/wp-content/uploads/2026/06/list-view-event-folder-1024x515-1.png)

#### Step 2: Set Up the Override Folder

In your theme, create the folder path 
```
tribe/events/v2/list/event/
```

.

![The theme directory showing the newly created tribe/events/v2/list/event/ folder](https://docs.nexcess.com/wp-content/uploads/2026/06/template-new-folder-1024x443-1.png)

#### Step 3: Copy and Customize the File

Copy 
```
featured-image.php
```

 into 
```
tribe/events/v2/list/event/
```

 in your theme. To remove the featured image, open the file and delete all its contents, leaving a blank file.

![The theme folder now containing the copied featured-image.php at the correct path](https://docs.nexcess.com/wp-content/uploads/2026/06/template-override-example-1024x389-1.png)

Reload the calendar. The featured image no longer appears.

![The List view calendar after the override, showing events without featured images](https://docs.nexcess.com/wp-content/uploads/2026/06/list-featured-image-removed-1024x735-1.png)

Note that the event description column won’t expand to full width automatically, since the original CSS reserves space for the image. Add the following CSS to fix that:

```
.tribe-common--breakpoint-medium.tribe-events .tribe-events-calendar-list__event-details {
    width: 100%;
}
```

This same process — find the file, mirror the path in your theme, customize your copy — applies to every template file across all TEC plugins.

## Custom Template Paths for Plugin Developers

This section covers an advanced use case for plugin authors: registering a custom plugin as an additional template override location. This allows a plugin you’ve built to provide its own versions of TEC template files, which can then themselves be overridden by a child theme. If you’re customizing templates for your own site rather than building a distributable plugin, use a theme override as described above.

### How Plugin Template Paths Work

Each TEC template file maps from its plugin source path to a corresponding theme override path. For example:

- ```
the-events-calendar/src/views/v2/list/event.php
```

 → 
```
/tribe/events/v2/list/event.php
```

 in your theme
- ```
events-calendar-pro/src/views/v2/photo/event.php
```

 → 
```
/tribe/events-pro/v2/photo/event.php
```

 in your theme

When you register a custom plugin path, you insert your plugin into that lookup chain at a specific priority. Your plugin’s version of the file takes precedence over the original plugin’s default, and a child theme’s override still takes precedence over yours.

For example, with a custom plugin registered:

- Default: 
```
events-calendar-pro/src/views/v2/photo/event.php
```
- Your plugin’s override: 
```
my-plugin/tribe-customizations/v2/photo/event.php
```
- Theme override of your plugin’s file: 
```
/tribe/my-plugin/v2/photo/event.php
```

If you set a 
```
namespace
```

 value in your folder registration, you change what a theme must use to override your plugin’s version. If you omit the 
```
namespace
```

 key, the original plugin namespace is preserved and standard theme overrides work normally.

### Registering a Custom Plugin Template Path

Use the 
```
tribe_template_path_list
```

 filter to add your plugin as a template override location:

```
/**
 * Add your own plugin as a template override location for The Events Calendar,
 * Event Tickets, and related plugins.
 * Applies to templates using the new Template Engine (v5.0.1+).
 *
 * @param array            $folders  Array of data for loading locations.
 * @param Tribe__Template $template Instance of the template engine.
 * @return array
 */
function tribe_v2_additional_plugin_template_locations( $folders, Tribe__Template $template ) {
    $plugin_name   = 'my-plugin';
    $priority      = 5;
    $custom_folder = [ 'tribe-customizations' ];

    $plugin_path = array_merge(
        (array) trailingslashit( plugin_dir_path( __FILE__ ) ),
        (array) $custom_folder,
        array_diff( $template->get_template_folder(), [ 'src', 'views' ] )
    );

    $folders[ $plugin_name ] = [
        'id'        => $plugin_name,
        'namespace' => $plugin_name,
        'priority'  => $priority,
        'path'      => $plugin_path,
    ];

    return $folders;
}

add_filter( 'tribe_template_path_list', 'tribe_v2_additional_plugin_template_locations', 10, 2 );
```

The 
```
priority
```

 value controls where your plugin sits in the lookup chain. Default priorities used by TEC plugins for reference:

- Event Tickets: 17
- The Events Calendar (plugin origin): 20
- Events Calendar Pro: 25

---

