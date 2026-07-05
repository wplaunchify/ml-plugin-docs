# Change Log

*Category from Fluent Support documentation*

---

## Change Log

**Source:** [https://fluentsupport.com/docs/change-log/](https://fluentsupport.com/docs/change-log/)

**=**2.1.2 (Date: April 20, 2026) **=**- Simplified image upload flow: the Create/Reply button now appears only after the upload is complete.
- Enabled attachments for ticket emails, including Agent-created tickets and Agent-initiated tickets.
- Fixed an issue where alpha-admin.css was loading on all admin pages when the ticket summary feature was enabled.
- Fixed inaccurate Personal Report metrics; all ticket closures and replies are now correctly counted regardless of assignment.
- Fixed admin UI styling to properly align the Fluent Support canvas within the admin interface.
- Prevented duplicate shortcode copy notifications in settings.
- Improved dark mode UI consistency by enhancing blocked status warning visibility, fixing Reply/Close button state styling, and improving icon contrast with standardized dropdown icon styling.

**=**2.1.1 (Date: April 10, 2026) **=**- Fixed an issue where the global ticket summary was not rendering outside Fluent Support pages
- Fixed Slack notification sending issue (Pro)
- Fixed activity log staff filter dropdown collapsing issue

**=**2.1.0 (Date: April 09, 2026) **=**- Added Agent Groups to organize support teams and enable smart ticket distribution
- Added Agent Signature option for support agents
- Added Agent-Initiated Tickets (agents can create tickets on behalf of customers)
- Added new email template for Agent-Initiated Tickets
- Added file upload integration with Cloudflare R2 and Amazon S3 (Pro)
- Added Dynamic Sidebar Widgets system (hook-based, supports PHP and Vue components)
- Added fluent_support/should_send_notification filter to control notification delivery across channels
- Improved overall security
- Optimized database queries for better performance
- Fixed Fluent Boards integration action availability in free version when plugin is active
- Fixed portal signup visibility issue when using shortcode attribute
- Fixed “Close Ticket Silently” not suppressing email notifications
- Fixed incorrect syncing of customer status with FluentCRM
- Fixed advanced filter deletion issue in tickets list
- Fixed theme mode toggle visibility issue
- Fixed untranslated strings in advanced filter options

**=**2.0.6 (Date: March 05, 2026) **=**- Updated: Core PHP framework
- Added: Zendesk migration improvement to collect archived tickets and resume previous migrations
- Fixed: Onboarding dark mode design issue
- Fixed: Bulk option checkbox now visible by default
- Fixed: Ticket list not updating after bulk actions
- Fixed: File upload limit validation issue after deleting previously uploaded files
- Fixed: WordPress admin bar overlapping Fluent Support menu
- Fixed: Agent reply count in reports incorrectly including internal notes
- Fixed: Error when navigating directly to a ticket URL due to window.history.state being null

**=**2.0.5 (Date: March 02, 2026) **=**- Added: Admin Dashboard Dark Mode
- Added: Support for OpenAI GPT-5.2 & GPT-5.2 Chat models
- Added: View Tickets (Read Only) permission
- Improved: Faster ticket list loading
- Improved: Optimized large-scale Zendesk migration
- Fixed: Draft Reply permission issue
- Fixed: Attachment links during ticket merge
- Fixed: Ticket content unordered list formatting
- Fixed: Integration settings save button visibility
- Fixed: “Waiting Since” tooltip date display
- Fixed: Saved Replies left menu link
- Fixed: Login page styling issue
- Fixed: Date range picker responsive layout

**=**2.0.2 (Date: February 09, 2026) **=**- Fixed an issue where current ticket watchers were not displaying in the ticket list.
- Fixed an issue where ticket merging could fail from the ticket view page.
- Fixed an issue where reCAPTCHA settings were not saving properly.
- Fixed a responsiveness issue with the bulk actions bar in the ticket list.
- Fixed issues related to ticket migration.
- Fixed a customer profile update issue by treating customer IP fields as strings.
- Fixed a styling issue with the Ticket Merge dialog buttons.

**=**2.0.1 (Date: February 06, 2026) **=**- Improved onboarding completion UI and post-onboarding navigation
- Improved sanitization and validation handling
- Fixed Saved Replies modal showing stale content when editing

**=**2.0.0 (Date: February 05, 2026) **=**- Complete admin interface redesign with a modern layout.
- Full RTL (Right-to-Left) language support across the interface.
- Fully mobile-responsive experience across all modules.
- Revamped menu structure with dropdowns for better organization.
- Responsive hamburger menus for Main Menu, Settings, and Reports.
- Drag & Drop Image Upload for tickets.
- Ticket List Display Settings: manage layout and element visibility directly from the Display Settings icon.
- Compact Ticket List Layout for faster scanning and higher information density.
- Keyboard Shortcuts: Enable via Plugin Settings → Global Settings → Enable Keyboard Shortcuts. Click “Keyboard Shortcuts” to view all available commands.
- Improved Frontend Support Portal responsiveness and theme compatibility.
- Refactored Customer Portal SCSS variables for easier dark mode implementation.
- Updated core PHP framework; resolved PHP 8.4 compatibility issues.
- Improved input sanitization and validation.
- Migrated components to Options API and refactored Vue components for better performance.
- Prevented unnecessary API calls in Reports module.
- Separated personal reports from agent performance reports.
- Added Reports Stats API for product/business-specific insights.
- Selected date range persists when switching report tabs.
- Resolved issue where pressing Enter caused page reload instead of submitting forms.
- Fixed Block Editor styles not applying correctly on Customer Portal.
- Fixed WordPress 6.9 admin text editor toolbar compatibility issues.
- Fixed database table error when Activity Log feature was disabled.
- Fixed auto password generation issue for new users with empty password fields.

**=**1.10.5 (Date: Nov 28, 2025) **=**- Security: Fixed an access control bypass in the customer portal caused by improper validation of the intended_ticket_hash parameter.
- Security: Added sanitize_sql_orderby() to prevent unsafe or invalid values in sorting queries.
- Fix product_id filter to require array in whereIn, preventing potential errors when a non-array value is provided.

**=**1.10.4 (Date: Nov 21, 2025) **=**- Fixed: Issue with attachments not showing from third-party storage.
- Updated: License Server

**=**1.10.3 (Date: Nov 17, 2025) **=**- Resolved issues affecting public ticket and attachment visibility.

**=**1.10.2 (Date: Nov 6, 2025) **=**- Fixed Guideline Issues

**=**1.10.1 (Date: Oct 31, 2025) **=**- Fixed Text Domain Issues
- Updated Libraries
- Prevent Direct Access to Plugin Files
- Added GitHub Public repo link in the readme file

**=**1.10.0 (Date: Oct 23, 2025) **=**- Added: Fluent Cart product purchase widget in the ticket sidebar.
- Added: Fluent Cart product and order options in custom fields.
- Added: Workflow trigger based on Fluent Cart product and order from custom fields.
- Added: Option to integrate the customer portal into the Fluent Cart customer dashboard.
- Added: Multi-select option for product filtering in tickets.
- Improved: Refined plugin performance for increased speed and efficiency.

**=**1.9.2 (Date: Aug 20, 2025) **=**- Added: Product assignment to tickets in Workflow Actions.
- Added: Support for custom field data in Outgoing Webhooks.
- Improved: Click-to-copy shortcode functionality on the Global Settings page.
- Improved: Smart code selection dropdown in Email Settings with click-to-insert functionality in WP Editor.
- Improved: Dash icon updated.
- Fixed: CSRF issue fixed on Report Export – nonce verification.
- Fixed: Error during AI activity log cleanup.

**=**1.9.1 (Date: Jul 15, 2025) **=**- Improved: After selecting the portal page, it now displays the page name along with the page ID.
- Improved: Enhanced data validation when creating a customer through the “Create Ticket on Behalf of Customer” module.
- Improved: Added a filter to control the display of bottom borders in email templates.
- Fixed: Custom field “required” validation not working under certain conditions.
- Fixed: Start date does not display correctly in the Paid Memberships Pro widget.
- Fixed: Design conflict with the Blocksy theme in the customer portal.
- Fixed: Translation issues across various modules.
- Fixed: Agents unable to edit additional data fields.
- Fixed: Custom fields do not render properly in the admin portal when creating a ticket on behalf of a customer.
- Fixed: Selected product displayed as ID instead of name in view ticket module.
- Fixed: Change customer option showed only the current customer ID instead of the full list.
- Fixed: Workflow didn’t work when Fluent Community plugin was inactive.
- Fixed: Attachment access issue on symlinked servers using realpath.

**=**1.9.0 (Date: May 28, 2025) **=**- Added: Integration with Fluent Community. (Pro)
- Added: Informational replies on admin ticket responses.
- Added: Help Scout, Freshdesk & Zendesk Ticket Migration Now Available in Free Version.
- Improved: Internal note functionality now works for closed tickets.
- Improved: Responses in closed tickets can now be edited.
- Fixed: Error message shown for the Priority field when the Product is required in the customer portal.
- Fixed: Fatal error triggered by the Share Essentials weekly cron job.
- Fixed: Customer responses not displaying in agent response stats within agent reports.
- Fixed: Incorrect ticket response count shown in today’s stats.
- Fixed: Broken media upload CSS in the page editor caused by the [ fluent_support_admin_portal ] shortcode.
- Fixed: “Waiting For Reply” filter not working in advanced filtering.
- Fixed: Responsive issues in the Agent Portal.

**=**1.8.8 (Date: Apr 22, 2025) **=**- Fixed: Ticket status was not displaying correctly on the ticket view page in the customer portal.
- Fixed: File types, quantity limits, and file sizes were not displaying correctly in the customer portal.
- Fixed: Missing translations in the customer portal.
- Fixed: Changes to ticket form configurations were not reflecting in the customer portal.
- Fixed: Removed unnecessary API call on the customer portal page.
- Fixed: Custom field not updating correctly via REST API.
- Fixed: Issue with Fluent Form and Fluent CRM integration.
- Fixed: Issues with updating actions in the workflow.
- Fixed: Issue with conflicting forms in the customer portal’s registration and password reset process.

**=**1.8.7 (Date: March 20, 2025) **=**- Improvement: Enhanced and refined the Customer Portal UI/UX.
- Improvement: New block editor for the updated Customer Portal layout.
- Improvement: Resume options for incomplete Freshdesk ticket migrations.
- Fixed: Images pasted directly are deleted after some time.
- Fixed: Unable to edit customers with no name in the customer list.
- Fixed: Attachment issue when creating a ticket from Fluent Forms.
- Fixed: Issue with unchecking agent permissions.
- Fixed: Missing option to delete custom fields during creation.
- Fixed: Creating an action in a workflow also creates a duplicate action.
- Fixed: Advanced filter does not work when a multi-select option is selected.
- Fixed: Unable to assign users to a new business box if the current one is restricted to agents.
- Fixed: Product not displaying in WooCommerce widget.
- Fixed: Conditional logic for custom fields not working properly when creating a ticket from the admin portal.
- Fixed: Direct copy-paste of images was not functioning properly in multisite.

**=**1.8.6 (Date: Feb 28, 2025) **=**- Fixed: Textdomain Consistency: Standardized all translation string textdomains across the plugin for better internationalization support.
- Fixed: Enhanced Security: Implemented proper data escaping and improve overall plugin security.
- Fixed: Media Protection: Reinforced security measures for attachment uploads by restricting direct access to image directories and implementing proper file path validation.

**=**1.8.5 (Date: Dec 26, 2024) **=**- Added: Agent Time Tracking (Pro)
- Added: Saved search (Pro)
- Added: Keyboard Shortcuts
- Fixed: Issue where the Customer Portal’s rich text editor reverted to a basic editor upon reload.
- Fixed: Recaptcha functionality issue in the Customer Portal.
- Fixed: WorkFlow action sequence title issue.
- Fixed: Issue where embedded content appeared in preformatted form in the reply message after reloading.
- Fixed: Compatibility issue with the Sequential Order Plugin.
- Fixed: 404 error page not showing when an incorrect ticket number is entered in the ticket view URL.
- Fixed: Error message displaying when the Customer Portal loads.
- Fixed: Notes within a closed ticket becoming non-editable.
- Fixed: Restricted agents being incorrectly assigned to a mailbox through the ticket dashboard’s bulk action feature.
- Fixed: Email verification message translation and verification message hooks not functioning properly.

**=**1.8.4 (Date: Sep 27, 2024) **=**- Hot-fix: Fixed issue with Activity logs cleanup

**=**1.8.2 (Date: Sep 25, 2024) **=**- Added: Workflow action sequence (Pro)
- Added: Direct paste image in WP Editor
- Fixed: Required sign not visible for product options marked as required during ticket creation
- Fixed: Reply button toggle option not working in the admin portal
- Fixed: Issue with the route URL on the All Tickets page
- Fixed: Filter not refreshing in the Customer Portal after clicking the (❌) icon in the search field
- Fixed: OpenAI routing issue resolved
- Fixed: CSS issue related to ticket filter theme in the Customer Portal
- Fixed: Responsive issue on the view ticket page
- Fixed: After importing tickets from another SaaS platform, the agent is imported but not synchronized with the system

**=**1.8.1 (Date: Sep 10, 2024) **=**- Fixed – Email verification vulnerability issue in signup
- Fixed – Customer portal ticket fetching vulnerability issue

**=**1.8.0 (DATE: August 15, 2024)**=**- Added – OpenAI integration
- Added – Filters in the customer portal
- Added – Email verification in the signup
- Added – Two-factor authentication
- Added – Ticket Preview on Side Pane
- Fixed – Freshdesk Ticket Migration Issue
- Fixed – Response message saving error in auto-close setting
- Fixed – Data existing issue in “Create Customer Form”
- Fixed – Shortcode Paste Issue
- Fixed – Permission error in “Delete Tickets”
- Fixed – Issue with email condition in the workflow trigger

**=**1.7.90 (DATE: May 28, 2024)**=**- Added – Activity Trends by Time of Day (Pro)
- Added – Integration with Fluent Boards (Pro)
- Added – Integrations Logs
- Added – Upload ticket attachments to their respective ticket folders in Google Drive, organized accordingly (Pro)
- Added – Duplicate or clone workflows (Pro)
- Added – Required option in product field (Pro)
- Fixed – If the site language is not set to English, the workflow always defaults to manual mode
- Fixed – Inbox identifier css issue in all tickets table
- Fixed – If anyone choose View dashboard and draft_reply then it will not show any tickets
- Fixed – Freshdesk ticket migration issue
- Fixed – Zendesk ticket migration issue
- Fixed – Clicking the “Import Tickets” button in the ticket migration module opens multiple modals simultaneously
- Fixed – Issue with Bookmark
- Fixed – When the file name is too long, the file will not upload during ticket creation or in responses
- Fixed – If a restriction is applied to a specific business box, it still appears on the dashboard
- Fixed – MemberPress integration to show separate lists for recurring and non-recurring subscriptions
- Fixed – The WooCommerce widget is not shown on the ‘View Customer’ page

**=**1.7.80 (DATE: April 3, 2024)**=**- Added – Restrict business boxes for specific agents
- Added – Ticket search feature in customer portal
- Added – MemberPress Integration
- Added – Option to resume the migration process for the last incomplete ticket in Helpscout (Pro)
- Added – Display the exact time of ticket or response creation upon hovering over it in the admin portal
- Fixed – Attachment download issue in email piping
- Fixed – BetterDocs integration issue
- Fixed – Agent Only field isn’t displaying into the ticket
- Fixed – Draft Reply approve button issue with attachment
- Fixed – There is an issue with exporting the agent report time
- Fixed – The Gravatar image link is causing a PHP 8.2 deprecated issue
- Fixed – The issue with the “Enable Reply from Telegram” button in Telegram
- Fixed – The Auto Close Settings are not saving
- Fixed – Helpscout ticket migration issue
- Fixed – When responding to emails in German, create a new ticket instead of replying.

**=**1.7.72 (DATE: January 10, 2024)**=**- Fixed – Notification integration settings issue
- Fixed – Displaying an incorrect assigned agent name
- Fixed – Links open in same tab issue
- Fixed – Telegram reply issue
- Fixed – Required functionality is not working in the conditional field
- Fixed – Ticket status issue

**=**1.7.7 (DATE: December 13, 2023)**=**- Added – Trigger Fluent CRM automation within workflow (Pro)
- Added – Agent feedback in ticket response (Pro)
- Added – Agent permission for save response as draft
- Added – New shortcode for agent title signature in the inbox settings
- Added – Custom registration field using hooks
- Fixed – Agent can assign ticket without permission
- Fixed – The time duration displayed for ticket creation and response creation is inconsistent
- Fixed – Open a new thread in email for every response created
- Fixed – Translation issue
- MySQL orderby security issue fixed

**=**1.7.6 (DATE: NOVEMBER 07, 2023)**=**- Improved File Upload
- Improved UI

**=**1.7.5 (DATE: NOVEMBER 01, 2023)**=**- Fixed – Update and delete customer profile issue
- Fixed – Reset avatar issue for customer and agent
- Fixed – Ticket ID not included in outgoing webhook
- Fixed – Update and delete issue in saved reply
- Fixed – Ticket ID not included in outgoing webhook **(Pro)**
- Fixed – Update and delete issue in saved reply **(Pro)**
- Fixed – Time difference issue in saved reply **(Pro)**

**=**1.7.4 (DATE: OCTOBER 31, 2023)**=**- Added – Gutenberg block editor support for customer portal
- Added – Option to set additional fields in register form
- Added – Agent assigns permission for support staff
- Fixed – Added a few missing translations
- Fixed – “not contain” condition does not work in the workflow
- Fixed – Ticket delete button is only shown in the Pro version
- Fixed – Freshdesk migrator issue fixing
- Fixed – File upload and view issue for 3rd party
- Improved – Ticket ordering in the customer portal
- Improved – Implemented 404 page for invalid ticket id

**=**1.7.3 (DATE: AUGUST 23, 2023)**=**- Added – Option to delete ticket from inside view ticket
- Added – Re-design permission page
- Added – Report by Product(Pro)
- Added – Report by Business Inbox(Pro)
- Added – Support RTL email template
- Fixed – Hide agent performance report from dashboard if the user doesn’t have permission
- Fixed – Tickets page – search not working in some case
- Fixed – Issue in Customer Fields required with conditions(Pro)
- Fixed – Save as draft in reply ticket not working
- Fixed – Manage Customer – upload avatar for customer not working
- Fixed – Add media button is not working for wp-editor
- Fixed – Attachment not working from email for 3rd party(Pro)
- Fixed – The issues in inner sidebar while route changing

**=**1.7.2 (DATE: JULY 17, 2023)**=**- Fixed – Create ticket issue for required fields
- Fixed – Edit button in draft mode
- Fixed – Add cc or Discard cc button not showing

**=**1.7.1 (DATE: JULY 15, 2023)**=**- File Attachment view issue fixed
- remove error_log for debugging

**= 1.7.0 (DATE: JULY 14, 2023) =**- Added – Effortless draft mode and auto save functionality
- Added – Option to set maximum file upload limit
- Added – Option to set dedicated business box for webhook(Pro)
- Added – Option to set as default business box
- Added – Option to set business box in the customer portal shortcode
- Added – Option to upload file in the ticket create form
- Added – Business box added in the workflow action and condition list (Pro)
- Added – Option to merge multiple tickets at the same time
- Added – Summary by agent report on the dashboard
- Added – Email CC support(Pro)
- Added – Support file attachment upload in third party (Google Drive and Dropbox)(Pro)
- Added – Zendesk migrator(Pro)
- Fixed – Exception handled in route issue
- Fixed – Edit reply issue
- Fixed – Workflow action ordering issue (Pro)
- Fixed – Custom field required in conditional form (Pro)
- Fixed – Conditional form rendering issue (Pro)
- Fixed – Ticket create using API endpoint (Pro)
- Fixed – Freshdesk migrator issue (Pro)
- More improvements

**= 1.6.9 (Date: March 16, 2023) =**- Added – Google reCAPTCHA support
- Added – Custom field required or optional (Pro)
- Added – Custom field in the workflow condition (Pro)
- Added – Saved replies templates in auto ticket close module (Pro)
- Added – Saved replies templates in the workflow (Pro)
- Fixed – Fluent CRM widget missing issue (Pro)
- Fixed – Ticket merge popup issue (Pro)
- Fixed – Delete action of manual workflow (Pro)
- More improvements

**= 1.6.8 (Date: February 14, 2023) =**- Added – Notify user when agent create a ticket on behalf of them
- Added – Migrate Tickets from Freshdesk (Pro)
- Added – Toggle to stop auto close bookmarked tickets (Pro)
- Fixed – Custom fields issues while creating ticket from Fluent Forms
- Fixed – Issue with Shortcode
- Fixed – Issue on ticket close
- Fixed – Issue with telegram reply (Pro)
- Fixed – Support staff not assigned to ticket via workflow (Pro)
- Fixed – Frontend agent portal issues (Pro)
- More Bug Fixes and Improvements

**= 1.6.7 Date: November 24, 2022) =**- Dynamic Dashboard
- Agent assigned to Activity
- Export Agent Summary Report **(Pro)**
- JS HelpDesk Importer
- Manual Workflow bug fixing( Bug)
- Attachment does not send on the first response (Bug)
- Help Scout Ticket Migrator **(Pro)**
- Block user’s ticket not blocking issue fixed (Bug)
- Filters not staying in place (Bug)
- WooCommerce purchase history design changed (Improvement)

