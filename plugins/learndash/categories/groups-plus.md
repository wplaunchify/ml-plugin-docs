# Groups Plus

*Category from LearnDash documentation*

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

