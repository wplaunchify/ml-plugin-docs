# Migration

*Category from FluentCommunity documentation*

---

## FluentCommunity BuddyPress Migration

**Source:** [https://fluentcommunity.co/docs/fluentcommunity-buddypress-migration/](https://fluentcommunity.co/docs/fluentcommunity-buddypress-migration/)

If you have a large number of members and their data stored in BuddyPress and want to migrate them to FluentCommunity, the process is quick and straightforward.

In this article, we’ll guide you through the steps to migrate your data from BuddyPress to FluentCommunity.

## Manage Migration Settings

To migrate your BuddyPress data into FluentCommunity, start by navigating to your FluentCommunity dashboard. Click on the **Settings** button located at the bottom-right corner of the screen.

In the settings menu select **Manage Migration** from the left sidebar and you’ll find the **Migrate Data from Other Plugins** section. Here, you’ll see the **BuddyPress Module** option. Simply click on it to initiate the migration process.

![](https://fluentcommunity.co/wp-content/uploads/2025/01/BuddyPress-Data-Migration-in-FluentCommunity-1-scaled.webp)

Once you access the **BuddyPress Module**, you’ll see the BuddyPress migration options.

**Key Notes for Migration**

Before proceeding, keep these important points in mind:

1. **Groups to Spaces**
- BuddyPress Groups will be added to FluentCommunity as Spaces.
2. **Members Migration**
- All Group Members in BuddyPress will automatically become members of the corresponding Spaces in FluentCommunity.
- All BuddyPress Members will be imported into FluentCommunity.
3. **Posts and Interactions**
- All Posts from BuddyPress will be migrated to FluentCommunity.
- Comments and reactions associated with these posts will also be migrated.
4. **Profile Pictures and Avatars**
- Uploaded profile and space pictures will **not** migrate.
- However, if a profile includes an avatar as the profile picture, it will migrate successfully.

These are the data elements that will be migrated during the migration process.

## Start the Migration

Here, you can map BuddyPress Groups to specific groups in FluentCommunity, and they will appear under the designated groups within FluentCommunity.

Once you’re ready, click on the **Start Migrating Data** button to initiate the migration. Your BuddyPress data will now move to FluentCommunity with just a few clicks!

![](https://fluentcommunity.co/wp-content/uploads/2025/01/BuddyPress-Data-Migration-in-FluentCommunity-2-scaled.webp)

Upon the migration completion, you will get a Congratulatory notification for your migration.

![](https://fluentcommunity.co/wp-content/uploads/2025/01/BuddyPress-Data-Migration-in-FluentCommunity-3-scaled.webp)

Feed Preview

All the posts, along with their reactions and comments, have been successfully migrated from BuddyPress to FluentCommunity. You can now view them seamlessly within your FluentCommunity setup.

![](https://fluentcommunity.co/wp-content/uploads/2025/01/BuddyPress-Data-Migration-in-FluentCommunity-4-scaled.webp)

Space Preview

All the BuddyPress Groups have been successfully migrated to the Space section of FluentCommunity. For the BuddyPress Groups you mapped to specific Groups in FluentCommunity, they will now appear under those designated Groups within FluentCommunity.

![](https://fluentcommunity.co/wp-content/uploads/2025/01/BuddyPress-Data-Migration-in-FluentCommunity-5-scaled.webp)

Members Preview

When you view the Members section of your FluentCommunity, you’ll notice that all BuddyPress members have been successfully migrated. These members will also be assigned to the corresponding Spaces in FluentCommunity, mirroring their previous associations in BuddyPress Spaces.

![](https://fluentcommunity.co/wp-content/uploads/2025/01/BuddyPress-Data-Migration-in-FluentCommunity-6-scaled.webp)

This is how you can seamlessly migrate your BuddyPress data into FluentCommunity. If you have any further questions, suggestions, or inquiries, please don’t hesitate to reach out to [us](https://wpmanageninja.com/support-tickets/).

---

## FluentCommunity BuddyBoss Migration

**Source:** [https://fluentcommunity.co/docs/fluentcommunity-buddyboss-migration/](https://fluentcommunity.co/docs/fluentcommunity-buddyboss-migration/)

If you have a large community with data stored in BuddyBoss and wish to transfer it to FluentCommunity, the process is simple and quick, requiring just a few clicks.

In this guide, we’ll show you two different ways to migrate your data from BuddyBoss to FluentCommunity. You can either use the WordPress CLI method (recommended for faster, large migrations) or the plugin’s built-in migration tool. We’ll walk you through both options step by step.

## Migration Using WP-CLI (Recommended)

If you have a **very large community**, using the WordPress CLI (WP-CLI) tool for migration is recommended because it’s faster and more reliable than running it inside the WordPress admin.

To start the migration, run this command in your server terminal:

```
wp fluent_community migrate_from_bb
```

> This CLI migration may overwrite or reset existing FluentCommunity data before importing BuddyBoss data. Make sure to take a full site backup before proceeding.

This command will migrate all your BuddyBoss data including:

- Comments and reactions
- Groups → Spaces
- Members
- Posts and interactions

## Migrate Through the UI

To migrate your BuddyBoss data into FluentCommunity, start by going to your FluentCommunity dashboard. Click on the **Settings** button located at the bottom-right corner of the screen.

In the settings menu select **Manage Migration** from the left sidebar and you’ll find the **Migrate Data from Other Plugins** section. Here, you’ll see the **BuddyBoss Module** option. Simply click on it to initiate the migration process.

![](https://fluentcommunity.co/wp-content/uploads/2025/01/FlunetCommunity-BuddyBoss-Migration-1-scaled.webp)

Once you access the **BuddyBoss Module**, you’ll see the BuddyBoss migration options.

**Key Notes for Migration**

Before proceeding, keep these important points in mind:

- **Groups to Spaces** – BuddyBoss Groups will be added to FluentCommunity as Spaces.
- **Members Migration** – All Group Members in BuddyBoss will automatically become members of the corresponding Spaces in FluentCommunity. All BuddyBoss Members will be imported into FluentCommunity.
- **Posts and Interactions** – All Posts from BuddyBoss will be migrated to FluentCommunity. Comments and reactions associated with these posts will also be migrated.
- **Profile Pictures and Avatars** – Uploaded profiles and space pictures will not migrate. However, if a profile includes an avatar as the profile picture, it will migrate successfully.

These are the data elements that will be migrated during the migration process.

## Start the Migration

Here, you can map BuddyBoss Groups to specific groups in FluentCommunity, and they will appear under the designated groups within FluentCommunity.

Once you’re ready, click on the **Start Migrating Data** button to initiate the migration. Your BuddyBoss data will now move to FluentCommunity with just a few clicks!

![](https://fluentcommunity.co/wp-content/uploads/2025/01/FlunetCommunity-BuddyBoss-Migration-2-scaled.webp)

Upon the migration completion, you will get a Congratulatory notification for your migration.

![](https://fluentcommunity.co/wp-content/uploads/2025/01/FlunetCommunity-BuddyBoss-Migration-3-scaled.webp)

Feed Preview

All the posts, along with their reactions and comments, have been successfully migrated from BuddyBoss to FluentCommunity. You can now view them seamlessly within your FluentCommunity setup.

![](https://fluentcommunity.co/wp-content/uploads/2025/01/FlunetCommunity-BuddyBoss-Migration-4-scaled.webp)

Space Preview

All the BuddyBoss Groups have been successfully migrated to the Space section of FluentCommunity. For the BuddyBoss Groups you mapped to specific Groups in FluentCommunity, they will now appear under those designated Groups within FluentCommunity.

![](https://fluentcommunity.co/wp-content/uploads/2025/01/FlunetCommunity-BuddyBoss-Migration-5-scaled.webp)

Members Preview

When you view the Members section of your FluentCommunity, you’ll notice that all BuddyBoss members have been successfully migrated.

![](https://fluentcommunity.co/wp-content/uploads/2025/01/FlunetCommunity-BuddyBoss-Migration-6-scaled.webp)

This is how you can migrate your BuddyBoss data into FluentCommunity. If you have any further questions, suggestions, or inquiries, please don’t hesitate to [contact us](https://wpmanageninja.com/support-tickets/).

---