**= 1.6.6 (Date: October 19, 2022) =**- Activity Log Filters
- Active Tickets for Products
- Waiting Tickets stat on the Dashboard
- Hourly Reports for tickets activity
- New Trigger – Ticket Closed on Automation **(Pro)**
- Close Ticket Silently (without triggering emails)
- Migrate Tickets from Awesome Support
- Migrate Tickets from SupportCandy
- Fixed and Improvements of a few minor UI issues

**= 1.6.5 (Date: August 24, 2022) =**- Added Auto Close Ticket Module based on ticket inactivity days **(Pro)**
- Improved Saved Replies [you can add more replies] **(Pro)**
- Styling Improvements
- Fixed a few minor issues on integrations

**= 1.6.2 (Date: August 22, 2022) =**- Fixed a few minor bugs regarding data sanitizations
- Saved Replies issues Fixed
- All external links are will open in a new tab
- Auto Linking linkable contents
- Create new ticket flow improved from the agent side

**= 1.6.1 (Date: August 19, 2022) =**- Added – Ticket create action in FluentCRM
- Added – FluentCRM list on ticket sidebar
- Added – Fluent Support ticket summary in WP Dashboard toolbar
- Added – Fluent Support ticket summary in WP Dashboard toolbar
- Added – Fluent Support summary WP Dashboard Widget
- Fixed – Customer ticket creation page disappear on page reload
- Improvement – Security
- Improvement – Code Base
- Added – Shortcode support in the workflow (Pro)
- Added – LearnPress integration (Pro)
- Added – Split reply to a new ticket (Pro)
- Added – License status in EDD widget (Pro)
- Added – Agent portal in frontend (Pro)
- Added – Ticket closing feature from Slack and Telegram (Pro)
- Added – Adding or removing ticket bookmark from the workflow (Pro)
- Fixed – Email box setup issue on translated sites (Pro)
- Fixed – WooCommerce customer guest purchase not displaying in WooCommerce widget (Pro)
- Improvement – Security (Pro)
- Improvement – Code Base (Pro)

