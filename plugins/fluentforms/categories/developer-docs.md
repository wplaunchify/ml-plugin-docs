# Developer Docs

*Category from Fluent Forms documentation*

---

## Fluent Forms Changelog

**Source:** [https://fluentforms.com/docs/changelog/](https://fluentforms.com/docs/changelog/)

**Contributors & Developers**

“Fluent Forms – Customizable Contact Forms, Survey, Quiz, & Conversational Form Builder” has been translated into 16 locales. Thank you to [the translators](https://translate.wordpress.org/projects/wp-plugins/fluentform/contributors) for their contributions.

[Translate “Fluent Forms – Customizable Contact Forms, Survey, Quiz, & Conversational Form Builder” into your language.](https://translate.wordpress.org/projects/wp-plugins/fluentform)

**Interested in development?**

[Browse the code](https://plugins.trac.wordpress.org/browser/fluentform/), check out the [SVN repository](https://plugins.svn.wordpress.org/fluentform/), or subscribe to the [development log](https://plugins.trac.wordpress.org/log/fluentform/) by [RSS](https://plugins.trac.wordpress.org/log/fluentform/?limit=100&mode=stop_on_copy&format=rss).

## Changelog

#### 6.1.21 (Date: March 17, 2026)

- Added subscription end date to auto-calculate bill_times for subscrition payments
- Hardens Stripe SCA payment confirmation endpoints against fraud and DoS
- Fixed spoofable form_id in SCA payment confirmation that could select wrong Stripe API key
- Added transaction status validation (intended state) to prevent unauthorized payment confirmations
- Added payment amount verification after Stripe confirms payment
- Fixed missing capability check on MailChimp interest groups endpoint
- Fixed unsanitized sort_by parameter in Logger and Submission queries
- Hardens payment confirmation endpoints against fraud and DoS across all gateways
- Added centralized payment validation (BaseProcessor) with transaction status, ownership, and double-pay prevention
- Added nonce verification for RazorPay, Paystack, Paddle, and Authorize.Net payment confirmations
- Added payment amount verification for RazorPay, Paystack, and Paddle gateways

#### 6.1.20 (Date: March 04, 2026)

- Fixed Stripe coupon discount rounding losing cents on multi-quantity line items
- Fixed step form save and resume

#### 6.1.19 (Date: February 25, 2026)

- Added backward-compatibility for deprecated classes

#### 6.1.18 (Date: February 25, 2026)

- Improved file delete endpoint security
- Added input sanitization to all report data endpoints
- Added sanitization to payment receipt shortcode request parameters
- Fixed SQL LIKE wildcard injection in field uniqueness validation
- Fixed mixed SQL escaping patterns in post type queries
- Strengthens output escaping in payment receipt templates.
- Tightens permissions to enforce view-only access for entry updates, partial-entry cleanup, and notification resends.
- Expands entry editor sanitization with field-aware, type-specific handling and additional hardening.

#### 6.1.17 (Date: February 3, 2026)

- Fixed conversational form subscription plan not showing in payment summary when first option is selected
- Fixed Custom JS disappearing after reload
- Fixed conversational form “Other Option” field not appearing for radio buttons using Button Style

#### 6.1.16 (Date: January 30, 2026)

- Fixed input image issue in conversational form
- Fixed form entries export issue

#### 6.1.15 (Date: January 29, 2026)

- Added default form style option which will auto apply to all new forms with form styler(pro) support
- Added dynamic autocomplete field type in dynamic field
- Added option to apply default style to imported forms
- Added prefix/suffix options for textarea, URL and password fields
- Added mobile keyboard type options for number and mask inputs
- Added verified plugins suggestions page
- Improved AI form builder security
- Improved multiselect accessibility with Choices.js dropdown
- Improved form title generation in form history
- Improved form saving UX
- Fixed repeater table generation in PDF

#### 6.1.14 (Date: January 15, 2026)

- Fixed issue with numeric field
- Added a form edit button in elementor form widget

#### 6.1.13 (Date: January 14, 2026)

- Added mobile keyboard type option for numeric and Mask Input fields
- Added ‘Inherit Theme’ option for Form Style Template in Elementor widget
- Added more string translation support for WPML
- Improved country names according to the latest ISO 3166-1 alpha-2 list
- Fixed Business Logo upload issue in payment settings
- Fixed Dynamic SmartCode not working for conversational forms

#### 6.1.12 (Date: December 26, 2025)

- Fixed delay with condition and range slider field
- Fixed top performing form report count
- Fixed Button Style “Other Option” input issue with images
- Improved security and sanitization for confirmation messages

#### 6.1.11 (Date: December 4, 2025)

- Fixed issue with saving showing invalid json
- Fixed default behavior of regex in advanced validation

#### 6.1.10 (Date: December 2, 2025)

- Fixed global settings save issue
- Support other option in Conversational Form
- Fixed form submission delay issue for a large condition set

#### 6.1.8 (Date: December 1, 2025)

- Improved client IP detection
- Improved sanitizations and security
- Added reset button to Block form style customizer

#### 6.1.7 (Date: November 21, 2025)

- Added autosave feature global settings for Form Editor
- Fixed button issue with payment shortcode
- Fixed date timezone issue with form schedule

#### 6.1.6 (Date: November 12, 2025)

- Fixed block css issue
- Fixed conversational form shortcode warnings

#### 6.1.5 (Date: November 12, 2025)

- Added Gutenberg Block Form Style Customization
- Added Conversational Form Editor shortcode support
- Added Custom CSS/JS support in form AI creation (beta)
- Added warning message for Name Attribute changes to prevent entry data loss
- Added a dropdown in permission manager selection
- Added signature field support in conversational form (For signature addon)
- Added collapsible areas (accordion & tab mode)
- Added Authorize.net payment gateway integration
- Added Net Promoter Score field support in Conversational Forms
- Added “Other” option for Checkboxes allowing users to specify custom values
- Added conditional shortcode support in Double Opt-in email subject and body
- Added filter for image upload types customization
- Updated export library to OpenSpout for better compatibility
- Updated action Scheduler library to latest version
- Improved database query performance with optimized indexes
- Improved accessibility improvements for screen readers
- Improved translations
- Improved Design Preview color handling with block themes
- Improved plugin security and escaping from plugin check suggestions
- Improved translations
- Improved accessibility with proper aria-labels for next/prev/submit buttons
- Improved Double Opt-in confirmation error handling
- Improved Dynamic field documentation for AND/OR condition clarity
- Improved Dynamic field input customization to show all post authors
- Improved CleverReach integration documentation
- Improved Save and Continue feature compatibility with Repeater Container
- Improved Mailster integration to use mailster_subscribe function
- Fixed Payment Form submission failures inside Elementor popups
- Fixed Custom style CSS backtick insertion issue
- Fixed country name from “Turkey” to “Türkiye”
- Fixed {user.meta.meta_key} shortcode for non-English languages
- Fixed Advanced Filter UX issue with persistent dialog box
- Fixed textarea line break in entry import/export
- Fixed Entries table showing option values instead of labels for radio/select fields
- Fixed Quantity field default value not working with conditional logic
- Fixed Range Slider duplication in Elementor popups
- Fixed Global Inventory module name display for single payments
- Fixed Rich Text Field mapping to ACF user fields
- Fixes payment_total showing extra digits in webhook integration
- Fixed reCaptcha V3 overlapping prev/next buttons
- Fixed JetEngine field mapping with conditional form fields
- Fixed Dropdown Field mapping with JetEngine meta fields default selection
- Fixed Country field issue with ‘Curaçao’ special character handling
- Fixed inconsistent Dropdown field search behavior with synonyms
- Fixed grammar error in Multiselect field max selection message
- Fixed form reset not clearing calculation field values
- Fixed Range Slider default value positioning in conditional containers fields
- Fixed uploaded image file renaming by custom hooks affecting featured image names
- Fixed Inventory module null quantity rendering
- Fixed Telegram message formatting spacing issues
- Fixed multiple payment_total shortcode not reflecting coupon-adjusted prices
- Fixed Phone field validation conflicts with other plugin

#### 6.1.4 (Date: September 23, 2025)

- Updated language files

#### 6.1.3 (Date: September 23, 2025)

- Fixed Elementor backend editor not working when Fluent Forms was added
- Fixed the multiple choice field not working in Elementor popup
- Fixed Report Page UI not properly showing in RTL
- Fixed Stripe payment error when global auto-load CAPTCHA is enabled in conversational forms
- Fixed the Conversational Form Phone Field to return numbers in the full International format
- Fixed Custom User Meta Fields not populating
- Fixed the phone field search input style height
- Fixed email notification triggering for empty payment method form
- Fixed the PDF Download link in confirmation message
- Fixed PHP 8 compatibility issues with Excel exports
- Fixed the range slider in conversational forms causing incorrect progress percentage

## 6.1.3 Pro (Date: September 02, 2025)

- Fixed plugin updater

## 6.1.2 (Date: August 29, 2025)

- Changed ip location service for country restriction
- Fixed subscription payment translation issue

## 6.1.0 Fluent Forms Pro (Date: 28 August, 2025)

- Added one-time use functionality to Save and Resume links
- Added more report components to the Report Page
- Added HTML5 geolocation for address field autocomplete
- Added Location latitude and longitude to shortcode list
- Improved phone field country flags responsiveness with upgraded intl-tel-input library
- Improved step form rendering
- Fixes step form flickering issue on mobile devices and empty steps
- Fixed step form conditional logic with animation type none
- Fixed Save & Resume email field duplication on Enter key press
- Fixed post creation hook issue with user registration
- Fixed Rich Text rows configuration
- Fixed conditional logic for Repeat Container fields
- Fixed Star Rating and Dropdown field value retention in resumed forms
- Fixed inventory count display discrepancy between frontend and dashboard
- Fixed range slider default values in conversational forms
- Fixed quantity mapping in range slider for conversational forms
- Fixed checkable grid validation message for current field name
- Fixed JetEngine user meta textarea field mapping
- Fixed repeat container dropdown and multi-select searchable smart option
- Fixed step form per-step field population to multiple forms for single page
- Fixed repeater container with custom HTML formatting in submissions
- Fixed dynamic field data restoration with Save and Resume
- Fixed checkable grid error with multiple spaces in row labels
- Fixed user registration with password fields containing % character
- Fixed coupon code discount minimum purchase amount calculations in payment summary
- Fixed container conditional logic in mobile preview
- Fixed Square Payment Japanese Yen (JPY) decimal handling
- Fixed inconsistent USA state population in address autocomplete and adds 
```
fluentform_googlemaps_address_parse
```

 event
- Fixed multi-select and smart search enabled select options scrolling in mobile devices
- Fixed Mollie payment status update immediately after payment

## 6.1.2 (Date: August 27, 2025)

- Fixed phone field library issue,
- Fixed repeater container condition validation issue,
- Synced offline payment email notification with payment status

## 6.1.1 Fluent Forms Free (Date: 27 August, 2025)

- Added Fluent Forms Report module
- Added conversational forms scroll to top option
- Added keyboard shortcut for delete input field in the editor
- Improved Export entries fields by remembering last selected fields
- Improved IP detection
- Improved consistency of settings deletion notifications
- Fixed form API empty title retrieval issue
- Fixed WPForm Migrator with empty forms
- Fixed radio field customization UI default value selection
- Fixed video playback in Support section
- Fixed CleanTalk/Akismet protection spam submitting forms twice
- Fixed integrations page sidebar menu selection indication on reload
- Fixed conversational forms GDPR checkbox implementation
- Fixed captcha conflict when global and form-specific settings differ
- Fixed hide after submission option setting for conversational forms
- Fixed Terms & Conditions field validation error messages for not Accepted
- Removed non-functional Reset Form button from conversational forms
- Fixed payment method ‘Test’ Instead ‘Offline’ in payments shortcode
- Fixed multiple address field autocomplete in conversational forms
- Fixed submission on Enter key press with selected radio/checkbox using keyboard
- Fixed entries chart date range filtering
- Fixed database creation errors in WordPress Studio environments
- Fixed trailing comma in keyword restriction that incorrectly blocked all submissions
- Fixed WP Text Editor sanitizer removing links in success messages with search parameters
- Fixed Object Injection Vulnerability unserialize issue when using user profile specific shortcodes
- Close button to payment summary items

## 6.0.4 (Date: May 29, 2025)

- Added submission view page for users to see their own submissions
- Added smartcode to embed submission view page link
- Added Square payment SDK locale support for multiple languages
- Added filter fluentform/double_optin_invalid_confirmation_url_message to customize double optin confirmation URL messages
- Improved step form animations for better user experience
- Improved ChatGPT integration with HTML code support and loading indicators
- Improved honeypot condition check
- Added support for WPML translation with the 
```
Multilingual Forms for Fluent Forms with WPML
```

 addon
- Fixed the net promoter score field’s zero (0) value in the visual report
- Fixed the multi-select values in the submission including commas
- Fixed tooltip/help message
- Fixed conversational form address field default value meta smart code
- Fixed conversational form section break image layout position
- Fixed email attachment missing for WordPress subdirectory
- Fixed conversational form name and address fields prefilled using URL params
- Fixed keyword-based restriction if IPInfo access key is provided
- Fixed conversational form invisible turnstile autoload
- Fixed email notification/integration sending after payment status change to paid
- Fixed turnstile with WP Rocket compatibility
- Fixed conversational form section break image layout position
- Fixed email attachment missing for WordPress subdirectory
- Fixed conversational form name and address fields prefilled using URL params
- Fixed keyword-based restriction if IPInfo access key is provided
- Fixed conversational form invisible turnstile autoload
- Fixed email notification/integration sending after payment status change to paid
- Fixed turnstile with WP Rocket compatibility
- Fixed issue where removing coupons didn’t update payment summary
- Fixed Paddle payment redirection problems
- Fixed Paddle catalog and price items update issues
- Fixed Paddle customer creation during payment
- Fixed file attachments not working in Resend Email Notifications
- Fixed 
```
fluentform_payments
```

 shortcode for subscription filtering by type/status
- Fixed simple inventory counting inaccuracies when quantity is increased
- Fixed file upload errors not clearing after subsequent uploads
- Fixed missing files in save and resume functionality
- Fixed conversational form per step data saving issues with custom HTML fields
- Fixed Weglot translation ajax issue with file upload url

## 6.0.3 (Date: April 16, 2025)

- Added filter hooks for disable captcha validation
- Added filter hooks to control response as html on checkable field
- Added filter hooks to control Mailchimp timout
- Improved rating field accessibility
- Fixed Cross-Site Scripting vulnerability CVE ID: CVE-2025-3615
- Fixed cleantalk toggle in misc settings
- Fixed analytics visual report showing empty
- Fixed aria-label separately in address field
- Fixed early textdomain loading issue,
- Fixed global inventory tracking for refunded payments,
- Fixed AffiliateWP referral amounts with applied coupons,
- Fixed step scrolling with Custom HTML fields,
- Fixed style unit values disappearing when switching unit types,
- Fixed placeholder issue for Rich Text Input

## 6.0.2 (Date: April 7, 2025)

- Fixed Stripe 3DS payment issue
- Fixed form entry delete issue

## 6.0.1 (Date: March 20, 2025)

- Fixed container conditional logic issue

## 6.0.0 (Date: March 19, 2025)

- Added Payment fields
- Added Stripe payment gateway
- Added Advanced Conditionals group for enhanced form logic
- Added Fluent Forms AI for creating AI assisted forms
- Added New Form Templates
- Improved hCaptcha settings saving method
- Improved Captchas Loading after first interactions on Popups
- Improved CleanTalk API
- Improved spam processing logs
- Fixed Stripe fields language issues
- Fixed “customer_name” issue for Stripe
- Fixed conditional {dynamic.} shortcode in Custom HTML fields
- Fixed front end facing site_url with home_url

## 5.2.12 (Date: February 18, 2025)

- Added token-based spam protection for enhanced form security
- Added Italian Translation
- Improved Honeypot Security for better bot detection
- Improved Turnstile appearance option names for clarity

## 5.2.11 (Date: February 10, 2025)

- Added CleanTalk Spam Protection with API
- Added Hungarian Language Translation
- Added options for reCaptcha V3 badge rendering
- Improved Honeypot spam protection
- Fixed WordFence vulnerability IP-Spoofing CVE-2024-13666
- Fixed fluentform/load_default_public filter not affects Block Editor

## 5.2.10 (Date: January 07, 2025)

- Fixed unsupported field disappears inside container
- Fixed names/address fields ‘0’ required validation
- Fixed custom button style reset border radius 0px

## 5.2.9 (Date: January 06, 2025)

- Added CleanTalk Spam Protection
- Added Repeater Container Field
- Added User Map Location in Submission
- Improved Step Form accessibility
- Updated Akismet option with spam submission skips integration
- Fixed WP Forms multipage form migration
- Fixed container drop inside another container
- Fixed radio selection on the entry editor
- Fixed dropdown field smart choose long options width
- Fixed ChatGPT form creation empty label and name
- Fixed taxonomy field placeholder
- Fixed radio buttons layout with smart UI
- Fixed user registration & updated with admin approval by choosing bulk action ‘mark as approved’
- Fixed user registration & update with admin approval by choosing bulk action ‘mark as approved’
- Fixed user registration payment status change manually

## 5.2.8 (Date: December 18, 2024)

- Fixed hidden field with empty value conditional logic issue in Conversational Forms
- Fixed range slider validation issue in Conversational Forms
- Improved & Fixed space issue in Checkable Grid

## 5.2.7 (Date: December 05, 2024)

- Added all forms export button
- Fixed WordFence vulnerability CVE-2024-10646
- Fixed hidden field with empty value conditional logic in Conversational Forms
- Fixed post.permalink editor shortcode link in RTL
- Fixed ff-read-only class with accessibility
- Fixed watermark inactive issue (PDF Addon)
- Fixed stop getting PDF if submission is trashed (PDF Addon)

## 5.2.6 (Date: November 19, 2024)

- Fixed radio field image issue
- Fixed conversational dynamic shortcode issue

**5.2.5 (Date: November 19, 2024)**

- Added form editor undo/redo functionality (Beta)
- Added global option to select date and time format for admin page views
- Added submission & field-specific shortcode
- Added “Go to page” feature for pagination
- Added global settings sidebar custom links sub-menu style
- Added “DELETE” input prompt on form deletion
- Added landing page share option on All Forms page
- Added hook for injecting custom payment method subscription cancellation message
- Added API log for non-async integration
- Improved Security by working with Plugin Security Certification (PSC) by CleanTalk
- Improved accessibility (focus on radio buttons,t&c text screen reader support)
- Improved translations
- Improved integrations API logs bulk replay actions functionality
- Improved submission logs API cals retry action
- Improved synchronization of “All Entries” chart with form ID and date range
- Improved initial disabling of analytics
- Improved Mailchimp date field with more format options
- Improved checkable field bulk options in the editor (supports : on value & label)
- Improved overall ui ux issues
- Improved Constant Contact to V3
- Fixed shortcode copy message showing multiple times on entry page
- Fixed screen reading issue with name fields
- Fixed mobile responsiveness of tools page sidebar navigation
- Fixed double submission when submit button is clicked twice with custom URL redirection setup
- Fixed undefined shortcode key for conditionally hidden fields
- Fixed FluentCRM dynamic tag selection based on subscriptions plan
- Fixed Visual Report filter issue
- Fixed Square live mode script
- Fixed big integer payment item price
- Fixed duplicate post created on post form with admin-approval & double opt-in
- Fixed partial entries file upload populate date
- Fixed missing paragraph on Chat GPT form generation
- Fixed Salesforce integration sandbox selection not changing
- Fixed Airtable integration long text with rich text enabled

**5.2.4 (Date: October 1, 2024)**

- Fix calculation issue

**5.2.3 (Date: September 30, 2024)**

- Added form edit history (Beta)
- Added editor keyboard navigation and shortcuts
- Added form-specific permissions in the permission manager
- Added Paddle payment method
- Added Square inline payment integration
- Added Metabox for user registration and updates
- Added dynamic default values for dynamic fields
- Improved condition change event handling
- Improved All Forms pages form ordering to retain on reload
- Improved dynamic fields CSV with a delimiter option
- Improved dynamic repeater field SmartCode
- Improved repeater field accessibility
- Fixed exposing the conversational form URL
- Fixed empty URL GET parameters in conversational form shortcodes
- Fixed all form filter selections being retained on page reload
- Fixed Next button trapping keyboard focus
- Fixed confirmation redirect URL handling for spaces
- Fixed entries export issue for forms with a large number of fields (250+ fields)
- Fixed Dynamic SmartCodes in conditional fields
- Fixed checkable field “not-equal” condition on conversation form
- Fixed exporting numeric fields to Excel
- Fixed label asterisk style with Elementor widget
- Fixed conditional logic with numeric formatting
- Fixed checkable Grid submission issue
- Fixed rich text data handling for partial entries
- Fixed issue with Zapier entry action resends
- Fixed SmartCode issue with post permalinks
- Fixed issue with TranslatePress shortcode in double opt-in confirmation messages
- Fixed validation error on single payment stockout messages
- Fixed required validation for featured images in post updates
- Fixed issue with temporary directory files not being deleted on AWS S3
- Fixed image preview style issues in 4, 5, and 6-column layouts
- Fixed radio field button type custom style

**5.2.2 (Date: September 11, 2024)**

- Update tested WordPress Version
- Fixes Gutenblock widget

**5.2.1 (Date: September 10, 2024)**

- Fixes custom error messages vulnerability (Allowing admin to inject script in custom error messages)
- Fixes dropdown field in conversational forms after conditional multi-select
- Fixes checkbox field “not-equal” condition in conversational forms

**5.2.0 (Date: Aug 7, 2024)**

- Added print entries
- Added context menu in editor
- Advanced Search Filter on Entries Page
- Dynamic Field
- Image/File Dropzone
- Save & Resume Button for logged-in users and Send Notification
- Vietnamese Language Support
- Fixed PDF feed watermarks
- Fixed inactive conversational form pretty permalink
- Fixed address field country hide label
- Fixed GDPR attribute target=_blank
- Fixed Cloudflare Turnstile multiple widget
- Fixed PHP 8.3 deprecation warning
- Fixed Inherit theme style for submit button preview
- Fixed timezone change deprecated message
- Fixed Featured Image reloading on the Post Update form
- Fixed Phone field validation for Hong Kong’s phone numbers
- Fixed Inventory Management ‘Show Available Stock’ issue
- Fixed Jet Engine checkbox meta issue
- Fixed Phone Number & Number failure on Airtable integration
- Fixed Paypal subscription pending due to EUR currency
- Fixed Payment info for Stripe embedded checkout if conditions are applied
- Fixed u_name() function is disabled on the server
- Fixed Stripe embedded checkout Link option removal
- Fixed Address single subfield GoogleMaps retrieval
- Fixed User Update repopulate meta key with subfield like Address, Name
- Fixed typo on Subscription
- Fixed Custom submit button color picker uniform design
- Fixed Quantity mapping of payment items if the label is empty
- Fixed spout package conflict on entries export
- Fixed status change of subscription from entry
- Fixed Radio button size not showing on styler
- Added ACF & Jet Engine meta on User Registration & Update
- Improved User Update
- Improved OnePageCRM integration
- Improved Quiz Setting (Delete Option)

**5.1.20 (Date: July 25, 2024)**

- Fixed vulnerability in checkboxes (CVE-2024-6518, CVE-2024-6520) reported by WordFence
- Fixed textarea fields sanitization and output vulnerability (CVE-2024-6521) reported by WordFence
- Fixed conversational form welcome field ‘description’ and ‘btn_txt’ field vulnerability (CVE-2024-6703) reported by WordFence

**5.1.19 (Date: June 15, 2024)**

- Added injectable custom Vue component on form settings and global settings
- Fixed integration update authorization vulnerability
- Fixed dynamic default values with default options
- Fixed Elementor v3.0.0 deprecated class
- Fixed phone field country container z-index
- Fixed hidden turnstile margin
- Fixed numeric-field name hyphen format

**5.1.18 (Date: May 23, 2024)**

- Added Form creation using AI (ChatGPT)
- Added submission confirmation message using AI (ChatGPT)
- Added post shortcodes
- Supports Kenyan shilling for Paystack
- Fixed unselected radio payment field validation
- Fixed repeater field data on Trello board
- Fixed cross-form captcha error

**5.1.17 (Date: May 17, 2024)**

- Improved capability check for global settings & manager settings (security issue reported by patchstack)
- Added label shortcode support in global default message
- Changed type of source_url database column from varchar to text
- Improved UX of form active/inactive loader
- Improved keyword-based restriction

**5.1.16 (Date: May 6, 2024)**

- Fixed editor vulnerability for attacker with contributor level access (WordPress version 6.4.0)
- Fixed conversational design settings sanitization & escaping
- Fixed conversational form save and resume preview form
- Fixed conversational form conditional based calculation field error

**5.1.15 (Date: April 25, 2024)**

- Fixed nested condition

**5.1.14 (Date: April 19, 2024)**

- Improved conversational form sanitization & escaping
- Fixed entry action for post feed

**5.1.13 (Date: April 18, 2024)**

- Fixed conversational form shortcode issue

**5.1.12 (Date: April 18, 2024)**

- Added “Name Field” on conversational form
- Added label shortcode
- Added JetEngine CPT compatibility
- Added conversational form “Save and Resume”
- Added entries API logs retry action
- Added CSS variable support
- Improved repeater and name field on entry update
- Improved cleverreach all scopes message check
- Improved container action UI
- Improved accessibility on repeater field
- Improved filter hook to change stripe inline custom style
- Added support for multiple emails in email routing
- Fixed mask input on elemenator popup
- Fixed coupon skip button text on conversational form
- Fixed query string email @ symbol encode on redirect URL
- Fixed redirect URL params with anchor
- Fixed checkbox and radio smart choices tab navigation
- Fixed name fields individual label placement
- Fixed checkbox & radio field issue with condition
- Fixed Hubspot checkbox on custom field
- Fixed GetResponse integration empty name
- Fixed custom mask input on repeater field
- Fixed repeat field default value on new row
- Fixed multiple choice user meta dynamic default value
- Fixed subscription user input minimum value with conditions
- Fixed empty name on stripe subscription payment
- Fixed global inventory same radio options remaining count
- Fixed inventory same label name conflict on Inventory page
- Fixed Quiz score value mapping on FluentCRM dynamic tag section
- Fixed border on custom style
- Fixed post update for current user on logout session
- Fixed html tag on Zoho CRM text area field
- Fixed checkable grid data on Trello description
- Fixed checkable grid data on Discord
- Fixed file upload on entry update
- Upgraded jquery ui widget to 1.13.2 fix vulnerability
- Removed non-essential ‘required’ attributes from Pipedrive integration

**5.1.11 (Date: February 26, 2024)**

- Fixed URL escaping bug

**5.1.10 (Date: February 26, 2024)**

- Added turnstile for conversational form
- Improved turnstile with appearance modes
- Fixed Inventory Module hiding empty stock
- Fixed url escaping issue of form redirect
- Fixed sanitization issue for html supported fields
- Fixed Entry Export with user submission IP
- Fixed PDF feed watermark image
- Fixed Name Field aria-required attribute
- Fixed PDF Feeds on duplicate form
- Fixed Numeric min max Field Bug

**5.1.9 (Date: January 19, 2024)**

- Update Custom html field sanitization
- Improves server side conditional settings validation

**5.1.8 (Date: January 19, 2024)**

- Fix step navigation button issue
- Improves sanitization on form import

**5.1.7 (Date: January 17, 2024)**

- Adds Contact Form 7 Migration
- Added Global Inventory
- Added Import Entries
- Added Admin Approval
- Adds Inherit theme style support in form Styler
- Adds Form Title smart code on confirmation
- Adds more translations string
- Adds Filter to skip validation of selectable inputs
- Improves Admin Mobile responsiveness
- Improved Address Field Sub Field Label Placement
- Improve Custom Styler
- Fixed background color not showing on landing preview page
- Fixed quiz field condition on the conditional confirmation
- Fixed Conversational form Custom HTML automatically scrolls to bottom of page
- Fixed range slider default value with required option
- Fixed multiple subscription plan minimum value
- Fixed showing trashed entries on Survey Result
- Fixed airtable phone field validation
- Fixed subscription plan custom input min value
- Fixed predefined form filter issue on form creation
- Fixed CC/BCC email on Email Notification Routing
- Fixed hidden field mapping on integration
- Fix Sync visual report order with form fields order
- Fixed nested conditional field

**5.1.5 (Date: November 23, 2023)**

- Fixes max length validation
- Improves options validation
- Improves date validation
- Improves conditional logics

**5.1.4 (Date: November 22, 2023)**

- Fixes advanced country list issue

**5.1.3 (Date: November 22, 2023)**

- Adds support ACF field on Post revision & ACF rich-text value on Post Update Form
- Improves Gravity Forms migration entries by status
- Improves WP Forms migration fetch webhook feed
- Improves AirTable integration
- Fixes null value on mapping Post create feed
- Fixes inventory quantity field issue
- Fixes range slider required field value on render
- Fixes temp attachment files deletion
- Fixes checkable grid and repeater field data format on webhook
- Fixes Google address autocomplete on elementor popup

**5.1.0 (Date: November 1, 2023)**

- Adds Global Search
- Adds Global Default Validation Messages
- Adds support for Fluent Booking in Conversational Form
- Adds theme style inherit option.
- Adds Form submission restriction based on Keyword
- Adds a refresh button on form entries
- Improves WPForms and Gravity Forms migration support for conditional logic mapping
- Fixes URL cut-off on the Entries page
- Fixes pagination in Forms and Entries pages
- Fixes attachment preview in email notification
- Fixes multiple numeric calculations in conversational forms
- Removes total views from exported forms
- added esc_* for dynamic properties

**5.0.12 (Date: October 19, 2023)**

- Fixes theme selection bug

**5.0.10 (Date: October 18, 2023)**

- Adds form preview in Gutenberg block
- Adds form theme change support in Gutenberg block
- Adds theme style inherit option
- Fixed Form finder

**5.0.9 (Date: September 8, 2023)**

- In active form submission prevented
- Fixed compact mode entries view

**5.0.8 (Date: August 24, 2023)**

- Adds address field in conversational form with Google Map Support
- Adds entries sort by column
- Fixes integration other’s field add or remove behaviour
- Fixes {all_data} and {all_data_without_hidden_fields} shortcode using together
- Fixes global enabled captcha issue in conversational Form
- Fixes form title update
- Fixes Slack integration toggle
- Fixes forms submission next & preview order

**5.0.7 (Date: July 18, 2023)**

– Fixes LiteSpeed caching issue
– Fixes dynamic shortcode bug
– Fixes style issues
– Fixes PDF issue for the checkbox field
– Fixes post update issue for block themes
– Fixes conditional issues for payment items
– Fixes Double Opt-In save issue
– Fixes entry export filter issue
– Improves email on iOS devices

**5.0.5 (Date: June 28, 2023)**

– Fixed Form Editor Update Error due to Old API

**= 5.0.4 (Date: June 28, 2023) =** – Styling Improvement for Gutenberg Editor
 – Fixed ModSec issues for Form Builder & Settings Update
 – Fixed Compatibility Issue with WP Fusion

**= 5.0.3 (Date: Jun 26, 2023) =** – Form Restrictions check improved
 – Email Notification improved
 – Visual Reporting issues fixed
 – Fixed issues with the REST API endpoints
 – Fixed Compatibility issue with Caching Plugins and Few other servers
 – Styling issues fixed
 – Deprecated hooks notices fixed
 – Litespeed cache compatibility issue fixed

**= 5.0.1 (DATE: JUNE 22, 2023) =**
– Hotfix: custom Editor shortcode compatibility issue fixed

**= 5.0.0 (DATE: JUNE 22, 2023) =**
– Revamped UI and better UX
– Global Styler Improvement
– The new framework for faster response
– Fixed issue with repeater field not appearing correctly on PDF
– Fixed issue with WPForm Migrator not properly transferring text fields to 
– Text input fields with correct maximum text length
– Fixed issue with entry migration
– Fixed number format in PDF files
– Fixed radio field label issue
– Updated Ajax routes to Rest Routes
– Updated filter & action hooks naming convention with older hooks support
– Updated translation strings
– Stripe Keys are now encrypted and more secured
– Security Enhanchement with Framework upgrade

**= 4.3.25 (DATE: MARCH 15, 2023) =**
– Fixes aria-label issue
– Fixes iframe tag issue
– Security: SQL orderby issues fixed

**= 4.3.24 (DATE: FEBRUARY 03, 2023)** **=**
– Fixes Accessibility CSS issue

**=** **4.3.23 (DATE: FEBRUARY 02, 2023)** **=**
– Adds Landing Page Layout Design & Shadow Configurator
– Adds Copy Button & Email option for Save & Resume Form Link
– Adds Clickable Form Step
– Improve Razorpay Modal (color config)
– Updated File Upload Library
– Fixes Inventory Issues with Conversational Form
– Fixes Buddyboss username issue
– Fixes Airtable br tag issue for textarea field
– Fixes Twillo SMS Format
– Fixes Translation Issue For File Upload
– Fixes Google Sheet & Excel Export Format Issue for Repeater Field
– Fixes Excel and CSV Format Issue for Checkable Grid
– Fixes Payment Info on {all.data} shortcode when Product display type is set as Checkbox
– Fixes Resume Step Form Multiple Choice Field Issue
– Fixes Address Field’s Country List Mapping with FluentCRM
– Fixes User Registration Integration’s username issues in URL Slug
– Fixes Post Update Field’s Placeholder
– Fixes Range Slider Field’s Required Option
– Fixes Tags and Lists webhook to work with FluentCRM
– Fixes Mailjet Custom Field
– Fixes Post Update Field’s Conditional Logic Issue
– Fixes Country restriction in google address auto complete
– Adds WPForms Form & Entry Migrator
– Adds Form shortcode page finder
– Improves Form Accessibility
– Fixes Mp3 File issue in Conversational Form
– Fixes Oxygen Builder Popup Form
– Fixes Elementor v3.9.1 popup issue
– Fixes Migration Issue of Gravity Form
– Fixes Numeric Field US format Negative value
– Fixes URL validation for Conversational Form
– Fixes Asterisk Position for Conversational Forms
– Fixes Conditional Shortcode contains ‘&’ character
– Fixes Conversational Form Duplicated Form’s Design Issue
– Fixes Conditional Logic Empty Ruleset for Conversational Form
– Fixes Text Input field’s Max Text Length for Conversational Form
– Fixes Conditional Logic with Calculation for Conversational Form
– Fixes Conditional Logic Enabled Icon on Conversational Form Fields
– Fixes Payment Quantity Field issue on Conversational Form Editor
– Fixes Error Message instant Trigger For Numeric Field on Conversational Form

= **4.3.22 (Date: November 11, 2022)** =
– Adds Conversational form to Regular form converter
– Fixes conditional field for EU number style
– Fixes rating field for conditional
– Fixes file upload preview

**= 4.3.21 (Date: October 27, 2022) =**
– Adds Ninja Forms entry migrator
– Adds Gravity Forms entry migrator
– Adds Birthday field support on Mailchimp
– Improves Sanitization
– Improves Conversational Forms responsiveness
– Improves UX

**= 4.3.20 (Date: October 22, 2022) =**
– Fixes Date/Time field config bug

**= 4.3.18 (Date: October 19, 2022) =**
– Improves Turnstile
– Fixes condition checker nullable bug
– Fixes ZohoCRM tags support **(Pro)**
– Fixes Multi-Select upgrade bug

**= 4.3.17 (Date: October 18, 2022) =**
– Adds GDPR field in Conversational Form
– Fixes Email Feed duplicate bug
– Fixes Custom Button style in Containers
– Adds HubSpot error handler **(Pro)**
– Fixes Custom Button style in Step Form
– Improves Multi-Select field
– Improves Conversational Form calculation

**= 4.3.16 (Date: October 16, 2022) =**
– Adds footer text customization for Slack
– Improves Custom Button styles
– Fixes conditional field rendering

**= 4.3.15 (Date: October 10, 2022) =**
– Fixes conditional support

**= 4.3.14 (Date: October 08, 2022) =**
– Fixes calculation module

**= 4.3.13 (Date: October 07, 2022) =**
– Adds Cloudflare Turnstile
– Adds full admin side translations
– Improves entry page styles
– Improves label placement settings
– Improves Slack integration for Checkable Grid **(Pro)**
– Improves Password truncate module **(Pro)**
– Improves AJAX calls
– Fixes CSV export issue **(Pro)**
– Fixes multiple success message issue
– Fixes conditional logics for Containers **(Pro)**
– Fixes long file names issue for file upload **(Pro)**

**= 4.3.12 (Date: September 01, 2022) =**
– Adds manual control for Container width
– Improves PHP 8 compatibility
– Improves translation for reciept page **(Pro)**
– Fixes Resend email notification custom recipient bug **(Pro)**
– Fixes BuddyBoss nickname issue **(Pro)**
– Improves field deletion UX
– Improves Conversational Forms Captcha
– Fixes Zoho CRM: Customized Lead Status Issue **(Pro)**
– Fixes Step Form previous session bug **(Pro)**
– Fixes popup issue for Elementor with conversational form **(Pro)**
– Fixes user update password issue **(Pro)**
– Fixes Global Default settings not being applied
– Fixes form submission search for accented characters
– Fixes Rich Text input not working in modal **(Pro)**
– Fixes Captcha Label placement
– Fixes image upload button issue **(Pro)**
– Fixes Conversational form Phone field country code issue **(Pro)**
– Fixes Conversational form payment bug **(Pro)**
– Fixes iPhone image upload issue conversational form **(Pro)**
– Fixes http_referer shortcode
– Fixes pending payment entry count of additional shortcode **(Pro)**
– Fixes URL field issue
– Fixes Rating field option editing bug **(Pro)**– Fixes additional shortcode Entry Count
– Fixes Quiz field randomize issue **(Pro)**
– Fixes Conversational form auto validation message issue
– Fixes Step form issue with submit button **(Pro)**
– Fixes Conversational form long “Custom HTML Field” issue

**= 4.3.10 (Date: AUGUST 04, 2022) =**
– Adds Forms type filter
– Improves data sanitization
– Adds Save & Resume form submission **(Pro)**
– Adds Rich Text Input **(Pro)**
– Adds Insightly Integration **(Pro)**
– Adds Mailster Integration **(Pro)**
– Adds Airtable Multiple table connection **(Pro)**
– Adds email notification for Pending Payment **(Pro)**
– Improves Quiz Module **(Pro)**
– Improves Post Update with ACF**(Pro)**
– Improves User Update with meta fields **(Pro)**
– Improves failed integration notification email **(Pro)**
– Fixes Signature field placement issue **(Pro)**
– Fixes HubSpot API update issue**(Pro)**
– Improves email summary
– Improves Resizeable Container
– Fixes Conversational Form issue with Elementor popup
– Fixe User Registration password reset email issue**(Pro)**
– Fixes Step form data save issue with Checkable Grid field **(Pro)**
– Fixes Coupon Code issue **(Pro)**
– Fixes ACF image upload with media upload **(Pro)**
– Fixes Constant Contact Issue **(Pro)**
– Fixes br tag issue in Twilio **(Pro)**

**= 4.3.9 (Date: JULY 04, 2022) =**
– Adds Resizeable Container Width
– Adds hCaptcha in conversational form
– Improves Regex pattern Condition
– Adds User Profile Update with Fluent Forms **(Pro)**
– Adds Partial Entry bulk delete **(Pro)**
– Fixes confirmation message responsive issue
– Fixes conditional logic empty issue
– Fixes form duplicate issue
– Fixes auto captcha option issue with Custom Submit Button
– Fixes tooltip issue
– Fixes Range Slider broken issue for multiple uses on the same page **(Pro)**

**= 4.3.8 (Date: JUNE 02, 2022) =**
– Adds Oxygen 4.0 support
– New: Mailjet Integration (Pro)
– Adds auto include CAPTCHA support
– Fixes footer credit HTML tag issue
– Fixes Post update taxonomy issue
– Fixes Pipedrive custom field issue
– Fixes zero custom payment issue

**= 4.3.7 (Date: MAY 20, 2022) =**
– Fixes error notice display issue
– Fixes file location settings issue (Pro)
– Fixes smart dropdown style issue

**= 4.3.6 (Date: MAY 19, 2022) =**
– Adds public PDF downloadable option
– Improves Slack integration (Pro)
– Fixes Caldera migrator
– Fixes CSS issue for multiple-choice field options
– Fixes email footer HTML issue
– Fixes Numeric field formatting issue

**= 4.3.5 (Date: APR 22, 2022) =**
– Adds CLI support 
– Adds Oxygen builder native widget support 
– Adds support for programmatically form rendering 
– Adds digits validation for a numeric field 
– Adds mechanism for adding custom validation rules 
– Adds {all_data_without_hidden_fields} shortcode
– Improves payment status translations 
– Improves deactivated form styles 
– Fixes help message tooltip position issue 
– Fixes tooltip behavior in Elementor Popup 
– Fixes reCAPTCHA v3 issue in Elementor Popup 
– Fixes entries table style 
– Fixes dropdown open style issue 
– Fixes Elementor widget issue

**= 4.3.4 (Date: MAR 21, 2022) =**
– Adds Quiz module (Pro)
– Adds amoCRM integration (Pro)
– Adds OnePageCRM integration (Pro)
– Adds Pipedrive integration (Pro)
– Adds phone number support for ZohoCRM (Pro)
– Adds other data center support for ZohoCRM (Pro)
– Adds email notification support for failed integrations (Pro)
– Adds resubscribe option for MailerLite (Pro)
– Adds dynamic default value for payment item (Pro)
– Adds support for programmatically license management (Pro)
– Adds smart search for the chained select field (Pro)
– Improves payment item display for radio fields (Pro)
– Fixes payment item value zero issues (Pro)
– Fixes payment method selection issue (Pro)
– Fixes Stripe donation issue (Pro)

**= 4.3.4 (Date: MAR 18, 2022) =**
– Adds configuragion option for email summary subject
– Adds RTL support for backend
– Adds Datepicker field language support
– Adds integration search option on form settings
– Adds elementor popup support for Conversation Forms
– Adds quick form deactivation toggle option
– Adds Timezone preset for Dropdown field
– Improves calculation module
– Improves chained select CSV upload
– Improves conditional rendering module
– Improves Select field data rendering
– Improves entry user update module
– Fixes US style numerical value calculation
– Fixes shareable link bug
– Fixes mask field bug

**= 4.3.3 (Date: FEB 25, 2022) =**
– Fixes multiple calculated custom payment issue

**= 4.3.2 (Date: FEB 24, 2022) =**
– Adds address field inputs reordering option
– Adds reCAPTCHA to Conversational Forms
– Adds line break support for textarea field
– Adds warning modal for Conversational Forms conversion
– Fixes empty input in all_data filter issue
– Fixes range slider field reset issue
– Fixes calculation field initial state issue
– Fixes file upload issue in PHP@8.1
– Fixes country list issue in address field

**= 4.3.1 (Date: FEB 14, 2022) =**
– Adds AffiliateWP integration (Pro)
– Adds Zoho CRM integration (Pro)
– Adds ClickSend integration (Pro)
– Adds CleverReach integration (Pro)
– Adds Phone Number validation message configuration (Pro)
– Adds conditional block support in PDF Feed
– Fixes payment hooks for FluentCRM
– Fixes custom payment issue for one time billing
– Fixes Phone Field country settings (Pro)
– Fixes Range Slider width
– Fixes Stripe Subscription meta data
– Fixes Stripe Inline customer information
– Fixes Checkable Grid stat in Entries’ Visual Data Report
– Fixes payment issue in Elementor Popup
– Fixes PayPal empty cart issue
– Fixes Salesflare custom fields issue (Pro)
– Improves partial entry sorting

**= 4.3.0 (Date: JAN 18, 2022) =**
* New: Other form plugins migrator
* New: hCaptcha field
* New: Discord & Salesflare integration (Pro)
* New: Payment features and File/Image upload field in Conversational Forms (Pro)
* Malicious attack prevention mechanism
* Support for advanced date configuration in Conversational Forms
* Placeholder settings input for Conversational Forms
* Advanced configuration of country field for Conversational forms
* Validation rule message settings for Email and URL fields
* Fixed PDF Feed issue on form duplication
* Fixed url validation regex
* Fixed Gutenberg block css class issue
* Fixed Gutenberg block shortcode issue for Conversational Forms
* Fixed PHP 8 warning issue
* Improves backend translations
* Removes file & images link from parser when auto delete enabled
* Improves Helper Shortcode for submission count of payments
* Improves Step forms for Autoslider with HTML input

**= 4.2.1 (Date: SEP 01, 2021) =**
– Improvements on Conversational Forms
– RTL Improvements
– UI Improvements
– New developer APIs
– Performance improvements for form submissions

**= 4.2.0 (Date: SEP 1, 2021) =**
* Autocomplete with Google Maps
* New Payment Gateway (Paystack)
* On-site payment visa Stripe without redirection
* Subscription payment option
* New “Connect to Stripe”button (no API key needed)
* Modal Checkout for Razorpay
* Calculate values with Repeater Field
* Filterable API Logs
* Payment Pages & Subscription Management

**= 4.1.5 (Date: JUL 13, 2021) =**
– Improvements on Conversational Forms
– Help Message positioning
– Predefined Data Set for Checkable Input Fields
– Raw HTML Email Templates
– Regex on conditional Logic
– Other Improvements

**= 4.1.0 (Date: JUN 30, 2021) =**
* New Payment Methods – RazorPay and Mollie
* Improvements on Conversational Forms
* MetaBox Plugin integration
* Sharable Landing Page
* Introducing ReCaptcha V3
* Elementor Integration Widget Improvements
* Other Improvements

**= 4.0.0 (Date: JUN 08, 2021) =**
 – Introducing Converstional Forms
 – Customizing Form Layout
 – Overall Form Design 
 – Social Sharing Meta for Landing page
 – Form Sharing(Even in Another Site)
 – PHP API(New)
 – Other Improvements
 – Payment Modules Improvement
 – PHP 8.0 Support
 – Various Integration Improvement
 – Custom Submit Button
 – UI & UX Improvement

**= 3.6.74 (Date: MAY 27, 2021) =**
– Hot Fix: Form hide issue fixed after submission
– A big update is coming soon

**= 3.6.72 (Date: MAY 22, 2021) =**
– Fixes Sanitize Data and Escaping on render for custom CSS and JS
– Sub-Page Slug URL escaping issue fixed
– Mailchimp Data Sanitization Fixed
– Includes Licenses txt files
– Fix smart filter UI saving
– Added Column Re-order and show and hide data for form entries
– Added ReSubscribe option for Mailchimp

**= 3.6.70 (Date: MAR 09, 2021) =**
– Fix Form Scheduling
– Fix Preview Page Slug

**= 3.6.68 (Date: MAR 06, 2021) =**
 – PHP 8 deprecated issue fixed
 – Export and Import Form/Entries Nonce issue fixed
 – Add Date range selection on entries chart

**= 3.6.67 (Date: MAR 05, 2021) =**
 – Refactored VueJS build system, Form editor is now 40% faster.
 – Nonce check issue fixed on admin ajax
 – Coupon issue fixed
 – Added Hooks for Smart Codes
 – Added Week-days to Date Field
 – PHP 8 compatibility issue fixed

**= 3.6.65 (Date: FEB 09, 2021) =**
 – Payment Coupon: Add coupon field to your payment form
 – Add Multiple Stripe and PayPal account to Form level
 – Telegram Messenger feed added
 – Randomize /Shuffle checkable options
 – PHP 8.0 support – Fluent Forms is not 100% compatible with PHP8
 – Limit how many option a user can select for a select field.
 – UI improvements
 – Elementor Widget improvement
 – Better CSS loading time
 – FluentSMTP support
 – Replace icon fonts with SVG

**= 3.6.62 (Date: DEC 20, 2020) =**
 – New: Added Post/CPT selection
 – Payment Integration Improvement
 – Step Form Improvement
 – SendInBlue improvement
 – Database Improvement
 – Smartcode improvement
 – UI Improvement

**= 3.6.61 (Date: DEC 01, 2020) =**
* New: Ability to delete old entries
* Calculation Performance boost
* Live calculation value update on the slider element
* Form Builder screen improvement
* Smartcode parser improvement
* Non-ASCI chars handling when redirecting fix

**= 3.6.60 (Date: Nov 23, 2020) =**
* NEW: Built-in Double Optin Confirmation (Bye Bye Spams)
* NEW: Replay to any integration feeds manually
* New: BuddyBoss integration
* New: Number formats on the fly for numeric fields
* New: Import Global Styles from another form
* New: Dynamic Input Values as Label HTML (Live Update)
* New: Inline Conditional Tags on CRM integration Feeds
* Improvement: Oxygen Builder & ACF Integration
* File Upload and Step Form improvements
* Many other small bug fixes and improvements
* Overall UI/UX improvement

**= 3.6.51 (Date: AUG 24, 2020) =**
– UI/UX improvement
– Conditional Logic Improvement
– Added Advanced Conditions
– Plain Text Email issue fixed
– Elementor Popup integration issue fixed
– Email Notification issue fixed

**= 3.6.42 (Date: JUL 28, 2020) =**
– Email sending issue has been fixed
– Input background issue has been fixed
– Cleaner All entries chart

**= 3.6.41 (Date: JUL 27, 2020) =**
* New Integration – automizy
* Conditional Text Blocks for Email/Success Message
* Conditional Email Routing based on input values
* Validate Uniqueness for Text Input values
* See more details for API calls and retry if not success
* MailerLite issue fixed
* Translation Issue fix
* Partial entries issue fixed
* Twillio SMS issue fix
* Replaced select2 with choices.JS library (cool)
* Enable Search option for single select options
* Reset selects after form submission bug fix
* Popup issue fix for Elementor
* Added new tooltip style for better visibility
* Translation loading issue fixed
* Slack Notification issue has been fixed
* Internal Improvements and Performance increase

**= 3.6.31 (Date: JUL 3, 2020) =**
* Conditional Logic improvement (Now you can add Conditional Logic to Containers)
* Query String php notice fixed
* wp_date() support for older versions
* Added “Mark as Favorite” in the entry details page
* Email Summary Error Issue fixed
* Taxonomies issue has been fixed for container fields
* File Upload for drag and drop issue fixed
* Dutch translation has been added
* RTL support has been added for some elements

**= 3.6.22 (Date: JUN 19, 2020) =**
* Brand new UI for Form Builder
* Introducing Partial Entries for Step Forms
* Advanced ACF Fields Support for Post Creation Feed
* Additional Regional Payment Methods for Stripe
* Introducing Weekly Email Summary for all of your forms
* See All the Entries aggregated from all the forms
* Better Oxygen Page Builder Support
* Advanced Form Validation (Less Spam)
* Introducing Elementor widget
* Added German Language File
* Mobile-friendly Admin Panel
* Conditional logic issues for “less than” and “less than equal”
* Added priority-based country selection
* Added Kosovo to the country list
* Elementor and Oxygen popup issues for step forms
* Option to position input labels below the fields
* Added layout option to make Radio/Checkbox as Button Selection style
* Passwords will be now truncated after feeds and API calls completed
* Added conditional source support for Hidden Fields
* Many Bug fixes and added improvements

**= 3.6.0 (Date: JUN 18, 2020) =**
– Brand new UI for Form Builder
– Introducing Weekly Email Summary for all of your forms
– See All the Entries aggregated from all the forms
– Better Oxygen Page Builder Support
– Advanced Form Validation (Less Spam)
– Introducing Elementor widget
– Added German Language File
– Mobile-friendly Admin Panel
– Conditional logic issues for “less than” and “less than equal”
– Added priority-based country selection
– Added Kosovo to the country list
– Elementor and Oxygen popup issues for step forms
– Option to position input labels below the fields
– Added layout option to make Radio/Checkbox as Button Selection style
– Passwords will be now truncated after feeds and API calls completed
– Added conditional source support for Hidden Fields

**= 3.5.6 (Date: APR 29, 2020) =**
* BIG: PDF module has been added, Now you can send PDF via email or download
* BIG: Added Payment Summary Field
* Added *Not Contains* conditional Logic
* Field Improvements, Now you can use repeater field for calculations
* Auto Delete Files on Submission entry delete
* Integration Upgrades, Now yoy can see all the integration calls and responses
* Lots of improvement under the hood
* More than 150+ human hours + 50+ coffees (sorry, we lost count)

**= 3.5.5 (Date: APR 17, 2020) =**
* BIG: Show payment summary as dynamic cart
* BIG: Added Dynamic input values in the form steps
* Conditional Logic on Payment Method Bug fix
* Refactored Frontend Javascript, For a basic form, it will load only 12KB JS
* 3rd Party Integrations Bug fix
* + Awesome goodies under the hood!

**= 3.5.4 (Date: APR 09, 2020) =**
* Quantity Bug Fix for Payments
* Added Color Input Field
* Refactored Conditional Logics JS
* Form Builder Improvement

**= 3.5.3 (Date: APR 03, 2020) =**
– Conditional Logic improvement
– T&C and GDPR UI improvement
– Submission JS improvement

**= 3.5.1 (Date: APR 02, 2020) =**
* PayPal Sandbox issue fixed
* Payment Calculation Bug Fix

**= 3.5.0 (Date: MAR 30, 2020) =**
* Payment Features added
* Stripe Payment Method
* PayPal Payment method
* Payment and Donation Management
* CRM Integration – Drip
* Editor Improvement
* MailChimp tags update issue fixed
* Internal Architecture Improvement
* Akismet Integration
* CleanTalk Integration Bug Fix
* Other bug fixes and improvements

**= 3.2.3 (Date: FEB 29, 2020) =**
* Added Landing Page Feature for Forms
* Step Form improvement
* Google Sheet Integration Improvement
* User Signup role selection fixed
* Post Submission Meta Fixed
* Added round() function to calculations and other improvement
* Other improvement

**= 3.2.1 (Date: FEB 15, 2020) =**
* Chained select upload issue fixed
* Form Calculation issue fixed
* It’s a very minor update so no new features (sorry)

**= 3.2.0 (Date: FEB 10, 2020) =**
* New integration Trello
* User Registration Module on form submission
* Post/CPT Creation on Form Submission
* New CRM Integration: Sendinblue
* New Field: Chained Select
* Add Unique feature to Email Field
* Prefix and SUffix feature in numeric field
* Added options to add container class
* Resend Email Notifications
* Overall performance imrovement
* Editor and Form rendering improvement
* Constant Contact version change to v2

**= 3.1.5 (Date: DEC 31, 2019) =**
* Advanced Form Styler
* Graphics enabled radio/select fields (Yes! You can add photo to a check option now)
* Advanced Polls/Survey Fields and Reporting
* Advanced Calculation for checkable fields
* New Field: Net Promoter Score
* New CRM Integration: Platform.ly
* Interest Group Field added to MailChimp integration
* Added Media uploader to HTML fields
* Several Typo Fix
* Reset Form Analytics
* Ability to send email as Plain Text
* Improve Email Delivery process
* Date-Time Field improvement
* Form init Javascript Refactored
* File Upload button UI improvement
* Sorting issue fixed from checkable options
* Improved form validation message for checkable fields
* +28 issues have been resolved in this release
* Total ~180 commits submitted to git (in this version alone)

**= 3.1.1 (Date: DEC 04, 2019) =**
* Security update for jQuery File upload Library

**= 3.1.0 (Date: NOV 19, 2019) =**
* Added Google Sheet integration
* Added Custom submit button for inline forms
* Added Slider input type
* Added Gutenberg block
* Added native form widget for sidebars and widget arias
* Added advanced options to date input
* Added step attribute to numeric field
* Fix form permission and role issue
* CSV/Excel export issue fixed
* File attachment list view improved
* Added hidden fields to conditional logics
* Fix submission error handler
* Added global activity logs
* Improved Form Editor UX
* Added success message for redirect type confirmations
* Integration improvements
* Internal improvements

**= 3.0.8 (Date: NOV 06, 2019) =**
* Form PopUp shortcode added
* Empty form submission issue resolved
* Admin UI improvement
* File Upload issue resolved
* Added extra css class to containers.
* Fix ‘ and ” in value issue
* Editor Improvement
* Added more hooks for developers.
* Elementor Pro Popup issue fix for reCaptcha

**= 3.0.6 (Date: NOV 03, 2019) =**
* Email sending issue fix
* ActiveCamapign Integration fix and form attachment added.
* Added input field’s tabindex
* MooSend Integration Fix
* Conditional Logics improvements.
* Dynamic Error Message fix.
* Elementor PopUp Compatability
* Compliance Settings improvement
* Section Break alignment fix.
* JS Duplicate event fix.
* Export-Import Forms fix.
* Use WP timestamp as a default
* Checkbox value parse fix.
* Help messages added to name fields

**= 3.0.5 (Date: OCT 20, 2019) =**
* Email sending improvement
* Step Text improvement and Translatable
* Added HIPPA & GDPR Compliance option for deleting entries on form submission
* Added User meta as default value
* Fixed element attributes special chars
* Added RTL support
* Fix submit button styling issue.
* Fix Multi-site Update Issue
* Internal Improvements
* Shortcode Parser Improvements
* Improve Default values
* Added More hooks for developers
* Ability to hide name field’s label

**= 3.0.3 (Date: OCT 16, 2019) =**
* Email sending bug fix
* Typo fix
* Added Submission Properties to Smart Codes
* Added symetric html to file upload
* Add option to hide labels
* Multsite installation fix
* Honeypot added
* Webhook integration improvemt
* Added GIST integration

**= 3.0.0 (Date: OCT 13, 2019) =**
* All new form editor screen with simple, powerful and clean interface
* Built-in Data analysis tool for form submissions.
* Email bug fix
* Added new db table for advanced reporting
* Submit button styling and customization option
* Improved form security
* Form Preview re-engineered now. In any theme, it will work fine.
* Exporting data issue fixed
* Entry status management improvement
* File upload issue fixed
* Lots of integration added
* Global Integration and Module manager.

**= 2.8.0 (Date: APR 10, 2019) =**
– Improved Integrations
– Improved File upload features

**= 2.7.0 (Date: JUN 28, 2018 ) =**
– Added Lots of Integrations
– Added New Form Fields

**= 2.0.1 (Date: JUN 01, 2019) =**
– Added lots of UI improvement
– Added option to add custom css and JS
– Added response filter options
– Added an option to export data
– Added Dashboard widget for a quick look
– Fixed for some form fields

**= 1.8.0 (Date: APR 10, 2019) =**
– Fix conditional logic for multiple dropdown fields
– Added clean, responsive html email templates
– Improved integrations
– Added few filter and action hooks for developers.
– Improved backend performance
– Added pre-written email on default forms.

**= 1.7.5 (Date: NOV 19, 2018) =**
– Small Fixes for COnditional Logic
– Added option to give access of Fluent Forms to other user roles
– Fixed editor Sidebar Elements disorder
– Added More hooks for developers

**= 1.7.4 (Date: OCT 31, 2018) =**
– Fix for some theme compitability
– CSS fix for rating field
– Minor fix for CSV export for contact forms

**= 1.7.3 (Date: OCT 27, 2018) =**
– Conditional Logic Bug fix for Internet Explorer
– CSS fix for other browsers

**= 1.7.2 (Date: OCT 20, 2018) =**
– Minor Bug Fixes
– Change Form Submission Process, Now the form submission process is more faster

**= 1.7.0 (Date: OCT 11, 2018) =**
– Added Lots of New features
– Added Brand New Fields
– Improved Performance by around 50%
– Added Integration Bugs
– Conditional Fields have more options

**= 1.6.0 (Date: JUN 28, 2018) =**
– Added More Integrations
– Added Rating fields
– Improved Export Entries
– Added GDPR Compliance

**= 1.5.3 (Date: APR 30, 2018) =**
– Improved Conditional Logics
– Fixed Builder Drag and Drop Bug

**= 1.5.2 (Date: APR 24, 2018) =**
– Support for php 5.4

**= 1.5.1 (Date: APR 20, 2018) =**
– Fixed Admin Screen bug fix for special directory names for some servers

**= 1.5.0 (Date: APR 19, 2018) =**
– Added Mask Input Field
– Added Submit Button Customization
– Added Dynamic Default Value from $_GET Parameter
– Added + icon on Form Editor for faster Form Create and Edit
– Placement of Required Items *
– Added Ratings component
– Added dynamic fields on Redirects

**= 1.4.3 (Date: MAR 24, 2018) =**
– Added Name Input Field transformer
– Make the input fields settings more User Friendly
– Added Admin Label for all the elements
– Fix Recaptcha on Form Submission
– Restricts special chars on name attributes
– Terms and Condition field bug fix
– By default showing the entries latest first
– Added compact mode on all entries page

**= 1.4.0 (Date: MAR 19, 2018) =**
– Whole New Form Builder Editor
– Improved the overall performance
– Added More Input Fields
– Reviewing form entries is more easy by going next and previous.
– Added capability to add custom fields for 3rd party developers.

**= 1.3.4 (Date: FEB 20, 2018) =**
– Fixed conflict with Jetpack
– Added loading at form submission.
– Improved entry view

**= 1.3.0 (Date: FEB 17, 2018) =**
– Refactoring Form Builder for better performance
– Added Image as Submit Button on form
– Fixed conflict with Jetpack
– 20% performance increase at backend

**= 1.2.5 =**
– Google Recaptcha iOS UX Improvement ( Thanks to Antonio Lucio )
– Unread Entries Navigation Improvement

**= 1.2.4 =**
– Fixed Google Recaptca Conflict with Contact form 7
– Form Builder Fixed for Safari

**= 1.2.3 =**
– Fixed Google Recaptca
– Added Next and Previous Button on Form Entry
– Simple Hidden Fields Editor

**= 1.1.3 =**
– Added More fields
– Added more Field Customization options
– Fixed select and radio fields
– Mailchimp double opt-in support

**= 1.1.3 =**
– Fixed Mailchimp List Selection

**= 1.1.2 =**
– Fixed Mailchimp Double Opt-In issue

**= 1.1.0 =**
– Added Mailchimp Integration
– Added Slack Integration
– Added Label positioning for each form element
– Added Country Field
– Improvements of Conditional Logic rendering
– Lots of Improvement in Form Builder

**= 1.0.0 =**
– Init the most Advanced form builder plugin

---

## How to create your own custom field with Fluent Forms

**Source:** [https://fluentforms.com/docs/how-to-create-your-own-custom-field-with-fluent-forms/](https://fluentforms.com/docs/how-to-create-your-own-custom-field-with-fluent-forms/)

## Introduction

The goal of this article is to help you become familiar with easily creating custom input fields using fluentforms.. We will create new input field using the [BaseFieldManager](https://fluentforms.com/docs/basefieldmanager-class/) class. In this example we will see how we can leverage other prebuilt classes available in fluent forms and how to create custom UI settings for a  input. This field will work as a confirmation field such as password, email or other text confirmation field. User will set target input and the input will validate according to the target input value.

## ConfirmField Class

First let us create a class **ConfirmField** which will be an extended class of BaseFieldManager class. All input field are extended form this class so this is like a skeleton class of fluentforms input fields BaseFieldManager is an abstract Class which is extended by BaseComponent class. So, It will look like this :

```
<?php 

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

class ConfirmField extends \FluentForm\App\Services\FormBuilder\BaseFieldManager
{
```

We extended our ConfirmField class by including BaseFieldManager with its namespace. Now We have to call the parent class construct method from ConfirmField classes construct method .

## __construct()

In this method we will call the Parent classes’s __construct method. It needs 4 parameters

- **$key** :  Unique key identifier
- **$title** :  Input tile in form editor
- **$tag** : Search tags for this input
- **$position** : Position of the input in the form editor (general | advanced | payments )

Here is the code :

```
public function __construct()
{
    parent::__construct(
        'confirm_field',
        'Confirm Input',
        ['confirm', 'check'],
        'general'
    );
    
}
```

## getComponent()

Next we will create **getComponent()** method which will return the configuration array of the input. This is the most important part. The array includes four core property, *index, element, attributes, settings, editor_options*. First property *index* represents the serial number this field will appear in the form editor. *element* is the key, attributes data will be used when rendering in frontend.

```
public function getComponent()
{
    return [
        'index'          => 16,
        'element'        => $this->key,
        'attributes'     => [
            'name'        => $this->key,
            'class'       => '',
            'value'       => '',
            'type'        => 'text',
            'placeholder' => __('Confirm Input', 'text-domain')
        ],
        'settings'       => [
            'container_class'     => '',
            'placeholder'         => '',
            'auto_select_country' => 'no',
            'label'               => $this->title,
            'label_placement'     => '',
            'help_message'        => '',
            'validate_on_change'  => false,
            'target_input'        => '',
            'error_message'       => __('Confirm value does not match', 'text-domain'),
            'validation_rules'    => [
                'required' => [
                    'value'   => false,
                    'message' => __('This field is required', 'text-domain'),
                ]
            ],
            'conditional_logics'  => []
        ],
        ' ' => [
            'title'      => $this->title . ' Field',
            'icon_class' => 'el-icon-phone-outline',
            'template'   => 'inputText'
        ],
    ];
}
```

The settings property includes the fields settings which is stored in editor and can be accessed needed. Each of these property inside *settings* represents a setting input template and its initial value. For example , container_class represents text input which store container class.  For the ConfirmField input we will need the settings ‘label’, ‘placeholder’, ‘value’, ‘label placement’, ‘validation rules’. These are already available, so we just have to define those in the settings array with the initial value.

![custom field with Fluent Forms](https://fluentforms.com/wp-content/uploads/2022/06/Screenshot-2022-06-17-at-10.06.57-AM-1024x376.png)Fluentforms Editor Input Customization (*container_class*)

There has 69 UI components available for making any type of settings ui for your element. You can even implement your own by implementing *generalEditorElement* and *advancedEditorElement* method. We will get into the details of creating new settings ui later. Please check the BaseFieldManager class for details.

**Where to find the fluentforms built-in UI components:** Please check this [Github source file](https://github.com/fluentform/fluentform/blob/5f400dbcdc/app/Services/FormBuilder/ElementCustomization.php).

## getGeneralEditorElements()

Here we will declare what settings should appear in the general section of the input customization. These are the settings that we just defined in **getComponent()** method **settings** array. If you check the code in parent class method you will see that it returns an array of keys. We can override this method in our class if we need new settings or default settings key will be returned. As we have already mentioned these keys represents the fluentforms input settings ui template,  defined in getComponent() methods *settings* array, now we are just placing it in general section. As you know all inputs have two section of settings general & advanced. Now if you are developer you may think what if you need a new type of settings input to store user values, it is very simple.  We will do that next.

## generalEditorElement()

This is an optional method. We can define our own ui setting inputs here for the general section of the editor. For our ConfirmField we need to store target input name , error message ,and an option whether to validate when user starts typing. So let’s create those. We will use a text and a checkbox ui component to store these settings. Check the following code.

```
public function generalEditorElement()
{
    return [
        'target_input'       => [
            'template'  => 'inputText',
            'label'     => 'Target Field Name',
            'help_text' => 'The input value will be matched with target input and show error if not matched',
        ],
        'error_message'      => [
            'template' => 'inputText',
            'label'    => 'Error Message',
        ],
        'validate_on_change' => [
            'template' => 'inputCheckbox',
            'label'    => 'Validate on Change',
            'options'  => array(
                array(
                    'value' => true,
                    'label' => 'Yes',
                ),
            )
        ],
    ];
}
```

- **target_input** : The key of the settings is **target_input** it will store the target input name for example a password or email field name. The ‘template’ of the UI will inputText as it is a text input. ‘label’ represents the settings label and ‘help_text’ will show a tooltip message info ,it is optional. Here is the output of the this Ui settings.

![](https://fluentforms.com/wp-content/uploads/2022/06/Screenshot-2022-06-17-at-6.15.04-PM-1024x132.png)**target_input**

- **error_message** : This will store the error message which will be shown when the Confirmation input does not match the target input. Setting key is **error_message** and other option is same as the **target_input** ui.

![](https://fluentforms.com/wp-content/uploads/2022/06/Screenshot-2022-06-17-at-6.26.35-PM-1024x109.png)**error_message**

- **validate_on_change** : We will use a checkbox ui component for this settings , to determine whether to validate when user starts typing in the input. For checkbox we will use inputCheckbox template.

![](https://fluentforms.com/wp-content/uploads/2022/06/Screenshot-2022-06-17-at-6.35.46-PM-1024x123.png)**validate_on_change**

## render()

This method is self explanatory. The input html will be rendered in the form from this method. We will have access to full input config with values saved from editor and we can render it exactly as we need.  As this is a text input we can leverage already built text input to compile it and then we will apply our validation on it. So here is how the code looks like :

```
public function render($data, $form)
{
    $data['attributes']['id'] = $this->makeElementId($data, $form);
    $this->pushScripts($data, $form);
    return (new FluentForm\App\Services\FormBuilder\Components\Text())->compile($data, $form);
}
```

There are some useful method available here like **extractValueFromAttributes**, **extractDynamicValues**, **makeElementId**, check the parent class for more.  We have called another method here pushScripts , this will add our required scripts.

## pushScripts()

You can see we called this method from the render() method, to add our required JS scripts here.  Here we wrote a script that will compare the current field with the target input. It will show the saved error message if the value does not match. First it will check if the validate on change settings is enabled. ArrayHelper is a helper class to access array elements easily.

```
private function pushScripts($data, $form)
{
    add_action('wp_footer', function () use ($data, $form) {
        if (!ArrayHelper::isTrue($data, 'settings.validate_on_change')) {
            return;
        }
        ?>
        <script type="text/javascript">
            jQuery(document).ready(function ($) {
                function confirmValidate() {
                    
                    let confirmInput = jQuery('.<?php echo $form->instance_css_class; ?>').find("#<?php echo $data['attributes']['id']; ?>");
                    let targetName = '<?php echo ArrayHelper::get($data, 'settings.target_input') ?>';
                    let message = '<?php echo ArrayHelper::get($data, 'settings.error_message') ?>';
                    let targetInput = jQuery("input[name='" + targetName + "']")
                    let timeout = null;
                    confirmInput.on("keyup", function () {
                        clearTimeout(timeout); 
                        timeout = setTimeout(() => {
                            validate()
                        }, 1500);
                    });
                    function validate() {
                        if (confirmInput.val() !== targetInput.val()) {
                            let div = $('<div/>', {class: 'error text-danger'});
                            confirmInput.closest('.ff-el-group').addClass('ff-el-is-error');
                            confirmInput.closest('.ff-el-input--content').find('div.error').remove();
                            confirmInput.closest('.ff-el-input--content').append(div.text(message));
                        } else {
                            confirmInput.closest('.ff-el-group').removeClass('ff-el-is-error');
                            confirmInput.closest('.ff-el-input--content').find('div.error').remove();
                        }
                    }
                }
                confirmValidate();
            });
        </script>
        <?php
    }, 999);
}
```

## validate()

This is the final method, here we will validate the input data after submission and show error message if validation fails. It checks the target field value and current field value. This method should be called from __construct() method.  Like this

```
add_filter("fluentform/validate_input_item_{$this->key}", [$this, 'validate'], 10, 5);
```

This filter is available for all input. We can use this do our validation check and show error message if required.

```
public function validate($errorMessage, $field, $formData, $fields, $form)
{
    $ConfirmInputName = ArrayHelper::get($field, 'raw.attributes.name');
    $targetInputName = ArrayHelper::get($field, 'raw.settings.target_input');
    $message = ArrayHelper::get($field, 'raw.settings.error_message');
    
    if (ArrayHelper::get($formData, $ConfirmInputName) != ArrayHelper::get($formData, $targetInputName)) {
        $errorMessage = [$message];
    }
    
    return $errorMessage;
}
```

After we initialize this class we have our brand new custom field. We can go to the form editor a see if our new field is ready to be inserted into a form. It can be initialized like this.

```
add_action('fluentform/loaded',function (){
    new ConfirmField();
});
```

You can find the complete code [here](https://github.com/nkb-bd/wp-fluentform-custom-field).

## Final Note

It’s highly recommended to explore our source files and try to understand the design. Once you get it it’s very easy to implement your own custom input elements.

If you have any questions please feel free to reach our awesome [facebook community group](https://www.facebook.com/groups/fluentforms/)

---

## Creating Pretty Conversational Form URL Slug

**Source:** [https://fluentforms.com/docs/creating-pretty-conversational-form-url-slug/](https://fluentforms.com/docs/creating-pretty-conversational-form-url-slug/)

By default, Fluent Form’s conversational form’s URL looks like this: **yourdomain.com/?fluent-form=FORM_ID&form=OPTIONAL_SECURITY_CODE**

But if you want to customize it and make it pretty something like *yourdomain.com/my-forms/FORM_ID/OPTIONAL_SECURITY_CODE*  then please follow this tutorial

First copy and paste this code to your theme’s functions.php file or into your custom code snippet plugin

```
<?php

/*
 * Internal Function for Fluent Forms Custom Slug
 * Do not EDIT this function
 */
function customFfLandingPageSlug($slug)
{
    add_action('init', function () use ($slug) {
        add_rewrite_endpoint($slug, EP_ALL);
    });
    add_action('wp', function () use ($slug) {
        global $wp_query;
        if (isset($wp_query->query_vars[$slug])) {
            $formString = $wp_query->query_vars[$slug];
            if (!$formString) {
                return;
            }
            $array = explode('/', $formString);

            $formId = $array[0];

            if (!$formId || !is_numeric($formId)) {
                return;
            }

            $secretKey = '';
            if (count($array) > 1) {
                $secretKey = $array[1];
            }

            $paramKey = apply_filters('fluentform/conversational_url_slug', 'fluent-form');

            $_GET[$paramKey] = $formId;
            $_REQUEST[$paramKey] = $formId;

            $request = wpFluentForm('request');
	    $request->set($paramKey, $formId);
	    $request->set('form', $secretKey);
        }
    });
}

/*
 * Creating custom slug for conversational form landing page
 *
 * my-forms is your custom slug for the form
 * if your form id is 123 then the landing page url will be then
 * https://your-domain.com/my-forms/123
 * if you use Security Code on conversational form then the url will be
 * https://your-domain.com/my-forms-x/123/SECURITY-CODE
 *
 * After paste the code to your theme's functions.php file please re-save the permalink settings
*/

customFfLandingPageSlug('my-forms'); // you may change the "my-forms" for your own page slug
```

Once you add the code, please feel free to change the ‘my-forms’ to your own slug that you want

- **my-forms** is your custom slug for the form
- if your form id is 123 then the landing page URL will be then **your-domain.com/my-forms/123**
- if you use Security Code on conversational form then the URL will be **your-domain.com/my-forms/123/SECURITY-CODE**

#### Re-Save Permalink

Please note that once you add the code make sure you re-save your permalink from Settings -> Permalinks (on wp-admin)

That’s it.

---

## Useful Snippets

**Source:** [https://fluentforms.com/docs/useful-snippets/](https://fluentforms.com/docs/useful-snippets/)

```
<?php

// Disable default css for all the forms
add_filter('fluentform/load_default_public', '__return_false');

// disable default css for the specific forms

add_filter('fluentform/load_default_public', function($status, $form) {
    $targetForms = [1,2,3]; // form ids that you want to disable default styles
    if(in_array($form->id, $targetForms)) {
        return false;
    }
    return $status;
}, 10, 2);
```

## Shuffle Inputs

```
<?php

// This will apply for only form id: 14
 
add_filter('fluentform/rendering_form', function ($form) {

    // change form ID
    $targetFormId = 14;
    if ($form->id != $targetFormId) {
        return $form;
    }
    list($fixed_inputs, $inputs_to_suffle) = array_chunk($form->fields['fields'], 2);
    shuffle($inputs_to_suffle);
    $form->fields['fields'] = array_merge($fixed_inputs,$inputs_to_suffle);
    
    return $form;
}, 10, 1);
```

---

## PHP Filter Hooks

**Source:** [https://fluentforms.com/docs/php-filter-hooks/](https://fluentforms.com/docs/php-filter-hooks/)

List of fluentform filter hooks.

### Front End Filters

- fluentform/rendering_form
- fluentform/is_form_renderable
- fluentform/is_handling_submission
- fluentform/validation_errors
- fluentform/honeypot_name
- fluentform/before_render_item
- fluentform/rendering_field_data_{$elementKey}
- fluentform/rendering_field_html_{$elementName}
- fluentform/validate_input_item_{$elementName}
- fluentform/skip_no_conflict
- fluentform/load_styles
- fluentform/load_default_public
- fluentform/is_hide_submit_btn_{$formId}
- fluentform/form_class
- fluentform/html_attributes

### SmartCode Filters

- fluentform/editor_shortcodes
- fluentform/shortcode_parser_callback_{$CustomShortCodeKey}
- fluentform/all_editor_shortcodes
- fluentform/smartcode_group_{$group}
- fluentform/payment_smartcode

### Backend Filters

- [fluentform/submission_confirmation](https://fluentforms.com/docs/fluentform_submission_confirmation/)
- fluentform/filter_insert_data
- fluentform/insert_response_data
- fluentform/entry_statuses_core
- fluentform/nonce_verify
- fluentform/nonce_error
- fluentform/numeric_styles
- fluentform/akismet_fields
- fluentform/will_return_html
- fluentform/honeypot_status
- fluentform/dashboard_notices
- fluentform/will_return_html
- fluentform/honeypot_status
- fluentform/is_admin_page
- fluentform/single_response_data
- fluentform/available_date_formats
- fluentform/user_guide_links
- fluentform/permission_set
- fluentform/api_all_logs
- fluentform/api_success_log
- fluentform/api_failed_log
- fluentform/truncate_password_values
- fluentform/verify_user_permission_
- fluentform/permission_callback
- fluentform/reportable_inputs
- fluentform/subfield_reportable_inputs
- fluentform/nonce_error
- fluentform/survey_shortcode_defaults
- fluentform/popup_shortcode_defaults
- fluentform/info_shortcode_defaults
- fluentform/shortcode_defaults
- fluentform/get_raw_responses
- fluentform/export_data
- fluentform/shortcode_feed_text
- fluentform/entry_lists_labels
- fluentform/all_entries
- fluentform/step_string
- fluentform/display_add_form_button
- fluentform/global_form_vars
- fluentform/all_entry_labels
- fluentform/all_entry_labels_with_payment
- fluentforms/recaptcha_v3_ref_score
- fluentform/auto_read
- fluentform/create_default_settings
- fluentform/form_fields_update
- fluentform/single_entry_widgets
- fluentform/disabled_analytics
- fluentform/entry_notes
- fluentform/add_response_note
- fluentform/disable_attachment_delete
- fluentform/create_default_settings
- fluentform/response_render_{ $element}
- fluentform/supported_conditional_fields
- fluentform/settings_module_{$module}
- fluentform/validation_message_{$ruleName}
- fluentform/validation_message_{$element}_{$ruleName}
- fluentform/item_rules_{ $element}
- fluentform/itl_options
- fluentform/ip_provider
- fluentform/uploader_args
- fluentform/file_uploaded
- fluentform/file_upload_params
- fluentform/uploaded_file_name
- fluentform/file_upload_validations
- fluentform/file_upload_validation_error
- fluentform/disable_inputmode
- fluentform/file_type_options

### Editor Filters

- fluentform/nonce_error
- fluentform/editor_init_element_ {$elementKey}
- fluentform/editor_validation_rule_settings
- fluentform/editor_element_settings_placement
- fluentform/editor_components
- fluentform/editor_countries
- fluentform/editor_element_customization_settings

### Integration Filters

- fluentform/addons_extra_menu
- fluentform/global_addons
- fluentform/global_integration_settings_{$settingsKey}
- fluentform/global_integration_fields_{$settingsKey}
- fluentform/global_notification_active_types
- fluentform/notifying_async_{$integrationKey}
- fluentform/mailchimp_keep_existing_interests
- fluentform/mailchimp_keep_existing_tags
- fluentform/global_notification_feed_{$feedMetaKey}
- fluentform/integration_data_{$integrationKey}
- fluentform/mailchimp_keep_existing_interests
- fluentform/icontact_request_args

### User Registration Filters

- fluentform/user_registration_field_defaults
- fluentform/user_registration_feed_fields
- fluentorm/user_registration_creatable_roles
- fluentform/user_registration_feed

### Post Integration Filters

- fluentform/post_metabox_accepted_general_fields
- fluentform/post_type_selection_types_args
- fluentform/post_selection_types
- fluentform/post_selection_posts_pre_data
- fluentform/post_selection_label_by

### Email Filters

- fluentform/send_plain_html_email
- fluentform/submission_message_parse
- fluentform/email_subject
- fluentform/email_body
- fluentform/email_to
- fluentform/email_header
- fluentform/email_footer
- fluentform/email_styles
- fluentform/email_template_footer_text
- fluentform/email_attachments
- fluentform/filter_email_attachments
- fluentform/email_summary_body_text
- fluentform/email_summary_footer_text
- fluentform/email_content_type_header
- fluentform/email_template_header_image
- fluentform/email_template_email_heading
- fluentform/email_template_colors

### Payment Filters

- fluentform/payment_smartcode
- fluentform/payment_settings_{ $method}
- fluentform/payment_method_settings_validation_{$method}
- fluentform/payment_submission_data
- fluentform/submission_order_items
- fluentform/payment_field_{$elementName}
- fluentform/stripe_checkout_args

---

## PHP Action Hooks

**Source:** [https://fluentforms.com/docs/php-action-hooks/](https://fluentforms.com/docs/php-action-hooks/)

FluentForms comes with many PHP hooks that let you tweak the default behavior and add new functionalities.

- ### Form Hooks

1. [fluentform/loaded](https://fluentforms.com/docs/fluentform_loaded/)
2. [fluentform/before_insert_submission](https://fluentforms.com/docs/fluentform_before_insert_submission/)
3. [fluentform/before_form_actions_processing](https://fluentforms.com/docs/fluentform_before_form_actions_processing/)
4. [fluentform/before_submission_confirmation](https://fluentforms.com/docs/fluenform_before_submission_confirmation/)
5. [fluentform/submission_inserted](https://fluentforms.com/docs/fluentform_submission_inserted/)
- ### New Form Admin Hooks

1. [fluentform/inserted_new_form](https://fluentforms.com/docs/fluentform_inserted_new_form/)
2. [fluentform/before_insert_payment_form](https://fluentforms.com/docs/fluentform_before_insert_payment_form/)
3. [flentform/form_duplicated](https://fluentforms.com/docs/flentform_form_duplicated/)
4. [fluentform/form_imported](https://fluentforms.com/docs/fluentform_form_imported/)
5. [fluentform/after_save_form_settings](https://fluentforms.com/docs/fluentform_after_save_form_settings/)
- ### Form Editor Hooks

1. [fluentform/editor_init](https://fluentforms.com/docs/fluent_editor_init/)
2. [fluentform/loading_editor_assets](https://fluentforms.com/docs/fluentform_loading_editor_assets/)
3. [fluentform/before_editor_start](https://fluentforms.com/docs/fluentform_before_editor_start/)
4. [fluentform/after_editor_start](https://fluentforms.com/docs/fluentform_after_editor_start/)
5. [fluentform/after_form_screen_wrapper](https://fluentforms.com/docs/fluentform_after_editor_start/)
- ### Form Render

1. [fluentform/render_item_{$itemKey}](https://fluentforms.com/docs/fluentform_render_item_item/)
2. [fluentform/before_form_render](https://fluentforms.com/docs/fluentform_before_form_render/)
3. [fluentform/form_element_start](https://fluentforms.com/docs/fluentform_form_element_start/)
4. [fluentform/after_form_render](https://fluentforms.com/docs/fluentform_after_form_render/)
5. [fluentform/render_item_step_start](https://fluentforms.com/docs/fluentform_render_item_step_start/)
6. [fluentform/render_item_step_end](https://fluentforms.com/docs/fluentform_render_item_step_end/)
7. [fluentform/rendering_calculation_form](https://fluentforms.com/docs/ff_rendering_calculation_form/)
- ### Scheduled Tasks

1. [fluentform/maybe_scheduled_jobs](https://fluentforms.com/docs/fluentform_maybe_scheduled_jobs/)
2. [fluentform/do_email_report_scheduled_tasks](https://fluentforms.com/docs/fluentform_do_email_report_scheduled_tasks/)
- ### Permission Assignment

1. [fluentform/before_permission_set_assignment](https://fluentforms.com/docs/before_fluentform_permission_set_assignment/)
2. [fluentform/after_permission_set_assignment](https://fluentforms.com/docs/after_fluentform_permission_set_assignment/)
- ### Admin Menu

1. [fluentform/global_menu](https://fluentforms.com/docs/php-action-hooks/)
2. [fluentform/after_global_menu](https://fluentforms.com/docs/php-action-hooks/)
3. [fluentform/after_form_navigation](https://fluentforms.com/docs/fluentform_after_form_navigation/)
4. [fluentform/form_application_view_{$route}](https://fluentforms.com/docs/ff_fluentform_form_application_view_route/)
- ### Form Style

1. [fluentform/init_custom_stylesheet](https://fluentforms.com/docs/fluentform_init_custom_stylesheet/)
2. [fluentform/load_form_assets](https://fluentforms.com/docs/php-action-hooks/)
3. [fluentform/scripts_registered](https://fluentforms.com/docs/fluentform_scripts_registered/)
4. [flunetform/render_payment_entries](https://fluentforms.com/docs/flunetform_render_payment_entries-2/)
5. [fluentform/pre_load_scripts](https://fluentforms.com/docs/fluentform_pre_load_scripts/)
- ### Additional Hooks

1. [fluentform/new_response_note_added](https://fluentforms.com/docs/fluentform_new_response_note_added/)
2. [fluentform/starting_file_upload](https://fluentforms.com/docs/fluentform_starting_file_upload/)
3. [fluentform/log_data](https://fluentforms.com/docs/php-action-hooks/)
- ### Entry Hooks

1. [fluentform/before_all_entries_render](https://fluentforms.com/docs/fluentform_before_all_entries_render/)
2. [fluentform/after_all_entries_render](https://fluentforms.com/docs/fluentform_after_all_entries_render/)
3. [fluentform/before_entry_deleted](https://fluentforms.com/docs/fluentform_before_entry_deleted/)
4. [fluentform/before_entry_payment_deleted](https://fluentforms.com/docs/php-action-hooks/)
5. [fluentform/after_entry_deleted](https://fluentforms.com/docs/fluentform_after_entry_deleted/)
6. [fluentform/before_all_entries_render](https://fluentforms.com/docs/fluentform_before_all_entries_render/)
7. [fluentform/after_all_entries_render](https://fluentforms.com/docs/fluentform_after_all_entries_render/)
8. [fluentform/before_partial_entry_deleted](https://fluentforms.com/docs/fluentform_before_partial_entry_deleted/)
9. [fluentform/after_partial_entry_deleted](https://fluentforms.com/docs/fluentform_after_partial_entry_deleted/)
10. [flunetform/render_payment_entries](https://fluentforms.com/docs/flunetform_render_payment_entries-2/)
- ### Integration Hooks

1. [fluentform/global_notify_completed](https://fluentforms.com/docs/fluentform_global_notify_completed/)
2. [fluentform/save_global_integration_settings_{$settingsKey}](https://fluentforms.com/docs/php-action-hooks/)
3. [fluentform/integration_action_result](https://fluentforms.com/docs/ff_integration_action_result/)
1. #### User Registration

1. [fluentform/user_registration_before_start](https://fluentforms.com/docs/fluentform_user_registration_before_start/)
2. [fluentform/created_user](https://fluentforms.com/docs/fluentform_created_user/)
3. [fluentform/user_registration_completed](https://fluentforms.com/docs/fluentform_user_registration_completed/)
2. #### Post Integreation

1. [fluentform/post_integration_success](https://fluentforms.com/docs/fluentform_post_integration_success/)
3. #### Double Optin Confirmation

1. [fluentform/entry_confirmation](https://fluentforms.com/docs/fluentformpro_entry_confirmation/)
- ### Email Hooks

1. [fluentform/email_summary_details](https://fluentforms.com/docs/fluentform_email_summary_details/)
2. [fluentform/email_template_after_footer](https://fluentforms.com/docs/fluentform_email_template_after_footer/)
- ### Payment Receipt Hooks

1. [fluentform/payment_receipt_before_content](https://fluentforms.com/docs/fluentform_payment_receipt_before_content/)
2. [fluentform/payment_receipt_after_content](https://fluentforms.com/docs/fluentform_payment_receipt_after_content/)
- ### Addon Hooks

1. [fluentform/addons_page_render_{$current_menu_item}](https://fluentforms.com/docs/fluentform_addons_page_render_current_menu_item/)
2. [fluentform/addons_page_render_fluentform_pdf_settings](https://fluentforms.com/docs/php-action-hooks/)
- ### Form Settings Hooks

1. [fluentform/before_form_settings_app](https://fluentforms.com/docs/fluentform_before_form_settings_app/)
2. [fluentform/after_form_settings_app](https://fluentforms.com/docs/fluentform_after_form_settings_app/)
3. [fluentform/form_settings_container_{$current_sub_route}](https://fluentforms.com/docs/fluentform_form_settings_container_current_sub_route/)
4. [fluentform/before_global_settings_wrapper](https://fluentforms.com/docs/fluentform_before_global_settings_wrapper/)
5. [fluentform/after_global_settings_wrapper](https://fluentforms.com/docs/fluentform_after_global_settings_wrapper/)
6. [fluentform/global_settings_component_{$currentComponent}](https://fluentforms.com/docs/fluentform_global_settings_component_currentcomponent/)
7. [fluentform/after_global_settings_option_render](https://fluentforms.com/docs/fluentform_after_global_settings_option_render/)
8. [fluentform/before_global_settings_option_render](https://fluentforms.com/docs/fluentform_before_global_settings_option_render/)
- ### Form Export/Import Hooks

1. [fluentform/before_export_import_wrapper](https://fluentforms.com/docs/fluentform_before_export_import_wrapper/)
2. [fluentform/after_export_import_wrapper](https://fluentforms.com/docs/fluentform_after_export_import_wrapper/)
3. [fluentform/before_export_import_container](https://fluentforms.com/docs/fluentform_before_export_import_container/)
4. [fluentform/after_before_export_import_container](https://fluentforms.com/docs/fluentform_after_before_export_import_container/)
- ### Form Styler

1. [fluentform/form_styler](https://fluentforms.com/docs/fluentform_form_styler/)
2. [fluentform/after_style_generated](http://fluentform_after_style_generated)
- ### Conversational Form

1. [fluentform/conversational_frame_head](https://fluentforms.com/docs/fluentform_conversational_frame_head/)
2. [fluentform/conversational_frame_footer](https://fluentforms.com/docs/fluentform_conversational_frame_footer/)
- ### Payment Hooks

1. [fluentform/payment_frameless_{$paymentMethod}](https://fluentforms.com/docs/fluent_payment_frameless_paymentmethod/)
2. [fluentform/rending_payment_method_{$methodName}](https://fluentforms.com/docs/php-action-hooks/)
3. [fluentform/process_payment_{$selectedPaymentMethod}](https://fluentforms.com/docs/php-action-hooks/)
4. [fluentform/payment_method_render_{$methodName}](https://fluentforms.com/docs/fluentform_payment_method_render_methodname/)
5. [fluentform/before_payment_status_change](https://fluentforms.com/docs/fluentform_before_payment_status_change/)
6. [fluentform/after_payment_status_change](https://fluentforms.com/docs/fluentform_after_payment_status_change/)
7. [fluentform/payment_refunded_{$method}](https://fluentforms.com/docs/fluentform_payment_refunded_method/)
8. [fluentform/payment_refunded](https://fluentforms.com/docs/fluentform_payment_refunded/)
9. [fluentform/payment_refund_updated_{$method}](https://fluentforms.com/docs/fluentform_payment_refund_updated_method/)
10. [fluentform/payment_refund_updated](https://fluentforms.com/docs/fluentform_payment_refund_updated_method/)
11. [fluentform/ipn_endpint_{$paymentMethod}](https://fluentforms.com/docs/php-action-hooks/)
12. [fluentform/paypal_ipn_verification_failed](https://fluentforms.com/docs/fluentform_paypal_ipn_verification_failed/)
13. [fluentform/ipn_paypal_action_{$txn_type}](https://fluentforms.com/docs/fluentform_ipn_paypal_action_/)
14. [fluentform/ipn_paypal_action_web_accept](https://fluentforms.com/docs/fluentform_ipn_paypal_action_web_accept/)

---

## Form PHP API

**Source:** [https://fluentforms.com/docs/fluent-form-php-api/](https://fluentforms.com/docs/fluent-form-php-api/)

FluentForms has the following PHP api functions so you can easily access from fields, entries and other data.

## Accessing Form

```
<?php

$formApi = fluentFormApi('forms');
/**
* Find a form by form ID
* @param $entryId (int)
* @return null | Form Object
*/
$formObj = $formApi->find($formId = 1)

/**
* Get the paginated list of forms.
* You can search form forms with multiple attributes and get matched form objects in return with labels.
* @param $atts (array), $withFields (boolean)
* @return: array
*/
$atts = [
       'search' => 'formName',
       'status' => 'all',
       'sort_column' => 'id',
       'sort_by' => 'DESC',
       'per_page' => 10,
       'page' => 1
 ];
 $forms = $formApi->forms($atts, $withFields = false)
```

## Accessing Form Properties

```
<?php
/**
* Get the form instance first 
*/
$formApi = fluentFormApi('forms')->form($formId = 1);

/**
* Get inputs data by form ID
* You can get input fields with admin label or raw data.
* @parms $with (array)
* @return array
*/

$formApi->inputs($with = ['admin_label', 'raw']);

/**
* Get Form Input labels
* @return array
*/
$formApi->labels();

/**
* Get Form Input Fields Data
* @return array
*/
$formApi->fields();

/**
* Get Form Settings
* @return array
*/
$formApi->settings();

/**
* Get Form Email Notification Settings
* @return array
*/
$formApi->emailNotifications();

/**
* Get Form Meta data by meta key, for example : '_custom_form_css' , '_custom_form_js' 
* You can set a default value to return if no data found
* $param $metaKeyName (string), $default (boolean)
* @return array
*/
$formApi->meta($metaKeyName, $default = false);

/**
* Get Form Email Notification Settings
* @return array
*/
$formApi->emailNotifications();

/**
* Check the status of the form it passed all conditions and is renderable.
* @return array
*/
$formApi->renderable();

/**
* Get the conversion rate of the form.
* @return int
*/
$formApi->conversionRate();

/**
* Get the conversion rate of the form.
* @return int
*/
$formApi->submissionCount();

/**
* Get the view count of the form.
* @return int
*/
$formApi->viewCount();

/**
* Get the unread status count of the form.
* @return int
*/
$formApi->unreadCount();

/**
* Get any form property value
* You can directly access any form properly for example form title
* @return mixed | false
*/
$formApi->title;
```

## Accessing Form Entries

```
<?php

/**
* Get the form entry instance first 
* @param $formId (int)
* @return null or Entry Object Instance
*/

$formApi = fluentFormApi('forms')->entryInstance($formId = 1);

/**
* Get a single entry of a form
* You can get a single form entry by entry Id
* @params $entryId (int), $includeFormats (boolean)
* @return null or Entry Object
*/

$entry = $formApi->entry($entryId = 1, $includeFormats = false);

/**
* Get a list of entries of a form
* You can paginated form entries by form Id 
* @params $atts (array), $includeFormats (boolean)
* @return array
*/

$formApi = fluentFormApi('forms')->entryInstance($formId = 1);
$atts = [
     'per_page' => 10,
     'page' => 1,
     'search' => '',
     'sort_by' => 'DESC',
     'entry_type' => 'all'
];
$entries = $formApi->entries($atts , $includeFormats = false);

/**
* Get the Entry Visual Data Report page data
* params $status (array)
* @return array
*/

$formApi = fluentFormApi('forms')->entryInstance($formId = 1);
$report = $formApi->report( $status = ['read']);
```

---

## Populate dropdown field options from Google Sheet

**Source:** [https://fluentforms.com/docs/populate-dropdown-field-options-from-google-sheet/](https://fluentforms.com/docs/populate-dropdown-field-options-from-google-sheet/)

## fluentform/rendering_field_data_select

Dropdown/select fields options can be fetched from Google Sheet using *fluentform/rendering_field_data_select* filter. Here is the following code :

```
add_filter('fluentform/rendering_field_data_select', function ($data, $form) {
    
    $targetFormID = 3;
    //google sheet shared as CSV link
    $csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT5FV_MYPwTqjhelf6_g02pS1Y60DbdkHDWPvRKVzLPeZSKFNFa4y6kMas3amvM7v1El-b1PVdC0wrP/pub?output=csv';
    
    $columName = 'Players'; // 'Players' is the column name
    $uniqueData = true;     // remove duplicate values
    
    if ($form->id !=  $targetFormID) {
        return $data;
    }
    
    // check if the name attribute is 'dropdown' , it is by default dropdown for the first dropdown input
    
    if (\FluentForm\Framework\Helpers\ArrayHelper::get($data, 'attributes.name') != 'dropdown') {
        return $data;
    }
    
    $result=[] ;
    
    if (!class_exists('CSVParser')) {
        require_once(FLUENTFORMPRO_DIR_PATH . 'libs/CSVParser/CSVParser.php');
    }
    
    $csvParser = new \CSVParser;
    $content = file_get_contents($csvUrl);
    $csvParser->load_data($content);
    $rows = $csvParser->parse($csvParser->find_delimiter());
    
    if(!$rows) {
        return $data;
    }
    $headers = array_shift($rows); // remove the first item
    $headerIndex = array_search($columName, $headers);
    
    foreach ($rows as $row) {
        
        if(!empty($row[$headerIndex])) {
            $result[]=
                
                [
                    "label"      => $row[$headerIndex],
                    "value"      => $row[$headerIndex],
                    "calc_value" => ""
                ];
        }
    }
    
    $result = ($uniqueData === true) ?   array_map("unserialize", array_unique(array_map("serialize", $result))) :  $result;
    
    // Merging with existing options here
    $data['settings']['advanced_options'] = array_merge($data['settings']['advanced_options'], $result );
    return $data;

}, 10, 2);
```

You need to do the  following :

1. Change your form ID and place this code in your function.php file.
2. Change the $csvUrl with the Google sheet link published as CSV.
3. Add your column name in $columName.
4. Here we have used ‘dropdown’ as the name attribute
5. Set $uniqueData to true to remove duplicated data
6. Save the form once again from the form editor

That is all. New data added to the sheet will be automatically added to your dropdown option when you go into the form editor. Keep in mind that if you need new data then you have to go to the editor and save the form, so the newly added data gets saved in the database.

We hope that will be useful. Feel free to let us know if you need any help with our hooks and filters.

---

## Create Unique Fields in Fluent Forms

**Source:** [https://fluentforms.com/docs/create-unique-fields-in-fluent-forms/](https://fluentforms.com/docs/create-unique-fields-in-fluent-forms/)

Turn phone number, email, or any other simple text input into a unique field. Use the input key instead of {input_key} for your input type. See the list of input keys in this [link](https://fluentforms.com/docs/fluentform_validate_input_item_input_text/). Also, make sure the name attribute & form ID matches correctly.

For example for the phone field use this hook:  *fluentform/validate_input_item_phone*

```
add_filter('fluentform/validate_input_item_{input_key}', function ($errorMessage, $field, $formData, $fields, $form) {
    
	$fieldName       = 'phone';
	$target_form_id  = 13;

	if($target_form_id !=  $form->id){ return $errorMessage; }
   	
	
	if ($inputValue = \FluentForm\Framework\Helpers\ArrayHelper::get($formData, $fieldName)) {
		$exist = wpFluent()->table('fluentform_entry_details')
			->where('form_id', $form->id)
			->where('field_name', $fieldName)
			->where('field_value', $inputValue)
			->first();
	
		if ($exist) {
			 $errorMessage = "Error ! This field needs to be unique.";
			 return [$errorMessage];
		}
	}
   	
    return $errorMessage;

}, 10, 5);
```

Use this code in the theme function.php file or any PHP code snippet plugin.

Feel free to share any insights or if you have a topic in mind you would like to see documentation and example code about it. For more discussion,join our Facebook group [Fluent Forms Community](https://www.facebook.com/groups/fluentforms/).

---

## How to make a strong password requirement in user registration forms with Fluent Forms

**Source:** [https://fluentforms.com/docs/how-to-make-a-strong-password-requirement-in-user-registration-forms-with-fluent-forms/](https://fluentforms.com/docs/how-to-make-a-strong-password-requirement-in-user-registration-forms-with-fluent-forms/)

The hooks and filters used in various steps of fluent form make it really powerful and easy to add new features. Making strong password requirements is also very simple with the password input filter.

We used regular expressions here to check password strength for example minimum eight-character, must include one uppercase and one lowercase character. You can add more or remove them as you need. You can check live and get code from your regular expression from [here](https://regex101.com/).

Use the following code snippet in the theme function.php file or in any PHP snippet plugin. Make sure the password field input name is password or you can change it and add your form ID. That is all.

```
add_filter('fluentform/validate_input_item_input_password', function($errorMessage, $field, $formData, $fields, $form){
    
    $target_form_id = 9;
    if($form->id != $target_form_id){
        return;
    }
    
    $password =  $formData['password'];
    $errorMessage = '';
    
    //numbers
    $pattern = "/[0-9]/";
    $match = preg_match($pattern,$password);
    
    if (!$match){
        
        $errorMessage= "You need atleast 1 number!";
        return [$errorMessage];
    }
    
    // 8 charcter min
    $pattern = "/(?=.{8,})/";
    $match = preg_match($pattern,$password);
    
    //preg_match($pattern, $password, $matches, PREG_OFFSET_CAPTURE, 0);
    if (!$match){
        
        $errorMessage= "You need minimum 8 charcter!";
        return [$errorMessage];
    }

    // small and capital
    $pattern = "/(?=.*[a-z])(?=.*[A-Z])/";
    $match = preg_match($pattern,$password);
    if (!$match){

        $errorMessage= "You need one to 1 smaller and 1 upper charcter!";
        return [$errorMessage];
    }

    // special charcter
    $pattern = "/(?=.*[^\w\d])/";
    $match = preg_match($pattern,$password);
    if (!$match){

        $errorMessage= "You need one to 1 special charcter !";
        return [$errorMessage];
    }
    
    return ;
    
    
},10,5);
```

Feel free to share any insights or if you have a topic in mind you would like to see documentation and example code about it. For more discussion,join our Facebook group [Fluent Forms Community](https://www.facebook.com/groups/fluentforms/).

---

## How to make a login form with Fluent Form

**Source:** [https://fluentforms.com/docs/how-to-make-a-login-form-with-fluent-form/](https://fluentforms.com/docs/how-to-make-a-login-form-with-fluent-form/)

Login forms allow users to access their accounts on your website. If you allow user registration, they’ll need a way to log in. With **Fluent Forms**, you can easily create a custom login form using a small code snippet.

This guide will walk you through the process step by step.

Easily create a login form using the *fluentform/before_insert_submission* hook.

> For a more powerful and secure login solution, we highly recommend our dedicated free plugin, Fluent Auth. It offers features like two-factor authentication, social logins, login security, detailed audit logs, and automatic login/logout redirects without needing any code.

## Build Your Login Form

Start by creating the login form that your users will use. In your **Fluent Forms** dashboard, click **Add a New Form** to begin. Click the **New Blank Form** option.

![](https://fluentforms.com/wp-content/uploads/2020/10/create-form-01.webp)

Add a minimum of two fields to your login form: an **Email** input field and a **Password** field (found under **Advanced Fields**).

Next, you’ll need to update the **Name Attribute** for each field so the code can identify them correctly. Click on the **Email** field, open the **Advanced Options** tab, and set the Name Attribute to **email**. Then do the same for the **Password** field, setting its Name Attribute to **password**.

When you’re done, **save your form** and **copy**its**shortcode**. You’ll need this shortcode later to display the form on a page and to connect it with the code snippet in the next step.

![](https://fluentforms.com/wp-content/uploads/2020/10/name-attribution-02-scaled.webp)

### Create a New Page

Go to the WordPress Dashboard, click on the **Add New Page** from the left sidebar.
Here, paste your form’s **Shortcode** and save it.

![](https://fluentforms.com/wp-content/uploads/2020/10/form-id-scaled.webp)

## Add the Custom PHP Code

After saving your login page, you’ll need to add some PHP code to make the form work. You can do this by editing your site’s **functions.php** file or by using [FluentSnippets](https://wordpress.org/plugins/easy-code-manager/).

To set this up, add the code to your theme’s **functions.php** file. For safety, it’s best to use a **child theme** or a **code snippets plugin** so your changes aren’t lost when you update your theme.

Next, find the line that says **if($form->id != 23)**and replace 23 with your actual form ID. You can find this number in the shortcode you copied earlier.

Once you’ve updated the code, **paste** it into your **functions.php** file or your **code snippets plugin** and save the changes.

**Note**: In this example, No actual form submission will happen as we are redirecting the user before inserting the data

```
add_action('fluentform/before_insert_submission', function ($insertData, $data, $form) {

    if($form->id != 23) { // 23 is your form id. Change the 23 with your own login for ID
        return;
    }

    $redirectUrl = home_url(); // You can change the redirect url after successful login

    // if you have a field as refer_url as hidden field and value is: {http_referer} then
    // We can use that as a redirect URL. We will redirect if it's the same domain
    // If you want to redirect to a fixed URL then remove the next 3 lines
    if(!empty($data['refer_url']) && strpos($data['refer_url'], site_url()) !== false) {
        $redirectUrl = $data['refer_url'];
    }

    if (get_current_user_id()) { // user already registered
        wp_send_json_success([
            'result' => [
                'redirectUrl' => $redirectUrl,
                'message' => 'Your are already logged in. Redirecting now...'
            ]
        ]);
    }

    $email = \FluentForm\Framework\Helpers\ArrayHelper::get($data, 'email'); // your form should have email field
    $password = \FluentForm\Framework\Helpers\ArrayHelper::get($data, 'password'); // your form should have password field

    if(!$email || !$password) {
        wp_send_json_error([
            'errors' => ['Please provide email and password']
        ], 423);
    }

    $user = get_user_by_email($email);
    if($user && wp_check_password($password, $user->user_pass, $user->ID)) {
        wp_clear_auth_cookie();
        wp_set_current_user($user->ID);
        wp_set_auth_cookie($user->ID);
        /* user is not logged in.
        * If you use wp_send_json_success the the submission will not be recorded
        * If you remove the wp_send_json_success then it will record the data in fluentform
        * in that case you should redirect the user on form submission settings
        */
        wp_send_json_success([
            'result' => [
                'redirectUrl' => $redirectUrl,
                'message' => 'Your are logged in, Please wait while you are redirecting'
            ]
        ]);
    } else {
        // password or user don't match
        wp_send_json_error([
            'errors' => ['Email / password is not correct']
        ], 423);
    }
}, 10, 3);
```

> Important: This method will not save any form entries in Fluent Forms. The code processes the login and stops the submission before the data is saved to your database. This is expected behavior for a login form.

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Email Confirmation Field

**Source:** [https://fluentforms.com/docs/email-confirmation-field/](https://fluentforms.com/docs/email-confirmation-field/)

## fluentform/validate_input_item_input_email

Using this filter you can create an email confirmation field. By default email input name attribute is ’email’ and if you add another email input its name is ’email_1′. So in this example, we have used these two names for two email fields, to make sure these match. Here is the following code :

```
add_filter('fluentform/validate_input_item_input_email', function($errorMessage, $field, $formData, $fields, $form) {

    $target_form_id = 8;
    if($form->id != $target_form_id ) {
     return $errorMessage ;
    }
    
    
    if( $formData['email'] !=  $formData['email_1']  ){
        $errorMessage =  ['Error! Email does not match'];
    }
    
    return $errorMessage;
}, 10, 5);
```

Just change your form ID and place this code in your function.php file. You can do this for other fields as well such as the password fields using their respective validation filters. For the password field, the filter will be ‘fluentform/validate_input_item_input_password’ and the name attributes password fields which are by default ‘password’ and ‘password_1’.

Check all the input filter hooks in this page [fluentform/validate_input_item_input_text](https://fluentforms.com/docs/fluentform_validate_input_item_input_text/).

---

## Email verification with Emailable

**Source:** [https://fluentforms.com/docs/email-verification-with-emailable/](https://fluentforms.com/docs/email-verification-with-emailable/)

You can add a feature to check whether a user’s email is fake or true. Using**fluentform/validate_input_item_input_email**& [emailable](https://app.emailable.com/) API. You will need a true mail API key for this. Here is an example of the code:

```
add_filter('fluentform/validate_input_item_input_email', function ($default, $field, $formData, $fields, $form) {

    // You may change the following 3 lines
    $targetFormId = 140;
    $errorMessage = 'Looks like email is not correct'; // You may change here
    $emailableApiKey = 'live_b67c9cb0585e27dd256c';

    if ($form->id != $targetFormId) {
        return $default;
    }

    $fieldName = $field['name'];
    if (empty($formData[$fieldName])) {
        return $default;
    }
    $email = $formData[$fieldName];

    $request = wp_remote_get('https://api.emailable.com/v1/verify?email='.$email.'&api_key='.$emailableApiKey);

    if(is_wp_error($request)) {
        return $default; // request failed so we are skipping validation
    }

    $response = wp_remote_retrieve_body($request);

    $response = json_decode($response, true);

    if($response['state'] == 'deliverable') {
        return $default;
    }

    return $errorMessage;

}, 10, 5);
```

For details of the hook *fluentform/validate_input_item_input_email* check this documentation [link](https://fluentforms.com/docs/fluentform_validate_input_item_input_text/).

---

## Limit Email Domains in Fluent Forms Form Submission

**Source:** [https://fluentforms.com/docs/limit-email-domains-in-fluent-forms-form-submission/](https://fluentforms.com/docs/limit-email-domains-in-fluent-forms-form-submission/)

If you want to stop some specific email domains from a form submission, you can do this using the email filter hook *fluentform/validate_input_item_input_email*. Just add the accepted email domain, other email domains will be rejected.

Here is an example, this will be applied to form ID of 12.

```
add_filter('fluentform/validate_input_item_input_email', function ($error, $field, $formData, $fields, $form) {
    
     /*
     * add your accepted domains here
     * Other domains will be failed to submit the form
     */
    
    $targetFormId = 12;
    $acceptedDomains = ['gmail.com', 'hotmail.com', 'test.com'];
    $errorMessage = 'The provided email domain is not accepted';

    if ($form->id != $targetFormId) {
        return $error;
    }

    $fieldName = $field['name'];
    if (empty($formData[$fieldName])) {
        return $error;
    }

    $valueArray = explode('@', $formData[$fieldName]);
    $inputDomain = array_pop($valueArray);

    if (!in_array($inputDomain, $acceptedDomains)) {
        return [$errorMessage];
    }
    return $error;

}, 10, 5);
```

For details of the hook *fluentform/validate_input_item_input_email* check this documentation [link](https://fluentforms.com/docs/fluentform_validate_input_item_input_text/).

---

## Integration Feed – Fields API

**Source:** [https://fluentforms.com/docs/integration-feed-fields-api/](https://fluentforms.com/docs/integration-feed-fields-api/)

For creating feed integration fields, These are the available built in components that you can use for your custom integration. The data structure can be used in  getSettingsFields() method for IntegrationManager class implementation.

### text

```
[
    'key'         => 'key_of_the_setting',
    'label'       => 'Input Label',
    'required'    =>  true, // true/false
    'placeholder' => 'Input Placeholder',
    'tips'        => 'Additional Help Text,
    'component'   => 'text' // text is the component type
]
```

This is a simple *text* input component, you can find this in every integration. An output screenshot of the above code. This key used to fetch the settings data when you need it after rendering. This tips field is common for all components to show additional help text which is optional.

![](https://fluentforms.com/wp-content/uploads/2020/08/image-14-1024x116.png)

### select

```
[
    'key'         => 'key_of_the_setting',
    'label'       => 'Select Label',
    'required'    =>  true, // true/false
    'placeholder' => 'Select Placeholder',
    'component'   => 'select', //  component type
    'is_multiple' =>  true, // boolean
    'options'     => [
                 'option_value_1' => 'Option Label 1',
                 'option_value_2' => 'Option Label 2',
              ]
]
```

This is the regular *select* input component. It is also used in almost every integration. You can pass your required select options as array format like in the example code with option key & value. To enable multi-select add value ‘is_multiple’  value with true. An output screenshot of the above code after rendering.

![](https://fluentforms.com/wp-content/uploads/2020/08/image-1-1024x221.png)

### checkbox-single

```
[
    'key'             => 'key_of_the_setting',
    'label'           => 'Input Label',
    'component'       => 'checkbox-single',
    'checkbox_label'  => 'Checkbox Label'
],
```

Simple *checkbox* input component. A screenshot of the above code after rendering.

![](https://fluentforms.com/wp-content/uploads/2020/08/image-3-1024x85.png)

You can find this component in Mail chimp integration file. [https://github.com/fluentform/fluentform/blob/master/app/Services/Integrations/MailChimp/MailChimpIntegration.php](https://github.com/fluentform/fluentform/blob/master/app/Services/Integrations/MailChimp/MailChimpIntegration.php)

### checkbox-multiple

```
[
    'key'          => 'key_of_the_setting',
    'label'        => 'Input Label',
    'placeholder'  => 'Input Placeholder',
    'component'    => 'checkbox-multiple',
    'options'     => [
        'option_value_1' => 'Option Label 1',
        'option_value_2' => 'Option Label 2',
    ]
]
```

Checkbox component is the same as the checkbox-single with multiple options. Pass your options as an array like the [select](#1-toc-title) component with key & value pairs. A screenshot of the above code after rendering.

![](https://fluentforms.com/wp-content/uploads/2020/08/image-4-1024x73.png)

```
[
    'key'          => 'key_of_the_setting',
    'label'        => 'Input Label',
    'required'     =>  true, // true/false
    'placeholder'  => 'Input Placeholder',
    'component'    => 'value_text',  
]
```

### value_text

Input *text* component with shortcode dropdown. Users can insert form & other dynamic values using the available shortcodes in this component. A screenshot of the above code after rendering.

![](https://fluentforms.com/wp-content/uploads/2020/08/image-8-1024x174.png)

### value_textarea

```
[
    'key'         => 'key_of_the_setting',
    'label'       => 'Input Label',
    'required'    =>  true, // true/false
    'placeholder' => 'SMS Text',
    'component'   => 'value_textarea'
],
```

Same as the value_text component with shortcode dropdown for dynamic input values, but this component input type is *textarea*.  A screenshot of the above code after rendering.

![](https://fluentforms.com/wp-content/uploads/2020/08/image-9-1024x90.png)

### dropdown_label_repeater

```
[
    'key'       => 'key_of_the_setting',
    'label'     => 'Input Label',
    'sub_title' => 'Please specify the data',
    'required'    =>  true, // true/false
    'component' => 'dropdown_label_repeater',
],
```

This is a dropdown label repeater component field. When you need multiple dynamic values to map from the available shortcode dropdown list. A screenshot of the above code after rendering.

![](https://fluentforms.com/wp-content/uploads/2020/08/image-10-1024x148.png)

This component is used in User Registration Integration. If you have a pro version of Fluent Forms you can check how the component is used from here:

fluentformpro/src/Integrations/UserRegistration/Bootstrap.php

### dropdown_many_fields

```
[
    'key'                => 'key_of_the_setting',
    'label'              => 'Input Label',
    'component'          => 'dropdown_many_fields',
    'field_label_remote' => 'Integration Field',
    'field_label_local'  => 'Form Field',
    'options'            => [
        'option1' => 'Option 1',
        'option2' => 'Option 2',

    ]
],
```

This is a dropdown many fields repeater component field same as*dropdown_label_repeater* with a predefined dropdown list. When you need multiple dynamic values from the available shortcode dropdown list you can use this component. A screenshot of the above code after rendering.

![](https://fluentforms.com/wp-content/uploads/2020/08/image-13-1024x270.png)

This component is used in Platformly integration. If you have a pro Fluent Forms version you can check how the component is used from here:

wp-content/plugins/fluentformpro/src/Integrations/Platformly/Bootstrap.php

### radio_choice

```
[
    'key'         => 'key_of_the_setting',
    'label'       => 'Input Label',
    'component'   => 'radio_choice',
    'options'     => [
        ''  => 'No',
        '1' => 'Yes'
    ]
]
```

Radio input type component. A screenshot of the above code after rendering. Pass your option as an array the same as select. A screenshot of the above code after rendering.

![](https://fluentforms.com/wp-content/uploads/2020/08/image-15-1024x76.png)

### number

```
[
    'key'         => 'key_of_the_setting',
    'label'       => 'Input Label',
    'component'   => 'number'
]
```

This component is equivalent to input type number which only allows number input. Here is an output screenshot of the above code.

![](https://fluentforms.com/wp-content/uploads/2020/08/image-17-1024x96.png)

### chained_select

```
[
    'key'            => 'key_of_the_setting',
    'label'          => 'Chained Select Label',
    'component'      => 'chained_select',
    'primary_key'    => 'primary_field_id',
    'fields_options' => [

        'primary_field_id'  => [],
        'second_field_id'   => [],
        'third_field_id'    => []
    ],
    'options_labels' => [

        'primary_field_id => [
            'label'       => 'Select Label',
            'type'        => 'select',
            'placeholder' => 'Select Board'
        ],
        'second_field_id' => [
            'label'       => 'Select Label',
            'type'        => 'select',
            'placeholder' => 'Select Placeholder'
        ],
        'third_field_id'  => [
            'label'       => 'Select Label', 
            'type'        => 'multi-select',
            'placeholder' => 'Select Placeholder'
        ]
    ],
    'remote_url'     => admin_url('admin-ajax.php?action=fluentform_get_data')
]
```

This component name is *chained_select*  which can fetch data from ajax and have field dependent on one another. The *primary_key* is for the main input field ,  you can use this field value to get other fields data using the ‘remote_url’ action . You will need to create method similar to its action name to return data. The fields_options array is for total input fields in this settings.  This keys needs to matched in with ‘options_labels’ . Here you will define the input type components for these fields.

Here is a screenshot of this component form Trello Integration:

![](https://fluentforms.com/wp-content/uploads/2020/08/image-18-1024x190.png)

This component is used in Trello integration. If you have a pro Fluent Forms version you can check the code here:

wp-content/plugins/fluentformpro/src/Integrations/Trello/Bootstrap.php

### chained_fields

```
[
    'key'                => 'key_of_the_setting',
    'label'              => 'Input Label',
    'component'          => 'chained_fields',
    'sub_type'           => 'radio',
    'category_label'     => 'Select Category Label',
    'subcategory_label'  => 'Select Sub Category Label',
    'remote_url'         =>  admin_url('admin-ajax.php?action=your_action_to_get_the_data'),
    'inline_tip'         => 'Add additional text'
],
```

This component is similar to *chained_select* , here two fields are available these are      the keys ‘categories’ & ‘subcategories’. You can initialize the data from ajax. Here is an example of this component.

![](https://fluentforms.com/wp-content/uploads/2020/08/component-chained_fields.gif)

You can find this component in Mail chimp integration file.

[https://github.com/fluentform/fluentform/blob/master/app/Services/Integrations/MailChimp/MailChimpIntegration.php](https://github.com/fluentform/fluentform/blob/master/app/Services/Integrations/MailChimp/MailChimpIntegration.php)

### conditional_block

```
[
    'key'          => 'key_of_the_setting',
    'label'        => 'Conditional Logics',
    'tips'         => 'Allow integration conditionally based on your submission values',
    'component'    => 'conditional_block',
    'tips'         => 'Additional Help Text'

],
```

This component is for conditional logics, if you add this component conditional block will be automatically added with your form fields. Here is a output screenshot.

![](https://fluentforms.com/wp-content/uploads/2020/08/image-20-1024x181.png)

### map_fields

```
[
    'key'                => 'merge_fields',
    'require_list'       =>  true,
    'label'              => 'Map Fields',
    'tips'               => 'Additional Text Field.',
    'component'          => 'map_fields',
    'field_label_remote' => 'Integration Field',
    'field_label_local'  => 'Form Field',
    'primary_fileds'     => [
        [
            'key'           => 'fieldEmailAddress',
            'label'         => 'Email Address',
            'required'      =>  true,
            'input_options' => 'emails'
        ]
    ]
],
```

This component allows you to map multiple fields with a primary key. You can add additional fields by using the getMergeFields method, the keys need to be ‘merge_fields’.  Here is an output screenshot of the component:

![](https://fluentforms.com/wp-content/uploads/2020/08/image-21-1024x295.png)

For reference you can check the mailchimp integration file.

[https://github.com/fluentform/fluentform/blob/master/app/Services/Integrations/MailChimp/MailChimpIntegration.php](https://github.com/fluentform/fluentform/blob/master/app/Services/Integrations/MailChimp/MailChimpIntegration.php)

### list_ajax_options

```
[
    'key'         => 'key_of_the_setting',
    'label'       => 'Label',
    'placeholder' => 'Placeholder',
    'component'   => 'list_ajax_options',
    'options'            => [
        'option1' => 'Option 1',
        'option2' => 'Option 2',

    ]
],
```

This component will allow to list select option from ajax. You will need to create a method for example getLists() to return array format data like the [select](#1-toc-title) component . For reference check Mailchimp integration

[https://github.com/fluentform/fluentform/blob/master/app/Services/Integrations/MailChimp/MailChimpIntegration.php](https://github.com/fluentform/fluentform/blob/master/app/Services/Integrations/MailChimp/MailChimpIntegration.php)

### list_select_filter

```
[
    'key'          => 'key_of_the_setting',
    'require_list' => true,
    'label'        => 'Label',
    'component'    => 'list_select_filter',
    'filter_by'    => 'key_of_the_settings_to_filter',
    'parsedType'   => 'number',
    'placeholder'  => 'Select Double Opt-in Form',
    'options'            => [
        'option1' => 'Option 1',
        'option2' => 'Option 2',

    ]
],
```

This component will return data by filtering with a setting key that you provide. If you have a pro version of Fluent Forms, for reference you can check Active campaign integration.

wp-content/plugins/fluentformpro/src/Integrations/ActiveCampaign/Bootstrap.php

### selection_routing

```
[
    'tips'         => __('Select tags for this subscriber.', 'fluentformpro'),
    'key'          => 'tags',
    'require_list' => true,
    'label'        => __('Contact Tags', 'fluentformpro'),
    'placeholder'  => __('Select Tags', 'fluentformpro'),
    'component'    => 'selection_routing',
    'simple_component' => 'select',
    'routing_input_type' => 'select',
    'routing_key'  => 'tag_ids_selection_type', // No need to change it 
    'settings_key' => 'tag_routers',            // // No need to change it 
    'is_multiple'  => true,
    'labels'       => [
        'choice_label'      => __('Enable Dynamic Tag Selection', 'fluentformpro'),
        'input_label'       => '',
        'input_placeholder' => __('Set Tag', 'fluentformpro')
       ],
    'options'      => $this->getTags()
 ],
```

The selection_routing component allows you to provide a setting that can be either a simple static value (text, select, or value_text) or a set of dynamic values based on conditional logic (“routing”). This is useful for integrations where a value (like tags, emails, etc.) may need to change depending on form input.

Later in your 
```
notify
```

 method you can use it like this, it will return the compiled version of tags. So for example if some one has selected dynamic tags based on conditions, only condition matched tags will be returned here. It will be done automatically.

```
$tags = $this->getSelectedTagIds($feedData, $formData, 'tags');
```

Here is what happens in frontend.

- In the UI, users will see a toggle for “Enable Dynamic Input”.
- In simple mode, a single input is shown.
- In routing mode, users can add multiple rules, each with its own value and conditions.

---

## Creating Custom SmartCode for Form Editor

**Source:** [https://fluentforms.com/docs/creating-custom-smartcode-for-form-editor/](https://fluentforms.com/docs/creating-custom-smartcode-for-form-editor/)

Fluent Forms have custom smartcodes for dynamic data that you can use for form input’s default value. By default, you will get a wide range of dynamic smartcodes including current user info, current embedded post’s information, dynamic dates, the cookie value, URL get parameters, Browser information, IP address, etc.

But If you want to add your own smartcodes then it’s not that hard actually. Let’s see how you can add your own custom smartcode.

## Pushing Smartcode to the suggested list of the Form editor

```
add_filter('fluentform/editor_shortcodes', function ($smartCodes) {
    $smartCodes[0]['shortcodes']['{my_own_smartcode}'] = 'My Own smartcode';
    return $smartCodes;
});
```

By using this code we have hooked the [fluentform/editor_shortcodes](https://github.com/fluentform/fluentform/blob/95fc2e2ad6e9e22999023d319896201ae12227f8/app/Global/Common.php#L128) filter hook and then added our own smartcode {my_own_smartcode} in the available list.

![](https://fluentforms.com/wp-content/uploads/2020/08/Screen-Shot-2020-08-14-at-2.49.34-AM-1024x468.png)Smart code pushed in Available suggestion

## Pushing Smartcode to the suggested list of the Email / Confirmation Settings

```
add_filter('fluentform/all_editor_shortcodes',function($data){
	
	$customShortCodes = [
		     'title'=>'Custom',
                     'shortcodes' => ['{my_own_smartcode}' => 'my_own_smartcode',]
		];
	$data[] = $customShortCodes;
	return $data;
	
},10,1);
```

![Custom Shortcode](https://fluentforms.com/wp-content/uploads/2020/08/Email-Notifications-Fluent-Forms-02-04-2026_04_58_PM-scaled.webp)

## Transforming the value

Now our smartcode has been available and anyone can use that in any input field. Let’s transform that value with something dynamic.

```
/*
 * To replace dynamic new smartcode the filter hook will be
 * fluentform/editor_shortcode_callback_{your_smart_code_name}
 */
add_filter('fluentform/editor_shortcode_callback_my_own_smartcode', function ($value, $form) {
    $dynamicValue = $form->title; // We are send current form title. You can fetch any data and return
    return $dynamicValue;
}, 10, 2);
```

The following code will transform the value for Email and Confirmation Settings.

```
/*
 * Create a custom shortcode for email / confirmation or other after form submit
 * Usage: {my_custom_shortcode}
 * @param $value string original shortcode string
 * @param $parser class \FluentForm\App\Services\FormBuilder\ShortCodeParser
 */
add_filter('fluentform/shortcode_parser_callback_my_own_smartcode', function ($value, $parser) {
    // If you need $submittedData
    $entry = $parser::getEntry();
    $submittedData = \json_decode($entry->response, true);
  
    // if you need form ID
    $formId = $entry->form_id;
    
    return 'my custom value';
}, 10, 2);
```

So in this example, We are adding a composite filter fluentform_editor_shortcode_callback_**my_own_smartcode**. Here **my_own_smartcode** is the keyword of our SmartCode and then returns the current form’s title. You can definitely fetch your own value and return. Please note that You have to always return a number or string. No array or object return is allowed.

![](https://fluentforms.com/wp-content/uploads/2020/08/Screen-Shot-2020-08-14-at-2.58.17-AM-1024x397.png)Dynamic Default Value showing now

## Build Geo Location SmartCode

Let’s build something useful. Some hosting providers provide $_SEREVR variable for geo-data based on IP address. Please note that It depends on your hosting provider. So please check if these $_SEREVR variables are available or not.

- $_SERVER[‘GEOIP_COUNTRY_NAME’] – Return Country Name
- $_SERVER[‘GEOIP_CITY’] – Return City name

So let’s create a smartcode {ffc_geo_country} smartcode which will return the user’s country name.

```
/*
 * Add the smartcode to the list
 */
add_filter('fluentform/editor_shortcodes', function ($smartCodes) {
    $smartCodes[0]['shortcodes']['{ffc_geo_country}'] = 'GEO Country';
    return $smartCodes;
});
/*
 * Transform the smartcode
 */
add_filter('fluentform/editor_shortcode_callback_ffc_geo_country', function ($value, $form) {
    if(isset($_SERVER['GEOIP_COUNTRY_NAME'])) {
        return $_SERVER['GEOIP_COUNTRY_NAME'];
    }
    return '';
}, 10, 2);
```

That’s it. It’s too easy to extend Fluent Forms. Please check the project at [github](https://github.com/fluentform/fluentform).

If you did not start using Fluent Forms then you should definitely give it a try. It’s Free and available in the WordPress Plugin repository

> Fluent Forms – Customizable Contact Forms, Survey, Quiz, & Conversational Form Builder

---

## Submission Lifecycle

**Source:** [https://fluentforms.com/docs/submission-lifecycle/](https://fluentforms.com/docs/submission-lifecycle/)

In this article, we will cover how the Fluent Forms submission Life-cycle happens under the hood. From submit button click to get a confirmation message.

If you are an advanced user open the file **app/Modules/SubmissionHandler/SubmissionHandler.php**file and check the **submit()**method to see the full implementation.

## Server Side Lifecycle

The following steps completed one by one

1. Prepare the submitted the data
2. Validate the data
3. Prepare to insert data
4. Insert the data & initiate integrations and notifications
5. Send the response to the browser as a JSON response

![](https://fluentforms.com/wp-content/uploads/2023/07/ff-submission-life-cycle.png)

## Step 1: Preparing the Data

In this step, Fluent Forms set up the form data, available inputs, and submitted data from the browser. No major hooks fired in this step.

```
// Parse the url encoded data from the request object.
parse_str($this->app->request->get('data'), $data);

// Merge it back again to the request object.
$this->app->request->merge(['data' => $data]);

$formId = intval($this->app->request->get('form_id'));

$this->setForm($formId);

// Parse the form and get the flat inputs with validations.
$fields = FormFieldsParser::getInputs($this->form, ['rules', 'raw']);

// Sanitize the data properly.
$this->formData = fluentFormSanitizer($data, null, $fields);
```

## Step 2: Validate the data

In this step, Fluent Forms validate the submitted data. If there has been any error or validation failure then it sends an error response to the client with in details errors object as JSON.

```
private function validate(&$fields)
{
    // Validate the form restrictions
    $this->validateRestrictions($fields);
    // Validate the form nonce. By default it does not verify as many people use caching
    $this->validateNonce();
    // If recaptcha enabled then it verify it.
    $this->validateReCaptcha();

    // Validate the required fields and offer each element to do their own validation. 
    // Please check the source code to get elements level validation filter hook.
}
```

## Step 3: Prepare insert data

In this step, Fluent Forms prepare the data to insert into the database. You can use the following hooks to alter/format the data as per your need.

- [fluentform/insert_response_data](https://fluentforms.com/docs/fluentform_insert_response_data/) -> Use this to filter the actual response from the client
- [fluentform/filter_insert_data](https://fluentforms.com/docs/fluentform_filter_insert_data/) -> The full entry. You don’t need to use this for almost 99% of cases.

Please check the corresponding filter hook doc for more information and its structure.

## Step 4: Insert the data

In this step Fluent Forms provide an action hook before inserting data, inserting the data, and as well as after the submission hook. It’s an important hook for developers to do extended validations and post custom integrations.

**Before Insert Action Hook:**[fluentform/before_insert_submission](https://fluentforms.com/docs/fluentform_before_insert_submission/)

**After Insert Action Hook:**[fluentform/submission_inserted](https://fluentforms.com/docs/fluentform_submission_inserted/)

If you want to do extended validation please use the [fluentform/before_insert_submission](https://fluentforms.com/docs/fluentform_before_insert_submission/) hook. Check the corresponding hook documentation for more details.

## Step 5: Send a response

This is the final step as everything is done and all the integrations and notifications are being processed. Fluent Forms finds the appropriate confirmation and send a response accordingly. You can use **fluentform/submission_confirmation** filter to alter the confirmation programmatically.

## Server Side Hooks List for Submission

The hooks are fired as below (Step by Step)

- [fluentform/insert_response_data](https://fluentforms.com/docs/fluentform_insert_response_data/) [filter]
- [fluentform/filter_insert_data](https://fluentforms.com/docs/fluentform_filter_insert_data/) [filter]
- [fluentform/before_insert_submission](https://fluentforms.com/docs/fluentform_before_insert_submission/) [action]
- [fluentform/submission_inserted](https://fluentforms.com/docs/fluentform_submission_inserted/) [action]
- [fluentform/submission_confirmation](https://fluentforms.com/docs/fluentform_submission_confirmation/) [filter]
- [fluentform/before_submission_confirmation](https://fluentforms.com/docs/fluentform_before_submission_confirmation/) [action]

## Client Side Submission Lifecycle

When you click the submit button the following steps are completed step by step

1. Validate the data
- If validation is **OK** go to step 2
- If validation failed, Stop and show the error messages
2. prepare form data
3. add loading icon to submit button
4. make the Ajax call to the server and wait for the server’s response
- If the response success then go to step 5
- If the response is failed, stop and trigger jQuery “**fluentform_submission_failed**” event to the jquery form object with the response
5. Trigger jQuery event “**fluentform_submission_success**” in the $form jQuery object with the response
6. Show a success message and redirect the user if confirmation is set so.
7. remove submit button loading.

```
var $inputs = $formSubmission
    .find(':input').filter(function (i, el) {
        return !$(el).closest('.has-conditions').hasClass('ff_excluded');
    });

validate($inputs);

var formData = {
    data: $inputs.serialize(),
    action: 'fluentform_submit',
    form_id: $formSubmission.data('form_id')
};

$(formSelector + '_success').remove();
$(formSelector + '_errors').html('');
$formSubmission.find('.error').html('');

$formSubmission
    .find('.ff-btn-submit')
    .addClass('disabled')
    .attr('disabled', 'disabled')
    .parent()
    .append('<div class="ff-loading"></div>');

$.post(fluentFormVars.ajaxUrl, formData)
    .then(function (res) {
        $theForm.trigger('fluentform_submission_success', {
            form: $theForm,
            response: res
        });

        if ('redirectUrl' in res.data.result) {
            if (res.data.result.message) {
                $('<div/>', {
                    'id': formId + '_success',
                    'class': 'ff-message-success'
                })
                    .html(res.data.result.message)
                    .insertAfter($theForm);
                $theForm.find('.ff-el-is-error').removeClass('ff-el-is-error');
            }

            location.href = res.data.result.redirectUrl;
            return;
        } else {
            $('<div/>', {
                'id': formId + '_success',
                'class': 'ff-message-success'
            })
                .html(res.data.result.message)
                .insertAfter($theForm);

            $theForm.find('.ff-el-is-error').removeClass('ff-el-is-error');

            if (res.data.result.action == 'hide_form') {
                $theForm.hide();
            } else {
                $theForm[0].reset();
            }
        }
    })
    .fail(function (res) {
        $theForm.trigger('fluentform_submission_failed', {
            form: $formSubmission,
            response: res
        });

        showErrorMessages(res.responseJSON.errors);
        scrollToFirstError(350);

        if ($theForm.find('.fluentform-step').length) {
            var step = $theForm
                .find('.error')
                .not(':empty:first')
                .closest('.fluentform-step');

            let goBackToStep = step.index();
            updateSlider(goBackToStep, 350, false);
        }
    })
    .always(function (res) {
        $formSubmission
            .find('.ff-btn-submit')
            .removeClass('disabled')
            .attr('disabled', false)
            .siblings('.ff-loading')
            .remove();
        // reset reCaptcha if available.
        if (window.grecaptcha) {
            grecaptcha.reset(
                getRecaptchaClientId(formData.form_id)
            );
        }
    });
```

---

## Database Tables of Fluent Forms

**Source:** [https://fluentforms.com/docs/database-tables-of-fluent-forms/](https://fluentforms.com/docs/database-tables-of-fluent-forms/)

## fluentform_forms

Contains the forms that exist within Fluent Forms.

**Structure**

| Column | Type | Comment |
| --- | --- | --- |
| id | int(10) unsigned Auto Increment | ID of the form |
| title | varchar(255) | Form Title |
| status | varchar(45) NULL [Draft] | Form Status |
| appearance_settings | text NULL | Appearance Settings as JSON |
| form_fields | longtext NULL | All the form Fields as JSON format |
| has_payment | tinyint(1) [0] | if payment fields available or not |
| type | varchar(45) NULL | Form Type as Text |
| conditions | text NULL | internal usage (currently, not used by any module) |
| created_by | int(11) NULL | User ID of the form creator |
| created_at | timestamp NULL | Create Date |
| updated_at | timestamp NULL | Update Date |

## fluentform_form_meta

Contains metadata associated with forms.

| Column | Type | Comment |
| --- | --- | --- |
| id | int(10) unsigned Auto Increment | Meta ID |
| form_id | int(10) unsigned NULL | Form ID |
| meta_key | varchar(255) | Meta Key |
| value | longtext NULL | meta value |

## fluentform_submissions

Contains Fluent Forms submission entries.

| Column | Type | Comment |
| --- | --- | --- |
| id | bigint(20) unsigned Auto Increment | Entry ID |
| form_id | int(10) unsigned NULL | Associate Form ID |
| serial_number | int(10) unsigned NULL | Incremental Serial Number for this form |
| response | longtext NULL | The full response as JSON format |
| source_url | varchar(255) NULL | Original Source URL of the page/post |
| user_id | int(10) unsigned NULL | Logged in user id |
| status | varchar(45) NULL [unread] | Status: read, unread, trashed, any custom entry status |
| is_favourite | tinyint(1) [0] | 1 if the entry marked as favorite |
| browser | varchar(45) NULL | User Browser’s name |
| device | varchar(45) NULL | Device such as Apple, Microsoft, ipad, android etc |
| ip | varchar(45) NULL | IP address of the submitter |
| city | varchar(45) NULL | Geolocation Data from IP address (For Future usage) |
| country | varchar(45) NULL | Geolocation Data from IP address (For Future usage) |
| payment_status | varchar(45) NULL | Payment status for payment type forms |
| payment_method | varchar(45) NULL | Payment Method for payment type forms |
| payment_type | varchar(45) NULL | Payment Type for payment type forms |
| currency | varchar(45) NULL | Payment Currency for payment type forms |
| total_paid | float NULL | Payment total for payment type forms |
| created_at | timestamp NULL | Created at Timestamp |
| updated_at | timestamp NULL | Updated at Timestamp |

## fluentform_submission_meta

Contains additional metadata related to entries. Mainly Submission notes stored here.

| Column | Type | Comment |
| --- | --- | --- |
| id | bigint(20) unsigned Auto Increment | Meta ID |
| response_id | bigint(20) unsigned NULL | Entry ID. ref: fluentform_submissions table |
| form_id | int(10) unsigned NULL | Form ID. ref: fluentform_forms table |
| meta_key | varchar(45) NULL | Meta Key |
| value | longtext NULL | Meta Value |
| status | varchar(45) NULL | meta status |
| user_id | int(10) unsigned NULL | current user ID |
| name | varchar(45) NULL | Title/name of the note provider |
| created_at | timestamp NULL | Created at Timestamp |
| updated_at | timestamp NULL | Updated at Timestamp |

## fluentform_entry_details

Contains key value pair of each entry for analyze and generating reports from the submitted entries.

| Column | Type | Comment |
| --- | --- | --- |
| id | bigint(20) unsigned Auto Increment |  |
| form_id | bigint(20) unsigned NULL | Form ID. ref: fluentform_forms table |
| submission_id | bigint(20) unsigned NULL | Entry ID. ref: fluentform_submissions table |
| field_name | varchar(255) NULL | Name of the field (input name) |
| sub_field_name | varchar(255) NULL | If has any sub field of the main field then that field name here |
| field_value | longtext NULL | Value of the entry field |

## fluentform_logs

Contains in details logs of Form/Entry. Any module can store details logs here. Currently, Each entry and it’s 3rd party integrations keeps logs for failed or success

| Column | Type | Comment |
| --- | --- | --- |
| id | int(10) unsigned Auto Increment | Log ID |
| parent_source_id | int(10) unsigned NULL | Parent Model ID. It can be form ID |
| source_type | varchar(255) NULL | Categorize field for the log. For entries it’s “submission_item” |
| source_id | int(10) unsigned NULL | Original Source id. For entry log, it’s the submission_id |
| component | varchar(255) NULL | Name of module that is adding this log |
| status | char(30) NULL | Log status. eg: success/failed/info/error |
| title | varchar(255) | Title of the log |
| description | longtext NULL | In details description of the log |
| created_at | timestamp NULL | Create at datetime. |

## fluentform_form_analytics

Contains in detailed form analytics data

| Column | Type | Comment |
| --- | --- | --- |
| id | int(10) unsigned Auto Increment |  |
| form_id | int(10) unsigned NULL | Form ID. ref: fluentform_forms table |
| user_id | int(10) unsigned NULL | Current Logged in user ID |
| source_url | varchar(255) | Source URL of the embedded form |
| platform | char(30) NULL | User Device Platform |
| browser | char(30) NULL | Browser name |
| city | varchar(100) NULL | GeoLocation Data – Not used by any module |
| country | varchar(100) NULL | GeoLocation Data – Not used by any module |
| ip | char(15) NULL | IP address of the user |
| count | int(11) NULL [1] | How many times the form has been viewed |
| created_at | timestamp NULL | Created at datetime |

## fluentform_transactions

For Payment Type forms. Currently It’s not used by any module.

| Column | Type | Comment |
| --- | --- | --- |
| id | int(10) unsigned Auto Increment | Transaction ID |
| form_id | int(10) unsigned NULL | Associate Form ID |
| response_id | bigint(20) unsigned NULL | Associate Entry ID |
| currency | varchar(45) NULL | Currently |
| charge_id | varchar(45) NULL | Charge/3rd Party Transaction ID |
| card_type | varchar(45) NULL | Card Type if Card Payments |
| amount | varchar(45) NULL | Amounts in cent |
| payment_method | varchar(45) NULL | Payment Method |
| payment_status | varchar(45) NULL | Payment Status |
| payment_type | varchar(45) NULL | Payment Type |
| payer_email | varchar(255) NULL | Payer Email |
| user_id | int(10) unsigned NULL | User ID |
| created_at | timestamp NULL |  |
| updated_at | timestamp NULL |  |

*fluentform_transactions: This table structure may change. We are recommending not to use this table for now.*

---

