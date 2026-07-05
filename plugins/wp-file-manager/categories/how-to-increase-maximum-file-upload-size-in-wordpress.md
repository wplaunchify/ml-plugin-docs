# How To Increase Maximum File Upload Size In Wordpress

*Category from WP File Manager documentation*

---

## How to Increase the Maximum File Upload Size in WordPress?

**Source:** [https://filemanagerpro.io/article/how-to-increase-maximum-file-upload-size-in-wordpress/](https://filemanagerpro.io/article/how-to-increase-maximum-file-upload-size-in-wordpress/)

Are you facing the Max File Upload Size issue in your wordpress website? Sometimes Upload Size limit does not allow to upload big size files through CMS or install themes and plugins. So Here, We will show you to fix this issue easily so that you can upload any larger file in your wordpress area.

### First, You need to check your wordpress upload size, Here is how you can check:

For this, You just have to go to Media » Add New and you will see the Limit “Maximum upload file size” under the Select Files button. The written limit is the limit that is permitted for file size. Here is the screenshot you can check:

![Drop Files Anywhere](https://filemanagerpro.io/wp-content/uploads/2019/03/max_upload_size-300x62.png)

Here are some methods on how you can increase the Maximum File Upload Size:

#### 1: By Editing Theme Functions File

There is a posibility that by adding following code to your theme’s functions.php file, The upload size can be increased:

| 1
2
3 | @ini_set( 'upload_max_size' , '64M' );
@ini_set( 'post_max_size', '64M');
@ini_set( 'max_execution_time', '300' ); |
| --- | --- |

#### 2. By Creating or Editing an existing PHP.INI file

To use this method, You will need to have access to the root directory of your wordpress installation by using either FTP or File Manager in your Cpanel Dashboard.

In case of a shared hosting, There will be no php.ini file present. In this case, you can simply create an empty php.ini file and add the following code to your file:

| 1
2
3 | upload_max_filesize = 64M
post_max_size = 64M
max_execution_time = 300 |
| --- | --- |
This method should work most of the times. You can try changing values from 64M to 20M or 128M to check if it works or not.

#### 3. htaccess Method

This is the last method which is highly effective and it works for so many users. For this method, you will have to update your .htaccess file in your wordpress root directory. Edit the file and add the following code:

| 1
2
3
4 | php_value upload_max_filesize 64M
php_value post_max_size 64M
php_value max_execution_time 300
php_value max_input_time 300 |
| --- | --- |
**Note:** These changes may not work if you are on a shared hosting server, In that case you will have to contact your Hosting Provider and ask them to increase this for you.

---