**= 1.5.7 (Date: July 07, 2022) =**- Added Customer Logout Feature
- Added Customer Password Reset Feature
- Added Global Customer Searching on Ticket Creation on Behalf of Customer **(Pro)**
- Added Template for Ticket Creation on Behalf of Customer **(Pro)**
- Fixed WooCommerce Order Total Issue **(Pro)**
- Fixed Text Encoding Issue on Email Piping **(Pro)**
- Added Avatar Reset Feature
- Improvement of Code Base

**= 1.5.6 (Date: May 26, 2022) =**- Improvement of Code Base
- Fixed Image alignment issue in email template
- Fixed Editor issue inside a modal popup
- Added Ticket Merge System **(Pro)**
- Added Ticket Watcher System **(Pro)**
- Added Mailbox Check in Workflow **(Pro)**
- Fixed Customer avatar doesn’t display in the customer portal
- Fixed Customer WP Profile Update doesn’t Reflect in Fluent Support Customer Profile
- Added FluentCRM List & Tag Check in Workflow **(Pro)**
- Added FluentCRM List & Tag Attach & Detach in Workflow **(Pro)**
- Fixed WooCommerce Multi Currency Issue **(Pro)**
- Fixed WooCommerce Draft Product Display in Custom Fields **(Pro)**

