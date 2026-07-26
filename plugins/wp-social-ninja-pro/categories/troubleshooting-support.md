# Troubleshooting Support

*Category from WP Social Ninja Pro documentation*

---

## Change Log ​

**Source:** [https://docs.wpsocialninja.com/guide/troubleshooting-support/change-log.html](https://docs.wpsocialninja.com/guide/troubleshooting-support/change-log.html)

# Change Log ​

Stay updated with the latest improvements, new features, bug fixes, and performance enhancements in WP Social Ninja.

## WP Social Ninja v4.3.1 ​

*Released on July 21, 2026*

🔧 Improvements🔒 Security🐛 Bug fixesmd
```
• Improved OAuth connect button labels and auth bridge redirect messaging for clearer platform connection steps
```md
```
• Ongoing security audits and hardening
• Template and chat widget settings saving now validates the target post, so settings can no longer be written to arbitrary post IDs
```md
```
• Fixed Airbnb business URL validation and Airbnb reviews showing a generic location label instead of the actual listing title
• Fixed a PHP notice when a feed header renders before its image decoration data is available
• Fixed the "preserve plugin data" setting being ignored on uninstall, so plugin data is now kept when the option is enabled
```
## WP Social Ninja v4.3.0 ​

*Released on July 20, 2026*

🆕 New Features🔧 Improvements🔒 Security🐛 Bug fixesmd
```
• Centralized connection bridge for Google Reviews, YouTube, Instagram, Facebook, and TikTok — connections now route through one hardened service with automatic token refresh (Google Reviews, Instagram, Facebook, and TikTok connect in one click; YouTube uses an access code or API key)
• WhatsApp & SMS prefilled message context modes for chat widgets (page, WooCommerce product, FluentCart product, or a custom format)
• FluentCRM Review Tagging — tag a customer's contact when their WooCommerce or FluentCart review is approved (Pro)
• Quick Setup for WooCommerce and FluentCart — create a review form, display template, and main review hub in a single step (Pro)
• Resizable, collapsible settings sidebar with a keyboard-accessible drag handle in the Reviews, Chats, and Feed template editors
• "Sync All Reviews" button in the WooCommerce connect modal
• Scroll-based pagination for the WooCommerce/FluentCart connected-products list
• Block API v3 support for the Social Ninja block, enabling the Gutenberg iframe editor
• Per-product override indicator for FluentCart and WooCommerce products, with a direct link to resolve conflicts (Pro)
• PHP 8.4 compatibility
• Generic affiliate-link filter for partner attribution on Pro upgrade links
```md
```
• Optimized WooCommerce and FluentCart connected-product loading for large catalogs (Pro)
• WooCommerce review sync now reports accurate cumulative totals across multi-batch imports (Pro)
• Clearer FluentCart/WooCommerce "not connected" alert — distinguishes an inactive plugin from a store with no products
• Updated the core WPFluent framework to v2.12.3 and added a hard limit to Facebook Graph pagination requests
```md
```
• Added encryption at rest for stored YouTube API keys
```md
```
• Fixed custom source review imports across different target sources (Pro)
• Fixed the reviews connection modal reopening unexpectedly when switching admin tabs
• Fixed relative date-range Facebook feeds freezing instead of tracking the current time
• Fixed future events appearing in past date-range Facebook event feeds
• Fixed the frontend review script failing to load on page builders with late script loading (e.g. Elementor, Oxygen)
• Fixed the WooCommerce bulk-sync completion message showing the wrong review count
• Fixed YouTube video durations displaying without a leading zero
• Added plain-PHP fallbacks so the plugin no longer fatals on hosts missing the mbstring extension
```
## WP Social Ninja v4.2.2 ​

*Released on May 22, 2026*

🔧 Improvements🔒 Security🐛 Bug fixesmd
```
• Improved translation coverage for admin UI strings
• Improved validation to prevent editing the wrong templates, widgets, or notifications
```md
```
• Added extra security checks for YouTube video popup and Facebook album requests (Pro)
```md
```
• Fixed reviewer avatar and notification popup platform icon images to include explicit dimensions, reducing layout shift on review template pages
• Fixed “Write a Review” button allowing save with a blank custom URL — the editor now validates and blocks save when the custom URL is empty
• Fixed “Write a Review” button not rendering on the frontend when a custom URL source was configured (Pro)
• Fixed FluentCart reviews not showing the Edit action in the admin review list (Pro)
• Removed incomplete “View Submissions” action from the native review form actions menu (Pro)
```
## WP Social Ninja v4.2.1 ​

*Released on April 24, 2026*

✨ Newly Added🔧 Improvements🐛 Bug fixesmd
```
• Added WP Social Ninja WP-CLI commands
```md
```
• Unified Airbnb review ID deduplication
• Optimized database queries and improved security
```md
```
• Fixed custom review images when optimization is enabled
• Fixed optimized image localization fallback
• Fixed review keyword filter matching
• Fixed YouTube GDPR error message shape
```
## WP Social Ninja v4.2.0 ​

*Released on April 17, 2026*

✨ Newly Added🔧 Improvements🐛 Bug fixesmd
```
• Native review form builder for FluentCart, WooCommerce, and Custom Sources, removing the need for additional plugins for basic review collection (Pro)
• FluentCart integration to collect and display product reviews with product sync, primary review hub support, and customizable “Write a Review” button via templates (Pro)
• Replaced default WooCommerce review fields with WP Social Ninja review forms, providing full control over form design and review display (Pro)
• Custom Source review forms via shortcode for easy embedding anywhere on the site (Pro)
```md
```
• Improved FluentCart review drawer (slide-in) experience (Pro)
• Flexible rating click actions for WooCommerce (drawer/scroll) (Pro)
• Show review images toggle in the review template editor settings
• Enhanced performance with server-side search and async multi-select
• Optimized database queries and improved security
```md
```
• Fixed YouTube channel “No videos found” issue
• Fixed YouTube header banner display issue
• Fixed Google Business Profile location name issue
• Fixed formatting issues in reviews and testimonials
• Fixed review auto-sync input update issue
```
## WP Social Ninja v4.1.0 ​

*Released on January 29, 2026*

✨ Newly Added🔧 Improvements🐛 Bug fixesmd
```
• Review Status Controls: Introduced Publish, Unpublish, and Spam states for better review management
• Advanced Review Moderation: Manual approval with intelligent auto-publishing rules based on rating, content length, and keywords
• Spam Management for Reviews: Mark and unmark reviews as spam, including bulk actions
• Advanced Style Options for Review & Feed Templates: Box shadow, border radius, hover effects, padding, and spacing controls (Pro)
• Device-Based Responsive Control for “Load More” behavior
• Advanced Product Review Schema with optimized structured data for improved SEO
• Clear Cache by Individual Feed Template for better control
• Facebook Event Sorting Options to display events in preferred order (Pro)
```md
```
• Optimized SQL queries for review counts, rating breakdowns, and business information
• Preserved manual review approval status during sync to prevent re-approving disabled reviews
• Improved WooCommerce template handling and business information processing (Pro)
• Improved Airbnb business information handling via the GraphQL API (Pro)
• Improved Facebook event feed handling and account filtering logic (Pro)
• Filtered out Instagram trial reels from account feeds
```md
```
• Fixed an issue where WooCommerce product reviews were incorrectly inserted into non-review comments and processed as reviews (Pro)
• Fixed an issue where WP Social Ninja custom cron events could be automatically removed on certain server environments
• Resolved a masonry layout rendering issue (Pro)
• Fixed review count update issues when enabling or disabling reviews
• Fixed incorrect post ID usage in asset loading logic for WooCommerce products
• Fixed Chat Widget Viber configuration issue (Pro)
• Fixed time picker and date range type design issue
• Fixed review show/hide functionality based on keyword filtering (Pro)
```
## WP Social Ninja v4.0.2 ​

*Released on December 02, 2025*

🔒 Securitymd
```
• Enhanced sanitization and permission validation for REST API requests
```
---

## WP Social Ninja v4.0.1 ​

*Released on December 02, 2025*

🔧 Improvements🐛 Bug fixesmd
```
• Added loader animation when switching layouts inside the Template Editor panel
```md
```
• Fixed: HTML tags incorrectly printed in review content
• Fixed: Unpublished reviews were being displayed on the frontend
• Fixed: Reviewer name mapping issue in Fluent Forms integration (Pro)
• Fixed: Duplicate reviews appearing from Booking.com sources (Pro)
• Fixed: Custom image upload conflict caused by certain plugins (Pro)
• Fixed: Incorrect pro feature toggle behavior inside feed and review editors
```
---

## WP Social Ninja v4.0.0 ​

*Released on November 21, 2025*

✨ Newly Added🔧 Improvements🔒 Security🐛 Bug fixesmd
```
• Added smooth onboarding to simplify first-time setup
• Introduced Custom Sources to add and display reviews from any platform (Pro)
• Added Import & Export feature for Custom Sources (Pro)
• Added Screen Options to easily hide or show platforms
• Added Bulk Actions for templates, reviews, chat widgets, and notifications
• Introduced Dark Mode for the plugin dashboard
```md
```
• Revamped UI and improved UX for modern and streamlined experience
• Improved overall performance
• Rebuilt WP Social Ninja Admin area using Vue 3 and Element Plus
```md
```
• Security: Enhance HTML sanitization for user-generated content
• Security: Covered Plugin Check (PCP) Requirements for better security compliance
```md
```
• Fixed Uncaught Error: Call to a member function get_ID() on null in actions.php when the woocommerce_comments called. (Pro)
• Fixed facebook event feed order issue (Pro)
```
---

## WP Social Ninja v3.20.3 ​

*Released on November 17, 2025*

🔧 Improvementsmd
```
• Improved sanitization and escaping for imported reviews and feed content
```
---

## WP Social Ninja v3.20.2 ​

*Released on November 10, 2025*

🔧 Improvements🔒 Security🐛 Bug fixesmd
```
• Improved Judge.me review import process and fixed review display issues inside the product reviews tab (Pro)
• Displayed place id for Airbnb business names to help distinguish between businesses with the same name (Pro)
• Displayed Airbnb business place id in the business selection dropdown to avoid confusion when multiple businesses share the same name (Pro)
• Added missing translator strings and translator comments
```md
```
• Added additional permission checks for REST API requests to improve overall data handling security
```md
```
• Fixed compatibility issue with the Facebook Event API (Pro)
```
---

## WP Social Ninja v3.20.1 ​

*Released on September 25, 2025*

🐛 Bug fixesmd
```
• Fixed media upload issue
• Resolved CSS conflict in notifications and badge reviews popup modal
• Fixed Facebook feed "Order by" and keyword/hashtag filtering issues
• Fixed PHP deprecated warnings by reordering optional and required parameters in Reviews Template
• Fixed Facebook reviews, PHP 8.1 compatibility issue caused by automatic conversion of false to array
```
---

## WP Social Ninja v3.20.0 ​

*Released on September 18, 2025*

✨ Newly Added🔧 Improvements🐛 Bug fixesmd
```
• Judge.me reviews migration import option (Pro)
• Fresh and modern "Polaris" Reviews Template (Pro)
• WooCommerce product reviews synchronization with WP Social Ninja (Pro)
• Advanced WooCommerce reviews customization — choose layouts, templates, form styles, and control visibility options (Pro)
• Social Ninja Reviews Template placement option in WooCommerce product settings (Pro)
• Reviews Form option in WooCommerce product settings to collect WooCommerce reviews using Fluent Forms (Pro)
• New header template for WooCommerce, fluent forms and custom reviews (Pro)
• Option to collect custom reviews using Fluent Forms (Pro)
• Review photo support — collect images along with review text via Fluent Forms (Pro)
• Fluent Forms review collection with approval support for custom and WooCommerce reviews (Pro)
• Fluent Forms Rating Field: You can now add rating fields in Fluent Forms without needing Fluent Forms Pro, if you have Social Ninja Pro
• Responsive Post Count Filter: Use the new "wpsocialreviews/responsive_post_count" filter to customize the number of posts displayed based on the device (desktop, tablet, or mobile)
• Fetch More Facebook Feed Attachments: Enable the "wpsocialreviews/facebook_feed_should_fetch_more_attachments" filter to include additional child attachment photos in your Facebook feeds
```md
```
• Updated Swiper Library: Upgraded to version 8.4.7 to resolve conflicts with Power Pack ticker
• Improved Error Handling: Added encryption error detection for Facebook Reviews, Facebook Feed, and Instagram, with clear, user-friendly error messages (includes error code 999 for access token issues)
• Improved Facebook Feed Cache: Optimized cache handling for relative date ranges, making your feeds faster and more reliable (Pro)
• Improved Tripadvisor API configuration and cleared downloadReviewsUrl for non-business URL credentials for a seamless experience
• Improved button links and accessibility for Facebook feeds, making them easier to navigate
```md
```
• Fixed Airbnb reviews fetching issue & added support for Airbnb v3 (note: experiences and services business name & average rating not supported)
• Fixed accessibility issue with slider pagination (Pro)
• Fixed PHP deprecation issue (get_class() without arguments) for better compatibility with newer PHP versions
• Fixed error display for Facebook Reviews in the admin panel
• Fixed missing `<br>` tags in Instagram post captions on the frontend for better formatting
• Fixed Issue with Business Hours & Timezone Settings for WhatsApp Widget (Pro)
• Fixed input device activation for total posts/reviews in the editor's responsive mode, with better device key selection logic
• Fixed issues with uploading custom images (Pro)
• Fixed Chat Widget close button color change issue
• Fixed Chat Widget Template Config handling for array values, resolving a PHP 8.3 compatibility issue that caused a fatal error
• Fixed WooCommerce Template rating icon spacing and color issues
• Fixed Facebook feed album and single album image optimization and display issues (Pro)
• Fixed: Facebook feed now only shows public posts (subscriber-only posts are hidden)
• Fixed Facebook feed popup left arrow icon issue in the editor
• Fixed Instagram Feed posts hashtag links with umlauts being incorrectly generated
• Fixed Inline Instagram videos now pause other videos, preventing multiple from playing at once
• Fixed YouTube Feed live stream data update and fetch issues (Pro)
• Fixed YouTube Feed empty header display issue
• Fixed search functionality in the admin panel for all reviews
• Fixed syntax error in Reviews Template "Rigel" within the editor (Pro)
• Fixed sorting logic for feed and review posts to display them in the correct order
• Fixed reviews template CSS loading in the footer on the WooCommerce product page
• Resolved PHP maximum execution time exceeded error in the `feedsByRandom` method logic
```
---

## WP Social Ninja v3.19.1 ​

*Released on September 04, 2025*

🔒 Securitymd
```
• Resolved a Twitter/X API credential issue in v1.1.0+ to enhance security and prevent potential misuse
```
---

## WP Social Ninja v3.19.0 ​

*Released on July 14, 2025*

✨ Newly Added� Improvements�🐛 Bug fixes⚠️ Noticemd
```
• Get Reviews via QR Code Module (Pro)
• Verified badge support for review platforms (Pro)
```md
```
• Refactored rating stars and improved AI platform detection on notification popups (Pro)
• Updated Babel configuration for ES module support: Removed unused script from production version
• Improve Accessibility for reviews and Facebook feed buttons (Pro)
```md
```
• Fixed Instagram account feeds max 100 feed limit issue
• Fixed Hashtag filter functionality for Facebook album and single album feeds (Pro)
• Fixed chat widget CSS selectors and added closing animation to chat box
• Fixed chat widget to correctly reflect the user's local timezone (Pro)
• Fixed TikTok feed disconnection issue by improving token management, adding a safety buffer for expiration checks, and enhancing error handling
```md
```
• Airbnb review integration is temporarily unavailable due to changes in the external API. A notice has been added to the configuration screen
```
---

## WP Social Ninja v3.18.0 ​

*Released on May 29, 2025*

✨ Newly Added🔧 Improvements🐛 Bug fixesmd
```
• AI-powered summarizer for Reviews templates with customizable display options (Pro)
• Reviewer Name Format Option – Added setting to allow users to customize how reviewer names are displayed (Pro)
• Optimized Image Format Setting – Introduced an option to choose between JPG or WebP image formats for better optimization
```md
```
• Star Rating Icon – Improved excessive DOM size for rating icons to enhance performance
```md
```
• Edit Button Visibility – Resolved visibility issue with the Edit button on reviews templates
• Feed Popup Layout – Fixed height adjustment issue to ensure consistent layout in the feed popup
• "Write a Review" Button – Updated element type to prevent template layout breakage (Pro)
• Review Business Info & Button URL – Fixed issues related to displaying business info and custom "Write a Review" button URL (Pro)
• Reviews Popup Styling – Fixed issue with styling not updating in the notifications reviews popup (Pro)
• Fixed the restriction issue affecting optimized image URLs
• Fixed the no default translation string issue in translation settings
```
---

## WP Social Ninja v3.17.0 ​

*Released on May 06, 2025*

✨ Newly Added🔧 Improvements🐛 Bug fixes🗑️ Deprecationmd
```
• SMS chat widget (Pro)
• Microsoft Teams chat widget (Pro)
• Instagram DM chat widget (Pro)
• Support for Facebook Single Photo Album via Album ID (Pro)
• Support for Facebook Specific Video Playlist via Playlist URL (Pro)
• Option to show Fluent Forms or custom URLs in Reviews business info/badge section (Pro)
• Support for YouTube feed – users can now collect feeds using channel handle, username, or channel ID
• WhatsApp Pro is now available in the Free version (other Pro features remain locked)
• Prefilled support for SMS and WhatsApp widgets (layout types: box and icons) (Pro)
• Official 3:4 aspect ratio support for Instagram templates
• Enhanced WeChat widget (Pro)
```md
```
• Improved Facebook Events API integration – users can now collect Facebook event feeds (Pro)
• Improved: User can display likes, comments count and header bio text, fullname for instagram business basic account
• Updated Twitter/X official logo on twitter template
```md
```
• Resolved issue with multiple Fluent Forms overlapping in the chat widget (Pro)
• Fixed issues with editing and deleting chat widgets
• Resolved Oxygen Builder escaping issue
• Fixed manual Instagram connection issue
• Fixed issue with reviews media URLs when image optimization is enabled
• Resolved "Load More" issue in reviews (Pro)
• Fixed Instagram account feed video media URL issue
```md
```
• Removed Skype from the chat widget due to Microsoft discontinuing support for Skype integration
```
---

## WP Social Ninja v3.16.2 ​

*Released on March 11, 2025*

🔒 Security🔧 Improvementsmd
```
• Improve data escaping and overall plugin security
• Restricted direct access to plugin upload directory for better protection
```md
```
• Improved Queries performance
```
---

## WP Social Ninja v3.16.1 ​

*Released on February 19, 2025*

🐛 Bug fixesmd
```
• Fixed a critical issue where the sort() function was incorrectly applied to a string instead of an array in the Facebook Helper
```
---

## WP Social Ninja v3.16.0 ​

*Released on February 18, 2025*

✨ Newly Added🔧 Improvements🐛 Bug fixesmd
```
• Support for exporting and importing: Testimonials, Feed and reviews templates, Notification popups & Chat widgets (Pro)
• Full platform data deletion option to enhance user control and ensure compliance with data privacy standards (Pro)
• Now supports displaying Facebook timeline feeds as a Facebook photo feed (Pro)
• Image optimization support for the reviews slider (Pro)
• Introduced 4:5 aspect ratio for Instagram feed images
```md
```
• Improved WhatsApp pre-filled message functionality for smoother user interaction (Pro)
• Improved Facebook Feed Template responsiveness to ensure optimal display across devices
```md
```
• Resolved reviewer image inconsistencies in testimonials and custom reviews (Pro)
• Fixed CSS conflicts with Elementor Pro's Swiper component (Pro)
• Resolved issues with fetching reviews from Booking.com (Pro)
• Fixed missing Facebook business details display issues (Pro)
• Remove unnecessary string from reviewer image url (Pro)
• Fixed Booking.com reviews fetch issues (Pro)
• Fixed an issue causing unknown Facebook API error messages
• Fixed image resizing issue where only the first feed template was processing images, while other templates were not resizing them correctly. Now, all templates handle image resizing properly
• Addressed missing Instagram video display problems
• Fixed YouTube feed image size modifications not applying correctly when using add_filter
• Updated Twitter/X official logo
• Fixed Facebook feed alt tag empty issue to improve accessibility
• Ensured Read More/Read Less truncates HTML content correctly
• Refactored Avatar & Cover assignments to prevent undefined key issues
• Fixed Instagram video carousel album thumbnail visibility issues
```
---

## WP Social Ninja v3.15.1 ​

*Released on December 05, 2024*

🐛 Bug fixesmd
```
• PHP Fatal Error caused by missing 'Optimize Images' table
• Issue with the 'Template Source Empty' error displaying incorrectly
```
---

## WP Social Ninja v3.15.0 ​

*Released on December 04, 2024*

⚠️ Action Required✨ Newly Added🔧 Improvements🐛 Bug fixesmd
```
• If you have a personal account connection, please reconnect your account before December 2024 after updating to version 3.15.0 or higher
```md
```
• Optimize Images settings option in Settings → Advanced Settings → Optimize Reviews Image Settings. This feature automatically stores local copies of Reviews images on your server
• Optimize Images settings option in Settings → Feed Platforms → YouTube Settings. This feature automatically stores local copies of YouTube feed images on your server
• YouTube Feed GDPR compliant settings option in Settings → Advanced Settings
• Optimize Images reset option in Settings → Feed Platforms → YouTube Settings
• Optimize Image resolution settings option in Template Editor → Feed/Settings → Images Resolution
• Option to configure pre-filled messages for WhatsApp
• Address field option for schema snippets
• Ability to reorder chat widget channels
```md
```
• Improved support for collecting language-specific reviews from Tripadvisor and Booking reviews
```md
```
• Fixed an issue with Instagram feed accessibility
• Fixed an issue with Fluent Forms business info display
• Fixed a TikTok feed filter issue on mobile devices
• Fixed TikTok popup responsiveness issues
• Fixed responsive styling for reviews header ratings
• Fixed the disappearing date styling option for review platforms
• Fixed empty business info appearing in Google Reviews configuration
• Fixed a dependency issue with the widget for the wp-block-editor
```
---

## WP Social Ninja v3.14.2 ​

*Released on October 07, 2024*

🐛 Bug fixesmd
```
• Fixed unknown error message display issue
• Fixed reviews rating icon color display issue
• Remove unnecessary animated bg class from free version
• Fixed optimize profile photo invalid url issue
• Fixed instagram feed multiple hashtag issue (Pro)
• Fixed Facebook Feed album photos popup issue (Pro)
• Fixed Facebook album feed popup slider changes issue (Pro)
```
---

## WP Social Ninja v3.14.1 ​

*Released on September 23, 2024*

🔧 Improvements🐛 Bug fixesmd
```
• Updated TikTok Feed Template 2 to be GDPR-compliant and optimized for image loading (Pro)
```md
```
• Resolved an issue where database tables were not being created for subsites if the wp social ninja was installed after the subsites were created. Tables will now correctly generate for both the main site and all subsites, regardless of installation time
• Preloader in feed templates not disappearing after storing images locally has been resolved. Preloader now correctly disappears after images are successfully stored
• Fixed PHP 8.3 compatibility issue, which caused a fatal error due to a null argument being passed to array_keys() in the ShortcodeHandler.php file
• Corrected the issue with the "Filter Number of Feeds to Display" limit for feeds, ensuring that the specified limit now works as intended
• Addressed an issue with the feed display limit, ensuring it now functions correctly
• Fixed post URL popup and redirection issue in Facebook feed template
• Resolved an issue where the "Posts Order by Most Popular" and "Posts Order by Least Popular" options in Facebook feeds were not functioning correctly. Filters now work as expected, displaying posts based on popularity (Pro)
• Fixed the average rating display to show a maximum of one decimal number (Pro)
```
---

## WP Social Ninja v3.14.0 ​

*Released on September 18, 2024*

✨ Newly Added🔧 Improvements🐛 Bug fixesmd
```
• Tripadvisor reviews API (Pro)
• Field for Facebook feed followers count (in addition to likes count) and fixed the issue with undefined media URLs (Pro)
• Optimize Images settings option in Settings → Feed Platforms → Facebook,TikTok Settings. This feature automatically stores local copies of Facebook,TikTok feed images on your server
• Facebook,TikTok Feed GDPR compliant settings option in Settings → Advanced Settings
• Optimize Images reset option in Settings → Feed Platforms → Facebook,TikTok Settings
• Optimize Image resolution settings option in Template Editor → Feed → Images Resolution
• Warning notice in the wp social ninja admin area to alert you about critical issues with your Facebook,TikTok Feed and Facebook Reviews
• Email notification alerts for critical Facebook,TikTok Feed and Facebook Reviews issues. You will receive an email notification if there's an unresolved issue with an Facebook,TikTok feed or Facebook Reviews on your website
```md
```
• Improved Instagram image optimization by fixing the issue with multiple avatar downloads and ensuring images load from local storage
```md
```
• Fixed the review rating problem so you see the exact rating every time
• Fixed the Instagram feed animation issue so that images of different sizes and resolutions display perfectly on the screen
• Fixed the problem of missing Instagram videos – now all videos will be shown properly
• Fixed the Instagram videos display issue in the free version so videos can now play directly from the template
• Fixed the issue with Instagram popup images overlapping, which will ensure images and text display correctly without any glitches (Pro)
• Fixed Airbnb business info issue, which will show details in the header including ratings & number of reviews (Pro)
• Fixed the spacing issue in the Instagram feed carousels so images are now properly aligned (Pro)
• Fixed fallback average rating and total rating issue of schema snippet for reviews template (Pro)
• Fixed review content read more and less excerpt issue (Pro)
• Fixed the Facebook album layout issue so users won't see any stretched images (Pro)
• Fixed and improved the feed slider so images no longer flash (Pro)
```
---

## WP Social Ninja v3.13.1 ​

*Released on April 03, 2024*

🐛 Bug fixesmd
```
• Resolved Facebook Pages and Instagram account connectivity problems
• Fixed the string translation issue in the editor
```
---

## WP Social Ninja v3.13.0 ​

*Released on March 12, 2024*

✨ Newly Added🔧 Improvements🐛 Bug fixesmd
```
• TikTok Feed
• TikTok Feed Elementor Widget
• TikTok Feed Oxygen Widget
• TikTok Feed Beaver Widget
```md
```
• Chat widget improvements
```md
```
• Fixed chat widget query limit issue
• Fixed Airbnb reviews fetching issue
• Addressed ${var} deprecation issue in PHP 8.2
• Addressed translation text issue in editor panel
```
---

*For older versions and complete history, please refer to the plugin's admin changelog or contact support.*

---

## Additional Links ​

- [Getting Started Guide](/guide/getting-started/getting-started-with-wp-social-ninja)
- [Support & Troubleshooting](/guide/troubleshooting-support/facebook-feeds-not-updating)

---

## Facebook Feeds Not Updating or Missing Posts ​

**Source:** [https://docs.wpsocialninja.com/guide/troubleshooting-support/facebook-feeds-not-updating.html](https://docs.wpsocialninja.com/guide/troubleshooting-support/facebook-feeds-not-updating.html)

# Facebook Feeds Not Updating or Missing Posts ​

If your Facebook feed in WPSocialNinja isn’t updating or some posts are missing, it could be due to one of the following reasons. Below, we’ll explain the causes and provide potential solutions to help you resolve the issue.

## 1. Posts Are Shared from a Personal Profile or Non-Public Facebook Page ​

If your Facebook feed isn't showing the most recent posts or some posts are missing, it's likely because those posts were shared from a personal Facebook profile or a non-public Facebook page.

### Why Does This Happen? ​

WP Social Ninja can only display posts that the Facebook API provides. If a post is private, restricted, or removed, it won’t be retrievable through the API

Facebook only allows us to fetch posts that are publicly available through the Page API. If a post is missing, it's usually because of one of these reasons:

Privacy settings – The page owner shared it with a limited audience (e.g., certain countries, age groups, or followers only).

Targeted/boosted posts – Posts that are only promoted or targeted to a specific audience may not appear in the API.

### Solution ​

Re-post the content directly to your Facebook page: Instead of sharing posts from personal profiles or restricted pages, re-post the content as your own post on your Facebook page. This ensures the content originates from your page and will display in your WPSocialNinja feed.

Share posts from public sources: If you share posts from other public Facebook pages or sources, they will appear in your feed. Avoid sharing from personal profiles or restricted pages.

## 2. Some Posts Are Being Filtered Out ​

If certain posts are missing, it could be due to filtering settings in WPSocialNinja.

### Check the Following Settings ​

Go to WPSocialNinja and then select [Templates](../getting-started/templates-overview) from the navbar. Now, find the [Facebook Feed Template](../social-feeds/facebook-customization) where you're facing the issue. Click on the **Edit** button of that feed to open its settings options.

![image](https://docs.wpsocialninja.com/assets/facebook-feed-1.BgNi6jA0.webp)

Filters: Under the **General** section, you'll find the **Filter** option for your posts. Check the filter settings for Post Types under the **Display Posts With** dropdown menu.

Below this, you'll also see some additional settings, make sure to check if you've applied any filters that exclude posts with specific words or phrases.

![image](https://docs.wpsocialninja.com/assets/facebook-feed-2.Xy-T7c3o.webp)

## 3. Missing Posts Have Audience Restrictions ​

Facebook allows you to set audience restrictions on posts, which can prevent them from being displayed outside of Facebook.

### Solution ​

Ensure that the missing posts are set to “**Public**”. When creating a post, check the audience setting and select the globe icon to make it publicly visible.

## 4. Aggressive Caching Plugin Settings ​

If you’re using a caching plugin on your WordPress site, it might be causing delays in updating your Facebook feed.

### Solution ​

Clear your cache: Go to your caching plugin settings and clear the cache.

Adjust caching settings: Ensure your caching plugin isn’t overly aggressive. You may need to exclude the WPSocialNinja feed from caching or adjust the Cache Timeout or TTL.

### Additional Tips ​

Reconnect Your Facebook Account: Sometimes, reconnecting your [Facebook account](../social-feeds/facebook-integration) in WPSocialNinja can resolve feed issues.

Check Facebook API Limits: Facebook imposes API limits on how often data can be fetched. If your feed isn't updating, wait a few minutes and check again.

---

## Fixing "Access Token Decryption Failed" in WP Social Ninja ​

**Source:** [https://docs.wpsocialninja.com/guide/troubleshooting-support/fixing-access-token-decryption.html](https://docs.wpsocialninja.com/guide/troubleshooting-support/fixing-access-token-decryption.html)

# Fixing "Access Token Decryption Failed" in WP Social Ninja ​

Sometimes, when connecting Instagram, Facebook, or other platforms, WP Social Ninja may show an error like:

**“Access token decryption failed. Possibly mismatched WordPress logged-in salt/key.”**

This error typically appears:

- After **migrating your site** from staging to live or moving to a new server.
- When using a **security plugin** like Sucuri that modifies WordPress salts.
- If the **WordPress authentication keys and salts** were changed manually or regenerated.

### Why This Happens ​

WP Social Ninja saves your connected accounts' **access tokens** securely in your WordPress database. To keep them safe, the plugin encrypts these tokens using **WordPress authentication salts** (like LOGGED_IN_SALT).

Here’s the problem:

- If another plugin (like any security plugins) changes these salts,
- Or if you regenerate the salts in wp-config.php,

…the old tokens can no longer be decrypted. As a result, WP Social Ninja cannot read them, and the connection breaks.

## The Solution: Use Dedicated WP Social Ninja Keys ​

To avoid relying on salts that may change, you can add your **own custom encryption keys** specifically for WP Social Ninja.

This ensures:

- Tokens stay valid, even if WordPress salts are updated.
- Other plugins or security tools won’t interfere with WP Social Ninja’s encryption.

### How to Fix the Error ​

#### 1. Open Your wp-config.php ​

- Access your site files via **FTP** or your hosting **File Manager**.
- Open the wp-config.php file in the root of your WordPress installation.
- Scroll down to find the **Authentication Unique Keys and Salts** section.

It will look like this:

php
```
/*#@+

Authentication unique keys and salts.

Change these to different unique phrases! You can generate these using

the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.

You can change these at any point in time to invalidate all existing cookies.

This will force all users to have to log in again.

@since 2.6.0 */

define( 'AUTH_KEY',         'xxxxx' );

define( 'SECURE_AUTH_KEY',  'xxxxx' );

define( 'LOGGED_IN_KEY',    'xxxxx' );

define( 'NONCE_KEY',        'xxxxx' );

define( 'AUTH_SALT',        'xxxxx' );

define( 'SECURE_AUTH_SALT', 'xxxxx' );

define( 'LOGGED_IN_SALT',   'xxxxx' );
```Right **below this section**, add two new lines with your own unique keys:

#### 2. Add WP Social Ninja Keys ​

php
```
define('WPSR_ENCRYPTION_KEY',  'Paste_generated_key_here');

define('WPSR_ENCRYPTION_SALT', 'Paste_generated_key_here');
```**Important:**

- Do not copy the example values above.
- Generate new fresh, random values using the [WordPress secret-key generator](https://api.wordpress.org/secret-key/1.1/salt/).

#### 3. Save and Reconnect ​

- Save the wp-config.php file and re-upload it to your server if needed.
- Go back to your WordPress dashboard.
- Reconnect your **Instagram (or other social) accounts** in WP Social Ninja.

This will store the tokens again using your new, stable encryption keys.

### Important Notes ​

- **Do not change these keys later.** If you update them, WP Social Ninja won’t be able to read existing tokens, and you’ll need to reconnect your accounts.
- If you run multiple environments (staging, live, local), use the **same encryption keys** across all of them. Otherwise, tokens may fail when moving the database.
- By defining your own WP Social Ninja keys, you isolate the plugin’s encryption from WordPress salts, avoiding conflicts with plugins.

After following these steps, WP Social Ninja will securely store and decrypt your tokens without being affected by other WordPress salts or security plugins.

---

## How to Get Support ​

**Source:** [https://docs.wpsocialninja.com/guide/troubleshooting-support/get-support.html](https://docs.wpsocialninja.com/guide/troubleshooting-support/get-support.html)

# How to Get Support ​

If you've reviewed the **Docs** guides and are still encountering a problem with WP Social Ninja, our dedicated support team is here to help.

## How to Contact Support ​

To ensure you receive the quickest and most effective assistance, please follow these guidelines when contacting us:

1. **Visit the WPManageNinja Support Portal:** Go to the [WPManageNinja](https://wpmanageninja.com/) website. This is the primary channel for submitting support tickets.
2. **Submit a Support Ticket:**

- Log in to your account (this will be your account on our main [WPManageNinja.com](https://wpmanageninja.com/) site).
- Navigate to the "Support Tickets" section.
- Click on "Create Ticket."
3. **Provide Detailed Information:** When submitting your ticket, please include as much detail as possible. This helps our team understand your issue quickly and provide a precise solution. Include:

- **A Clear Description of the Problem:** Explain what you are trying to achieve and what is happening instead. (e.g., "I am trying to connect my Google account, but it's not finding my business," or "My Instagram feed is showing as broken.")
- **Steps to Reproduce:** List the exact steps you take that lead to the issue.
- **Screenshots or Screen Recordings:** Visual aids are incredibly helpful for diagnosing problems. Please include screenshots of your settings and the error you see on the front end.
- **Error Messages:** If you see any error messages on your screen or in your WordPress debug log, copy and paste them.
- **Your WordPress Version.**
- **Your WP Social Ninja Plugin Version.**
- **Any Other Plugins Active on Your Site:** List them, especially if they are related to caching (e.g., WP Rocket, LiteSpeed), security (e.g., Wordfence), or other social media plugins, as these are the most common sources of conflict.
4. **Support Hours:** Our support team operates during business hours. We strive to respond to all inquiries as quickly as possible.

We are committed to helping you succeed with WP Social Ninja!

---

