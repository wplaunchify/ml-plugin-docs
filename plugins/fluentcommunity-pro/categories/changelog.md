# Changelog

*Category from FluentCommunity Pro documentation*

---

## Changelog

**Source:** [https://fluentcommunity.co/docs/changelog/](https://fluentcommunity.co/docs/changelog/)

= 2.7.5 (Date: Jul 24, 2026) =- Introduced: Audio Uploads and Audio Media Gallery
- Added: Details and LaTeX (Math) Blocks in Lesson Editor
- Added: Password Change Option on Profile Edit
- Added: Default Theme Mode Customization
- Added: Rename Documents in Space Documents Section
- Added: Open Profile Comments in Feed Modal
- Added: Message Field Support in Lesson PATCH Endpoint
- Improved: Activity Feed and Ticker Query Performance
- Improved: New Posts Notification Preferences as a Table
- Improved: Sidebar Membership Preloading and Per-User Permission Caching
- Improved: Database Indexes on Notifications, Comments and Space Members
- Improved: Space Feature Access Nested Under Toggles
- Improved: Primary Menu Default Items Support Visibility Controls
- Improved: Best-Quality WebP Thumbnails for YouTube Feed Previews
- Improved: Cached Sitemap Index and Moderator Recipient Lists
- Security: Access Control on Comments, Lockscreens and Documents
- Security: Escaping, Input Sanitization and API Key Masking
- Fixed: Fatal Error on WordPress 6.0 from Unguarded Core Calls
- Fixed: Mobile Menu and Sidebar Feed Link Ignoring Menu Settings
- Fixed: Duplicate and Missing Mention Notifications
- Fixed: Notification Highlight Targeting the Wrong Comment
- Fixed: Markdown Tables Stripped on Feed Render
- Fixed: Cross-Space Post View via Space Permalink
- Fixed: Photos Uploaded Sideways From Unhandled EXIF Orientations
- Fixed: Moderation Actions for Course and Sticky Posts
- Fixed: Comment Toolbox Overlapping Delete Dialog
- Fixed: Space Lock and Unread Badge Visible in Collapsed Sidebar
- Fixed: Space Sub-Header Overflow With Collapsible Sidebar
- Fixed: Sidebar Toggle Missing on Fcom Frame Templates
- Fixed: Empty Space Groups Skipped in FluentCRM Tagging
- Fixed: Followers and Following Alphabetical Sort
- Fixed: Corrected Comment Author Profile Links in SEO
- Fixed: Course Lesson Comment Approval Feed Lookup
- Fixed: Early Text Domain Translation Loading Notice
- Fixed: Duplicate Auto-Flag Reports on Content Edit

= 2.7.0 (Date: Jul 8, 2026) =- Introduced: Space Media Gallery
- Added: Sidebar Collapse Toggle with Persistence
- Added: Invite Members by Email and Name
- Added: Auto-Flag User Threshold Moderation
- Added: Per-User Moderation Flag in Admin Actions
- Added: FluentPlayer Block as Lesson Feature Media
- Added: Required Video Completion to Complete Lesson
- Added: Auto-Complete Lesson When the Feature Video Ends
- Added: Profile Headline Field on Members Listing
- Added: Upload Progress for Inline Images
- Added: Missing Translation Strings
- Improved: Email CSS Inlining for Better Rendering
- Improved: Feed Cache Refresh and Memory Cap
- Improved: Link Preview Detection and Pre-Fetch Hook
- Improved: Notification and CRM Tag Mapping List UI
- Improved: Site Time Format Across Schedule and Time UI
- Improved: Auto-Scroll After Settings and Profile Updates
- Improved: Comment and Reaction Cleanup on Feed Delete
- Improved: Custom Lockscreen Background to Match Page
- Security: Hardened Space, Feed, and Comment Access Authorization
- Security: Gated Portal Access Before Profile Provisioning
- Fixed: Sidebar First-Paint Layout Shifts
- Fixed: Document Upload Crash on Invalid File Type
- Fixed: External Redirect URL for Portal Access Restriction
- Fixed: Feed and Cross-Space Scroll Restore on Back Navigation
- Fixed: All Spaces Infinite Loading Without Access
- Fixed: Private Space Description Visibility
- Fixed: Notification Settings Space Scope on Other Profiles
- Fixed: Notification Auto-Marked Read on Feed Visit
- Fixed: Clearing a Single-Select Custom Profile Field
- Fixed: Profile First Name Saved to Last Name
- Fixed: Leaderboard Permission Message for Unauthorized Users
- Fixed: Feed Video Fallback When FluentPlayer Stalls
- Fixed: Lesson Video Block Shifting Left
- Fixed: Lesson Body Cannot Be Cleared in Editor
- Fixed: New Section and Lesson Priority Stuck at Zero
- Fixed: Course Creator Not Notified on Lesson Comments
- Fixed: Sequential Lessons Not Unlocking in Order
- Fixed: Scheduled Documents Showing in Documents List
- Fixed: Scheduled Post with Documents Publishing Immediately
- Fixed: Multibyte Title Truncation in Posts
- Fixed: Checklist Bullets Missing in Custom Lockscreen
- Fixed: Show More Always Expanding Inline
- Fixed: Follow/Unfollow Toast Ignoring API Message
- Fixed: RTL Customizer Overlap and Reversed Lightbox Arrows
- Fixed: Search Input Background in Search Dialog
- Fixed: Divider Not Using Theme Color
- Fixed: User Name Included in Access URL

= 2.6.1 (Date: Jun 11, 2026) =- Added: Community-Scoped Filter for Signup Email Verification
- Hotfix: Mobile Horizontal Overflow on Feed
- Hotfix: Enroll Button Shown for Non-Enrollable Courses

= 2.6.0 (Date: Jun 10, 2026) =- Introduced: Course Welcome Banners
- Added: First Comment Approval Moderation Option
- Added: Page Indicator in Image Carousel
- Added: Duplicate Actions for Lessons and Quizzes
- Added: Server-Side Thumbnails for Embedded Videos in Feeds
- Added: Glow Highlight for New Posts and Comments
- Added: German (de_DE) Translation Files (pro)
- Improved: WordPress 7 Compatibility
- Improved: Course Quiz Setup Editor UX
- Improved: Comment Reply Thread Stay-Open Behavior
- Improved: Theme-Aware Status Colors on Course Card Buttons
- Improved: Paywall-Aware Default Lock Screen Description
- Improved: Clickable Full Layout Dropdown Row in Feeds View
- Improved: Validation for Space Topic and Title Fields
- Improved: Translation Coverage Across Portal UI Strings
- Fixed: Poll Vote Misattribution on Option Reorder
- Fixed: Poll Options Deleted When Input Cleared
- Fixed: Verification Badge Removed on Space Join via Invitation Link
- Fixed: Course Creator Bypass on Private Space Approval
- Fixed: Comment Notification Content Leak Across Subscribers
- Fixed: Space Membership Data Bleed in FluentCRM Profile View
- Fixed: Lesson Video Missing Until Hard Refresh
- Fixed: Lesson Media Preview with FluentPlayer
- Fixed: iPad Safari Full-Screen Lesson Trap
- Fixed: Block Editor Not Rendering for Contributors
- Fixed: Bunny Stream Embed Layout in Composer and Feed Views
- Fixed: Stale Recent Activities Sidebar Widget
- Fixed: Notification Popover Scroll and Overflow
- Fixed: Scroll-to-Top Button Positioning Issues
- Fixed: Comment Scroll Behavior Inside Feed Modal
- Fixed: Section URL Placeholder Breaks in Hyperlinks
- Fixed: Undefined Variable Warning in Digest Email

= 2.5.0 (Date: May 20, 2026) =- Introduced: Sequential Lesson Lock for Courses (pro)
- Added: Courses Tab on User Profile
- Added: Bulk Import Welcome Email Opt-In
- Added: Scroll To Top Button in Feeds
- Added: In-app Notification for Comment Reaction
- Added: Hide Mobile Header and Footer on Scroll Option
- Added: Unread Notifications Tab and Recent Notifications Popover
- Added: Copy Code Button for Code Blocks in Posts and Comments
- Added: Profile and Cover Photo Removal Options
- Added: Post Scheduling by Space Admins
- Added: Email Invite From Add Members Form
- Added: See More/Less Toggle for Long Comments
- Added: Duplicate Action for Custom Profile Fields
- Added: Theme Color Support in Email Templates
- Added: Filter Hook for Default Post Space Selection
- Improved: Admin Manage Courses Page
- Improved: Settings Drawer with Dirty-State Save Confirmation
- Improved: Confirm Modal for Space Image Remove Actions
- Improved: Error Page CSS Customization Hook
- Improved: Pending and Blocked Members Tabs
- Improved: Character Limit Error Messages for Posts and Comments
- Improved: Slug Generation for Non-Latin Titles via ICU Transliteration
- Improved: Enrollment Cache and Course Thread Context Performance
- Security: Hide User Existence in Login Error
- Fixed: Search Modal Context, Persistence, and Clear Button Behavior
- Fixed: Sticky Pin Persistence Across Navigation and Layouts
- Fixed: Edit Post Mobile Responsiveness
- Fixed: HTML Entities in Course/Space Member Lists
- Fixed: Missing Reaction Avatars on Bookmarks Page
- Fixed: Drawer Width in Custom Profile Fields
- Fixed: Status Action Buttons Race Condition
- Fixed: Invitation Link Lands New Users on Login Instead of Register
- Fixed: Comment Reaction List Not Refreshing After React/Unreact
- Fixed: Avatar Upload Accessibility for Touch and Keyboard Users
- Fixed: iOS Safari Forced Muted When Autoplay Is Disabled in FluentPlayer

= 2.4.01 (Date: May 01, 2026) =- Fixed: Issue with Custom CSS Sanitization
- Fixed: Issue with FluentPlayer Video Upload
- Fixed: Checkbox Checkmark Not Centered Inside the Box
- Fixed: Icon Selector Hidden for System Menu Items in Menu Group Settings

= 2.4.0 (Date: Apr 30, 2026) =- Introduced: Bulk Add Members and Students from Multiple Sources
- Added: Default-Collapse Sidebar Groups Option in Settings
- Added: URL Autolink Support in Post Editor
- Added: Create New Space via Slide-Out Drawer
- Added: Fluent Player Share Links in Community Media
- Added: Confirmation Modal Before Removing Post Preview Image
- Added: Filter Hooks for Duplicate Post and Comment Check
- Improved: Active Sidebar Group Auto-Expands on Navigation
- Improved: UI and UX with more Smoother Page Transitions
- Security: Hardened Webhook Key Generation and Rate Limiting
- Security: Improved CSS and Input Sanitization Checks
- Fixed: Approve Post Fails with Invalid Status Value Error
- Fixed: Optional Custom Profile Field Values Not Resetting on Save
- Fixed: Multiselect Custom Profile Field Values Wiped on Update
- Fixed: Space Admin Options Disappear on Return Navigation
- Fixed: Notification Links Not Navigating to Specific Comment
- Fixed: Mobile Footer Not Visible on Block-Based Themes
- Fixed: About Tab Inaccessible on Mobile for Non-Members
- Fixed: Profile Feed Not Showing New Post Immediately
- Fixed: Signup Buffering with FluentAuth
- Fixed: RTL Profile Alignment and Course Lesson Padding

= 2.3.0 (Date: Mar 18, 2026) =- Introduced: Custom Profile Fields
- Added: CSV Export for Course Members and Quiz Result
- Added: Search and Filter for Followers/Following
- Added: Send Message Action in FluentCRM
- Added: Missing Translation Strings
- Improved: Content Reporting and Review
- Fixed: Issue with User Recent Activities
- Fixed: Issue with Single Feed Delete
- Fixed: Issue with Fluentform Activation
- Fixed: Space HTML Description Render Issue
- Fixed: Cart Checkout Not Working with Root Portal
- Fixed: Link Visibility Issue with Public Space Access
- Fixed: Different Space Layout View Issue
- Fixed: Redirect Issue After Login/Registration
- Fixed: Issue with BuddyBoss Follower Migration
- Fixed: Excluded Course from Sitemap When Disabled
- Fixed: Customizer Panel Not Working with Root Portal
- Fixed: Lesson Content Verse Block’s Text Contrast in Dark Mode
- Fixed: Social Media Link Preview for Twitter
- Fixed: Join Button on Spaces Card Redirects to Broken/Empty Page
- Fixed: Restore Space View Preference when Navigating between Spaces
- Fixed: Issue with FluentPlayer Disabling
- Fixed: FluentPlayer Issue with Youtube Short Video
- Fixed: Vimeo URLs with Query Params Unrecognized by FluentPlayer

= 2.2.07 (Date: Feb 20, 2026) =- Fixed: Issue with Notification System
- Fixed: Fixed Duplicate Post issues for pinned posts

= 2.2.05 (Date: Feb 20, 2026) =- Added: Disable Feed/Space Layout Switching
- Fixed: Issue with Vote Casting
- Fixed: Lesson Content Update Issue
- Fixed: Child Comments Appearing as Parent Comments
- Fixed: Minor UI Issue

= 2.2.01 (Date: Feb 19, 2026) =- Hotfix: Issue Template Page Styling
- Hotfix: Issue with Mentioning Users in Comments

= 2.2.0 (Date: Feb 19, 2026) =- Introduced: Card Layout View option
- Introduced: Comment Pinning feature
- Introduced: Profile Page Privacy Settings
- Introduced: Real-time Chat functionality
- Introduced: Video Upload with Fluent Player
- Introduced: Ability to add users to Spaces/Courses from profile
- Introduced: Chat Widget in Portal
- Improved: Portal performance for faster loading
- Improved: Course comments with filtering capability
- Improved: Feed commenter app notifications
- Improved: Various UI and UX enhancements across the portal
- Added: Inline Image support in Feed
- Added: Media upload rate limiting
- Added: Mentioned User Profile popover
- Added: Default comment sorting option
- Added: Tooltip for badge titles
- Added: Editor Draft Guard to prevent accidental content loss
- Fixed: Cloudflare compatibility issue in specific regions
- Fixed: Feed document deletion issue
- Fixed: Mentions not working in course comments
- Fixed: Unable to copy course comment link
- Fixed: oEmbed issue with external providers
- Fixed: User name not updating properly
- Fixed: XML sitemap showing 404 when portal is set as root
- Fixed: Feed icon not updating in Side Menu
- Fixed: Prevented portal rendering on unrelated root requests
- Redesigned: Lesson Editor for improved usability
- Enhanced: Bookmark listing with filtering, layout view, and search

= 2.1.02 (Date: Dec 04, 2025) =- Added: Join Space Option for Public Posts
- Added: Flagged Post Edit Option
- Improved: Space Settings Navbar UI
- Fixed: Shared Document Delete Issue
- Fixed: Migration Settings Access Issue
- Fixed: Topic Post Filtering Issue
- Fixed: Fluent-Messaging Not Installing
- Fixed: UI Breaking for Multiple Image
- Fixed: Script Not Loading in Block Theme
- Fixed: Showing Deactivated Followers/Following
- Fixed: Comment Reply Notification Not Sending
- Fixed: FluentForms Integration Notification Issue
- Fixed: Strikethrough Text Not Working in Post/Comment
- Fixed: RTL Alignment Issue in Course Lesson List Options

= 2.1.0 (Date: Nov 17, 2025) =- Added: App Notification When User Follow
- Added: Gutenberg Block Support in Course and Space Lockscreen
- Added: Breakdance Theme Support in Theme Compatibility
- Added: Auto Scroll Pagination in Bookmark Listing
- Added: Student Last Seen in Course Student List
- Added: Lesson Slug Edit Option
- Added: Spaces & Courses Counts in Listings
- Added: Hook for Default Profile Tab
- Added: Mentioned Users in Create Comment Hook
- Improved: Email Notifications
- Improved: Month Display in Mobile
- Improved: From Email Address Select
- Improved: Feed UI in RTL Mode
- Improved: UI/UX and Responsiveness
- Fixed: Multisite Compatibility in Manager and Course Student
- Fixed: Link Update REST Policy Issue with improved security
- Fixed: Default Order Ignored When User Can Change Order
- Fixed: Document Delete Issue on Copy Course Section
- Fixed: Max Topic Limit Per Space Not Working
- Fixed: Edit Post Not Working from Profile Posts
- Fixed: Post Topics Unable to Remove in Edit Post
- Fixed: Recent Activity Not Updating on Post Move
- Fixed: Topic Assigning Issue from Course Settings
- Fixed: Issue on Course Description links
- Fixed: Scheduled Course Delete Issue
- Fixed: Issue with Feed Sort By
- Fixed: Space Link Privacy Issue
- Fixed: Deleted Comment Activity Not Removing
- Fixed: Notification Preference Showing for Pending Users
- Fixed: Allow Join Option Showing for Public Space
- Fixed: Unlink URL Not Converting to Plain Text in Feed

= 2.0.0 (Date: Oct 29, 2025) =- Introducing Native Monetization Features for courses and Spaces with FluentCart
- Support Multiple Pricing Plans for Courses and Spaces
- Copy Course Sections between courses
- Duplicate Course with all settings
- Image Gallery Improvements
- New: Badge Remove Action for FluentCRM
- New: Section Completed Trigger for FluentCRM
- Styling Improvements for Feeds and Courses
- Fixed Join Date Timezone issue
- Hashtags now works on all languages
- BuddyBoss Migration Improvements
- Underline Framework upgrade for future feature updates
- Improvements on Bookmarks
- Other Bug fixes and Improvements

= 1.8.1 (Date: Oct 10, 2025) =- Hotfix: Video Player Issue Fixed

= 1.8.3 (Date: Oct 07, 2025) =- Added: Mentioned Users Hook
- Improved: Post Alignment in RTL Mode
- Improved: Support All Languages in Profanity Filter
- Fixed: Mention Search Working Only by First Name
- Fixed: Group Visibility Issue for Public Spaces
- Fixed: Document Attachments not Saving in Post
- Fixed: Media Disabling Issue on Post Update
- Fixed: Post Titles Not Migrating from BuddyBoss
- Fixed: Space Not Mapping in BuddyBoss Migration

= 1.8.2 (Date: Oct 02, 2025) =- New: Added Remove from course or spaces from FluentCRM Profile
- Improved Follow/Unfollow Users
- Hotfix: Course Enrollment Actions Hooks Fixed

= 1.8.0 (Date: Oct 01, 2025) =- Introduced: User Follow/Block Module
- Introduced: Course Email Notification
- Added: Thumbnail Image for Quiz Lesson
- Added: Image Upload Option with Poll Post
- Added: Default Feed Layout Styling Option
- Added: Default Logo and Footer in Invitation Email
- Added: Media File Migration Support in BPMigration
- Added: Max Media Per Post Customization Settings
- Added: Default Course Section Collapse Hook
- Improved: Feed Queries for Better Performance
- Improved: Handled Multiple Ajax Request
- Improved: Excluded Site Admins from Post Limit Check
- Improved: UI-UX and Responsiveness
- Fixed: Issue with Comment Permission
- Fixed: Digest Email Notification Avatar Issue
- Fixed: Course Slug Issue with Other Language
- Fixed: iOS Home-screen Shortcut Icon
- Fixed: Styling Issues with Email Notification
- Fixed: Deactivated Members Filter Not Working
- Fixed: Space Group Displaying for Logged-out Users
- Fixed: Topic-based Courses Filtering from Sidebar Menu
- Fixed: Add Topics for Orphaned (Not Assigned to Any Groups) Spaces
- Fixed: Document Search Functionality by File’s Title
- Fixed: Incoming Webhook Password Field Not Saving
- Fixed: Section and Course Order Mismatch Issue
- Fixed: Images Not Removing from Edit Post Modal
- Fixed: Space Join Request Email Notification not Sending to Multiple Moderators
- Fixed: Issue when Mentioning Multiple Users with Similar Usernames
- Fixed: Send Notification to All Not Working in Document Feed
- Fixed: Space Menu Links not Saving Visibility
- Fixed: Lesson View Sidebar Not Scrolling
- Fixed: Child Feed Overlapping with Header
- Fixed: UI Issue with RTL Mode

= 1.7.72 (Date: July 08, 2025) =- SEO: Course Schema Added for Public and Private Courses
- Imroved Course Index Searches (includes Course title and description)
- Translation Strings Updated
- Improved Responsiveness
- Better handling Deactivated/Blocked Profiles

= 1.7.71 (Date: July 07, 2025) =- Added: Lesson Completed Trigger for FluentCRM
- Added: Self Deactivation Option for Users
- Added Public Only Sidebar Link Option
- Added Dynamic URL for users profile
- Improved Search for Course Indexes (Includes Categories for search)
- Improved BuddyBoss Migration for large communities
- Improved Email Notification Designs
- Improved Mobile Responsiveness
- Security improvement for inline CSS contents

= 1.7.6 (Date: June 19, 2025) =- Added: Option to Update Course Instructor
- Added: Option to Hide Students from Instructor View
- Fixed: Lesson Duration Display
- Fixed: Profile Badge Styling Issue
- Fixed: Custom Link Icon Not Saving
- Fixed: Migration Request Time Limit Issue

= 1.7.5 (Date: Jun 18, 2025) =- New: Custom Link with Access Control
- New: Modern Course Overview Layout
- Added: Space/Course Meta Settings API
- Added: Data Sync Privacy Settings
- Added: Free Lesson Preview
- Redesigned: Course Overview Page
- Added: Access Message HTML for Locked Lessons
- Fixed: Course Completion Trigger
- Fixed: Mailing Settings Not Applying
- Fixed: Invitation Issue with FluentAuth
- Fixed: Last Activity & Social Links Display
- Fixed: Course Creator Access Permission Issues

= 1.7.1 (Date: June 05, 2025) =- Fixed Full Screen Mode Issue in Course Lessons
- Fixed Styling issues in the auth pages
- Improved Translation Strings
- Fixed Infinite Scroll Issues
- Improvement on the WP Page Layouts

= 1.7.0 (Date: June 04, 2025) =- New: Introducing the Quiz Module in courses
- Added: Course Completed Trigger with FluentCRM
- Added: DateTime Smartcode on Post Content
- Added: Course Lessons Collapse/Open for all Sections
- Added: Missing Translations
- Added: Topic Selection Option in Space Creation
- Improvement on the Auth Module
- Improvements on Documents & File Uploading
- Content Moderation Improvements when updating content
- Improved Course and Lesson Delete Cleanup
- Fixed: S3 Cleanup Issue on File Deletion
- Fixed: Unlisted Post Not Able to Publish
- Fixed: Course Creator Permission

= 1.6.3 (Date: May 13, 2025) =- Hotfix: timezone issue fixed on the post scheduling
- Fixed: post edit issue

= 1.6.0 (Date: May 13, 2025) =- Built-in SEO & Structured Data
- Added Post Preview Before Publishing
- Added Post Scheduling Feature
- Added Sorting Option for Posts
- Fixed Digest Email Issue
- Fixed Issue with User Deletion
- Improve UI UX

= 1.5.0 (Date: April 29, 2025) =- Theme Compatibility feature
- Added custom redirect URL for public user
- Fixed mentioning user in comment but not getting email issue
- Fixed issue with deleted user
- Fixed community admin permissions
- Fixed selected space topics not displaying issue
- Fixed modal content invisible issue
- Improved UI/UX

= 1.3.1 (Date: April 09, 2025) =- Gutenberg Block in Course Lesson Editor
- Delete Current Data from BuddyBoss Migration
- Move Lessons Between Sections
- One-to-One Messaging Settings
- Email Notification Settings for Messaging
- User Blocking Functionality for Messaging
- Poll Ended Date & Time
- Refresh Feed Option
- New Tab for Terms and Conditions Link
- Ungrouped Spaces in Space Groups
- Security:****Updated Framework library to fix data unserialization issue (props to patchstack)
- Added LightSpeed Caching issues
- Added 100% Public Course!
- Added Hook in Feeds Query
- Added Missing Translations
- Fixed Document Lists
- Fixed Issue with Privacy Url
- Fixed Moderation Email Not Sending Issue
- Fixed Course Not Deleting From Space Groups
- Fixed Notification for Mentioned User in Comment
- Fixed BuddyBoss Avatar and Cover Mismatch Issue
- Improved UI-UX

= 1.2.15 (Date: Mar 18, 2025) =- Added Add Or Remove Verification Action for FluentCRM Integration (pro)
- Added Custom CSS and Javascript Snippet Options (pro)
- Added Custom Signup URL option for Auth Module
- Improved BuddyBoss / BuddyPress migration for images
- Fixed comment notification issues
- Fixed object caching for moderator settings

= 1.2.11 (Date: Mar 10, 2025) =- Improved Moderation Module and Added new features
- BuddyBoss & BuddyPress Migration Support for Media
- Improved Database Queries for Feeds
- Accessibility support for the top menu bar

= 1.2.0 (Date: Mar 06, 2025) =- Introduced Content Moderation Feature
- Integrated BunnyCDN
- Added Incoming Webhook
- Added Social Links Customizations!
- Added Search and Sort Options in Space and Course List
- Added Profile Section To FluentCRM
- Added Last Seen as Privacy Settings!
- Resolved Image Rotation Issues!
- Fixed File Upload Bug
- Fixed Welcome Banner Style Issue
- Fixed Avatar Not Generating for Other Language
- Fixed User Badge Border Color Inconsistency
- Fixed Create Space Group Showing Existing Group Data
- Fixed Profile Dropdown Icon Style Issue
- Fixed User Document Download Issue
- Fixed Issue with Daily Digest Email

= 1.1.22 (Date: Feb 04, 2025) =- New: Reporting and Analytics Overview
- New: Integration with Paymattic
- New: Allow Users to Leave/Join Group Chat
- Improvement: Multiple Media Upload Support in Post Comment
- Added Pagination for Space and Course Lists
- Added Options to Edit and Delete Space in Space Group Settings
- Duplicate Post Validation Limited to Current Space
- Resolved: Video Embed Issue with Custom HTML
- Resolved Space Remove from Group Issue
- Fixed: Login Button Label Not Updating Issue
- Fixed: Group Space Menu Visibility for Public
- Fixed: Space Permission Handling Issue
- Fixed: Flags Emoji Saving Issue
- Fixed Slug Not Updating Issue

= 1.1.21 (Date: Jan 21, 2024) =- Hotfix: mention html fixed

= 1.1.20 (Date: Jan 21, 2024) =- New: Migration support for BuddyPress
- New: Migration support for BuddyBoss
- New: Added ability to change the space for a post
- New: Terms and Conditions field customization option
- Added exclude users from leaderboard
- Added option to remove users from selected lists
- Added multisite compatibility for users
- Added space permission control
- Added missing translation strings
- Resolved posting without space selection issue
- Fixed login/signup background style not rendering
- Fixed permalink issue in course comments
- Fixed media storage issue with Amazon S3 region
- Fixed course document permission issue
- Fixed profile status update issue in CRM action
- Addressed numeric emoji saving issue
- Resolved invalid media image error
- Improved loading style
- Improve UI/UX

= 1.1.17 (Date: Dec 17, 2024) =- New: Post Sharing Card when sharing community post on the feed
- Added Missing Translations
- Added Soundcloud support for oEmbed
- Added Fallback slug generation for non-latin characters
- Fixed @everyone tag issues
- Fixed Styling issue for color customizations
- Fixed Open Graph Image issue

= 1.1.15 (Date: Dec 16, 2024) =- NEW: Secure Documents Feature for Spaces
- NEW: Secure Documents Feature for Course Lesson
- NEW: Added new member list/grid layout
- NEW: Invitation Links for Spaces
- NEW: Robust Access Management with FluentCRM tags
- NEW: Improved Auth Pages UI & UX & better integration with FluentAuth
- NEW: FluentCRM triggers for Course / Space left
- NEW: Contextual Smartcode for FluentCRM Automation
- Course Editor Mobile UI Issues Fixed
- Fixed Permission Issues with Moderators / Course Creators
- Fixed Gravatar API Issues
- Fixed: everyone tag issues
- i18n Improvements

= 1.1.12 (Date: Dec 02, 2024) =- Added Option to disable Gravatar Profile Image
- You can now add Multiple Badges to a User
- Notification Type Icons added
- [FluentCRM Automation] – Add or Remove Badge on FluentCRM Automation Action
- [FluentCRM Bulk Actions] – Add Or Remove Badge on FluentCRM Bulk Actions
- Improved UX for Post Popup
- Disable Comments on courses globally
- Course Progress Bar added to lesson view
- Add Option to Hide Students Count from Course Listings
- You can now create Space without any group
- Improved Slug Generation for non-latin characters
- Space & Group menu management improved
- Bug Fixes and Improvements suggested by community users

1.1.11 (Date: Nov 27, 2024)- Added Modal View for each post (Configurable)
- Single Post view is now blazing fast
- Courses now can be added without any Menu Group
- Login and Signup Page Customization Improved
- Post Slug issue fixed for non-latins characters
- Space and Course Slug can be edited now
- Fixed course URL issue when using custom slug
- Added Topics as a required field for Posts (Configurable)
- Added Option to edit user email from profile
- Improved UI & UX

1.1.10 (Date: Nov 20, 2024)- Hotfix: Fixed Login issue

1.1.10 (Date: Nov 20, 2024)- Hotfix: Fixed Login issue

1.1.0 (Date: Nov 20, 2024)- Improved FluentCRM Integration
- Added Direct Integration with Fluent Forms
- Styling & UX Improvements
- Added Login and Signup Page Customization
- Added Remove From Space Option from user profile
- Added MySQL Lite Support

1.0.99 (Date: Nov 19, 2024)- Hotfix: User Registration Issue Fixed

1.0.98 (Date: Nov 18, 2024)- Added Color Schema Customization
- Improved UI & UX
- Improved FluentCRM Integration
- Added more privacy Settings
- Translation Improvement

1.0.97 (Date: Nov 14, 2024)- Fixed Portal Slug Issue on activation

1.0.96 (Date: Nov 14, 2024)- Improved Data Cleanup for old logs
- Fixed Topics Edit Issues
- Improved UI & UX on various Pages
- Fixed Badge Delete issues
- Improved Feeds Edit Form – Now you can edit topics and media as well
- Email Digest & Notification Emails improvement
- Added Option to hide members count from spaces
- Improved Roles and Permissions
- Comments sorting is now present
- Added option to use custom Login/Signup URL
- Translation and Different String Labels Improvements

1.0.95 (Date: Nov 12, 2024)- Added Community Privacy Settings. Now you can disable global profile listing and restrict profile listing on specific spaces
- Fixed various Styling issues
- Tagging users is now improved
- Improved UI across the Community Feed Interface
- Fixed various issues with the Course UI

1.0.94 (Date: Nov 08, 2024)- Hotfix: Fixed Post Delete DB issue

1.0.93 (Date: Nov 08, 2024)- UI Improvements
- Fixed Topics Delete Issue
- Fixed Bulk Delete Issues on background
- Course Content issues fixed

1.0.92 (Date: Nov 07, 2024)- Fixed Styling issues
- Fixed FluentCRM Integration Issues
- Added RTL Support

1.0.90 (Date: Nov 07, 2024)- Init the all in one community plugin

1.0.90 (Date: Nov 07, 2024)- Init the all in one community plugin

1.0.90 (Date: Nov 07, 2024)- Init the all in one community plugin

---