**= 1.5.5 (Date: March 02, 2022) =**- Added GDPR compliance and WordPress Data-Export API
- Added Today’s stats of tickets
- Added Attachment support in the email notification- Added Ticket moving feature from one mailbox to another
- Fixed Conflict while creating a ticket from agent-end in some specific servers
- Added – Whatsapp integration via Twilio **(Pro)**
- Added – Outgoing Webhook Integration in the workflow **(Pro)**
- Added – Agents report filtering by a specific agent **(Pro)**
- Added – Today’s stats of tickets **(Pro)**
- Added – Send notification to 3rd party integrated notification system on agent assign **(Pro)**
- Added – Ticket moving feature from one mailbox to another **(Pro)**
- Fixed – Ticket created email notification not sending when creating a ticket via incoming webhook **(Pro)**

**= 1.5.4 (Date: January 19, 2022) =**- Added – Email notification on ticket assign
- Added – Ticket priority selection in Fluent Forms integration
- Added – Customer profile picture changing the option in agent area
- Added – Customer registration on ticket creation from agent area
- Added – WordPress user registration on ticket creation from agent area
- Added – Plugin PHP API
- Added – Ticket customer changing option from the agent dashboard
- Added – Missing translations
- Authentication Improvements
- Fixed – Attachment issue
- Fixed – Email notification not sent to the customer when an agent replies to a ticket
- Authentication Improvements
- Fixed – Attachment issue
- Fixed – Email notification not sent to the customer when an agent replies to a ticket
- Added – Ticket advanced filtering (Pro)
- Added – Custom fields on Telegram integration **(Pro)**
- Added – Incoming Webhook **(Pro)**
- Added – Missing translations **(Pro)**
- Fixed – Issues related to email piping **(Pro)**
- Fixed – Email footer not sending to email notification **(Pro)**
- Fixed – Discord Notification issues **(Pro)**
- Fixed – Custom fields not saving when creating a ticket from the agent dashboard **(Pro)**

