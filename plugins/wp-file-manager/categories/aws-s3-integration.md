# Aws S3 Integration

*Category from WP File Manager documentation*

---

## AWS S3 Integration < File Manager Pro

**Source:** [https://filemanagerpro.io/article/aws-s3-integration/](https://filemanagerpro.io/article/aws-s3-integration/)

The Amazon S3 (AWS S3) add on for File Manager is a handy feature that will save you time from having to jump back and forth when transferring files. Outlined below are the instructions of installing and configuring the addon with your WordPress website.

**How AWS works:**Once the addon has been purchased, download and install it the same way you would install any other plugin on WordPress. After the installation is complete, be sure to activate the plugin. If you have completed the steps correctly, you will see an AWS option under the File Manager menu. If you click the AWS option you will notice that there are 3 tabs that need to be configured. See the images below:

General

![File Manager AWS](https://filemanagerpro.io/wp-content/uploads/2020/07/aws-settings.png)

User Restrictions

![File Manager Restrictions](https://filemanagerpro.io/wp-content/uploads/2020/07/aws-user-restrictions.png)

**User Restrictions**: This section will allow you to disable users from performing AWS File Manager operations. To setup a rule, click on the “Add rule for Users” button. There are 3 settings available:

- **If User is**: Select a user from the dropdown list which you want to ban from accessing the WP File Manager AWS operations.
- **Disable Operations**: Choose the operations which you want to disable for that specific user.
- **Seperate or private folder access**: Set specific folders of the S3 bucket to be accessed by the user.

![User Restrictions](https://filemanagerpro.io/wp-content/uploads/2020/07/aws-role-restrictions.png)

User Role Restrictions

**User Role Restrictions**: This setting allows you to disable or ban all the users in a specific role from performing [WP File Manager AWS](https://filemanagerpro.io/article/how-to-get-aws-s3-api-details/) operations. Click on the “Add rule for User Roles” button to add rule for the role. There are 3 settings:

- **If User role is**: Select a user role from the dropdown list which you want to ban from accessing the WP File Manager AWS operations.
- **Disable Operations**: Choose the operations which you want to disable for that specific user role.
- **Seperate or private folder access**: You can set specific folders of the S3 bucket to be accessed by this user role.

**Part 2 – Configuration that will be required**

- **Enable AWS**: This setting will allow you to enable AWS in File Manager.
- **AWS Key**: This is required to create the connection with AWS, you can find this within your AWS account.
- **AWS Secret**: This is required to create the connection with AWS, you can find this within your AWS account.
- **AWS Region**: This is required to create the connection with AWS, you can find this within your AWS account.
- **AWS Bucket**: This is the S3 bucket you will want to configure in File Manager.
- **Select User Roles to access WP File manager AWS**: Choose the permissions of the users you assign to access the AWS menu.

**Separate or Private Folder Access**: Use this setting to create a folder structure that allows you to have multiple folders and subfolders. This feature also allows you to make folders private.

**Shortcodes**: There are 2 shortcodes available to display WP FileManager AWS on the frontend.

- ```
[wp_file_manager_aws_s3 key= "your_aws_key" secret= "your_secret_key" region="your_aws_region" bucket="your_aws_bucket" view="list" lang="en" theme="default" allowed_roles="administrator,editor,author" allowed_operations="*" access_folder="separate_folder-name"]
```

In this shortcode key, secret, region, bucket,access_folder are optional to use in the shortcode. The main objective of adding these options is to lower the dependency of General Settings of AWS. You can use any other AWS bucket details here. In this way you can connect multiple AWS buckets using this shortcode

- ```
[wp_file_manager_aws_s3_admin]
```

Using this shortcode you can create an admin view on your wordpress page/post.

---

