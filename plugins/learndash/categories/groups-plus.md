# Groups Plus

*Category from LearnDash documentation*

---

## Groups Plus FAQ

**Source:** [https://learndash.com/support/kb/add-ons/groups-plus/groups-plus-faq/](https://learndash.com/support/kb/add-ons/groups-plus/groups-plus-faq/)

Can I convert my LearnDash Groups I’ve already created into Organizations?Yes, simply go to Groups Plus Settings, scroll down to Upgrade LearnDash Groups to Organizations. Check the box for Convert LearnDash Groups to Organizations and click Convert.

Can I create a private Organization?Yes! You can create public Organizations (which can be sold on your site to your customers), or create private Organizations and sell/provide directly to a specific customer.

What capabilities would my customer have within their organization?The customer can not only purchase and create their own Organization on the front end, they can also create Teams, create and assign Team Leaders, create and enroll Team members (users), view detailed reporting, grade assignments and essays, purchase additional seats, and communicate directly with the Team Leaders or Team members. And all of this can be done on the front end providing an enhanced user experience.

What is the difference between the LearnDash Organization product and the LearnDash Organization group product?With the LearnDash Organization product, the customer can select the courses they want within their Organization. Each course becomes a Team. They can also purchase the exact number of seats they need for each Team. After purchasing, they can then add Team Leaders and Team members to those Teams. The LearnDash Organization group product is a pre-created Organization that you build on the back end with the specific courses, and number of seats available. When a customer purchases the LearnDash Organization group product, they can then create their own Teams, add the courses, Team Leader and Team members to each Team. Both options have the ability to purchase additional Seats if needed.

Can I connect BuddyBoss to my Organizations?Yes!

Can I change the slug of the default Groups Plus front end page?There is no option to change the slug of the default Groups Plus administration page however, you can use the shortcode [learndash_groups_plus] on any post or page to have the full administration area for Organizations or Teams. For more detailed information, you can refer to the [Groups Plus Front-end Dashboard documentation.](https://learndash.com/support/kb/add-ons/groups-plus/front-end-dashboard/)

Why is the Groups Plus organization not created after completing a purchase?By default, when an order is placed in WooCommerce, the order status goes to Processing. This is to allow fulfillment of the order. It is only when the order is marked as Completed will the organization be created. (Reference: [https://woocommerce.com/document/managing-orders/order-statuses/](https://woocommerce.com/document/managing-orders/order-statuses/) )

**NOTE:** To bypass the Processing order status, you can mark the product as Virtual. This will allow WooCommerce to mark the order as Completed after a successful purchase, which will then result in the creation of the organization in real time.

---

## Front-end Dashboard

**Source:** [https://learndash.com/support/kb/add-ons/groups-plus/front-end-dashboard/](https://learndash.com/support/kb/add-ons/groups-plus/front-end-dashboard/)

Groups Plus has an **out-of-the-box dashboard page**. The page will be automatically created once the add-on is activated. The website address format would be: [yourdomain.com/learndash-groups-plus](http://yourdomain.com/learndash-groups-plus)

You can also create a custom page for Groups Plus’ front-end dashboard. Here are the two options:

1. Adding the shortcode on a regular page will pull the Groups Plus Dashboard user interface: **[learndash_groups_plus]**
2. Similarly, a Gutenberg Block named **LearnDash Groups Plus** will display the same dashboard.

**Note:** The default Groups Plus front-end dashboard, which uses the /**learndash-groups-plus** page slug, is not editable like regular pages. This design prevents conflicts with other Gutenberg block elements, such as ProPanel.

If you want to use the front-end dashboard alongside other Gutenberg elements, the best approach is to create a regular page instead. Just ensure that you do not use the same default slug to avoid conflicts.

The Group Leader shown in the screenshot is the Lead Organizer for *Some Organization* group. Lead Organizers can manage the available courses, teams, and team leaders.

A Group Leader’s capabilities depend on the enabled settings found in **LearnDash LMS** > **Groups**> **Settings**.

The Group Leader User Settings section includes various options that can be enabled based on customers’ needs.

### Managing an Organization

Only Lead Organizers will have access to the settings page.

**Manage Team**: Allows you to add and delete Teams.

- Delete Team – on the Manage Team tab, click the trash icon next to the team you want to remove, then confirm your decision in the dialog box.

**Add Team**: Switch tabs to create a new Team.

- Click**Manage Organization > Add Team**.
- Give it a team name.
- Fill out the required fields to create a **new team leader**, or tick the **Team Leader already exists?** checkbox to select an existing user.
- Next, select the course(s) you wish to associate with the Team.
- Move them to the****Active Courses box by clicking the right arrow button.
- Then, Save.

### Email

On the main Groups Plus front-end dashboard page, go to Email. Sending emails across your organization comes with two event triggers:

- **Broadcast** – Will be sent immediately to all team leaders
- **Welcome Email** – Will be sent when you add new team leaders

Each event trigger comes with codes to use in the Subject line, or Body to help pull dynamic data such as group name, team leader’s name, and more.l.

### Manage Courses

Allows you to manage courses in teams. Also enables you to add course(s) or remove course(s) from the Team.

**To add course(s) to a Team:**

1. Select the course under Available Courses
2. Click the right arrow button to move to the Active Courses
3. Click the Update Profile button to save

**To remove course(s) from a Team:**

1. Select the course under Active Courses
2. Click the left arrow button to move to the Available Courses
3. Click the Save button at the bottom of the page

### Manage Team Leaders

Allows adding and removing Team Leader to and from a team. Adding a Team Leader to a group will also provide access to the associated courses.

### Manage Team

Click Manage Team to access and manage an individual Team. Learn more about managing a Team on the Front End Dashboard.

### Organization Report

View the entire Organization’s grades through the Organization Report. The Lead Organizer can see each Team along with the average percentage grade for each course, or drill down to view individual Team members’ grades. Click **Export CSV** to download the full Organization Report.

### Managing a Team

Team Leaders can purchase additional seats, add Team Members, view and manage assignments, run reports, and email each member or the entire team.

If you plan to sell Teams, this is the front-end dashboard your customers would see.

#### Add Seats

Using WooCommerce, you can sell both Organizations and Seats. Once enabled, the **Add Seat** button will appear. Customers can purchase additional seats at any time.

**Add Team Members**

Add Team members to your team by going to Add Team Members, entering the Team member’s First and Last Name, Email Address, Username, and Password, then clicking Save.

If the Team member already exists in the system, check the “**Team member already exists?**” box, search for their name, and click Save.

#### Import List

If you have a list of Team Members to bulk import, click Import, then Download CSV template, and fill out the file. Under Upload File, select Browse, choose the completed template, click Open, and then click Save.

#### Email Team

Click Email Team to send a Broadcast Email or set a Team Member Welcome Email. You can also send a Broadcast Message through the message board. To allow Team Members to view messages, use the following shortcode on any page:

**[learndash_groups_plus_message_board]**

#### Email

Click the email icon to the right of a specific Team member to email them directly.

#### Edit

Click Edit to update a Team member’s information or remove them from the team. You can also disable the ability to delete/edit a Team member if needed.

#### Change Password

Change a Team Member’s password by clicking Change Password.

#### Export CSV

Export the Teams report by clicking Export CSV.

---

## WooCommerce LearnDash Teams Products

**Source:** [https://learndash.com/support/kb/add-ons/groups-plus/create-a-team/](https://learndash.com/support/kb/add-ons/groups-plus/create-a-team/)

A **WooCommerce LearnDash Teams product** allows customers to purchase **course seats in bulk** without creating or managing a full Organization. This option is ideal when customers want to buy access for a course or set of courses and assign seats to learners, but do not need Organization-level management features.

With a Teams product, customers purchase a set number of seats and then assign those seats to users through Teams.

This guide explains how to configure and sell LearnDash Teams products using WooCommerce.

## Step 1: Enable WooCommerce Integration

Before creating a Teams product, WooCommerce integration must be enabled.

1. Navigate to **LearnDash LMS → Groups Plus → Settings**.
2. Scroll to the **WooCommerce** section.
3. Enable **WooCommerce Integration**.
4. Click **Save**, then refresh the page.

## Step 2: Enable “Add Seats to Team”

After refreshing the settings page:

1. Return to **LearnDash LMS → Groups Plus → Settings**.
2. In the **WooCommerce** section, enable **Add Seats to Team**.
3. Click **Save**.

This setting allows customers to purchase seats that can be assigned directly to Teams.

## Step 3: Set Per-Seat Pricing for Courses

Each course included in a Teams product requires a per-seat price.

For each course:

1. Edit the course.
2. In the right-hand sidebar, locate **LearnDash Groups Plus WooCommerce**.
3. Enter the **Course Price**.

This price represents the **cost per seat** for the course and is charged in addition to the base Team price.

## Step 4: Create the WooCommerce Teams Product

1. Navigate to **Products → Add New**.
2. Enter a product name, description, and product image.
3. In the **Product data** dropdown, select **LearnDash Teams**.
4. Under **General → Regular Price**, enter the **base Team price**.
- This price is separate from, and added to, the per-seat course prices.
5. Open the **LearnDash Team Courses** section.
6. Select all courses that should be included in the Teams product.
7. Click **Publish**.

The Teams product is now available for purchase.

## Understanding Team Membership Display

In the Groups interface:

- The **Members** column displays only users who have been added to a **Team**.
- The parent Group (Organization) does **not** display members unless those users belong to at least one Team.
- If no users have been assigned to any Team, the Members column for the parent Group will appear empty.

This behavior is expected and helps distinguish between Organization-level structure and Team-level enrollment.

## Conclusion

WooCommerce LearnDash Teams products provide a flexible way to sell bulk course access without requiring customers to manage a full Organization. By separating base Team pricing from per-seat course pricing, this model supports scalable seat-based sales while keeping user management focused at the Team level.

---

## Getting Started with Groups Plus

**Source:** [https://learndash.com/support/kb/add-ons/groups-plus/getting-started-with-groups-plus/](https://learndash.com/support/kb/add-ons/groups-plus/getting-started-with-groups-plus/)

## Installation

You can download the Groups Plus Add-on plugin from [account.learndash.com](https://account.learndash.com/wp-login). First, log in to your account, navigate to your licenses tab, download Groups Plus, and follow the installation instructions below.

## To Install Groups Plus:

1. Navigate to Plugins > Add New
2. Click Upload Plugin
3. Browse for and select the file that you downloaded after purchase. It will be in a 
```
.zip
```

 format.
4. Click Install Now
5. Click Activate Plugin

## Enable Group Hierarchy

For Groups Plus to work, you must enable the Group Hierarchy setting. If you do not already have this feature enabled, a warning message will appear at the top of your page.

![](https://learndash.com/support/wp-content/uploads/2023/02/Groups-Plus-Warning-Message.png)

### To enable Group Hierarchy:

1. Click on the Click here to enable link in the warning message at the top of the page.
2. Scroll down to Global Group Management and Display Settings.
3. Toggle on the Group Hierarchy setting.

### If you don’t see the warning message:

1. Navigate to LearnDash LMS > Groups > Settings
2. Scroll down to Global Group Management and Display Settings.
3. Toggle on the Group Heirarchy setting.

![Group Global Settings Group Management Display Options](https://learndash.com/support/wp-content/uploads/2023/11/Group_Global_Settings_Group_Management-Display-Options.png)Group Global Settings Group Management Display Options

---

## Create an Organization

**Source:** [https://learndash.com/support/kb/add-ons/groups-plus/create-an-organization/](https://learndash.com/support/kb/add-ons/groups-plus/create-an-organization/)

After the **Groups Plus** add-on is installed and activated, LearnDash introduces two group types that allow hierarchical user management:

- **Organizations**
- **Teams**

Organizations represent top-level entities (such as companies or departments). Teams exist within Organizations and allow users and seats to be subdivided for more granular management. This guide explains how Organizations and Teams work, the available Organization types, and how to configure each option.

## Organization and Team Structure

By default, any newly created group is treated as an **Organization**.

A group becomes a **Team** when it is assigned a **Parent Group** (an Organization). This parent–child relationship allows users to be organized into one Organization with one or more Teams beneath it.

- Organizations define:
- Total seat limits
- Available courses
- Lead Organizers
- Teams:
- Inherit seats and courses from the parent Organization
- Are managed by Team Leaders or Lead Organizers

## Types of Organizations

Groups Plus supports two types of Organizations:

- **Private Organizations**
Created and managed manually by an administrator.
- **WooCommerce Organizations**
Sold through WooCommerce, allowing customers to purchase an Organization and manage users and Teams themselves.

Each type is described below.

## Private Organizations

Private Organizations are created and configured manually in the WordPress admin. This option is useful when Organizations are sold or provisioned offline and customized per customer.

### Creating a Private Organization

1. Navigate to **LearnDash LMS → Groups**.
2. Click **Add New**.
3. Enter an Organization name and optional description.

Most settings match standard LearnDash Groups, with additional options specific to Organizations and Teams. Here is a short video that walks you through the process of creating a Private Organization.

### Team Members (Seat Limits)

Private Organizations allow defining the total number of users permitted within the Organization.

- Locate **LearnDash Groups Plus – Team Members**
- Enter a value in **Number of Team Members**

An additional field, **Number not using seats**, allows assigning Lead Organizers without counting them against the total seat limit.

**Example:**

- Team Members: 100
- Not using seats: 5

Total users allowed: **105**

- 100 Team Members
- 5 Lead Organizers

If the “not using seats” field is left empty, Lead Organizers count toward the total seat limit.

Seat totals are typically agreed upon in advance. After creation, seat allocation across Teams is managed by the Lead Organizer.

### Courses

1. Click the **Courses** tab.
2. Select the courses to make available to the Organization.
3. Use the arrow controls to assign courses.

Assigned courses become available to users based on Team membership and available seats.

### Users and Lead Organizers

Open the **Users** tab to manage access.

#### Team Members

This section allows adding regular users. In most cases, this is managed by the Lead Organizer, but administrators can add users if needed.

#### Lead Organizers (Group Leaders)

Lead Organizers are assigned in the **Group Leaders** section.

Users assigned here must already have the **Group Leader** user role.

Group Leaders can act as:

- **Lead Organizers** (Organization-level management)
- **Team Leaders** (Team-level management)

Once assigned, Lead Organizers can manage Teams, users, seats, and course assignments.

## Teams

An Organization can contain one or more Teams.

### Creating a Team

1. Navigate to **LearnDash LMS > Groups**.
2. Click **Add New**.
3. Create the group as usual.
4. In **Group Attributes**, assign a **Parent Group** (Organization).

Once a parent Organization is selected, the group is automatically treated as a Team.

Teams inherit:

- Available courses
- Seat limits from the parent Organization

Seat allocation and Team membership are typically managed by the Lead Organizer.

### Team Leaders

Teams can be managed by Team Leaders using the same Group Leader role.

To assign a Team Leader:

1. Ensure the user has the **Group Leader** role.
2. Edit the Team.
3. Open the **Users** tab.
4. Assign the user under **Group Leaders**.

## WooCommerce Organizations

WooCommerce Organizations allow Organizations to be sold directly from the site. WooCommerce and the LearnDash WooCommerce integration must be installed and configured.

**Important:** WooCommerce checkout must require account creation. Without an account, customers cannot manage Organizations or Teams.

## Pre-Built Organizations (WooCommerce)

Pre-Built Organizations allow configuring an Organization once and selling it multiple times.

Each purchase creates a new Organization instance based on the predefined setup.

### Enable WooCommerce Integration

1. Navigate to **LearnDash LMS → Groups Plus → Settings**.
2. Enable **WooCommerce Integration**.
3. Click **Save**.

Here’s a short video that walks you through setting up a Pre-built Organization.

---

### Create the Pre-Built Organization

1. Go to **LearnDash LMS → Groups → Add New**.
2. Enter an Organization title.
3. (Optional) Assign courses.
4. In **LearnDash Groups Plus WooCommerce**:
- Enable WooCommerce
- Enable Pre-Built Organization
- Enter the **seat price** (per-seat cost)
5. Click **Publish**.

### (Optional) Add Pre-Built Team

1. Create a new Group.
2. Enter a Team title.
3. Assign courses if needed.
4. Set the **Parent Group** to the Organization.
5. Click **Publish**.

### Create the WooCommerce Product

1. Navigate to **Products → Add New**.
2. Enter product details.
3. Set **Product Data** to **LearnDash Pre-Built Organization**.
4. Enter the base Organization price.
5. Select the Organization(s) to sell.
6. Click **Publish**.

## LearnDash Organizations (Dynamic WooCommerce Organizations)

LearnDash Organizations allow customers to build their Organization dynamically during checkout.

Customers select:

- Courses to purchase
- Seat quantities per course

Each purchased course becomes a Team within the Organization.

### Key Behavior

- The Organization is created automatically after purchase
- The buyer is assigned as **Lead Organizer**
- Teams and seats are created dynamically

### Step 1: Set Course Seat Pricing

1. Edit a course.
2. In **LearnDash Groups Plus WooCommerce**, enter a **Course Price**.
3. Click **Save**.

Repeat for all courses to be offered.

### Step 2: Create the Organization Product

1. Navigate to **Products → Add New**.
2. Enter product details.
3. Set **Product Data** to **LearnDash Organizations**.
4. Enter the base Organization price.
5. Select available courses.
6. Click **Publish**.

Customers can now purchase Organizations, select courses, and choose seat quantities.

Here is a short video that walks you through how to create a LearnDash Organization.

## MemberDash Compatibility

MemberDash does not currently integrate with Groups Plus. Organization products require **WooCommerce** and the **LearnDash WooCommerce integration**.

After purchase, Lead Organizers manage Teams and assign Team Leaders using the front-end Groups management interface. Team Leaders are automatically assigned the Group Leader role.

## Conclusion

Groups Plus extends LearnDash Groups by introducing Organizations and Teams, enabling scalable, seat-based access for enterprise and team-based learning. By choosing the appropriate Organization type, Private, Pre-Built, or dynamic LearnDash Organizations, administrators can balance control, automation, and customer self-management based on business needs.

## Frequently Asked Questions

### Can I use MemberDash with Groups Plus to Create an Organization Product?

MemberDash does not have an integration with Groups Plus, so you will need to use the WooCommerce integration to create an Organization Product and sell it.

The [support documentation page here](https://learndash.com/support/kb/add-ons/groups-plus/create-an-organization/#learndash-organizations) has all the details on creating the Organizations you’re looking for. Once an Organization has been sold, the buyer can add Team Leaders to Teams using the front-end interface for managing Groups. The Team Leaders created will have the Group Leader user role in WordPress.

---

## Group Leader

**Source:** [https://learndash.com/support/kb/add-ons/groups-plus/group-leader/](https://learndash.com/support/kb/add-ons/groups-plus/group-leader/)

## What is a Group Leader?

Group Leader is a WordPress user role that LearnDash uses to grant certain permissions to users, allowing them to manage Organizations and Teams.

Group Leaders of an Organization are called Lead Organizers.

Group Leaders of a Team are called Team Leaders.

When your customer purchases an Organization or a Team, they will automatically be given the user role of Group Leader and be added as the Lead Organizer/Team Leader.

**NOTE:** Make sure you update your WooCommerce settings to require that customers have an account, otherwise your customer will have no way of managing their Organization/Team after purchase. For full instructions, please visit our [WooCommerce Integration add-on documentation](https://learndash.com/support/docs/add-ons/woocommerce/#woocommerce-settings).

If you want to manually add a user as a Lead Organizer, or a Team Leader youll first need to give them the user role of Group Leader.

1. To do this, navigate to Users, and select the user you want to make a Group Leader.
2. Scroll down to the User Roles section, and select Group Leader from the list.

![Group Leader Role 2](https://learndash.com/support/wp-content/uploads/2023/11/Group-Leader-Role-2.png)

1. Scroll down and click Update User.
2. Next, navigate to LearnDash > Groups and click on the Organization, or Team that you want to make this user a leader of.
3. Click on the Users tab.
4. Scroll down to the Group Leaders section.
5. Select the user, and click the right arrow in the middle to add that user as a Group Leader.
6. Click Update**.**

That user will now be able to manage the Organization/Team.

![Group Leader Role](https://learndash.com/support/wp-content/uploads/2023/11/Group-Leader-Role.gif)

---