**= 1.5.3 (Date: November 22, 2021) =**– Preview text issue fixed
– Support for Non-Latin chars
– Customer Delete Feature added

**= 1.5.2 (Date: November 17, 2021) =**– File upload bug issue fixed
– Ticket priority display issue fixed fixed

**= 1.5.1 (Date: November 16, 2021) =**– Fixed  Registration shortcode

**= 1.5.0 (Date: November 16, 2021) =**– Save notifications improvement
– Enforcing hook names convention
– The final release for the public launch

**= 1.4.6 (Date: November 15, 2021) =**– UI & UX Improvements
– Added Signup and Login Form
– Fully Translation Ready

**= 1.4.2 (Date: November 14, 2021) =**– UI Improvements
– Data Syncing Issue Fixed

**= 1.4.1 (Date: November 13, 2021) =**– Remove Fluent Forms Dependencies
– Deep integration with FluentCRM
– UI Improvements

**= 1.4.0 (Date: November 12, 2021) =**– Initial Release

.kadence-column14234_37a248-18 > .kt-inside-inner-col,.kadence-column14234_37a248-18 > .kt-inside-inner-col:before{border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;}.kadence-column14234_37a248-18 > .kt-inside-inner-col{column-gap:var(--global-kb-gap-sm, 1rem);}.kadence-column14234_37a248-18 > .kt-inside-inner-col{flex-direction:column;}.kadence-column14234_37a248-18 > .kt-inside-inner-col > .aligncenter{width:100%;}.kadence-column14234_37a248-18 > .kt-inside-inner-col:before{opacity:0.3;}.kadence-column14234_37a248-18{position:relative;}@media all and (max-width: 1024px){.kadence-column14234_37a248-18 > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}@media all and (max-width: 767px){.kadence-column14234_37a248-18 > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}

---

