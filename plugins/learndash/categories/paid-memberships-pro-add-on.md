# Paid Memberships Pro Add On

*Category from LearnDash documentation*

---

## Paid Memberships Pro Integration

**Source:** [https://learndash.com/support/kb/add-ons/paid-memberships-pro-add-on/paid-memberships-pro/](https://learndash.com/support/kb/add-ons/paid-memberships-pro-add-on/paid-memberships-pro/)

The LearnDash Paid Memberships Pro integration enables you to connect your courses to memberships that you set up in [Paid Memberships Pro](https://www.paidmembershipspro.com/).

Despite its name, the core version of Paid Memberships Pro is actually free (but there are over 60 add-ons if you upgrade to premium).

Paid Memberships Pro can also handle the ecommerce and checkout experience for you, allowing you to bundle multiple courses into a single membership, and automatically granting and removing a member’s access to a course based on their membership status.

LearnDash has some content protection built-in, but Paid Memberships Pro will expand upon that and provide a lot more ways for you to manage memberships, subscriptions and more.

**NOTE**: Please install and activate the free [Paid Memberships Pro plugin](https://www.paidmembershipspro.com/pricing/) before you set up the LearnDash integration. The core plugin is free, and it comes with 6 popular payment gateways. There are over 60 add-ons available if you upgrade to their premium version.

## Why Use Paid Memberships Pro?

A few reasons why you might want to use Paid Memberships Pro in conjunction with LearnDash:

- Create membership levels, and assign a course (or courses) to different levels
- Offer coupons or discount codes for your courses
- Sell courses in a bundle (i.e. one price provides access to multiple courses)
- Sell access to courses as an ongoing subscription

[View all Paid Membership Pro features here](https://www.paidmembershipspro.com/demo/)

## Installation

### Option 1: Add-ons Menu (requires an active LearnDash license)

1. In your WordPress admin area, go to LearnDash LMS > Add-Ons
2. Locate the Paid Memberships Pro for LearnDash add-on
3. Click Install  Now
4. Click the Activate Plugin button

![LearnDash Paid Memberships Pro integration plugin card](https://learndash.com/support/wp-content/uploads/2019/03/learndash-paid-memberships-pro-plugin-card.jpg)

### Option 2: Manual Upload

1. [Download the plugin fil](https://account.learndash.com/plugins/)[e](https://account.learndash.com/plugins/) (must be [logged in](https://account.learndash.com/) to download)
2. In WordPress, navigate to Plugins > Add New
3. Click Upload Plugin
4. Browse for the 
```
.zip
```

 file you downloaded in Step 1
5. Click Install Now
6. Click Activate Plugin

## Create a Membership Level

Before you can assign a LearnDash course to a membership in Paid Memberships Pro, you need to:

- Create a course
- Create a membership level

We’ll assume you have already created a LearnDash course.

To create a membership level in Paid Memberships Pro:

1. Go to Memberships > Settings > Levels
2. Click the Create a Membership Level button
3. Fill out the required information

![Paid Memberships Pro, create a new membership](https://learndash.com/support/wp-content/uploads/2019/03/paid-memberships-pro-create-new-membership-level.jpg)

For more details, check out the video in their [official documentation](https://www.paidmembershipspro.com/documentation/initial-plugin-setup/step-1-add-new-membership-level/).

Before you finish this step, please read the next section on assigning a course to your membership level.

## Assign a Course to a Membership Level

Before you save your new membership level, you’ll want to associate your LearnDash course(s) with it. You do this on the same page as you’re creating it.

This will mean that once a user purchases (or simply gains access to) the membership level, they will automatically have access to the course(s) as well.

![Assign LearnDash course to membership level](https://learndash.com/support/wp-content/uploads/2019/03/learndash-courses-on-pmp-membership-level.gif)

1. On the Memberships > Settings > Levels page…
2. Scroll down and look for the LearnDash heading
3. Next to Courses, choose the course(s) that you want to assign to this membership level

**NOTE:** You may link one, or multiple, courses.

Now you’re finished creating the membership level and assigning your courses to it. Be sure to click the “Save Level” button at the bottom to save your changes.

### Alternative Method

Assigning a course to a membership level is most easily achieved at the time you’re creating your membership. However, you can also control course access via the course page itself.

1. Navigate to LearnDash LMS > Courses
2. Click on the course you’d like to assign to a membership level
3. In the sidebar, look for Require Membership
4. Check the box next to the membership level that this course should be assigned to

![Paid Memberships Pro, require membership metabox](https://learndash.com/support/wp-content/uploads/2019/03/learndash-paid-memberships-pro-require-membership-box.jpg)

**NOTE**: These two methods are synced up. This means, if you change the setting in one place, it will automatically be changed in the other. So just use whichever method is most convenient for you.

## Set Up Your Course

After your membership level is set up in Paid Memberships Pro, youll need to make a few adjustments to your LearnDash course.

![LearnDash closed course button URL for Paid Memberships Pro](https://learndash.com/support/wp-content/uploads/2019/03/learndash-course-access-closed-button-url-pmp.jpg)

1. Navigate to LearnDash LMS > Courses
2. Click on the course that corresponds with a Paid Memberships Pro membership level
3. Click the Settings tab at the top
4. Under Course Access Settings, look for AccessMode
5. Set this to Closed
6. In the Button URL field, enter the URL to your Paid Memberships Pro “Levels Page”

You can find the URL to your  Levels Page  in the WordPress admin area by going to Memberships > Settings > Pages, and click on the  view page  button next to  Levels Page.

Now when people visit your course page, the Take this Course button will send them to the corresponding  Levels Page,  where they can add the membership level to their cart and complete the checkout process.

## Retroactive Member Access

If you already have Paid Memberships Pro installed with live membership levels and members, then after activating Paid Memberships Pro for LearnDash there will be a prompt to run retroactive member access process.

![](https://learndash.com/support/wp-content/uploads/2019/03/retroactive_member_access.png)

Running this process will enroll your existing membership into the LearnDash courses that you associate with your membership levels.

If you are not ready to run this process, you can close the notice. When you are ready to run the retroactive process:

1. Navigate to Memberships > LearnDash
2. Click the Run button

Please allow time for the process to fully complete before moving to another page.

## FAQ

**Q: Which payment gateways can I use with Paid Memberships Pro to sell courses?**A: Please see the Paid Memberships Pro documentation for a [list of supported payment gateways](https://www.paidmembershipspro.com/gateway/).

**Q: Can I use other checkout methods alongside Paid Memberships Pro?**
A: No. If you’re using Paid Memberships Pro to manage course access, you cannot use any other payment gateway or ecommerce integration to manage course access.

**Q: Can a user have multiple membership levels at the same time?**
No. Please see [Paid Membership Pro’s documentation](https://www.paidmembershipspro.com/multiple-membership-levels-per-user-pmpro-workarounds/) for more information & workarounds.

**Q: Why is it showing two transactions on my records?**

A: For LearnDash 4.5.0 or newer, there will be 2 transaction record per single transaction. This is normal and your user will not be charged twice for each transaction. See our explanation on this on our [Payment Transaction Records documentation.](https://learndash.com/support/docs/core/settings/payments/)

---

