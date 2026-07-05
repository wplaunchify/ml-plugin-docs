# How To Deny Access To Files Folders Through Htaccess File

*Category from WP File Manager documentation*

---

## How to deny access to files, folders through htaccess file < File Manager Pro

**Source:** [https://filemanagerpro.io/article/how-to-deny-access-to-files-folders-through-htaccess-file/](https://filemanagerpro.io/article/how-to-deny-access-to-files-folders-through-htaccess-file/)

What is .htaccess File?
.**htaccess** is a configuration file used by a web server (Apache). The full form of htaccess is Hypertext Access. Htaccess files are used to override server global configuration for the directory level in which you place this file.

#### Why we use the .htaccess File?

Imagine you have more than one website running on the same server and you want to configure different rules for each website. In that case, you won’t change global configuration (httpd.conf file) as it applies to both the websites. In that case, the .htaccess file is an ideal way to specify changes.

#### How to Deny Access to Files, Folders through htaccess

To prevent direct access of all the files and folders of your project.

1. Create a .htaccess file in the root of your project directory structure. Then open the .htaccess file and write this directive **deny from all**.

2. Now you are done. If you want to check whether this directive is working or not. Try to access any file or folder of your project. You will get the following message.

Forbidden

You don’t have permission to access /example/ on this server.

Apache/2.4.7 (Ubuntu) Server at localhost Port 80

### How to Deny Access to a Certain File Types through .htaccess

Now we have discussed how to prevent direct access to files and folders through .htaccess. But sometimes we need to prevent certain file types for direct access. Let’s understand how to prevent the access of certain file types.

### How to Deny Access to all Files with .php Extension through htaccess

<Files ~ “\.php$”>

Order allow,deny

Deny from all

</Files>

### How to Deny all Files with .inc Extension

<Files ~ “\.inc$”>

Order allow,deny

Deny from all

</Files>

### How to Deny Access to a Single File through .htaccess

Suppose, I want to prevent an access to a specific file. Let’s take an example of config file which has all the system configuration. config.php is one example, you can include any PHP file. To disallow the access to single you need to mention the file name in .htaccess.

Deny access to config.php file through htaccess

<Files config.php>

order allow,deny

Deny from all

</Files>

How to Deny Access to .htaccess file.

<Files ~ “^\.htaccess”>

Order allow,deny

Deny from all

</Files>

### How to Prevent Any Direct Directory Browsing through htaccess

Deny access to an app folder.

<Directory ~ “\app”>

Order allow,deny

Deny from all

</Directory>

Put this code in your .htaccess file to prevent any direct directory browsing through the browser.

# directory browsing

Options All -Indexes

---

