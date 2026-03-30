# Groups Management

*Category from LearnDash documentation*

---

## Groups Management

**Source:** [https://learndash.com/support/kb/add-ons/groups-management/groups-management/](https://learndash.com/support/kb/add-ons/groups-management/groups-management/)

The **Groups Management** is a packaged download that includes both the [Groups Plus add-on](https://learndash.com/support/kb/add-ons/groups-plus/getting-started-with-groups-plus/) and the [Group Registration add-on](https://learndash.com/support/kb/add-ons/groups-management/group-registration-for-learndash/). Together, these add-ons help site owners organize learners into groups, manage enrollment options, and review course activity through reporting tools. After purchase, site owners can activate Groups Plus, Group Registration, or both add-ons, depending on their needs. This flexible setup supports group-based learning across multiple courses, allowing each feature set to be used independently or in conjunction with the others.

## Key Features:

- **Group Management**: The add-on allows site owners to create and manage structured organizations within LearnDash. This structure helps maintain clear oversight of courses, learners, and group activity.
- **Comprehensive Reporting**: Built-in reports offer insights into learner progress, including course completion data and quiz performance results. These reports support informed decisions about training goals and outcomes.
- **Self-Service Management**: Group leaders can manage their own organizations from the front end. This includes enrolling team members, viewing progress, and monitoring overall activity within assigned courses.

Groups Management for LearnDash streamlines the administration of learner groups, enhances the user experience, and provides actionable insights through reporting. It helps create a more organized and efficient learning environment, benefiting both instructors and students by streamlining group oversight and tracking course progress.

---

## Group Registration for LearnDash

**Source:** [https://learndash.com/support/kb/add-ons/groups-management/group-registration-for-learndash/](https://learndash.com/support/kb/add-ons/groups-management/group-registration-for-learndash/)

Group Registration connects **WooCommerce** and **LearnDash** to support bulk enrollment workflows. It allows selling course seats, automatically creating LearnDash Groups after purchase, assigning a **Group Leader**, and providing a front-end dashboard for enrollment and reporting.

## Installation, Activation, and Prerequisites

The following plugins must be installed and active:

- **LearnDash LMS**
- **WooCommerce**
- **LearnDash WooCommerce Integration**
- **LearnDash Group Registration**

### Install WooCommerce

1. Go to **Plugins → Add New**.
2. Search for **WooCommerce**.
3. Click **Install**, then **Activate**.

### Install LearnDash WooCommerce Integration

Install and activate the LearnDash WooCommerce Integration add-on (required for Group Registration).

### Install Group Registration

1. Go to **Plugins → Add New**.
2. Click **Upload Plugin**.
3. Select the Group Registration 
```
.zip
```

 file.
4. Click **Install Now**, then **Activate**.

**Note:** The plugin 
```
.zip
```

 can also be downloaded from the LearnDash account dashboard.

## Create a Group Product (WooCommerce)

A **Group Product** is a WooCommerce product that sells seats for one or more LearnDash courses. After purchase, a LearnDash Group is created automatically and the buyer becomes the Group Leader.

### Step 1: Create the product

1. Go to **Products → Add New**.
2. Enter a product name.
3. In **Product data**, select **Simple product**.
4. Enable **Virtual**.
5. Enter pricing.

### Step 2: Associate LearnDash courses

1. Locate the **Related Courses** section.
2. Select the LearnDash course(s) included with this product.

### Step 3: Inventory settings

1. Open the **Inventory** tab.
2. Make sure **Sold individually** is **not** enabled.

## Enable Group Registration Settings (Per Product)

After configuring the WooCommerce product, scroll to the Group Registration section near the bottom of the product edit screen.

1. Enable **Enable Group Registration**.
2. Configure options as needed:

### Key options

- **Allow users to enable Group Registration on the front end**
Allows customers to choose **Individual** or **Group** purchase on the product page.
- **Ask Group Leader to pay for course access**
Requires the Group Leader to consume a seat (and pay for access) rather than receiving automatic access.
- **Unlimited Members**
Allows purchasing unlimited seats and supports setting a separate price for unlimited seats.

Publish the product when finished.

## What Happens After Purchase

When a customer purchases a Group Product:

- A LearnDash Group is created automatically.
- The purchaser is assigned as the **Group Leader**.
- The Group name defaults to the product name (or uses a custom name if provided during purchase, when supported).
- The group can be viewed in the WordPress admin under **LearnDash LMS → Groups**.

## Groups Dashboard (Group Leader Management)

When Group Registration is activated, a page titled **Group Dashboard** is created automatically under **Pages → All Pages**. This page provides the main tools used by Group Leaders to manage enrollment and reporting.

### If the Group Dashboard page is missing

Create a new page and add the shortcode:

```
[wdm_group_users]
```

### Access permissions

- **Administrators** can view and manage all groups (administrators are Group Leaders for all groups by default).
- **Group Leaders** can view and manage only the groups assigned to them.

## Using the Groups Dashboard

The Groups Dashboard includes a **group selector** and multiple tabs. Tabs may vary depending on settings (for example, Group Codes).

### Group selector and seat count

- Group Leaders use a dropdown to select a group (if managing multiple groups).
- The dashboard displays **User Registrations Left**, which indicates remaining seats for the selected group.

### Enrolled Users tab

Shows all enrolled users for the selected group and typically includes actions such as:

- Search users
- Remove users (may trigger a request depending on settings)
- Send invitations or reinvites (if enabled)

### Enroll New User tab

Allows adding users to the selected group in one of two ways:

- **Single enrollment** using first name, last name, and email
- **Bulk enrollment** by uploading a CSV file (available via an upload toggle or tab inside this section)

Behavior:

- If the email address does not match an existing WordPress user, a new user account is created automatically.
- If the user already exists, the user is added to the group and enrolled in the group’s courses.

**Note:** If **User Registrations Left** is 0, the **Enroll New User** tab is hidden. To add seats:
Purchase additional seats for the same product (seats are added automatically), or
Increase the seat count manually by editing the group in WordPress (if available on the group edit screen).

> 

### Report tab

Shows learner progress reports by course.

1. Select a course from the dropdown.
2. View reports for learners in the selected group.

Reports may include:

- Course progress
- Quiz statistics
- Certificates earned

## Optional: Group Codes (Self-Enrollment by Code

Group Codes allow learners to enroll using a code instead of being added manually or via CSV.

### Requirements

To use Group Codes, WordPress must allow user registration (for new users):

- Enable **Anyone can register** in WordPress general settings (site registration setting).

### Enable Group Codes

1. Go to **LearnDash LMS → Group Registration Settings → Group Code**.
2. Enable the Group Code feature.

Once enabled:

- A new menu item appears under **LearnDash LMS → Group Code**.
- A **Group Code** tab appears on the Groups Dashboard (for admins and Group Leaders).

### Create a Group Code (Group Leader or Admin)

On the Groups Dashboard → **Group Code** tab:

1. Click **Create Group Code**.
2. Configure the code fields:

**Code**

- Enter a code manually or generate one automatically.

**From / To Date**

- Define the date range the code is valid.

**Validation Rules (optional)**

- **IP Validation:** restrict usage to a specific IP address.
- **Domain validation:** restrict usage to email addresses from a specific domain (example: 
```
gmail.com
```

).

**Status**

- Set the code to **Active** or **Inactive**.

### View and manage codes

The Group Codes list typically displays:

- Code value
- Expiration date
- Number of users enrolled
- Status

Common actions:

- Copy
- Edit
- Delete
- Toggle status

### Group Code registration form

To allow learners to use Group Codes, configure a registration page for the form.

1. Create a new WordPress page (or use an existing one).
2. Add the shortcode:

```
[ldgr-group-code-registration-form]
```

Logged-in users can be shown only the code field by using:

```
[ldgr-group-code-registration-form register=false]
```

**Note:** Some setups may include this shortcode twice by mistake. Only one instance is needed.

### Optional: reCAPTCHA and enrollment messaging

Group Code settings may include:

- **Google reCAPTCHA v2** configuration for spam protection
- A customizable **success message** after enrollment

Available placeholders may include:

- ```
{group_title}
```
- ```
{user_first_name}
```
- ```
{user_last_name}
```
- ```
{login_url}
```

## Optional: CSV Bulk Enrollment

Group Leaders can enroll users in bulk using CSV upload.

### CSV format

Required columns:

- First Name
- Last Name
- Email

A sample CSV file is typically available on the Groups Dashboard.

### Seat enforcement

If the CSV contains more users than available seats, the upload fails and displays an error.

## Optional: Removal Requests and Reinvites

### Reinviting users

If **Allow Group Leaders to Re-Invite Group Users** is enabled in settings, Group Leaders can send reinvite emails to users (commonly used for password reset flows). Email templates can be customized in Group Registration settings.

### Removing users

Removal behavior depends on settings:

- Some configurations allow Group Leaders to remove users directly.
- Other configurations send a **removal request** to an administrator.

Administrators review removal requests under the relevant group in **LearnDash LMS → Groups** and can accept or reject requests.

## Admin Settings Reference (LearnDash LMS → Group Registration Settings)

Common settings include:

- **Allow Group Leader to remove members without admin approval**
- **Fix Group Limit** (controls whether seats reopen when users are removed)
- **Allow Group Leader to re-invite users**
- **Display courses associated with the group**
- **Redirect users after successful login**
- **Unlimited Members label** (shown on product, cart, and checkout)
- **Display group product footer bar** on product pages
- **Autofill group names**
- **Bulk Discounts**

## Email Templates

Email templates are managed under:
**LearnDash LMS → Group Registration Settings → Email Settings**

Templates can use variables shown beside each template editor. Variables are template-specific and only work in the email block where they are listed.

## Group Leader Default Access and Purchase Options

### Group Leader enrollment behavior

By default, Group Leaders may receive access to the courses included with the Group Product. Settings can require the Group Leader to pay for course access using:

- **Ask Group Leader to pay for course access**

### Default purchase type (Individual vs Group)

The default purchase type can be set to:

- **Individual** (standard single-user purchase)
- **Group** (enables seat purchasing and group creation)

If enabled, customers can change the purchase type on the product page.

## Advanced: Subscription Products

Group Registration can be used with subscription products by configuring a product similarly to a simple product and setting a subscription period (requires WooCommerce Subscriptions or an equivalent setup).

If a subscription ends and is not renewed, associated groups may be moved to **Draft** until renewed (behavior depends on configuration).

## Advanced: Bulk Discounts

Bulk discounts can be configured:

- Globally (applies to all Group Registration products)
- Per product (product-level override)

Discount rules typically apply based on minimum quantity thresholds.

**Note:** Multiple rules should not share the same minimum quantity.

## Advanced: Sub-Groups

Sub-groups allow dividing a parent group into smaller groups and allocating seats to each sub-group.

### Enable sub-groups

Enable group hierarchy under LearnDash group settings (Global Group Management and Display Settings).

### Create a sub-group (Groups Dashboard)

Sub-group creation typically includes:

- Sub-group name
- Seat allocation (deducted from the parent group)
- Sub-group leader
- Users moved from parent to sub-group
- Courses allocated to the sub-group

Sub-groups cannot create additional sub-groups.

## Advanced: Additional Group Options (v4.3.0+)

Additional options can allow Group Leaders to:

- Create/purchase multiple groups from the same Group Product
- Increase seats for an existing group
- Add courses to an existing group

Administrators can configure:

- Which additional courses are available for purchase
- How additional course pricing is calculated

Pricing approaches may include:

- Fixed cost per additional course
- Multiple-of-price for unlimited-seat setups
- Per-seat course price multiplied by seat count (limited-seat setups)

## Advanced: Custom Fields

Custom fields can capture additional information during enrollment.

Custom fields can be added to:

- Group Code registration form
- Enroll New User form (Groups Dashboard)
- CSV uploads

Supported field types typically include:

- Number
- Text / Textarea
- Checkbox

Common options include:

- Required field toggle
- Freeze first input (prevents overwriting the first saved value)

## Advanced: WooCommerce Add-to-Cart URL Parameters

WooCommerce supports adding products to the cart via URL parameters, including quantity and (for variable products) variation identifiers.

Group Registration extends this with LDGR parameters:

### Supported LDGR parameters

- ```
ldgr_group_name
```

Adds a Group Product to the cart and sets a group name.

Example:

```
http://example.com/cart/?add-to-cart=18&ldgr_group_name=Group%20Product
```

- ```
ldgr_group_id
```

Adds seats to an existing group (requires the group’s related product ID and the group post ID).

Example:

```
http://example.com/cart/?add-to-cart=18&ldgr_group_id=36
```

### Find product ID and variation ID (WooCommerce)

For variable products:

1. Go to **Products** and locate the product ID in the products list table.
2. Edit the product → **Product data → Variations**.
3. Expand a variation to view the variation ID.

### Find the related product for a group

1. Go to **LearnDash LMS → Groups**.
2. Open a group created by Group Registration.
3. Locate the related product information (often shown near seat/registration fields).

## Conclusion

Group Registration enables seat-based course access in LearnDash by connecting WooCommerce product purchases to automatic group creation, enrollment management, and reporting. Core setup involves creating a Group Product, enabling Group Registration options, and confirming the Groups Dashboard page is available. Optional features such as Group Codes, CSV enrollment, bulk discounts, sub-groups, and advanced purchase options can be enabled as needed.

---

## Global Settings

**Source:** [https://learndash.com/support/kb/add-ons/groups-management/global-settings-2/](https://learndash.com/support/kb/add-ons/groups-management/global-settings-2/)

## Global Groups Plus Settings

The Groups Plus settings screen allows you to set some global options that will apply to all Organizations on your site. We organized Groups Plus settings into a few sections, outlined below.

To access your global Groups Plus settings:

1. Go to LearnDash LMS > Groups Plus
2. Click the Settings tab

### Communication

**Enable team message board:**This enables the Team Leaders to communicate with their specific Team Members via a message board.

Once enabled, you can add the LearnDash Groups Plus Message Board Block to any page. This block is where the Team members will see messages posted by their Team Leader.

![](https://learndash.com/support/wp-content/uploads/2023/02/Message-Board-Block.png)

Or use the shortcode:

```
[learndash_groups_plus_message_board]
```

**PRO TIP:** Consider adding the LearnDash Groups Plus Message Board Block or shortcode to the [User Profile](https://learndash.com/support/docs/guides/user-profiles/) page. Adding the block will keep all the Team members’ (Users’) important information on one page.

**NOTE:** The message board is not a two-way communication tool. Instead, it is an on-screen message broadcast tool.

### Users

**Team Leaders use Seats**– Enabling this feature will allow you to set the number of Team Leaders allowed who will not count against the total number of seats available within each Organization.

**NOTE:** This feature will only work for private Organizations not used in WooCommerce. If you are using WooCommerce, you cannot set the Seat amount for Team Leaders or Team Members.

**Lock Team Leaders’ and Team Members’ Names**: This restricts Team Leaders and Team Members from being able to change their names on the front end.

**Allow existing Users to be updated**: Enabling this feature allows existing users’ information to be updated whenever importing users’ data.

**Allow Team Members to have certificate access**:  This will allow users to view/download/print their certificate. If not enabled, the Team Leader can provide the certificates.

**Show all quiz attempts in detailed Team Member report**: Enable this to show all quiz attempts.

**Allow all Organizers to see all users**: Allow the Organizer to see all users that are Subscribers in the platform when selecting User already exists.

### WooCommerce

The WooCommerce settings will only appear once you have installed the [WooCommerce](https://woocommerce.com/) plugin. You will also need the [LearnDash WooCommerce Integration Add-on](https://learndash.com/support/docs/add-ons/woocommerce/) installed for this feature to work.

**Enable WooCommerce Integration**: Check this box if you are using WooCommerce to sell your Organizations.

**NOTE:** You must enable the WooCommerce Integration feature and click Save before the additional WooCommerce settings appear.

**Enable Add Seats to Teams**: Enable this setting to sell additional seats to an existing Team (within an Organization or outside an Organization).

**Enable Team Leader to add subscription-based seats to teams**:  Allows Team Leaders to add subscription-based seats to their Team (WooCommerce Subscription Products are required).

### Upgrade LearnDash Groups to Organizations

**Convert LearnDash Groups to Organizations and Teams**: Check this box and click the  Convert  button to convert all your Top-Level Groups into Organizations. Groups converted to Organizations will now have a child team within the Organization of the same name. Group Leader(s), Course(s) and Team Members from the old top-level Group would now be in the new Team. As a result, the Organization would no longer have members in its primary Group. Converting LearnDash Groups to Organizations is a **global** change.

### Downgrade Organization to Normal Group

**Downgrade Organization to Normal Group**: Check this box and click the  Downgrade  button below to convert your Organization back to the normal Groups, and return their parent groups to normal LearnDash groups.

### Global Email

This add-on also allows you to customize the email invitations sent to Team Leaders and Members. For example, you can configure the global team leader and team member welcome emails from here. Configuring these global emails will make them the default email for all team members and team leaders invitations. However, these emails will be overridden by Team Leader and Team Member Welcome emails if each Organization or Team creates its emails from the below organization panel, as shown below.

![](https://learndash.com/support/wp-content/uploads/2019/04/email-group.png)

For both Team Leader and Team Member invitation emails, all you need to do is:

1. Add the subject line
2. Compose the body of the email; you can use the merge codes available to personalize the email that you will be sending:

```
{group_name}

{childgroup_name}

{team_leader_name}

{team_leader_username}

{password}

{autologin}
```

Beyond the custom email merge codes we provide below, you can use the LearnDash shortcodes found using the toolbar icon.

---

## Groups Plus Add-On

**Source:** [https://learndash.com/support/kb/add-ons/groups-management/groups-plus-add-on/](https://learndash.com/support/kb/add-ons/groups-management/groups-plus-add-on/)

Groups Plus is a premium LearnDash add-on that modifies LearnDash Groups Hierarchy to create Organizations.Using WooCommerce, you can create and sell entire Organizations like you would a course and allow your customers to purchase individual course seats within their Organization. Or create a private Organization and enroll your customers on the back end.

With Groups Plus, your customers will have front-end management of their own Organization. Users can enroll and manage their Team Leaders and Team members, access reporting, grading, and more on the front end.

For a detailed explanation of the settings, please visit the following articles:

- [Getting Started with Groups Plus](https://learndash.com/support/docs/add-ons/groups-plus-add-on/getting-started-with-groups-plus/)
- [Global Settings](https://learndash.com/support/docs/add-ons/groups-plus-add-on/global-settings/)
- [Group Leader](https://learndash.com/support/docs/add-ons/groups-plus-add-on/group-leader/)
- [Create an Organization](https://learndash.com/support/docs/add-ons/groups-plus-add-on/create-an-organization/)
- [Create a Team](https://learndash.com/support/docs/add-ons/groups-plus-add-on/create-a-team/)
- [Front-end Dashboard](https://learndash.com/support/docs/add-ons/groups-plus-add-on/front-end-dashboard/)
- [FAQ](https://learndash.com/support/kb/add-ons/groups-plus/groups-plus-faq/)

---

