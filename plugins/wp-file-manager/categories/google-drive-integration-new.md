# Google Drive Integration New

*Category from WP File Manager documentation*

---

## Google Drive Integration New < File Manager Pro

**Source:** [https://filemanagerpro.io/article/google-drive-integration-new/](https://filemanagerpro.io/article/google-drive-integration-new/)

Google sign-in allows your site visitors to login through Google in one click. Before you can integrate Google sign-in into your website, you need to create a Google client ID and Client Secret.

And for using Google Drive API, you need first to obtain the access token by completing the following steps:

1.Go to the [Google API Console](https://console.developers.google.com/) and Navigate to the tab “**Credentials**“.

![Google Developers Console. Credentials - How to get Google Client ID and Client Secret](https://filemanagerpro.io/wp-content/uploads/2020/04/google-developers-console-credentials.png)

2. Click **Select a project** >> **New Project** and then click the button “**Create**“.

Please Note that you can also select an existing project.

![Google Client ID. Create Project - How to get Google Client ID and Client Secret](https://filemanagerpro.io/wp-content/uploads/2020/06/google-client-id-create-project.png)

3. Click **ENABLE** to enable the Google Drive API that allows clients to access resources from Google Drive.

![](https://filemanagerpro.io/wp-content/uploads/2020/06/google-client-id-enable-service.png)

![](https://filemanagerpro.io/wp-content/uploads/2020/06/google-client-id-enable-gdrive.png)

4. Go to the **Credentials** page, click **OAuth consent screen** in the right panel and Enter the **Application name**, **Authorized domains** and click the button “**Save**“.

![](https://filemanagerpro.io/wp-content/uploads/2020/06/google-client-id-consent-screen.png)

![](https://filemanagerpro.io/wp-content/uploads/2020/06/google-client-id-create-auth-id-screen.png)

5. Click **Create credentials** > **OAuth client ID**, and in the Create **client ID** page, create a new client ID with Application type set to Web application and Authorized redirect URIs set to *https://developers.google.com/oauthplayground*.

![](https://filemanagerpro.io/wp-content/uploads/2020/06/google-client-id-create-auth-id.png)![](https://filemanagerpro.io/wp-content/uploads/2020/06/google-client-id-create-auth-id-screen.png)

The created**OAuth client ID** and client secret will be used for obtaining the access token.

![](https://filemanagerpro.io/wp-content/uploads/2020/06/google-client-id-secret-key.png)

6. Go to the [Google Developers OAuth 2.0 Playground](https://developers.google.com/oauthplayground/), click OAuth 2.0 Configuration and select Use your own OAuth credentials check box, enter the OAuth client ID and client secret you have already created in the OAuth Client ID and OAuth Client secret fields respectively.

![](https://filemanagerpro.io/wp-content/uploads/2020/06/OAuth_2_0_Playground.png)

7. In OAuth 2.0 Playground Step 1, select the scope *https://www.googleapis.com/auth/drive* for the Google Drive API and click Authorize APIs, then click Allow to generate the authorization code.
![](https://filemanagerpro.io/wp-content/uploads/2020/06/OAuth_2_0_Playground-4.png)

8. In OAuth 2.0 Playground Step 2, click Exchange authorization code for tokens to generate the OAuth access token.
![](https://filemanagerpro.io/wp-content/uploads/2020/06/OAuth_2_0_Playground-2.png)

9. The **OAuth access token** is displayed on the right panel as shown in below figure. Note that the access token expires in every 3600 seconds. You can click **Refresh** access token in OAuth 2.0 Playground Step 2 to refresh it.

![](https://filemanagerpro.io/wp-content/uploads/2020/06/OAuth_2_0_Playground-3.png")

---

