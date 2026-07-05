# How Can I Get My Microsoft Account Client Id And Client Secret Key

*Category from WP File Manager documentation*

---

## How To Integrate OneDrive With WP File Manager Pro?

**Source:** [https://filemanagerpro.io/article/how-can-i-get-my-microsoft-account-client-id-and-client-secret-key/](https://filemanagerpro.io/article/how-can-i-get-my-microsoft-account-client-id-and-client-secret-key/)

The WP File Manager **OneDrive WordPress Plugin** allows you to access and manage your OneDrive files directly from your WordPress dashboard. This WordPress OneDrive integration solution allows other users to access your Microsoft OneDrive folders through your website.

WP File Manager OneDrive integration allows you to access your OneDrive data on the WordPress website. This **OneDrive integration guide** will show you how to seamlessly set up OneDrive with your WordPress site using the WP File Manager Pro with the One Drive plugin. If you’ve been wondering, **“How do I access my OneDrive data on WordPress?”** This guide is for you.

Please follow the below steps to integrate the OneDrive addon with File Manager Pro:

**Step 1: Log in to your Microsoft account at the link:-** [https://portal.azure.com/#home](https://portal.azure.com/#home)

![azure-cloud](https://filemanagerdev.wpengine.com/wp-content/uploads/2024/11/Login-to-Azure-Cloud-scaled.jpg)

**Step 2: Please search for the “app registrations” on the Microsoft Azure portal and click on it.**

![app-registrations](https://filemanagerdev.wpengine.com/wp-content/uploads/2024/06/Find-App-Registrations-scaled.jpg)

**Step 3: Click on the New Registrations:-**

![new-registrations](https://filemanagerdev.wpengine.com/wp-content/uploads/2024/11/New-Registrations-scaled.jpg)

**Step 4: Register an Application:-**

①. Enter a desired name for your application (e.g., “FM OneDrive Integration”).

②. Select the second option in the support account types.

③. Choose **“Web”** from the “Redirect URI” dropdown menu.

④. In the “Redirect URI” field, paste your WordPress website URL.

⑤. Click “Register” to create the application.

![registering-an-application](https://filemanagerdev.wpengine.com/wp-content/uploads/2024/11/Registering-an-application-scaled.jpg)

**Step 5: After registering the app, the app client ID will be generated,**

①. Copy the generated client ID and paste it into the file manager One Drive addon(Refer to step 9)

②. Then click on the “add a certificate or secret” option to generate the secret key.

![client-id-and-get-secret-key](https://filemanagerdev.wpengine.com/wp-content/uploads/2024/11/Client-ID-and-Get-Secret-Key-scaled.jpg)

**Step 7: Generating Secret key:-**

①. Click on New client secret.

②. Give any Description.

③. Choose the time length

④. Then click on add.

![set-secret-key-time-period](https://filemanagerdev.wpengine.com/wp-content/uploads/2024/11/Set-secret-key-time-period--scaled.jpg)

**Step 8: Copy the “value” you will get after creating the new client secret. This value is the Secret key that is used in the Microsoft One drive.**

![copy-secret-key](https://filemanagerdev.wpengine.com/wp-content/uploads/2024/11/Copy-Secret-Key-scaled.jpg)

**Step 9: Final steps- Paste all the values in the One Drive addon page to integrate the Microsoft One Drive with the WP file manager:-**

①. Input the email address associated with your Microsoft One drive.

②. Paste the **Client ID** from the Fifth step.

③. Paste the **Secret key** from the eighth step.

④. **Save Changes** before proceeding further.

⑤. Then click on the authenticate button.

![one-drive-addon-final-step](https://filemanagerdev.wpengine.com/wp-content/uploads/2024/11/One-Drive-Addon-final-step-scaled.jpg)

**Step 10: Integration consent and review:-**

You’ll be directed to the Microsoft verification page to grant integration consent when you click on the “click here to authenticate” button. Once you’ve allowed the permission, you’ll be redirected back to your site, and One Drive will appear within WP File Manager, as shown in the screenshot below:

![one-drive-addon-final-step](https://filemanagerdev.wpengine.com/wp-content/uploads/2024/11/Final-View-One-Drive-scaled.jpg)

If you’re encountering errors on the authentication page, there might be a mistake in the process. Please review the steps again and ensure that everything is added correctly.

Or

You can watch this video guide by opening this link in a new tab for better visual understanding

[https://drive.google.com/file/d/191goPhpmDh0n-DwOKjcwibFy-ZrUrduD/view](https://drive.google.com/file/d/191goPhpmDh0n-DwOKjcwibFy-ZrUrduD/view)

**Shortcodes For The Frontend Access:-**

You can use shortcodes on website pages to display on the user’s end (front end). Simply edit the page and insert the following shortcodes to showcase OneDrive to users. This is a crucial part of the **WordPress OneDrive integration** process.

**(a).** Main shortcode:

```
[wp_file_manager_onedrive view="list" lang="en" dateformat="d M, Y h:i
A" allowed_roles="administrator,editor,author,subscriber" access_folder="" type="name" write ="true" read="false" allowed_operations="upload,download"]
```

**(b).** You can change this shortcode as per your requirements. You can allow access to particular user roles only or ban specific users.

For example- If you wish to ban any user, then you can mention the user IDs at the end of the shortcode before closing the bracket:

```
ban_user_ids="78,80"
```

*(78, 80 are User IDs. You can change as per your requirements)*

```
[wp_file_manager_onedrive view="list" lang="en" dateformat="d M, Y h:i
A" allowed_roles="administrator,editor,author,subscriber" access_folder="" write ="true" read="false" allowed_operations="upload,download" ban_user_ids="78,80"]
```

**(C).** One Drive shortcode to give complete admin access on the front side:

```
[wp_file_manager_onedrive_admin]
```

*(All user role restrictions and user restrictions work with only this shortcode)*

**(D).** You can grant access to a specific folder by specifying its name in the shortcode. For instance, if you want to provide access to the “Assignments” folder in One Drive, you just need to mention the folder’s name next to access_folder in the shortcode. You can write multiple folder names there.

Here’s an example of how the shortcode should look:

```
[wp_file_manager_onedrive view="list" theme="light" lang="en" dateformat="d M, Y h:i
A" allowed_roles="administrator,editor,author,subscriber" access_folder="Assignments" type="name" write ="true" read="false" allowed_operations="upload, download" ban_user_ids="78,80"]
```

**Important Notes:-**

1. Once you’ve used the shortcodes, you must re-authenticate the plugin by clicking the “Click here to Authenticate” button to activate the changes.

2. After using the shortcodes, remember to clear the website’s cache and cookies so that the changes will be applied and the folders/directories will be properly listed.

3. All User restrictions and User Role restrictions work only with the OneDrive admin shortcode mentioned above in point (c). All changes made in the settings of the OneDrive add-on will be applied to this admin shortcode. Any changes in the plugin settings do not apply to any other OneDrive shortcodes.

4. OneDrive shortcodes are pre-defined.

This **WordPress Onedrive Integration** solution provides a seamless way to manage your OneDrive files within your WordPress environment.

---

