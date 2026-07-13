# Schedule Shortcodes

*Category from The Events Calendar documentation*

---

## Using Event Schedule Manager Shortcodes

**Source:** [https://docs.nexcess.com/software/the-events-calendar/schedule-shortcodes/](https://docs.nexcess.com/software/the-events-calendar/schedule-shortcodes/)

## Schedule Shortcode

**[tec_schedule]**

Example shortcode: **[tec_schedule tracks=”all” color_scheme=”light” session_link”none”]** This would output a schedule with all tracks, using a light color scheme, and session titles not being linked.

- ‘date’ (default: null) – Specifies the date for which the schedule should be displayed; when set to null, the schedule does not display.

- Supports multiple dates (comma separated)
- Creates date tabs
- i.e: date=”2023-09-21, 2023-09-22″
- ‘tracks’ (default: all) – Allows the user to specify which tracks should be displayed in the schedule;
- “all” will display sessions from all tracks.
- a comma separated list of track term slugs displays those specific tracks
- ‘session_link’ (default: permalink) – Determines the type of link to be used for the sessions; the options are:
- ‘permalink’ – each session title will link to the full session details page.
- ‘anchor’ – each session title will link to an anchor on the current page.
- ‘none’ – session titles will not be linked at all.
- ‘color_scheme’ (default: light) – Sets the color scheme for the schedule; the options are:
- ‘light’ – will use a light color scheme.
- ‘dark’ – will use a dark color scheme.
- ‘align’ (default: “”) – Defines the alignment of the schedule on the page; the options include:
- ‘wide’ – will make the schedule wider than the content area.
- ‘full’ – will make the schedule take up the full width of the page.
- “”(empty string) – will use the default alignment as defined by the theme.
- ‘layout’ (default: table) – Specifies the layout to be used for displaying the schedule;
- “table” will use a table layout for the schedule.
- “grid” will use a grid layout
- ‘row_height’ (default: match) – Determines the row height for the schedule using the grid view.
- “match”, it will ensure that all rows have the same height.
- “auto”, rows will size to the content in the row.
- ‘content’ (default: none) – Defines how the content of each session should be displayed in the schedule;
- “none” means that the session content will not be displayed.
- “full” means all session content is displayed.
- “excerpt” means only the excerpt is displayed.

## Sessions Shortcode

For the sessions post type.

- Conference Session Speakers (_conference_session_speakers) – This field stores the list of speakers for a session as a single text string, which is sanitized before being saved.
- Session Time (_wpcs_session_time) – This field stores the start time of the session, which is computed from the session date, hour, minute, and meridiem values posted from the session edit form.
- Session End Time (_wpcs_session_end_time) – This field stores the end time of the session, computed similar to the session time field but using the end hour, end minute, and end meridiem values.
- Session Type (_wpcs_session_type) – This field stores the type of session, which can be one of three values: “session”, “mainstage”, or “custom”; if an invalid value is posted, it defaults to “session”.
- “custom” is set to “break, lunch, etc..” by default
- Break, Lunch, etc.. session type does not generate a URL to click on when seen in the schedule
- Speaker Display (wpcsp_session_speaker_display) – This radio button field allows users to choose the manner of displaying speakers: either typing the names manually or selecting from a list of speakers from a custom post type (CPT).
- Speaker Name(s) (_wpcs_session_speakers) – This field allows for the manual input of speaker names as a text field; it is conditionally displayed based on the value of the “Speaker Display” field.
- Speakers (wpcsp_session_speakers) – This multi-select field allows users to select and order speakers for the session from a list of speakers stored as a custom post type, and it is conditionally displayed based on the “Speaker Display” field value being “cpt”.
- Sponsors (wpcsp_session_sponsors) – This multi-select field allows users to select and order sponsors for the session from a list of sponsors stored as a custom post type.

## Speakers Shortcode

Example shortcode: **[tec_speakers image_size=”250″ order=”asc” speaker_link=”permalink”]** This would output a list of speakers with a speaker image size of 250 pixels, listed in ascending order, and speakers names will be a hyperlink to their post.

**[tec_speakers]**

- show_image (default: true) – This option controls whether to display the speaker’s image or not. If set to true, the speaker’s featured image will be displayed in the output.
- image_size (default: 150) – This defines the size (both width and height) of the speaker’s image in pixels. The image will be displayed as a square with the specified size.
- show_content (default: false) – Determines whether to display the content of the speaker’s post (the description) in the output. If true, the content of each speaker’s post will be displayed.
- posts_per_page (default: -1) – Specifies the number of speaker posts to retrieve and display. The default value of -1 means that all speaker posts will be retrieved and displayed.
- orderby (default: ‘date’) – This option specifies the criterion to be used to order the speaker posts. They can be ordered by ‘date’, ‘title’, or ‘rand’ (random).
- order (default: ‘desc’) – Determines the order of the retrieved posts, either ‘asc’ (ascending) or ‘desc’ (descending), based on the criterion specified in orderby.
- speaker_link (default: ”) – Controls whether to link the speaker’s name to their individual post. If set to ‘permalink’, the speaker’s name will be a hyperlink to their post.
- track (default: ”) – Allows filtering speakers based on the tracks they are associated with. You can provide a comma-separated list of track slugs to filter the speakers.
- groups (default: ”) – Allows filtering speakers based on the groups they are associated with. You can provide a comma-separated list of group slugs to filter the speakers.
- columns (default: 1) – Specifies the number of columns in the grid layout used to display the speakers. The speakers will be displayed in a grid with the specified number of columns.

- gap (default: 30) – Specifies the gap (in pixels) between the grid items (speakers).
- align (default: ‘left’) – Sets the text alignment within the grid items. The text can be aligned to the ‘left’, ‘center’, ‘right’, etc.

### Speaker Custom Fields

For the Speakers post type

- First Name – This field allows users to input the first name of a speaker.
- Last Name (wpcsp_last_name) – This field allows users to input the last name of a speaker.
- Title (wpcsp_title) – This field allows users to input the title or position of a speaker.
- Organization (wpcsp_organization) -This field allows users to specify the organization that the speaker is affiliated with.
- Facebook URL (wpcsp_facebook_url) – This field allows users to input the Facebook profile URL of a speaker, and it ensures that the URL uses either the “http” or “https” protocol.
- Twitter URL (wpcsp_twitter_url) – This field allows users to input the Twitter profile URL of a speaker, and it ensures that the URL uses either the “http” or “https” protocol.
- Instagram URL (wpcsp_instagram_url) – This field allows users to input the Instagram profile URL of a speaker, and it ensures that the URL uses either the “http” or “https” protocol.
- LinkedIn URL (wpcsp_linkedin_url) – This field allows users to input the LinkedIn profile URL of a speaker, and it ensures that the URL uses either the “http” or “https” protocol.
- YouTube URL (wpcsp_youtube_url) – This field allows users to input the YouTube profile URL of a speaker, and it ensures that the URL uses either the “http” or “https” protocol.
- Website URL (wpcsp_website_url) – This field allows users to input the personal or professional website URL of a speaker, and it ensures that the URL uses either the “http” or “https” protocol.

## Sponsors Shortcode

**[tec_sponsors title=”visible” content=”full” excerpt_length=”100″]** This would display the sponsors with a visible title, full content of the sponsor’s post, and an excerpt length of 100 characters.

- link (default: ‘none’) – This option dictates what the sponsor images and titles link to. It can have three possible values:
- ‘none’: No link is applied to the sponsor images and titles.
- ‘website’: The sponsor images and titles link to the sponsor’s website URL, which is fetched from a custom field (wpcsp_website_url).
- ‘post’: The sponsor images and titles link to the individual sponsor’s post on your WordPress site.
- title (default: hidden) – Controls the visibility of the sponsor title (name). It has two states in the script:
- ‘visible’: The sponsor title is displayed.
- ‘hidden’: The sponsor title is hidden
- content (default: ‘hidden’) – Determines the content display style for each sponsor. It has three possible states:
- ‘full’: Displays the full content of the sponsor’s post.
- ‘excerpt’: Displays an excerpt of the content, limited to a number of words defined by the excerpt_length attribute.
- ‘hidden’: The content is hidden
- excerpt_length (default: 55) – Defines the number of words to be displayed when the content attribute is set to ‘excerpt’. The content will be trimmed to this number of words.
- heading_level (default: ‘h2’) – Sets the HTML heading level for the sponsor level headings. It controls the HTML tag used for these headings (e.g., ‘h2’, ‘h3’, ‘h4’, etc.).

#### Single Sponsors Custom Field

- Website URL (wpcsp_website_url) – This field allows users to input the website URL of a sponsor, validating that the URL uses either the “http” or “https” protocol.

**Single Sponsor Level Taxonomy**

- Logo Height (wpcsp_logo_height) – This field allows users to specify the height (in pixels) of the sponsor’s logo, accepting only numerical values

---

