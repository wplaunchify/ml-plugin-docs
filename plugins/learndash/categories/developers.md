# Developers

*Category from LearnDash documentation*

---

## Adding Fields to LearnDash Registration Forms with Advanced Custom Fields (ACF)

**Source:** [https://learndash.com/support/kb/resources/developers/adding-fields-to-learndash-registration-forms-with-advanced-custom-fields-acf/](https://learndash.com/support/kb/resources/developers/adding-fields-to-learndash-registration-forms-with-advanced-custom-fields-acf/)

## Why Custom Registration Fields Matter for Course Providers

Elevate your course experience by unlocking powerful student insights with custom registration fields. Custom registration fields help you better understand your students’ experience, goals, and learning needs from the start. Using the information collected, you can match students to the right level courses, adjust your course content and materials to align with their specific objectives, and accommodate different learning requirements and preferences.

Collecting this data also empowers you to make more informed decisions about new course development, marketing, and course improvements. Using a personalized approach helps you make informed decisions with new data points, and generates a higher rate of student satisfaction.

Remember: Only ask for information you’ll actually use to improve your courses or student experience. Each field should have a clear purpose!

The guide below will walk you through the process of creating and implementing custom fields to collect the information you need to increase engagement and streamline learning experiences.

## Getting Started

1. You’ll need an active LearnDash Registration Form on your website. This form must already exist so you can insert your custom fields.
2. Download the ZIP plugin file from the ACF website. You can find the free version as well as the premium version of the plugin [here](https://www.advancedcustomfields.com/). 
Once you are there, you’ll see a “Download” button with the most current software version number. Click on that to Download the latest version for your installation
3. Now you should have an advanced-custom-fields ZIP file in your Downloads folder. Note that some browsers (specifically Safari) automatically unzip ZIP files upon download. If you see a folder instead of a ZIP file, you’ll need to ZIP that folder before proceeding.
4. Next you need to upload the ZIP file to your WordPress website.
5. To do this, navigate in your WordPress admin to “Plugins > Add New Plugin”. From there click on “Choose File”. That will open your computer’s file system for you to find the ZIP file you previously downloaded. Choose that and click the Install Now button.

**Note:**For the purposes of this article, you just need the free version!

## Creating Your Custom Fields

Once you’ve activated ACF and have your Registration form, go to ACF > Custom Fields section in your WordPress admin dashboard. Click Add New to create a Fields Group and name the Fields Group so you can identify it as part of your registration system. For example: “Extra Registration Fields”. Then, add your Custom Fields.

1. 

- Field Type: Select the appropriate field type for each custom field. You have various field types available, like text areas, radio buttons, check boxes, etc.
- Field Label: Provide a label for each field.
- Additional Options: You can make fields required, set character limits, and add placeholder text.

![Edit Field Group Menu ACF](https://learndash.com/support/wp-content/uploads/2024/12/fields-open-to-edit-o.png)

## Set Location Rules

To ensure your custom fields appear on the LearnDash Registration Form, you’ll need to set up Location Rules:

1. Create a New Rule: In the location rules section, create a rule to display the fields on the user form.
2. Set User Form to “All”: Ensure the rule is set to “User Form is equal to All”.
3. Save Changes: Click “Save Changes” to apply your new settings.

![Relocation Rules](https://learndash.com/support/wp-content/uploads/2024/12/location-rules-o-o.png)

The new Custom Registration Fields created with ACF will magically appear on the LearnDash Registration Form. Nothing else needed!

![Registration Form with Custom Fields](https://learndash.com/support/wp-content/uploads/2024/12/registration-form-w-custom-fields-o.png)

## Viewing Custom Field Data in WordPress User Profile

Custom fields are visible in two places: on the registration form itself, and on the User Profile Page once the user registers.

Additionally, administrators can view and edit these fields from the WordPress admin dashboard. The fields will also populate any values that the students have entered while submitting the LearnDash Registration Form.

- User Profile Page: Users will see the additional fields on their profile page.
- Admin Dashboard: Administrators can view and edit custom field data by navigating to the “All Users” section and editing a specific user.

![Custom fields in the User Profile](https://learndash.com/support/wp-content/uploads/2024/12/fields-in-user-profile-screen-o-o.png)

---

## Protecting Files

**Source:** [https://learndash.com/support/kb/resources/developers/protecting-files/](https://learndash.com/support/kb/resources/developers/protecting-files/)

In some situations, only specific users should be able to download or access files on a website. File protection helps prevent direct access to sensitive files while still allowing LearnDash features to function as intended. LearnDash stores certain files in the following directory on the web server:

```
/wp-content/uploads/learndash
```

These files may include exports or other system-generated assets that should not be publicly accessible.

The most common way to protect these files depends on the web server in use:

- Apache servers use an **.htaccess** file
- Nginx servers use rules inside a **server configuration file**

## Protecting Files on Apache Servers

### How It Works

Apache allows directory-level access control using an 
```
.htaccess
```

 file. This file is placed directly inside the directory that needs protection.

When configured, the server blocks direct access to files in that directory.

### Steps

1. Locate the directory that should be protected (for example:

```
/wp-content/uploads/learndash
```

).
2. Create a file named 
```
.htaccess
```

 inside that directory.
3. Add the following rules to the file:

```
Order Allow,Deny
Deny from all
```

These rules prevent files in the directory from being downloaded or accessed directly via a browser.

### Additional Resources

For a full overview of 
```
.htaccess
```

 functionality and supported directives, refer to the official Apache documentation:
[https://httpd.apache.org/docs/2.4/howto/htaccess.html](https://httpd.apache.org/docs/2.4/howto/htaccess.html)

## Protecting Files on Nginx Servers

### How It Works

Nginx does not use per-directory configuration files like 
```
.htaccess
```

. Instead, access rules are managed from a central server configuration file.

Directory protection is handled using 
```
location
```

 blocks.

### Basic Rule Example

To deny access to a specific directory, add the following rules to the appropriate server configuration file:

```
deny all;
return 403;
```

This configuration blocks all direct access and returns a **403 Forbidden** response.

### LearnDash Export Directory Example

To protect files generated by the LearnDash Import/Export feature, add the following block:

```
location "/wp-content/uploads/learndash/export" {
    deny all;
    return 403;
}
```

This ensures exported LearnDash files cannot be accessed directly from the browser.

### Additional Resources

For a full overview of Nginx configuration options, refer to the official Nginx documentation:
[https://www.nginx.com/resources/wiki/start/topics/examples/full/](https://www.nginx.com/resources/wiki/start/topics/examples/full/)

## Server File Protection vs REST API Access (LearnDash 5.0)

Server-level file protection applies only to direct file downloads. It does not affect access through the LearnDash REST API.

Key points:

- Server rules (
```
.htaccess
```

 or Nginx) block direct file URLs
- REST API endpoints remain available at:

```
/wp-json/ldlms/v2/
```
- API access is controlled by REST permissions, not server file rules
- Tools using WP Application Passwords authenticate through the REST API

File protection and API permissions work independently and should be configured based on the access requirements of the site.

## Next Steps

- Review REST API permissions separately if API access needs to be restricted
- Confirm the server type (Apache or Nginx) with the hosting provider
- Test file access after applying rules to ensure LearnDash features continue working as expected

---

## Developers

**Source:** [https://learndash.com/support/kb/resources/developers/developers/](https://learndash.com/support/kb/resources/developers/developers/)

- [Code Reference](https://developers.learndash.com/) (Hooks and Filters, Functions, and API)
- [Database Info](https://learndash.com/support/docs/developers/database-info/)
- [Transferring LearnDash Courses](https://learndash.com/support/docs/developers/transferring-learndash-courses/)
- **🚀 LearnDash REST API v2 – out of beta** – Production-ready with pagination fixes, date handling, and expanded endpoints
- **OpenAPI enhanced** (
```
/wp-json/learndash/v1/docs/openapi
```

): YAML support + complete docs
- **Model Context Protocol (MCP) Server** (
```
@stellarwp/learndash-mcp-server
```

): Bridge to AI tools (Cursor, Angie)

---

