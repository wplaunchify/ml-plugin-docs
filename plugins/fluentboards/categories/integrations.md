# Integrations

*Category from FluentBoards documentation*

---

## FluentBoards Integration with Backblaze

**Source:** [https://fluentboards.com/docs/fluentboards-integration-with-backblaze/](https://fluentboards.com/docs/fluentboards-integration-with-backblaze/)

Backblaze is a cloud storage solution designed for media hosting, data backups, and building applications using S3-compatible APIs. It offers a secure and convenient way to store and access your data, making backup management seamless.

By integrating FluentBoards with Backblaze B2 Cloud Storage, you can directly interact with your cloud storage and efficiently store your attached data.

In this article, we’ll guide you through the process of integrating your FluentBoards with Backblaze B2 Cloud Storage.

## Backblaze Settings

To connect your **FluentBoards** with Backblaze, go to the **Settings** section of FluentBoards. Then, click on the **Features and Addons** tab from the left sidebar. Here, you’ll find the **Media Storage** option click on the **Settings** button next to it.

![fluentboards digitalocean settings 1 1 1](https://fluentboards.com/wp-content/uploads/2025/01/FluentBoards-DigitalOcean-Settings-1-1-1-scaled.webp)

A pop-up will appear. From here, select **Storage Location: Backblaze B2** from the dropdown menu. You’ll now need some credentials to connect with Backblaze.

Let’s get started with collecting the required credentials.

![fluentboards backblaze settings 1 ](https://fluentboards.com/wp-content/uploads/2025/01/FluentBoards-Backblaze-Settings-1--scaled.webp)

## Get Backblaze Creadentials

Log in to your [Backblaze account](https://secure.backblaze.com/user_signin.htm). Once you’re in, you’ll need to create a **Bucket** to upload and save your files. Go to the **Buckets** section from the left-hand sidebar and click on the **Create New Bucket** button.

![backblaze 1](https://fluentboards.com/wp-content/uploads/2025/01/Backblaze-1-scaled.webp)

After clicking the **Create New Bucket** button, a pop-up window will appear where you can configure your bucket settings. Enter a **Bucket Name** that reflects its purpose (e.g., “FluentBoardsData”).

You must have to set the **Files in Bucket** option to **Public**. This ensures that files stored in the bucket are accessible as needed.

Once configured, click the **Create a Bucket** button to finalize the setup.

![backblaze 2](https://fluentboards.com/wp-content/uploads/2025/01/Backblaze-2-scaled.webp)

Now you will see that your bucket has been created, and some credentials of your bucket will be displayed.

From here, you need to copy the **Endpoint**, which is one of the necessary credentials. Make sure to copy the Endpoint and save it for later use.

![backblaze 3](https://fluentboards.com/wp-content/uploads/2025/01/Backblaze-3-scaled.webp)

Select the **Application Keys** from the left sidebar and then you will see a button **Add a New Application Key**, click on it.

![backblaze 4](https://fluentboards.com/wp-content/uploads/2025/01/Backblaze-4-scaled.webp)

A pop-up will arrive to give the details about the **Application Key**. Here, first, you need to give the **Key Name** in the dedicated key name field. Then select the **Bucket** that you have created earlier.

After that, in the **Type of Access**, select **Read and Write** and then click on the **Create New Key** button.

![backblaze 5](https://fluentboards.com/wp-content/uploads/2025/01/Backblaze-5-scaled.webp)

Now you will see that your **Key ID** and **Application Key** will be given here.

> Note that this pop-up will appear only once. So make sure to copy the credentials as soon as the pop-up arrives.

![backblaze 6](https://fluentboards.com/wp-content/uploads/2025/01/Backblaze-6-scaled.webp)

## Configure Backblaze in your FluentBoards

Now, paste the credentials into the **FluentBoards Backblaze Configuration** section. When you enter the **Endpoint** of Backblaze, you’ll see that the **Region** and **Bucket Name** fields are automatically populated based on the Endpoint details.

![backblaze 8](https://fluentboards.com/wp-content/uploads/2025/01/Backblaze-8.png)

That’s it! Your FluentBoards is now integrated with Backblaze cloud storage, and all your attachments will be uploaded to the Backblaze cloud server. If you have any queries, suggestions, or questions regarding this article, please feel free to [contact us](https://wpmanageninja.com/support-tickets/).

---

## FluentBoards Integration with DigitalOcean

**Source:** [https://fluentboards.com/docs/fluentboards-integration-with-digital-ocean/](https://fluentboards.com/docs/fluentboards-integration-with-digital-ocean/)

DigitalOcean is a reliable cloud storage solution perfect for hosting media, managing backups, and building applications with its scalable and secure infrastructure.

Integrating FluentBoards with DigitalOcean Spaces allows you to directly connect with your cloud storage, enabling seamless data management and efficient file storage for your projects.

In this article, we will guide you through the step-by-step process of connecting your FluentBoards with DigitalOcean.

## DigitalOcean Settings

To connect your **FluentBoards** with DigitalOcean, go to the **Settings** section of FluentBoards. Then, click on the **Features and Addons** tab from the left sidebar. Here, you’ll find the **Media Storage** option click on the **Settings** button next to it.

![media storage settings](https://fluentboards.com/wp-content/uploads/2025/01/Media-Storage-settings-scaled.webp)

A pop-up will appear. From here, select **Storage Location: DigitalOcean Space** from the dropdown menu. You’ll now need some credentials to connect with DigitalOcean.

Let’s get started with collecting the required credentials.

![fluentboards digitalocean settings 2](https://fluentboards.com/wp-content/uploads/2025/01/FluentBoards-DigitalOcean-Settings-2-scaled.webp)

## Get Credentials from DigitalOceans

First, log in to the [Digital Oceans account](https://cloud.digitalocean.com/login) and then click on the **Create** drop-down****button. Then select **Space Object Storage from here to** create a space bucket for storing your data.

![digitalocean 1](https://fluentboards.com/wp-content/uploads/2025/01/DigitalOcean-1-scaled.webp)

Now you will be redirected to the Space Bucket creating page where you have to give the information for your Bucket.

From here first **Choose a Data Center Region** from the dropdown menu and select your suitable data region from the available regions.

Then you have to give a unique **Space Bucket Name** to identify your bucket. Now select the Project from here.

Lastly, click on the **Create a Space Bucket** button to create a Bucket.

![digitalocean 2](https://fluentboards.com/wp-content/uploads/2025/01/DigitalOcean-2-scaled.webp)

Now you will be redirected to a page where you will see the **Origin Endpoint**. Copy the Endpoint from here and save it for later use.

![digitalocean 3](https://fluentboards.com/wp-content/uploads/2025/01/DigitalOcean-3-scaled.webp)

Next, go to the **Settings** tab. Here, you need to create an **Access Key**. Click on the **Create Access Key** button to proceed to the next step.

![digitalocean 4](https://fluentboards.com/wp-content/uploads/2025/01/DigitalOcean-4-scaled.webp)

A pop-up will appear after clicking on the button and here you will see the settings for your Access Key. Now select **Read/Write/Delete (Objects)** from here. After that select the Bucket for which you want to create this **Access Key**.

Giving the Name of the Access Key is optional you can give the name as you want or you can keep the name as it is. Click on the **Create Access Key**button now.

![digitalocean 5](https://fluentboards.com/wp-content/uploads/2025/01/DigitalOcean-5-scaled.webp)

Now your **Access Key ID** and **Secret Key** will be displayed. **Copy** them from here and save them securely for later use.

![digitalocean 6](https://fluentboards.com/wp-content/uploads/2025/01/DigitalOcean-6-scaled.webp)

## Configure Digital Ocean in your FluentBoards

Now paste the credentials into the dedicated fields of your **FluentBoards**. When you enter the **Endpoint**, you’ll notice that the **Storage Bucket Name** and **Region** are automatically filled in.

The **Bucket Subfolder** field is optional—you can add a subfolder if needed. Finally, click the **Save Settings** button to successfully add your DigitalOcean bucket as the cloud storage for your FluentBoards.

![digitalocean 7](https://fluentboards.com/wp-content/uploads/2025/01/DigitalOcean-7-scaled.webp)

If you have any further queries regarding this article, please feel free to [contact us](https://wpmanageninja.com/support-tickets/).

---

## FluentBoards Integration with CloudFlare R2

**Source:** [https://fluentboards.com/docs/fluentboards-integration-with-cloudflare-r2/](https://fluentboards.com/docs/fluentboards-integration-with-cloudflare-r2/)

FluentBoards integrates with Cloudflare R2, helps you to store your media files and manage storage more efficiently right from your WordPress site.

In this guide, we’ll walk you through everything you need to do. You’ll learn how to create and configure an R2 bucket, generate API tokens, and set up the plugin settings inside your WordPress site.

Follow these simple step by step process to connect Cloudflare R2 with your FluentBoards.

## Get your CloudFlare Account ID

First, log in to your [CloudFlare Account](https://dash.cloudflare.com/login). Navigate to **Storage & Databases** > **R2 Object Storage** > **Overview**. On the right side of the page, you will find the **Account Details** section. Your **Account ID** is displayed here. Click the **copy icon** next to the ID to save it for later use.

![copy account id](https://fluentboards.com/wp-content/uploads/2024/09/copy-account-id-1-scaled.webp)

Alternatively, you can find your **Account ID** in the **URL** of your Cloudflare account, as shown in the screenshot below. You can also copy your Account ID from here.

![alternative account 0id 2](https://fluentboards.com/wp-content/uploads/2024/09/alternative-account-0id-2-scaled.webp)

## Create a Cloudflare R2 Bucket

Navigate to **R2 Object Storage** from the left sidebar, find Overview under **R2 Object Storage**, and click on it. Now, click on the **Create Bucket** button to create a bucket.

![create bucket 3](https://fluentboards.com/wp-content/uploads/2024/09/create-bucket-3-scaled.webp)

Enter a **Bucket name** that is easy to identify and unique across your projects. Leave the **Location** of the bucket as **the default** unless you have specific storage.

After that, click the **Create Bucket** button.

![create bucket 4](https://fluentboards.com/wp-content/uploads/2024/09/create-bucket-4-scaled.webp)

## Get the Cloudflare Bucket Public URL

You can now see the Bucket Details. Scroll down to the **Public Development URL** section. Here, you need to enable access to this public URL.

Click the **Enable** link to open a pop-up. Type “allow” in the field to grant access to the **Public Development URL.**

![public development url 5](https://fluentboards.com/wp-content/uploads/2024/09/public-development-url-5-scaled.webp)

A pop-up will appear to **Enable Public Development URL**. Type in ‘allow’ to confirm. Then, press the **Allow** button.

![allow 6](https://fluentboards.com/wp-content/uploads/2024/09/allow-6.webp)

Here, you will get the **Cloudflare Bucket Public URL**.

![copy public url 7](https://fluentboards.com/wp-content/uploads/2024/09/copy-public-url-7-scaled.webp)

## Generate your Access Key & Secret Key

To create a Cloudflare Access Key, go back to the **R2 Object Storage > Overview** page. In the **Account Details** box on the right, click the **{} Manage** button next to **API Tokens**.

![manage 8](https://fluentboards.com/wp-content/uploads/2024/09/manage-8-scaled.webp)

On the next page, click the **Create API token** button.

![create account api 9](https://fluentboards.com/wp-content/uploads/2024/09/create-account-api-9.webp)

Now, configure your token with the following settings:

1. **Token Name:** Give your token a descriptive name.
2. **Permissions:** Select **Object Read & Write**.
3. **Bucket:** Choose the specific bucket you created from the dropdown menu.

Next, click the **Create Account API token** button at the bottom.

![create token 10](https://fluentboards.com/wp-content/uploads/2024/09/create-token-10-scaled.webp)

Here, you will find the **Access Key ID**and **Secret Access Key**. Make sure to **copy** them immediately, as you won’t be able to revisit this page later.

![access key and secrete key 11](https://fluentboards.com/wp-content/uploads/2024/09/access-key-and-secrete-key-11-scaled.webp)

## Configure the FluentBoards with Cloudflare R2

Now access FluentBoards and go to **Settings > Features & Modules**. Here you will see the **Media Storage** section then click on the **Settings** button.

![configure cloudflare r2 12](https://fluentboards.com/wp-content/uploads/2024/09/configure-cloudflare-R2-12-scaled.webp)

A pop-up will appear. Now, select **Cloudflare R2**and enter the credentials you collected from your Cloudflare account in the earlier steps of this guide.

**Cloudflare Account ID:** Input your CloudFlare Account ID.

**Cloudflare Access Key:** Paste the Access Key you received from your Cloudflare API token.

**Cloudflare Secret Key:**Enter the Secret Key from your Cloudflare API token.

**Cloudflare Bucket Name:**Enter the name of the R2 bucket you created.

**Cloudflare Bucket Public URL:**Provide the Public R2.dev Bucket URL.

**Bucket Sub-Folder (Optional):** If you created a subfolder for file uploads, provide its name. Otherwise, leave it empty.

After you’ve completed all the fields, simply click the **Save Settings** button to store your Cloudflare configuration.

![cloudflare r2 13](https://fluentboards.com/wp-content/uploads/2024/09/cloudflare-R2-13-scaled.webp)

## Additional Configuration (Optional)

If you want to advanced setups, you can define your Cloudflare R2 settings in your**wp-config.php** file. This method provides an extra layer of security and is useful for managing configurations across different environments.

```
// CloudFlare R2 Configuration

define('FLUENT_BOARDS_CLOUD_STORAGE', 'cloudflare_r2');

define('FLUENT_BOARDS_CLOUD_STORAGE_ACCOUNT_ID', 'ACCOUNT_ID'); // like: 1718cb5a51e65c8f19e8sahdakh763

define('FLUENT_BOARDS_CLOUD_STORAGE_ACCESS_KEY', 'ACCESS_KEY_HERE');

define('FLUENT_BOARDS_CLOUD_STORAGE_SECRET_KEY', 'SECRET_KEY_HERE');

define('FLUENT_BOARDS_CLOUD_STORAGE_BUCKET', 'BUCKET_NAME');

define('FLUENT_BOARDS_CLOUD_STORAGE_PUBLIC_URL', 'https://pub-SOME_RANDOM_STRINGS.r2.dev'); // You can use the r2 custom domain too

define('FLUENT_BOARDS_CLOUD_STORAGE_SUB_FOLDER', 'my-folder-name'); // optional
```

If defined in `wp-config.php`, these values will override any settings in the plugin’s configuration form.

### Troubleshooting

- Ensure that your API token has the correct permissions for R2 access.
- Double-check that the bucket name and public URL are correct.
- If using a custom domain, make sure it’s properly configured in CloudFlare.

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## FluentBoards Integration with Amazon S3

**Source:** [https://fluentboards.com/docs/fluentboards-integration-with-amazon-s3/](https://fluentboards.com/docs/fluentboards-integration-with-amazon-s3/)

FluentBoards integrates with Amazon S3, allowing you to store media files, improving your site’s loading speed, and managing storage more efficiently.

This guide will walk you through how you can set up **Amazon S3** with **FluentBoards**.

## Get the Amazon S3 account Credentials

Before anything else, make sure you have an **Amazon AWS account** set up. You’ll need the necessary credentials to connect S3 with FluentBoards.

### Creating an S3 Bucket

To get started with Amazon S3, log in to your Amazon AWS [account](https://aws.amazon.com/). From the Dashboard, click on **All Services** in the left sidebar. A full list of AWS services will appear here. Now, scroll down to the **Storage** section and select **S3** to proceed.

![access amazon s3 01](https://fluentboards.com/wp-content/uploads/2024/09/access-amazon-s3-01-scaled.webp)

### Choose your S3 Bucket Region

Before creating your bucket, you’ll need to choose a region. Each S3 bucket is linked to a specific region, and picking the right one can help your site load faster, lower your storage costs, and make sure you’re meeting any data regulations.

For example, if you’re located in Europe, it’s a good idea to go with a region like **EU (Ireland)** or **EU (Frankfurt)** for better performance.

To choose your region, just click on the **Region name** at the top of your AWS console. Then, pick your preferred region from the drop-down menu.

If you’re not sure which one to select, you can check the full list on Amazon’s official [Regions and Endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html) page.

![select region 02](https://fluentboards.com/wp-content/uploads/2024/09/select-region-02-scaled.webp)

After that, create a bucket where all your FluentBoards media files will be stored. To do this, simply click the **Create Bucket** button. This will start the setup process for your new storage bucket.

![create bucket 03](https://fluentboards.com/wp-content/uploads/2024/09/create-bucket-03-scaled.webp)

Now you will be redirected to a new page. Next, fill out the form and set up the right form permissions-

- **AWS Region:** Make sure the region matches the one you selected earlier.
- **Bucket Name:** Enter a unique name for your bucket.
- **Object Ownership:** Select the **ACLs enabled**. Then choose **Object writer** under Object Ownership.
- **Block Public Access Settings for this Bucket:** Disable the **Block all public access**option. Check the box saying **I acknowledge that the current settings might result in this bucket and the objects within becoming public.**
- **Other Settings:**You can customize them based on your needs or keep the defaults.

Finally, click the **Create Bucket**button to complete the process.

![create s3 bucket 04](https://fluentboards.com/wp-content/uploads/2024/09/Create-S3-bucket-04-scaled.webp)

Once your bucket is successfully created, you’ll see a confirmation message, and the bucket will appear in your list.

> Make sure to copy the Bucket Name and Region—you’ll need these to fill in the Bucket Name and Location fields in your FluentBoards settings.

![created bucket 05](https://fluentboards.com/wp-content/uploads/2024/09/created-bucket-05-scaled.webp)

## Creating IAM User for Access

Click the **All Services** dropdown in the AWS navbar or search for **IAM**. Select **IAM** to begin creating a new IAM user for access.

![access iam 06](https://fluentboards.com/wp-content/uploads/2024/09/access-IAM-06-scaled.webp)

Once you’re on the IAM dashboard, click **Users** from the left sidebar under **Access** **management**. Next, click the **Create User** button to create a new IAM user.

![create user 07](https://fluentboards.com/wp-content/uploads/2024/09/Create-User-07-scaled.webp)

Here, enter your desired **User name**. Next, leave the **Provide user access to the AWS Management Console (optional) option unchecked**, as it’s not needed for FluentBoards integration.

Then, click the **Next** button to proceed to the permissions setup.

![user details 08](https://fluentboards.com/wp-content/uploads/2024/09/user-details-08-scaled.webp)

In the **Set Permissions**step, select **Attach policies directly**. Then, search for **AmazonS3FullAccess** in the search bar, select the policy name, and click the **Next** button to proceed.

![set permissison 09](https://fluentboards.com/wp-content/uploads/2024/09/Set-permissison-09-scaled.webp)

You can skip the **Review and Create** step and click the**Create User** button to create the new user.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf2LvNlInyI3ff-OXqHHIioZEBlQiQltrPP9nOLcpnx48aji2JKyIjZuEraq7zdCbGt6iiATSpkpV8sabvQ0txKMNif2IKaeyvqNwq8XxLqbYv_zgpKMwPf9ECLFh-rhnlBJsdrDw?key=NRFgCgcVDDPbgGEqJT_Tn28n)

Your user has been created successfully. In the **Users** section, you will now see the newly created user. Click on the **User Name** to view the details.

![users 11](https://fluentboards.com/wp-content/uploads/2024/09/users-11-scaled.webp)

Go to the **Security Credentials** tab from the User Details page. Here, you will find the **Access Keys** section. Click the **Create Access Key** button to generate new access credentials for the user.

![create access key](https://fluentboards.com/wp-content/uploads/2024/09/create-access-key-scaled.webp)

The steps to create Access Keys will appear. In the **Access key best practices & Aaternatives**step, select the **Other**option and click on the **Next** button to proceed.

![other option 12](https://fluentboards.com/wp-content/uploads/2024/09/other-option-12-scaled.webp)

You can easily skip this step and click the **Create access key** button to generate the access key.

![create access key 13](https://fluentboards.com/wp-content/uploads/2024/09/create-access-key-13-scaled.webp)

Your access key has been created successfully. Now you can see the **Access Key** and **Secret Key** here. Copy these credentials to your clipboard for later use or download them as a CSV file by clicking on the **Download .csv file** button.

![download csv file 14](https://fluentboards.com/wp-content/uploads/2024/09/download-csv-file-14-scaled.webp)

## Configure the FluentBoards with Amazon S3

There are two ways to configure FluentBoards with Amazon S3: **Using the plugin UI** or **Using wp-config.php file.**

### Using the Plugin UI

Go to FluentBoards dashboards **Settings** tab from the top menu. Click the **Feature & Modules**section from the left side bar. Now find the **Media Storage** and click the **Settings**.

![media storage 15](https://fluentboards.com/wp-content/uploads/2024/09/Media-Storage-15-scaled.webp)

After that, a popup will appear here. Now, select **Amazon S3** and paste the credentials you collected from your Amazon AWS account:

- **Amazon S3 Region:** Select the region from the dropdown that matches the one you used when creating your bucket.
- **Amazon S3 Access Key:** Paste the Access Key from the IAM User.
- **Amazon S3 Secret Key:**Paste the Secret Key from the IAM User.
- **Amazon S3 Bucket Name:** Enter the Bucket Name you created in Amazon S3.
- **Bucket Sub Folder (Optional):** If you created a subfolder for file uploads, provide its name. Otherwise, leave it empty.

Finally, click the **Save Settings** button. Your Amazon S3 will now be successfully connected with FluentBoards, and all media files will be stored in Amazon S3.

![using the plugin ui 16](https://fluentboards.com/wp-content/uploads/2024/09/using-the-plugin-ui-16-scaled.webp)

### Using wp-config.php file

Add the following definitions to your wp-config.php file, adjusting the values according to your Amazon S3 setup.

```
```php

// Amazon S3 Configuration

define('FLUENT_BOARDS_CLOUD_STORAGE', 'amazon_s3');

define('FLUENT_BOARDS_CLOUD_STORAGE_REGION', 'your-region'); // us-east-1

define('FLUENT_BOARDS_CLOUD_STORAGE_ACCESS_KEY', '********************');

define('FLUENT_BOARDS_CLOUD_STORAGE_SECRET_KEY', '********************');

define('FLUENT_BOARDS_CLOUD_STORAGE_BUCKET', 'your-bucket-name'); // change with your bucket name

 define('FLUENT_BOARDS_CLOUD_STORAGE_SUB_FOLDER', 'site-name'); // optional

 ```
```

Replace the placeholder values with your actual **Amazon S3**credentials and information.

#### Troubleshooting

- If you encounter permission issues, review your bucket policy and IAM user permissions.
- Ensure that your S3 bucket is in the correct region and that it’s accessible from your WordPress server.
- Check that your access key and secret key are entered correctly without any extra spaces.

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## FluentBoards Integration with Fluent Forms

**Source:** [https://fluentboards.com/docs/fluentboards-integration-with-fluent-forms/](https://fluentboards.com/docs/fluentboards-integration-with-fluent-forms/)

Suppose you have a form on your website from where you want to add a task on your FluentBoards Board. Now you can easily add this task to your board with the Fluent Forms by following a very simple process. Here We will show you how you can configure this integration of FluentBorads with Fluent Form.

## Enable FluentBoards Modules

To integrate FluentBoards with Fluent Forms you need to go to the Fluent Forms **Integration** and then activate the **FluentBoards Module**. Toggle to enable the Fluent Boards Module.

![fluentboards module in fluentform](https://fluentboards.com/wp-content/uploads/2024/05/FluentBoards-Module-in-FluentForm-scaled.webp)

## Integration with Form

Now go to the Specific Form where you want to integrate the FluentBoards. Go to the **Settings & Integration** of that form and click on **Configure Integration**.

Here you will find the **Add New Integration** button select it. Now you will see the **FluentBoards Integration** here, click on it to open the *FluentBoards Integration Feed*.

![fluentboards integration with forms](https://fluentboards.com/wp-content/uploads/2024/05/FluentBoards-Integration-With-Forms-scaled.webp)

## Configure FluentBoards Integration Feed

Now here you need to configure your **FluentBoards Integration Feed** to add a Task from your Fluent Forms to FluentBoard.

**A. FluentBoards configuration:**In the FluentBoards configuration fields, you can select Board, Stage, Labels, Assignees, Priority, and FluentCRM Contact from the dropdown list.

**B. Task Title:** Here you can select a Fluent Forms field with the Shortcode to add as a Task Title.

**C. Submitter Name:** Select the user name field Shortcode to get the Submitter Name.

**D. Submitter Email:** You can gather the Submitter’s Email using Shortcode, which will be matched with a contact in the CRM. If the email belongs to a CRM contact, they will be automatically linked with the task.

**E. Description:** Description will be added as Task Description.

**F. Task Position:** You can select the Task Position in the stage from here.

**G. Due Date:** Set a due date for the task using the **Plus (+)** or **Minus (-)** icons to adjust the date as needed.

**H.** **FluentCRM:** Enable the **Create FluentCRM Contact** option to automatically create a new contact in FluentCRM if the submitter’s email does not already exist in your contact list.

**I.** **Files/Attachments:** Enable the **Map Files/Attachments To Task** option to automatically link uploaded files with the corresponding task during form submission.

**J. Conditional Logics:** Enable the **Conditional Logic** option to run this integration only when certain conditions are met based on the form submission values.

**K. Status:** Enable this feed if you want to create a Task with this Form.

Click on the **Save Feed** button to save this FluentBoards Integration Feed.

![form integration setup](https://fluentboards.com/wp-content/uploads/2024/05/Form_Integration_Setup-793x1024.png)form integration setup

Now, your task will be automatically generated upon form submission and placed into the board and stage you’ve chosen.

If you have any further questions, concerns, or suggestions related to this integration please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).

---

## FluentBoards Integration With FluentCRM

**Source:** [https://fluentboards.com/docs/fluentboards-integration-with-fluentcrm/](https://fluentboards.com/docs/fluentboards-integration-with-fluentcrm/)

FluentCRM automatically integrates with FluentBoards. To manage the Tasks of your Projects both Fluent CRM and Fluent Boards offer you some features.

In this article, we will be explaining those features.

### CRM Contacts in Boards

FluentBoards allows you to add FluentCRM contacts to your tasks. You can view all CRM contacts associated with your board’s tasks in the Boards menu.

To view CRM contacts associated with tasks on a board, go to your board and click on the three-dot button in the top right corner to open the board menu. Then, select **Associate CRM Contacts** to see the CRM contacts linked to your board’s tasks.

![associate contact crm contact 1](https://fluentboards.com/wp-content/uploads/2024/05/Associate-Contact-CRM-Contact-1-scaled.webp)

Clicking on the **Arrow** icon button will reveal the tasks associated with those CRM contacts.

![associate with tasks 1 1](https://fluentboards.com/wp-content/uploads/2024/05/Associate-with-Tasks-1-1-scaled.webp)

### Adding CRM Contacts to Tasks

To associate a CRM contact with your task, follow these steps:

Go to the task where you wish to add the CRM contact or create a new task. In the task pop-up, you’ll find the **CRM Contact** button. Click on this button to include the CRM contact in your board.

![How to add CRM contact on a task](https://fluentboards.com/wp-content/uploads/2024/10/Screenshot-2024-10-14-at-4.39.48 PM.webp)

## Viewing Tasks and Boards Associated with FluentCRM Contacts

To observe tasks and boards linked with your FluentCRM contacts, follow these steps:

Head to the **All Contacts** section from the FluentCRM Dashboard. Open the specific contact that has been added to your board.

Select **FluentBoards** within the contact details. Here, you’ll discover all boards and tasks associated with this contact.

![crm contact fluentboards info](https://fluentboards.com/wp-content/uploads/2024/05/CRM-Contact-FluentBoards-Info-scaled.webp)

## FluentCRM Automation

In Fluent CRM you will get some Automation based on your Board and Task changes. You will get two automation action triggers for boards in FluentCRM those are

- **Contact Added to Task:** This Automation will run when a contact will be added to a task.
- **Stage Changed:**This automation will run when the stage of a task changes.

![automations fluentcrm](https://fluentboards.com/wp-content/uploads/2024/09/Automations-FluentCRM.webp)

## Automation Action

Here you will get a **Create Task** action for your FluentBoards. You can set this **Create Task** action to create a new task in your FluentBoards.

![FluentBoards Task Create Action ](https://fluentboards.com/wp-content/uploads/2024/05/Edit-Funnel-FluentCRM.webp)

Now, a pop-up will appear where you can fill in the necessary details.

**A. Internal label:** Enter a unique and clear task name.

**B. Internal Description:**Add a short description to help you or your team understand the purpose of this task within the automation setup.

**C. Select Board & its stage:**Choose the board where the task should be created. Then, select the specific stage where the task will be placed.

**D. Task Title:** Enter the task title. For additional options, you can insert dynamic shortcodes by clicking the **three-dot**icon.

**E. Due Date:** Set a due date for the task using the **plus (+)** or **minus (-)** icons to adjust the date as needed.

**F. Description:** You can write out the task details in the description field. For dynamic content, click on **Add Smartcode** to insert smart data automatically.

**G. Select Priority:** From the dropdown options, select the priority level for your task: **Low**, **Medium**, or **High**. If no priority is selected, it will default to **Low** automatically.

Once you have completed all the details, click the **Save Settings** button to save and apply your automation task to the board.

![create task](https://fluentboards.com/wp-content/uploads/2024/05/Create-Task-scaled.webp)

That’s all about FluentCRM integration with FluentBoards. If you have any further queries about this article feel free to [reach us](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).

---

## FluentBoards Integration with FluentSupport

**Source:** [https://fluentboards.com/docs/fluentboards-integration-with-fluentsupport/](https://fluentboards.com/docs/fluentboards-integration-with-fluentsupport/)

You can create a task directly from your Fluent Support Tickets. If any Tickets come in your Fluent Support your support agent can add that Tickect as a task on your Fluent Boards.

The integration of Fluent Board and Fluent Support is straightforward. You just need to install both plugins on your site. In this article, we will demonstrate the whole thing.

## Adding Task from Fluent Support Ticket

Go to the Fluent Support Tickets and then open the specific ticket you want to add to your FluentBoards task.

In your ticket, you will see a three-dot button on the top right corner of your ticket. Now click on that **three-dot**button and you will see **Add Task to FluentBoards** select it.

![customer support ](https://fluentboards.com/wp-content/uploads/2024/05/Customer-Support-1-scaled.webp)

Your **Task Title** will be automatically chosen from your Ticket subject field and the Ticket description will be added as a task description.

Here, you’ll find the option to choose the **Board**, **Stage**, **and Date** from the **Dropdown** menu, and the task will automatically be added to the bottom of that stage. Fluent Support Agents can only view the boards to which they have access.

![can t log into my account ](https://fluentboards.com/wp-content/uploads/2024/05/Can-t-Log-into-My-Account--scaled.webp)

> If the ticket opener is a FluentCRM User, they’ll be automatically linked to the task as an Associated CRM contact.

If you need to make further changes to the task, simply open it from your FluentBoards. From there, you can add assignees, set priorities, add labels, adjust dates, and make any other necessary adjustments.

![fluentboards task added from support ticket](https://fluentboards.com/wp-content/uploads/2024/05/FluentBoards-Dev-Team-FluentBoards-scaled.webp)

This outlines all the options available to integrate your Fluent support with Fluent Boards. If you have any additional questions regarding this integration, don’t hesitate to reach out to [us](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).

---

