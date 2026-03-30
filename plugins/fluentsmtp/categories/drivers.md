# Drivers

*Category from FluentSMTP documentation*

---

## Configure SMTP2GO in FluentSMTP to Send Emails

**Source:** [https://fluentsmtp.com/docs/configure-smtp2go-in-fluentsmtp-to-send-emails/](https://fluentsmtp.com/docs/configure-smtp2go-in-fluentsmtp-to-send-emails/)

With [FluentSMTP](https://fluentsmtp.com/), you can integrate SMTP2GO into WordPress to improve email deliverability and authenticity. SMTP2GO is a reliable email delivery service that helps businesses and website owners send emails successfully. This article will guide you through integrating SMTP2GO into WordPress using the FluentSMTP plugin to send emails via SMTP.

## Configuring FluentSMTP for SMTP2GO

To learn how to configure the **SMTP2GO** with **FluentSMTP.** follow the steps with screenshots below –

First, go to **FluentSMTP** from **Settings** of **WordPress** **Dashboard**in the left sidebar, and select **SMTP2GO** from the given **Connection Providers**.

![FluentSMTP Dashboard](https://fluentsmtp.com/wp-content/uploads/2025/02/1.-FluentSMTP-Dashboard-scaled.webp)

But if you are already connected to any email service provider, go to the **Settings** section from the **FluentSMTP Navbar**and click the **+ Add Another Connection**button**.**

![+ Add Another Connection - Settings tab](https://fluentsmtp.com/wp-content/uploads/2025/02/2.-Add-Another-Connection-Settings-tab-scaled.webp)

Click the **SMTP2GO** tab to connect to this provider.

![Add SMTP2GO connection](https://fluentsmtp.com/wp-content/uploads/2025/02/3.-Add-SMTP2GO-connection-scaled.webp)

After you choose the provider, it will take you to the **Add Connection** page where you will get all the options to connect your SMTP2GO.

> Additionally, if you want to change the connection provider, simply click the Change button right next to the SMTP2GO tab at the top of the page.

Here, you need to provide –

- **From Email**: The “From Email” should be the email you verified with SMTP2GO.

- **From Name**: From name, you can choose anything you want. You can use a combination of your name and company name.

- **Force Sender Name**: Check the box to align the return path with the form. This setting indicates where bounce messages are sent. If unchecked, bounce messages will be lost. When enabled, you will receive an email at the “From Email” address for any bounced messages due to recipient email issues.

- **API Key**: The API Key has to be obtained from the SMTP2GO. You can click the [Create API Key](https://app-eu.smtp2go.com/sending/apikeys/) link under the API Key box to get it.

Once you provide all the necessary information, click the **Save Connection Settings** button and your SMTP2GO will be connected with your Fluent SMTP plugin.

![Add connection page](https://fluentsmtp.com/wp-content/uploads/2025/02/4.-Add-connection-page.webp)

### Verify Your Domain in SMTP2GO

Before you collect the API Key to send emails, you will need to add a Verified Sender to your account.  To learn how to verify the site domain, follow the steps below –

First, log into your [SMTP2GO Account](https://app.smtp2go.com/), open the **Sending**section from the left sidebar, select the **Verified Senders**tab, and press the **Add a Sender domain**button to add your desired domain for verification.

![Verified Senders](https://fluentsmtp.com/wp-content/uploads/2025/02/5.-Verified-Senders-scaled.webp)

Now, provide ur site domain here and click the**Continue with this domain** button.

![Continue with this Domain button](https://fluentsmtp.com/wp-content/uploads/2025/02/6.-Continue-with-this-Domain-button-scaled.webp)

After confirming your domain, SMTP2GO will then provide you with three **CNAME** records that you need to**Copy**and**add**to your **Site Domain’s DNS Settings**.

> Remember, this domain authorization process by adding the CNAME records is crucial for protecting site owners and their visitors from spam and ensuring reliable email delivery. To learn more about DNS (Domain Name System/Server), read this article.

Once you have added these CNAME records to the Site’s DNS Settings, click the **Verify** button, and your domain will be verified.

![Verify button](https://fluentsmtp.com/wp-content/uploads/2025/02/7.-Verify-button.webp)

### Get SMTP2GO API Key

After completing the domain verification, collect your API Key for completing the configuration. To learn how to get the API key, follow the steps with the screenshots below –

First, log into your [SMTP2GO Account](https://app.smtp2go.com/), open the **Sending**section from the left sidebar, select the **API Keys**tab, and press the **Add API Key**button to get your desired API Key.

![Api Keys](https://fluentsmtp.com/wp-content/uploads/2025/02/8.-Api-Keys-scaled.webp)

Here, you will get your **API key** in the **API Key** box under the **Details** tab. Now, copy your API Key by clicking the **Copy** button.

Then, give your**API Key**a **Description**as per your requirements and click the **Add API** **Key** button and your API will be created.

![Copy API Key](https://fluentsmtp.com/wp-content/uploads/2025/02/9.-Copy-API-Key-scaled.webp)

Then, go back to the desired **Add Connection** page under **Settings** from the **Fluent SMTP Navbar** and **paste** the API Key you copied from SMTP2GO inside the **API Key** box.

Once you input all the necessary information, finally, click the **Save Connection Settings**button and your SMTP2Go server will be connected to your Fluent SMTP.

![Paste API Key](https://fluentsmtp.com/wp-content/uploads/2025/02/10.-Paste-API-Key.webp)

## Details of SMTP2GO API Settings

- **Store API Keys in DB**: By default, this is enabled and strongly recommended. This will keep the information in the Databases in Encrypted format.

- **Store API Keys in Config File**: This allows you to store the access keys in the following section inside the**wp-config.php file** by the following directives.

Simply **copy** the **following** **snippet** and **replace** the **stars** **with** the **corresponding** **credential**. Then simply **paste** **it to the wp-config.php file** of your **WordPress** **installation**

define( ‘FLUENTMAIL_SMTP2GO_API_KEY’, ‘********************’ );

![SMTP2GO API Settings](https://fluentsmtp.com/wp-content/uploads/2025/02/11.-SMTP2GO-API-Settings.webp)

## Configured SMTP2GO in FluentSMTP

Here, you can see that your SMTP2GO is connected and ready to send emails from your WordPress site.

> To learn the details about General Settings, read this Documentation.Additionally, it is recommended to send a test email to check whether the configuration is successful or not, to learn how to send a test email in detail, read this Documentation.

![Configured SMTP2GO](https://fluentsmtp.com/wp-content/uploads/2025/02/12.-Configured-SMTP2GO-scaled.webp)

That’s all about Configuring FluentSMTP with SMTP2GO to send emails from the WordPress website.
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Configure FluentSMTP with Microsoft Outlook/Office Email

**Source:** [https://fluentsmtp.com/docs/configure-fluentsmtp-with-microsoft-outlook-office/](https://fluentsmtp.com/docs/configure-fluentsmtp-with-microsoft-outlook-office/)

This documentation shows the process of **Configuring FluentSMTP with Microsoft Outlook** from the **Microsoft Entra Admin Center**.

We also have another documentation that demonstrates [Configuring FluentSMTP with Azure Portal](https://fluentsmtp.com/docs/setup-outlook-with-fluentsmtp/). Alternatively, you can watch the video below for a full walkthrough:

## Configure Email Service Provider in Fluent SMTP

To configure Outlook/Office 365 with your Fluent SMTP plugin go to the WordPress Settings and select Fluent SMTP.

![](https://fluentsmtp.com/wp-content/uploads/2024/07/Dashboard-of-Fluent-SMTP-1-scaled.webp)

Navigate to WordPress Settings and select Fluent SMTP. If connecting to Fluent SMTP for the first time, select the **Microsoft** Email Service Provider.

![](https://fluentsmtp.com/wp-content/uploads/2024/07/Dashboard-of-Fluent-SMTP-2-scaled.webp)

If Fluent SMTP is already connected to another Email Service Provider, click on the “**Add Another Connection**” button. Then select the Microsoft Email Service Provider to proceed to the Microsoft Outlook/Office 365 configuration page.

![](https://fluentsmtp.com/wp-content/uploads/2024/07/Outlook-Configure-if-AVilable-scaled.webp)

## Credential Configuration of Microsoft in Fluent SMTP

Configure Fluent SMTP with Outlook/Office 365 by providing the necessary credentials:

1. **Sender Details:** Enter sender details in the sender settings option.
2. **Microsoft Outlook/Office 365 Credentials:** Provide credentials from the respective application.
3. **Authentication:** Authenticate your Office 365 account and get the Access Token.

> Note: Copy the App Callback URL and keep it in your clipboard. We need this URL for App registration.

![](https://fluentsmtp.com/wp-content/uploads/2024/07/Configure-Outlook-of-Fluent-SMTP-3-scaled.webp)

## App Registration in Microsoft Azure Admin Center

To get the **App credentials** you need to create an **App** in the Microsoft Azure directory. Now go to your [Microsoft Entra](https://entra.microsoft.com/) account and log in with your Microsoft Account.

Go to the **Applications** from the left sidebar click on the **App registration** and select **New Registration**.

![](https://fluentsmtp.com/wp-content/uploads/2024/07/Outlook-App-Reg-4-scaled.webp)

Associate with Personal Account and proceed.

![](https://fluentsmtp.com/wp-content/uploads/2024/07/Outlook-App-Reg-5-scaled.webp)

Fill out the **Register an Application** page with the **App Name** and other details.

1. Give the App Name
2. In the Supported account type select ‘**Accounts in any organizational directory (Any Microsoft Entra ID tenant – Multitenant) and personal Microsoft accounts (e.g. Skype, Xbox)**’ here.
3. In Redirect URL settings select Web and then paste the redirect URL you have copied from the FLuent SMTP Microsoft Outlook Configure Page.
4. Click the Register button.

![](https://fluentsmtp.com/wp-content/uploads/2024/07/Outlook-App-Reg-6-scaled.webp)

After that, you will be redirected to your App **Overview** where you can get the **Application Client ID**. Copy this **Application Client ID** for later use.

![](https://fluentsmtp.com/wp-content/uploads/2024/07/Outlook-App-Reg-7-scaled.webp)

Then Click on the **Certificate and Secret > Client Secret > New Client Secret**button.

![](https://fluentsmtp.com/wp-content/uploads/2024/07/Outlook-App-Reg-8-scaled.webp)

A pop-up will come to add the Client Secret **Description** and **Expires**. Give a description here select the expiration date and click on the **Add** button.

![](https://fluentsmtp.com/wp-content/uploads/2024/07/Outlook-App-Reg-9-scaled.webp)

You will get the Client’s Secret now. Copy the **Value** from here.

![](https://fluentsmtp.com/wp-content/uploads/2024/07/Outlook-App-Reg-10-scaled.webp)

## Configuration Completion

Go back to the Fluent SMTP Microsoft Outlook Configure page. In the sender Settings give your Microsoft Email Account and a Form name.

In the Outlook/Office 365 API Settings section paste the**App Client ID** and the **Client Secret Value** you copied earlier.

To authenticate with **Office 365** & get an **Access Code** click on the **Authenticate with Office 365 & Get Access Code** button.

![](https://fluentsmtp.com/wp-content/uploads/2024/07/Configure-Outlook-of-Fluent-SMTP-11-scaled.webp)

**Accept** permissions on the Permission Page of your Microsoft Outlook account.

![](https://fluentsmtp.com/wp-content/uploads/2024/07/Outlook-App-Reg-12.webp)

After that, you will get an **Access Code** copy the code.

![](https://fluentsmtp.com/wp-content/uploads/2024/07/FluentSMTP-13.webp)

Paste your **Access Code** in the **Access Token** field and click the **Save Connection Settings** button.

![](https://fluentsmtp.com/wp-content/uploads/2024/07/Configure-Outlook-of-Fluent-SMTP-13-scaled.webp)

You will see that your Fluent SMTP is now configured with your Microsoft Outlook/Office 365 account. Also, you will get some **General Settings** here for your Email service provider you can change them if you want.

![](https://fluentsmtp.com/wp-content/uploads/2024/07/FluentSMTP-14-scaled.webp)

## Send Test Email

To test the functionality of your Email service, navigate to the **Email Test** section from the Navigation menu. Select your sender Email address, specify the recipient Email address for the Test Email, and click on the **Send Test Email** button.

![](https://fluentsmtp.com/wp-content/uploads/2024/07/test-email-15.webp)

If your Email service is functioning correctly, you will receive a confirmation message indicating that your email has been successfully sent.

![](https://fluentsmtp.com/wp-content/uploads/2024/07/test-email-16-scaled.webp)

By following these steps, FluentSMTP can be configured with Microsoft Outlook successfully.

---

## Outlook or Office365 with FluentSMTP

**Source:** [https://fluentsmtp.com/docs/setup-outlook-with-fluentsmtp/](https://fluentsmtp.com/docs/setup-outlook-with-fluentsmtp/)

FluentSMTP – WP Mail Plugin provides you options to connect with your Outlook or Office 365 emails and send emails over their API. It’s fast and secure. Using the OAuth2 authentication system for the connection, You can easily set up the connection and send your emails with Office 365 / Outlook emails.

This is a step-by-step tutorial on setting up Outlook or Office365 API with WordPress by FluentSMTP.

## Configuring FluentSMTP with Outlook or Office365 Emails

Please follow the below sections to configure Outlook or Office365 Emails with FluentSMTP.

If you already have any other configured connection, then you will be in the FluentSMTP Dashboard. 
Please go to **WordPress Settings ⮕ FluentSMTP ⮕** **Settings  ⮕ Add Another Connection**

![](https://fluentsmtp.com/wp-content/uploads/2021/01/fluent-smtp-add-new-connection.png)

If you haven’t set up any SMTP Connection yet, you will be directed to configure a connection automatically. 
Now from your **WordPress Dashboard** go to **Settings ⮕ FluentSMTP**

![](https://fluentsmtp.com/wp-content/uploads/2021/01/fluent-smtp-connection-providers.png)

After selecting Microsoft as the mailer, a very simple settings window will open as shown in the screenshot below.

![](https://fluentsmtp.com/wp-content/uploads/2021/07/fluent-smtp-microsoft-data.png)

> 

The Application Client ID and Client Secrets are parts of the Microsoft Azure Cloud Application. We need to:

Please go to Microsoft Azure Portal from Here: [Home – Microsoft Azure](https://portal.azure.com/#home)

![](https://fluentsmtp.com/wp-content/uploads/2021/07/azure-login.png)Click on the App Registration Link

You may be asked to log in to your account using your Outlook or Office365 Account Email as the above screenshot. Once you are logged in you will be redirected to the Azure Portal Home as the below screenshot.

![](https://fluentsmtp.com/wp-content/uploads/2021/07/azure-dashboard.png)

Now from the top search bar, Search for **“app registration”** and it will automatically suggest a few services and look for the **App Registrations** as below. Then click on this to go to the **App Registration Dashboard.**

![](https://fluentsmtp.com/wp-content/uploads/2021/07/azure-app-registration-search.png)

You can also directly go to New APP Registration from here: [Register an application – Microsoft Azure](https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/CreateApplicationBlade/quickStartType~/null/isMSAApp~/true) and you will be redirected to the below dashboard once you are logged in as per the previous step.

![](https://fluentsmtp.com/wp-content/uploads/2021/07/azure-app-registration-add.png)

Now, if you do not have any existing Apps Registered then you will see the same dashboard as the above screenshot and can click on the **Register an application** button from the center.

If you already have an existing App registered, then you will have to click on the **+ New Registration** button on the top section to **Register an Azure Application.**

![](https://fluentsmtp.com/wp-content/uploads/2022/05/9.png)

![](https://fluentsmtp.com/wp-content/uploads/2022/05/10.png)

![](https://fluentsmtp.com/wp-content/uploads/2022/05/11.png)

1. **Name:** In the next section, Provide a Name for the Application as an Identifier.
2. **Supported Application Type:** This must be “Accounts in any organizational directory (Any Azure AD directory – Multitenant) and personal Microsoft accounts (e.g. Skype, Xbox)” to let FluentSMTP get authorized in the later steps and send emails from your Microsoft Account.
3. **Redirect URI:** The Platform should be of **Web** type and the Redirect URI is the **App Callback URL** collected from the earlier step provided by the FluentSMTP plugin on your website.

The Redirect URI is in the following format:

```
https://YourDomain.com/wp-json/fluent-smtp/outlook_callback
```

![](https://fluentsmtp.com/wp-content/uploads/2021/07/azure-app-app-ID.png)

Now we need to create and store the Client Secret Value. To do this, please go to Certificates & Secrets ⮕ + New Client Secret

![](https://fluentsmtp.com/wp-content/uploads/2021/07/azure-app-secret-add.png)

Once you are done please click on the Add button from the bottom and it will redirect you to Client Secret Overview and a Client Secret Value will be generated for you. Please copy and store this Client Secret Value as this will not be visible again once you leave this page.

![](https://fluentsmtp.com/wp-content/uploads/2021/07/azure-client-secret.png)

## FluentSMTP Microsoft Settings

We are done obtaining the **Application Client ID** and **Client Secret Value**. After providing them in the **FluentSMTP Settings**, please click on the **“Authenticate with Office365 & Get Access Token”** button.

### Application Details

![](https://fluentsmtp.com/wp-content/uploads/2021/07/screencapture-testwp-ibrahimsharif-wp-admin-options-general-php-2023-01-24-18_06_12.png)

### Token Generation

Then you will be redirected to the **Token Generation Page** from where we need to copy and store the generated Token to use in the FluentSMTP Settings as below:

![](https://fluentsmtp.com/wp-content/uploads/2021/07/fluent-smtp-token.png)

### Save Microsoft Connection Settings

Now provide the earlier generated Token in the FluentSMTP Settings and finally click on the **Save Connection Settings** button.

![](https://fluentsmtp.com/wp-content/uploads/2021/07/fluent-smtp-outlook-save.png)

That’s all about Configuring FluentSMTP with Microsoft Outlook, Hotmail, or Office365 Emails to send emails from the WordPress website. Additionally, it is recommended to [Send a test email](https://fluentsmtp.com/docs/introduction-to-fluent-smtp-dashboard/#send-a-test-email), [Test Email Confirmation](https://fluentsmtp.com/docs/introduction-to-fluent-smtp-dashboard/#test-email-confirmation), and then [Confirm Test Email Deliverability](https://fluentsmtp.com/docs/introduction-to-fluent-smtp-dashboard/#confirm-test-email-deliverability).

---

## Connect Gmail or Google Workspace With FluentSMTP

**Source:** [https://fluentsmtp.com/docs/connect-gmail-or-google-workspace-emails-with-fluentsmtp/](https://fluentsmtp.com/docs/connect-gmail-or-google-workspace-emails-with-fluentsmtp/)

[FluentSMTP](https://fluentsmtp.com/) is a plugin that takes over WordPress’s default mailing system, ensures email delivery from the website, and keeps logs of them. The unique feature of FluentSMTP is that it can be configured with multiple email delivery methods(connections) and all of them can be used later by configuring the Mail From address.

Google is one of the best email delivery methods available in the market. Free and Paid (Google Workspace formerly known as GSuite) emails can be configured with FluentSMTP.

This article will guide you through configuring **Gmail/Google Workspace** with **FluentSMTP**.

## Configuring Gmail or Google Workspace

To learn how you can configure the **Gmail/Google Workspace**with **FluentSMTP**, follow the steps accordingly –

First, go to **FluentSMTP** from **Settings** of **WordPress** **Dashboard**in the left sidebar, and select your email service provider as per your needs from the given **Connection Providers**.

![Fluent SMTP dashboard](https://fluentsmtp.com/wp-content/uploads/2023/02/Fluent-SMTP-dshboard-scaled.webp)

But if you are already connected to any email service provider, go to the **Settings** section from the **FluentSMTP Navbar**and click the **+ Add Another Connection**button**.**

![+Add Another Connection button](https://fluentsmtp.com/wp-content/uploads/2023/02/Add-Another-Connection-button-scaled.webp)

Click the **Gmail/Google Workspace** tab to connect to this provider.

![Google Workspace tab](https://fluentsmtp.com/wp-content/uploads/2023/02/Google-Workspace-tab-scaled.webp)

After you choose the provider, it will take you to the **Add Connection** page where you will get all the options to connect your Gmail/Google Workspace.

> Additionally, if you want to change the connection provider, simply click the Change button right next to the Gmail/Google Workspace tab at the top of the page.

**Here, you need to provide –**

- **From Email:**Write the****Gmail address that you use in your Google Cloud platform.

- **From Name:**Here**,**your WordPress site name is fetched by default which you can change.

- **Set the return-path to match the From Email**: Return Path indicates where non-delivery receipts or bounce messages will be sent. If you enable this, you’ll be emailed using “From Email” if any messages bounce due to recipient email issues. If you keep it unchecked, bounce messages may be lost.

- **Force Sender Name**: Check the box to align the return path with the form. This setting indicates where bounce messages are sent. If unchecked, bounce messages will be lost. When enabled, you will receive an email at the “From Email” address for any bounced messages due to recipient email issues.

- **Application Client ID** & **Application Client Secret:**The Client ID & Client Secret have to be obtained from the **Google Cloud Platform** where you are going to use the **From Email** for this Google Workspace Connection.

- **Authorized Redirect URL:** Copy this URL as you need it later to connect to the Google Cloud Platform.

- **Access Token**: Once you fill up all the necessary information, you can get the Access token by clicking the **Authentication with Google & Get Access Token** button.

Once you provide all the necessary information, click the **Save Connection Settings** button.
And, your **Gmail or Google Workspace** will be connected with your **FluentSMTP** plugin.

![Add Connection Page](https://fluentsmtp.com/wp-content/uploads/2023/02/4.-Add-connection-page.webp)

## Obtain Google Cloud Application Client ID & Client Secret

To learn how to obtain the essential **Client ID** and **Client Secret** from the **Google Cloud**application, follow the steps with screenshots below –

First, go to your [Google Cloud Console platform](https://console.cloud.google.com/) from where you need to create a new project to get started with the Cloud Console.

> The first time accessing Google Cloud Console, you may see a popup asking you to select your country and agree to the Terms of Service. Go ahead and do so, then click on AGREE AND CONTINUE to move on to the next step.

![Google cloud pop-up page for terms & conditions](https://fluentsmtp.com/wp-content/uploads/2023/02/Google-cloud-pop-up-page-for-terms-conditions-scaled.webp)

### Creating New Project

To create a new project in the Google Cloud, follow the steps with screenshots below –

First, click the **Select a project**dropdown arrow and a pop-up will appear to create a new project.

Now, press the **NEW PROJECT** button placed in the top right corner.

![New project button](https://fluentsmtp.com/wp-content/uploads/2023/02/New-projrct-button-scaled.webp)

Give a name to your project (location is optional) and press the **CREATE** button.
You can also change the **Project ID** by clicking the **Edit** button.

![project name-location-Create button](https://fluentsmtp.com/wp-content/uploads/2023/02/project-name-location-Create-button-scaled.webp)

Once you click the create button your new project will be created.
Now, click the **SELECT** **PROJECT** button to enable the Gmail API services.

![Select created project button](https://fluentsmtp.com/wp-content/uploads/2023/02/Select-created-project-button-scaled.webp)

### Enabling Gmail API

After creating the Project google will redirect you to the project dashboard where you need to enable the GMAIL API for the project. To learn how to enable the API, follow the steps with screenshots below –

First, click the **APIs & Services** arrow icon from the left sidebar and then click on the **Enable APIs & services** option.

![APIs & Services option from the left sidebar](https://fluentsmtp.com/wp-content/uploads/2023/02/APIs-Services-option-from-the-left-sidebar-scaled.webp)

Click on the **+ ENABLE APIS AND SERVICES** button.

![+ ENABLE APIs AND SERVICES button](https://fluentsmtp.com/wp-content/uploads/2023/02/ENABLE-APIs-AND-SERVICES-button-scaled.webp)

Select the**Gmail API**tab under the Google Workspace.

Now, click on the **ENABLE** button to activate the Gmail API. It takes a few seconds to enable the API and then redirect you to the GMAIL API Dashboard.

![ENABLE button](https://fluentsmtp.com/wp-content/uploads/2023/02/ENABLE-button-scaled.webp)

### Creating Credentials

Once you enable the Gmail API, you need to create credentials to get the Client ID & Client Secret of your Gmail. To learn how to create the credentials, follow the steps with screenshots below –

First, click on the **CREATE CREDENTIALS** button on the top right side of the page.

![CREATE CREDENTIALS button](https://fluentsmtp.com/wp-content/uploads/2023/02/CREATE-CREDENTIALS-button-scaled.webp)

**Here, you will find five steps that you need to complete. These are:**

- Credential Type
- OAuth consent screen
- Scopes
- OAuth Client ID
- Your Credentials.

#### Credential Type

In Credential Type, you need to select the **GMAIL API** from the dropdown list as the target GMAIL API that is selected by default, check the **User data**as the target accessible data, and press the **Next** button.

![Credential Type](https://fluentsmtp.com/wp-content/uploads/2023/02/Credential-Type-scaled.webp)

#### OAuth consent screen

In the OAuth Consent Screen, give a name for the **App Name**, an email address for the **User support email**, and also an email for the **Developer contact information.**You can also upload the **App logo** from your device by clicking the **BROWSE** button.

> Remember, here, the email addresses are used as the Email Addresses you will be using to deliver emails from WordPress using the FluentSMTP plugin.

Once the inputs are done click on **SAVE AND CONTINUE**button.

![OAuth consent screen](https://fluentsmtp.com/wp-content/uploads/2023/02/OAuth-consent-screen.webp)

#### Scopes (optional)

For FluentSMTP email delivery, you do not need to do anything for **Scopes** options. But, you can still configure your requirements if you need to. As it is optional, you can skip it and go to the next step by clicking the **SAVE AND CONTINUE**button.

![Scopes (optional)](https://fluentsmtp.com/wp-content/uploads/2023/02/Scopes-optional.webp)

#### OAuth Client ID

Now, in the OAuth Client ID, you need to provide –

- The **Application Type** as **Web Application** from the dropdown list.
- A **Name** for the **Application**.
- The **Authorized Redirect URL** that you have copied before from the**Gmail / Google Workspace API settings**in**Fluent SMTP.**

Once you are done, click the**CREATE**button.

![OAuth Client ID](https://fluentsmtp.com/wp-content/uploads/2023/02/OAuth-Client-ID.webp)

#### Your Credentials

In this step, you will be offered a Client ID as a credential. You can skip downloading or copying it as of now.
Now click on the **DONE** button and the credentials for Fluent SMTP will be ready which you will collect later.

![Your Credentials](https://fluentsmtp.com/wp-content/uploads/2023/02/Your-Credentials-scaled.webp)

### OAuth Publish App

Now you need to publish the app you just created. Go to the **OAuth Consent Screen**from the left sidebar and you will find your App detailed page.

![](https://fluentsmtp.com/wp-content/uploads/2023/02/Oath-consent-page-gamil-scaled.webp)

From the left sidebar, click on **Audience** to navigate to the Audience page. Here, you’ll find the **Publish** option available for your setup.

Click on the **PUBLISH APP**button****right under the **Testing** section of **Publishing Status**.

Then, click on the **CONFIRM** button from the **Push to Production?** popup window if asked and your app will be published.

![](https://fluentsmtp.com/wp-content/uploads/2023/02/Audience--scaled.webp)

### Collect Credentials

Finally, you can collect your necessary Credentials (Client ID and Client Secret) to configure your Gmail with your Fluent SMTP plugin. To learn how to get all credentials, follow the steps with screenshots below –

First, go to **Credentials** from the left sidebar of your Google Cloud dashboard, find the **Project** **Name** you created (e.g., FluentSMTP), and click on it.

![OAuth 2.0 Client IDS- Fluent SMTP credentials](https://fluentsmtp.com/wp-content/uploads/2023/02/OAuth-2.0-Client-IDS-Fluent-SMTP-credentials-scaled.webp)

Here is your **Client ID** and **Client Secret** that is shown on the right side. You need to **copy** these 2 values and **paste** them into the FluentSMTP Connection settings page in the next step.

![Get the Client ID & Client Secret](https://fluentsmtp.com/wp-content/uploads/2023/02/Get-the-Client-ID-Client-Secret--scaled.webp)

## Connect FluentSMTP with Gmail/Google Workspace Settings

Once you create and collect all the credentials of your Gmail or Google Workspace from the Google Cloud platform, you can now configure this to your Fluent SMTP.

**To learn how to connect Gmail/Google Workspace with Fluent SMTP, follow the steps with screenshots below –**

First, go to the desired **Add Connection** page under **Settings** from the **Fluent SMTP Navbar** and **paste** the **Client ID** and**Client Secret** that you created and collected earlier in the previous steps.

Now click on the **Authenticate with Google & Get Access Token**button to get the access token for authentication.

![Pasting the Client ID & Secret under Add connection page of Fluent SMTP settings](https://fluentsmtp.com/wp-content/uploads/2023/02/Pasting-the-Client-ID-Secret-under-Add-connection-page-of-Fluent-SMTP-settings-scaled.webp)

This will redirect you to the FluentSMTP server and in the process, Google will ask for the account that you want to allow access to your Gmail or Google Workspace account.

![Choose you gmail account](https://fluentsmtp.com/wp-content/uploads/2023/02/Choose-you-gmail-account.webp)

Then you will see an approval window to approve your project to access the user information from the Google Cloud Project. Please click on the **Continue** button to proceed to the next step.

![Continue button](https://fluentsmtp.com/wp-content/uploads/2023/02/Continue-button.webp)

This will take you to the FluentSMTP Server and provide you with a generated Access Token. Click on the **Copy** button to **copy the access token** that you need in the next step.

![Copy the Access token](https://fluentsmtp.com/wp-content/uploads/2023/02/Copy-the-acess-token.webp)

And, you are in the last step to configure our FluentSMTP with the Google Workspace or Gmail Email address. 
Now, **paste** the **copied access token**from the earlier step in the FluentSMTP connection setting.

Once you input all the necessary information, finally, click the **Save Connection Settings**button and your Gmail server will be connected to your Fluent SMTP.

![Finally save connection settings button](https://fluentsmtp.com/wp-content/uploads/2023/02/Finally-save-connection-settings-button-scaled.webp)

## Details of Gmail / Google Workspace API Settings

- **Store Application Keys in DB**: By default, this is enabled and strongly recommended. This will keep the information in the Databases in Encrypted format.

- **Application Keys in Config File**: This allows you to store the access keys in the following section inside the wp-config.php file by the following directives.

Simply copy the following snippet and replace the stars with the corresponding credentials. Then simply paste it into the wp-config.php file of your WordPress installation.

```
define( 'FLUENTMAIL_GMAIL_CLIENT_ID', '********************' );

define( 'FLUENTMAIL_GMAIL_CLIENT_SECRET', '********************' );
```

![Detail of Gmail/Google Workspace API Settings](https://fluentsmtp.com/wp-content/uploads/2023/02/26.-Detail-of-GmailGoogle-Workspace-API-Settings.webp)

## Configured Gmail/Google Workspace

Here you can see that the new Gmail or Google Workspace server is connected.

> To learn the details about General Settings, read this Documentation.Additionally, it is recommended to send a test email to check whether the configuration is successful or not, to learn how to send a test email in detail, read this Documentation.

![Preview of connected Gmail server](https://fluentsmtp.com/wp-content/uploads/2023/02/Preview-ofconnected-Gmail-server-scaled.webp)

That’s all about Configuring FluentSMTP with Gmail or Google Workspace Emails to send emails from the WordPress website. If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team.](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/) Thank you.

---

## Any Hosting Email Service with FluentSMTP

**Source:** [https://fluentsmtp.com/docs/set-up-fluent-smtp-with-any-host-or-mailer/](https://fluentsmtp.com/docs/set-up-fluent-smtp-with-any-host-or-mailer/)

## Importance of SMTP Delivery Protocol

WordPress uses **the PHP mail()** function to send all emails which aren’t configured properly with many web hosting providers even many hosting providers also disabled it entirely to avoid abusive use like almost all Cloud Providers such as Amazon EC2 & Lightsail Instances, Google Cloud Platform, Oracle Cloud Servers, etc. In both cases, WordPress emails will not be delivered to users.

In this tutorial, we will be configuring such a Direct SMTP-based connection with the **“Other SMTP”** method to send out emails from our domain.

## Obtain SMTP Credentials

There a lot of different Email Delivery Providers can be configured natively via API-based connection as listed below:

1. [Amazon SES API.](https://fluentsmtp.com/docs/set-up-amazon-ses-in-fluent-smtp/)
2. [Mailgun API.](https://fluentsmtp.com/docs/configure-mailgun-in-fluent-smtp-to-send-emails/)
3. [SendGrid API.](https://fluentsmtp.com/docs/set-up-the-sendgrid-driver-in-fluent-smtp/)
4. [Sendinblue API.](https://fluentsmtp.com/docs/setting-up-sendinblue-mailer-in-fluent-smtp/)
5. [SparkPost API.](https://fluentsmtp.com/docs/configure-sparkpost-in-fluent-smtp-to-send-emails/)
6. [Netcore API (formerly Pepipost).](https://fluentsmtp.com/docs/set-up-the-pepipost-mailer-in-fluent-smtp/)
7. [PostMark API.](https://fluentsmtp.com/docs/configure-postmark-in-fluent-smtp-to-send-emails/)
8. [Elastic Mail API.](https://fluentsmtp.com/docs/configure-elastic-email-in-fluent-smtp/)
9. [Gmail & Google Workspace OAuth API.](https://fluentsmtp.com/docs/connect-gmail-or-google-workspace-emails-with-fluentsmtp/)
10. [Outlook OAuth API.](https://fluentsmtp.com/docs/setup-outlook-with-fluentsmtp/)

If your desired Email delivery Service is not listed above, you can still connect to your Email Delivery Provider via SMTP. You would need to obtain SMTP Credentials from your Email Delivery Provider or the Mail Server.

Additionally, we have curated a list of obtaining SMTP Credentials from different providers to be used in the same way we are going to be configuring FluentSMTP in the following sections here:

> cPanel SMTP Credentials – FluentSMTP

This is the information we need to collect from Email Delivery Provider. Please check the documentation section of your host’s website about how to get such SMTP information if it is not still listed above.

Surely there will be a guide but If not, you should contact your Hosting Support.

## Configure FluentSMTP Email Connection

It is time to use the obtained SMTP Credentials in FluentSMTP and send emails from WordPress Website.

### Add New SMTP Connection

If you already have any other configured connection, then you will be in the FluentSMTP Dashboard. 
Please go to **WordPress Settings ⮕ FluentSMTP ⮕** **Settings  ⮕ Add Another Connection**

![](https://fluentsmtp.com/wp-content/uploads/2021/01/fluent-smtp-add-new-connection.png)

If you haven’t set up any SMTP Connection yet, you will be directed to configure a connection automatically. 
Now from your **WordPress Dashboard** go to **Settings ⮕ FluentSMTP**

![](https://fluentsmtp.com/wp-content/uploads/2021/01/fluent-smtp-connection-providers.png)

### SMTP Details

After selecting **Other SMTP**, you will need to configure some settings including **Sender Settings** and **SMTP Authentication Credentials**.

![](https://fluentsmtp.com/wp-content/uploads/2021/01/fluent-smtp-sender-settings.png)

#### Sender Settings

1. **From Email:** 
The “From Email” is the **Mail From Address** that will be used to send all WordPress Emails. Check the box to set the return path to match the **Mail From Address**. 
The Return Path indicates where non-delivery receipts or bounce messages are to be sent. If unchecked, bounce messages will be lost. With this enabled, you’ll be emailed using “From Email” if any messages bounce as a result of issues with the recipient’s email.
2. **From Name:** 
From Name can be anything you want. You can use a combination of your name and company name. In the above example, only “Notifications” is used. 
If you check the Force Sender Name, then this name will be forced to be shown in the Recipient’s Email Client. It is also dependent if your Email Delivery Provider supports it or not.

#### SMTP Server Settings

The next part is to provide SMTP Server Authentication Credentials. This has 3 parts that are described below:

![](https://fluentsmtp.com/wp-content/uploads/2021/01/fluent-smtp-smtp-credentials.png)

1. **Authentication**: 
If you need to provide your SMTP server’s credentials (username and password) to enable the authentication, in our case, this is required for cPanel Mail Servers.
- **SMTP Username**: This is usually the email address you are using to send emails.
- **SMTP Password**: This is usually the password for the email account while you created the mailbox.
2. **Access Keys Storage:**
- **Store Access Keys in DB:** By default, this is enabled and strongly recommended. This will keep the information in the Databases in Encrypted format.
- **Access Keys in Config File:** This allows you to store the access keys in the following section inside the **wp-config.php** file by the following directives.

Simply copy the following snippet and replace the stars with the corresponding credential. Then simply paste it to the **wp-config.php** file of your WordPress installation

```
define( 'FLUENTMAIL_SMTP_USERNAME', '********************' );
define( 'FLUENTMAIL_SMTP_PASSWORD', '********************' );
```

Once you are done with providing the correct details, please save the settings by clicking on the **Save Connection Settings** button. Then follow this documentation: [Send a test email](https://fluentsmtp.com/docs/introduction-to-fluent-smtp-dashboard/#send-a-test-email), [Test Email Confirmation](https://fluentsmtp.com/docs/introduction-to-fluent-smtp-dashboard/#test-email-confirmation), and [Confirm Test Email Deliverability](https://fluentsmtp.com/docs/introduction-to-fluent-smtp-dashboard/#confirm-test-email-deliverability) using this SMTP Connection to your own Email Address and confirm the delivery.

That’s all! Enjoy the robustness of FluentSMTP in your WordPress Website and never face any issues with Email Delivery Again!

---

## Amazon or AWS SES with FluentSMTP

**Source:** [https://fluentsmtp.com/docs/set-up-amazon-ses-in-fluent-smtp/](https://fluentsmtp.com/docs/set-up-amazon-ses-in-fluent-smtp/)

Amazon SES is the cheapest email API service for WordPress. With FluentSMTP SES Connection, you get the powerful, low-cost, high-deliverability managed infrastructure from Amazon. With the support of FluentSMTP, it’s super easy to set up and configure Amazon SES API and send all your WordPress emails. The integration is with Amazon’s latest SES API so your emails will be delivered faster and the right way.

In this article, we will show you how to use Amazon SES Email Delivery Connection with FluentSMTP.

## Configuring FluentSMTP with Amazon SES

Please follow the below sections to configure Amazon or AWS SES Emails with FluentSMTP.

#### Add New Amazon SES Connection

Please go to **WordPress Settings ⮕ FluentSMTP** and then select **Amazon AWS**.

If you already have any other configured connection, then you will be in the FluentSMTP Dashboard **Settings ⮕ Add Another Connection**

![](https://fluentsmtp.com/wp-content/uploads/2023/02/FluentSMTP-Amazon-AWS-SES-Configure-0-scaled.webp)

#### Amazon SES Connection Properties

After selecting AWS as the mailer, a very simple settings window will open as shown in the screenshot below.

Here you can see that we need to provide **From Email**, **From Name**, **Access Key**, **Secret Key**, and Region where the Access Key, Secret Key, and Region has to be obtained from **AWS Console** for the From Email we are going to use for this AWS SES Connection. We will obtain those credentials from the following steps.

![](https://fluentsmtp.com/wp-content/uploads/2023/02/FluentSMTP-Amazon-AWS-SES-Configure-scaled.webp)

## Get Credentials from AWS Console

The Access Key, Secret Key, and Region are parts of the Amazon Web Services Console. We need to:

1. Create or Register an IAM User in AWS Console.
2. Select Access Key Best Practises and Create Keys.
3. Retrieve Access Keys.
4. Identify the Region.

#### Navigate to the AWS Console Dashboard

Please go to Amazon Web Services Console Dashboard from Here: [Home – AWS CONSOLE](https://console.aws.amazon.com/console/home) and login to your account. You may be asked to log in to your account using your Root Account Email.

![](https://fluentsmtp.com/wp-content/uploads/2023/02/FluentSMTP-Amazon-AWS-SES-Configure-Login-PAge-scaled.webp)

Once you are logged in you will be redirected to the AWS Console Home. Then we need to search for “IAM” in the top search bar and you will see that now click on the **User** from here.

![](https://fluentsmtp.com/wp-content/uploads/2023/02/FluentSMTP-Amazon-AWS-SES-Configure-1-scaled.webp)

#### Add a New IAM User

To create a new user for FluentSMTP click on the **Create User** button.

![](https://fluentsmtp.com/wp-content/uploads/2023/02/FluentSMTP-Amazon-AWS-SES-Configure-2-scaled.webp)

Then you will be redirected to the New IAM User Creation overview page. Firstly, you will need to provide a User Name and the supported format is also instructed under the field. We provided the User Name: FluentSMTP.

Once you are done with the User Name click on the Next Button to proceed to the next step.

![](https://fluentsmtp.com/wp-content/uploads/2023/02/FluentSMTP-Amazon-AWS-SES-Configure-3-scaled.webp)

#### Set Permissions

In this step, we need to define the Policies and Permissions required for FluentSMTP to send emails through the new user account we are going to create.

First of all, Select **Attach Policies Directly**from the Permission Options.

Now we need to search for Permission Policies from the next section. In the Filter box, search for “**sesfull**” and then “**snsfull**”.

![](https://fluentsmtp.com/wp-content/uploads/2023/02/FluentSMTP-Amazon-AWS-SES-Configure-4-scaled.webp)

Now select **AmazonSESFullAccess** and **AmazonSNSFullAccess** Policies. Now check both of them as the below screenshot. Then click on the **Add Permission** button.

![](https://fluentsmtp.com/wp-content/uploads/2023/02/FluentSMTP-Amazon-AWS-SES-Configure-5-scaled.webp)

Once the user is created, you can click on either the View User from the top success message or from the Users lists by clicking on the newly created User Name. Then you will be redirected to the User Overview page.

#### Identify AWS Console Region

From the Console Dashboard, on the top right corner between the UserName and the Help menu, you will find the Region you are using to create the IAM User to be used for FluentSMTP.

Our Region is US East (North Virginia) [us-east-1]. We will be using this region in the FluentSMTP settings in the next step.

![](https://fluentsmtp.com/wp-content/uploads/2023/02/FluentSMTP-Amazon-AWS-SES-Configure-6-scaled.webp)

#### Create Access Key and Secret Key

You can create the **Access Key** and **Secret Key** now, click on the **Create Access Key** button from the User Overview page.

![](https://fluentsmtp.com/wp-content/uploads/2023/02/FluentSMTP-Amazon-AWS-SES-Configure-7-scaled.webp)

Then you will be redirected to the Access Key best practice & alternative page. From here select the **Other** option and click on the **Next** button.

![](https://fluentsmtp.com/wp-content/uploads/2023/02/FluentSMTP-Amazon-AWS-SES-Configure-8-scaled.webp)

If you want to set any **Description Tag**then you can add it from here now otherwise you can skip it and click on the **Create Access Key** button.

![](https://fluentsmtp.com/wp-content/uploads/2023/02/FluentSMTP-Amazon-AWS-SES-Configure-9-scaled.webp)

You will now receive a confirmation of the successful creation of the **Access Key** and **Secret Key**. Make sure to copy them for future use.

![](https://fluentsmtp.com/wp-content/uploads/2023/02/FluentSMTP-Amazon-AWS-SES-Configure-10-scaled.webp)

## FluentSMTP AWS SES Settings

#### Sender Settings

**From Email:** The **From Email** feature refers to the email address shown as the sender when an email is sent. It identifies the email source, ensuring recipients know who sent the email.

**From Name**: It’s a feature that specifies the name displayed alongside the sender’s email address, helping recipients easily recognize who sent the email.

**Force Form Email:** If enabled, the “From Email” setting above will be used for all emails, verifying that the email address is listed among the available connections.

**Set the return path to match the from email:** The **Return Path** determines where non-delivery receipts (bounce messages) are sent. If disabled, bounce messages may not be received. When enabled, any bounced emails will be sent to the “From Email” address, notifying you of issues with the recipient’s email.

Now paste the **Access Key**, **Secret Key**, and **Region** we have copied earlier from the Amazon AWS Console. After providing them in the FluentSMTP Settings, please click on the **Save Connection Settings** button.

![](https://fluentsmtp.com/wp-content/uploads/2023/02/FluentSMTP-Amazon-AWS-SES-Configure-11-scaled.webp)

### Access Keys Storage

- **Store Access Keys in DB:** By default, this is enabled and strongly recommended. This will keep the information in the Databases in Encrypted format.
- **Access Keys in Config File:** This allows you to store the access keys in the following section inside the wp-config.php file by the following directives.

Simply copy the following snippet and replace the stars with the corresponding credential. Then simply paste it to the wp-config.php file of your WordPress installation.

> We recommend using FluentSnippet on your WordPress site for a seamless experience. However, you can use any other snippet plugin of your choice.

```
define( 'FLUENTMAIL_AWS_ACCESS_KEY_ID', '********************' );

define( 'FLUENTMAIL_AWS_SECRET_ACCESS_KEY', '********************' );
```

![](https://fluentsmtp.com/wp-content/uploads/2023/02/FluentSMTP-Amazon-AWS-SES-Configure-12-scaled.webp)

That’s all about Configuring FluentSMTP with Amazon Web Services or AWS SES(Simple Email Service) to send emails from the WordPress website. Additionally, it is recommended to [Send a test email](https://fluentsmtp.com/docs/introduction-to-fluent-smtp-dashboard/#send-a-test-email), [Test Email Confirmation](https://fluentsmtp.com/docs/introduction-to-fluent-smtp-dashboard/#test-email-confirmation) and then [Confirm Test Email Deliverability](https://fluentsmtp.com/docs/introduction-to-fluent-smtp-dashboard/#confirm-test-email-deliverability).

## Additional Resources

Moving out of the Amazon SES Sandbox

A new AWS Console account will be in the Sandbox Mode by default. In this mode, you will only be able to simulate or practice sending emails to your own email addresses upon verifying them under Verified Identities.

To send emails to the users or realtime email sending, you need to go live from sandbox mode, Submit a request to AWS Support for Production Access to make your SES account go live from Sandbox. Please checkout this official resource: [Moving out of the Amazon SES Sandbox](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/request-production-access.html)

If you have any further questions or need assistance with this process, feel free to[contact us](https://wpmanageninja.com/support-tickets/). We’re here to help!

---

## Configure Elastic Email with FluentSMTP

**Source:** [https://fluentsmtp.com/docs/configure-elastic-email-in-fluent-smtp/](https://fluentsmtp.com/docs/configure-elastic-email-in-fluent-smtp/)

In [FluentSMTP](https://fluentsmtp.com/), you can configure **Elastic Email** to improve email deliverability and authenticity. Elastic Email provides the API to send emails and it will allow you to send 1000 emails at only $0.10 which is a very low price considering the service they offer.

This article will guide you through integrating **Elastic Email** into WordPress using the FluentSMTP plugin to send emails via SMTP.

## Configuring Elastic Email

To learn how to configure the **Elastic Email** with **FluentSMTP**, follow the steps with screenshots below –

First, go to **FluentSMTP** from **Settings** of **WordPress** **Dashboard**in the left sidebar, and select Elastic Email from the given **Connection Providers**.

![Fluent SMTP dshboard](https://fluentsmtp.com/wp-content/uploads/2023/01/1.-Fluent-SMTP-dshboard-scaled.webp)

But if you are already connected to any email service provider, go to the **Settings** section from the **FluentSMTP Navbar**and click the **+ Add Another Connection**button**.**

![+ Add Another Connection - Settings tab](https://fluentsmtp.com/wp-content/uploads/2023/01/2.-Add-Another-Connection-Settings-tab-scaled.webp)

Click the **Elastic Email**tab to connect to this provider.

![Elastic Email](https://fluentsmtp.com/wp-content/uploads/2023/01/3.-Elastic-Email.webp)

After you choose the provider, it will take you to the **Add Connection** page where you will get all the options to connect your **Elastic Email**.

> Additionally, if you want to change the connection provider, simply click the Change button right next to the Elastic Email tab at the top of the page.

**Here, you need to provide –**

- **From Email**: The “From Email” should be the email you verified with **Elastic Email**.

- **From Name**: From name can be anything you want. You can use a combination of your name and company name.

- **Force Sender Name**: Check the box to align the return path with the form. This setting indicates where bounce messages are sent. If unchecked, bounce messages will be lost. When enabled, you will receive an email at the “From Email” address for any bounced messages due to recipient email issues.

- **API Key**: The API Key has to be obtained from the **Elastic Email**. To get it you can click on the [Get API Key](https://elasticemail.com/account#/settings/new/manage-api) link under the API Key box.

- **Email Type**: Here, you can provide a clear instruction about the purpose of your email sending by choosing the **Email** **Type** between **Transactional** and **Marketing**.

Once you provide all the necessary information, click the **Save Connection Settings** button.
And, your**Elastic Email** will be connected with your **FluentSMTP** plugin.

![Add connection page](https://fluentsmtp.com/wp-content/uploads/2023/01/4.-Add-connection-page.webp)

### Get SparkPost API Key

Learn how to get the API Key from **Elastic Email** by following the steps with the screenshots below –

First, log into your [Elastic Email Account](https://elasticemail.com/account#/settings/new/manage-api), click the **Settings**section from the left sidebar, and select the **Create additional API Key**option.

![Settings of Elastic Email Acount](https://fluentsmtp.com/wp-content/uploads/2023/01/5.-Settings-of-Elastic-Email-Acount-scaled.webp)

Give your**API Key**a **Name** as per your requirements. Also can set the **Expiration** **Date** and access restriction for your API if needed.

Then, give the necessary **Custom** **Permissions** shown in the screenshot below and click the **Create**button and your API will be created.

![create API key page](https://fluentsmtp.com/wp-content/uploads/2023/01/6.-create-API-key-page.webp)

Here, you will get your API key in the **New API Key** box. Now, press the **Copy** button and your API Key will be copied.

![copy API key](https://fluentsmtp.com/wp-content/uploads/2023/01/7.-copy-API-key.webp)

Then, go back to the desired **Add Connection** page under **Settings** from the **Fluent SMTP Navbar** and **paste** the API Key you copied from **Elastic Email** inside the **API Key** box.

Once you input all the necessary information, finally, click the **Save Connection Settings**button.
And, your **Elastic Email** server will be connected to your **FluentSMTP**.

![Paste API key](https://fluentsmtp.com/wp-content/uploads/2023/01/8.-Paste-API-key.webp)

## Details of ElasticEmail API Settings

- **Store API Keys in DB**: By default, this is enabled and strongly recommended. This will keep the information in the Databases in Encrypted format.

- **Store API Keys in Config File**: This allows you to store the access keys in the following section inside the**wp-config.php file** by the following directives.

Simply **copy** the **following** **snippet** and **replace** the **stars** **with** the **corresponding** **credential**. Then simply **paste** **it to the wp-config.php file** of your **WordPress** **installation**

define( ‘FLUENTMAIL_ELASTICMAIL_API_KEY’, ‘********************’ );

![Detail of Elastic Email API Settings](https://fluentsmtp.com/wp-content/uploads/2023/01/9.-Detail-of-Elastic-Email-API-Settings.webp)

## Configured Elastic Email

Here, you can see that your Elastic Email is connected and ready to send emails from your WordPress site.

> To learn the details about General Settings, read this Documentation.Additionally, it is recommended to send a test email to check whether the configuration is successful or not, to learn how to send a test email in detail, read this Documentation.

![Configured Elastic Email and General Settings](https://fluentsmtp.com/wp-content/uploads/2023/01/10.-Configured-Elastic-Email-and-General-Settings-scaled.webp)

That’s all about Configuring FluentSMTP with Elastic Email to send emails from the WordPress website.
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Configure Postmark in FluentSMTP

**Source:** [https://fluentsmtp.com/docs/configure-postmark-in-fluent-smtp-to-send-emails/](https://fluentsmtp.com/docs/configure-postmark-in-fluent-smtp-to-send-emails/)

In [FluentSMTP](https://fluentsmtp.com/), you can configure **Postmark** to improve email deliverability and authenticity. Postmark is one of the leading mailer options for WordPress.

This article will guide you through integrating Postmark into WordPress using the FluentSMTP plugin to send emails via SMTP.

## Configuring Postmark

To learn how to configure the **Postmark**with **FluentSMTP**, follow the steps with screenshots below –

First, go to **FluentSMTP** from **Settings** of **WordPress** **Dashboard**in the left sidebar, and select **Postmark**from the given **Connection Providers**.

![Fluent SMTP dshboard](https://fluentsmtp.com/wp-content/uploads/2021/07/1.-Fluent-SMTP-dshboard-scaled.webp)

But if you are already connected to any email service provider, go to the **Settings** section from the **FluentSMTP Navbar**and click the **+ Add Another Connection**button**.**

![+ Add Another Connection - Settings tab](https://fluentsmtp.com/wp-content/uploads/2021/07/2.-Add-Another-Connection-Settings-tab-scaled.webp)

Click the **Postmark**tab to connect to this provider.

![Postmark](https://fluentsmtp.com/wp-content/uploads/2021/07/3.-Postmark-.webp)

After you choose the provider, it will take you to the **Add Connection** page where you will get all the options to connect your SparkPost.

> Additionally, if you want to change the connection provider, simply click the Change button right next to the Postmark tab at the top of the page.

**Here, you need to provide –**

- **From Email**: The “From Email” should be the email you verified with **Postmark**.

- **From Name**: From name can be anything you want. You can use a combination of your name and company name.

- **Force Sender Name**: Check the box to align the return path with the form. This setting indicates where bounce messages are sent. If unchecked, bounce messages will be lost. When enabled, you will receive an email at the “From Email” address for any bounced messages due to recipient email issues.

- **API Key**: The API Key has to be obtained from the **Postmark**. To get it you can click on the [Postmark Server](https://account.postmarkapp.com/servers) link under the API Key box.

- **Track Opens**: If you enable this option, the open tracking header will be added to the email for Postmark.

- **Track Links**: If you enable this option, the link tracking header will be added to the email for Postmark.

- **Message Stream**: Postmark allows you to specify your email types in two **Message** **Streams;**the**Transactional Stream** for individual messages like password resets and order confirmations, and the **Broadcast** **Stream** for bulk emails like newsletters and marketing campaigns.

Now, input the desired**Postmark Message Stream ID** into the **Message Stream** field based on the type of email you plan to send. Selecting the proper email stream helps you manage and track your emails more effectively, ensuring you follow the best practices for sending emails.

Once you provide all the necessary information, click the **Save Connection Settings** button.
And, your **Postmark** will be connected with your Fluent SMTP plugin.

![Add Connection page](https://fluentsmtp.com/wp-content/uploads/2021/07/4.-Add-Connection-page.webp)

### Get Postmark API Key

Learn how to get the API Key from **Postmark** by following the steps with the screenshots below –

First, log into your [Postmark Account](https://account.postmarkapp.com/servers), and select your **Server**(e.g., **My First Server**).
If you want to create a new server, click the **Create Server** button.

![Select server in Postmark Account](https://fluentsmtp.com/wp-content/uploads/2021/07/5.-Select-server-in-Postmark-Account.webp)

Now, open the **API Tokens** tab, you will get your API key in the **Server API tokens**box, and **copy** the **API Key**.
If you want to generate a new key, simply click the **Generate another token** button.

![Copy Server API Token](https://fluentsmtp.com/wp-content/uploads/2021/07/6.-Copy-Server-API-Token.webp)

Then, go back to the desired **Add Connection** page under **Settings** from the **Fluent SMTP Navbar** and **paste** the **API Key** you copied from **Postmark** inside the **API Key** box.

Once you input all the necessary information, finally, click the **Save Connection Settings**button.
And, your **Postmark Server** will be connected to your **FluentSMTP**.

![Paste API Key](https://fluentsmtp.com/wp-content/uploads/2021/07/7.-Paste-API-Key-.webp)

## Details of Postmark API Settings

- **Store API Keys in DB**: By default, this is enabled and strongly recommended. This will keep the information in the Databases in Encrypted format.

- **Store API Keys in Config File**: This allows you to store the access keys in the following section inside the**wp-config.php file** by the following directives.

Simply **copy** the **following** **snippet** and **replace** the **stars** **with** the **corresponding** **credential**. Then simply **paste** **it to the wp-config.php file** of your **WordPress** **installation**

define( ‘FLUENTMAIL_POSTMARK_API_KEY’, ‘********************’ );

![Detail of PostMark API Settings](https://fluentsmtp.com/wp-content/uploads/2021/07/8.-Detail-of-PostMark-API-Settings.webp)

## Configured Postmark

Here, you can see that your **Postmark** is connected and ready to send emails from your WordPress site.

> To learn the details about General Settings, read this Documentation.Additionally, it is recommended to send a test email to check whether the configuration is successful or not, to learn how to send a test email in detail, read this Documentation.

![Configured Postmark and General Settings option](https://fluentsmtp.com/wp-content/uploads/2021/07/9.-Configured-Postmark-and-General-Settings-option-scaled.webp)

That’s all about Configuring FluentSMTP with **Postmark** to send emails from the WordPress website.
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Configure SparkPost with FluentSMTP

**Source:** [https://fluentsmtp.com/docs/configure-sparkpost-in-fluent-smtp-to-send-emails/](https://fluentsmtp.com/docs/configure-sparkpost-in-fluent-smtp-to-send-emails/)

With [FluentSMTP](https://fluentsmtp.com/), you can integrate **SparkPost** into **WordPress** to improve email deliverability and authenticity. SparkPost is one of the leading mailer options for WordPress, that is reliable and easy to set up. This article will guide you through integrating SparkPost into WordPress using the FluentSMTP plugin to send emails via SMTP.

## Configuring SparkPost

To learn how to configure the **SparkPost** with **FluentSMTP**, follow the steps with screenshots below –

First, go to **FluentSMTP** from **Settings** of **WordPress** **Dashboard**in the left sidebar, and select SparkPost from the given **Connection Providers**.

![Connection Providers under Settings from FluentSMTP Dashboard](https://fluentsmtp.com/wp-content/uploads/2021/01/FluentSMTP-dashboard-scaled.webp)

But, if you are already connected to any email service provider, go to the **Settings** section from the **FluentSMTP Navbar**and click the **+ Add Another Connection**button**.**

![Add Another Connection button](https://fluentsmtp.com/wp-content/uploads/2021/01/Add-Another-Connection-button-under-Settings-section-scaled.webp)

Click the **SparkPost** tab to connect to this provider.

![SparkPost tab under Add Connection page of FluentSMTP Settings](https://fluentsmtp.com/wp-content/uploads/2021/01/SparkPost-tab-under-Connection-Providers-scaled.webp)

After you choose the provider, it will take you to the **Add Connection** page where you will get all the options to connect your SparkPost.

> Additionally, if you want to change the connection provider, simply click the Change button right next to the SparkPost tab at the top of the page.

**Here, you need to provide –**

- **From Email**: The “From Email” should be the email you verified with SparkPost.

- **From Name**: From name can be anything you want. You can use a combination of your name and company name.

- **Force Sender Name**: Check the box to align the return path with the form. This setting indicates where bounce messages are sent. If unchecked, bounce messages will be lost. When enabled, you will receive an email at the “From Email” address for any bounced messages due to recipient email issues.

- **API Key**: The API Key has to be obtained from the SparkPost. To get the SparkPost API Key, click the [Get API Key](https://app.sparkpost.com/account/api-keys) link under the API Key box.

Once you provide all the necessary information, click the **Save Connection Settings** button.
And, your **SparkPost** will be connected with your **FluentSMTP** plugin.

![Explanation of all the options of Add Connection page](https://fluentsmtp.com/wp-content/uploads/2021/01/Add-Connection-page-scaled.webp)

### Get SparkPost API Key

Learn how to get the API Key from **SparkPost** by following the steps with the screenshots below –

First, log into your [SparkPost Account](https://login.sparkpost.com/u/login?state=hKFo2SBBRGo5eUIxbDRRdmVWczJnU1l0d1MxazNXdUFiNTZXb6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIDQ5em5yWTRrSW5kc1hHc2RUbUdCV0RtTWQ2TDhTOWlJo2NpZNkgUXR5QVJpOEZoTlpUZ2xCWXdPNWRTeXpzZG5RdmR4Q3k), click the **Configuration** section from the top navbar, select the **API Keys**tab, and press the **Create API Key**button to get your desired API key.

![Dashboard of SparkPost](https://fluentsmtp.com/wp-content/uploads/2021/01/SparkPost-dashboard.webp)

Give your**API Key**a **Name** according to your requirements and click the **Create API** Key button and your API will be created.

![Create API Key page](https://fluentsmtp.com/wp-content/uploads/2021/01/Create-API-Key-page.webp)

Here, you will get your API key in the **New API Key** box. Now, press the **Copy** button and your API Key will be copied.

![Newly created API Key](https://fluentsmtp.com/wp-content/uploads/2021/01/Get-the-API-Key.webp)

Then, go back to the desired **Add Connection** page under **Settings** from the **Fluent SMTP Navbar** and **paste** the API Key you copied from SparkPost inside the **API Key** box.

Once you input all the necessary information, finally, click the **Save Connection Settings**button and your Gmail server will be connected to your Fluent SMTP.

![Pasted API Key and Save Connection Settings page](https://fluentsmtp.com/wp-content/uploads/2021/01/paste-API-Key--scaled.webp)

## Details of SparkPost API Settings

- **Store API Keys in DB**: By default, this is enabled and strongly recommended. This will keep the information in the Databases in Encrypted format.

- **Store API Keys in Config File**: This allows you to store the access keys in the following section inside the**wp-config.php file** by the following directives.

Simply **copy** the **following** **snippet** and **replace** the **stars** **with** the **corresponding** **credential**. Then simply **paste** **it to the wp-config.php file** of your **WordPress** **installation**

define( ‘FLUENTMAIL_SPARKPOST_API_KEY’, ‘********************’ );

![Detail of SparkPost API Settings](https://fluentsmtp.com/wp-content/uploads/2021/01/9.-Detail-of-SparkPost-API-Settings.webp)

## Configured SparkPost

Here, you can see that your SparkPost is connected and ready to send emails from your WordPress site.

> To learn the details about General Settings, read this Documentation.Additionally, it is recommended to send a test email to check whether the configuration is successful or not, to learn how to send a test email in detail, read this Documentation.

![Preview of connected SparkPost](https://fluentsmtp.com/wp-content/uploads/2021/01/Connected-SaprkPost-scaled.webp)

That’s all about Configuring FluentSMTP with SparkPost to send emails from the WordPress website.
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Setup the SendGrid Driver with FluentSMTP

**Source:** [https://fluentsmtp.com/docs/set-up-the-sendgrid-driver-in-fluent-smtp/](https://fluentsmtp.com/docs/set-up-the-sendgrid-driver-in-fluent-smtp/)

In [FluentSMTP](https://fluentsmtp.com/), you can configure **SendGrid**to improve email deliverability and authenticity. SendGrid is one of the leading mailer options for WordPress, SendGrid is reliable and easy to set up.

This article will guide you through integrating **SendGrid** into WordPress using the FluentSMTP plugin to send emails via SMTP.

## Configuring SendGrid

To learn how to configure the **SendGrid**with **FluentSMTP**, follow the steps with screenshots below –

First, go to **FluentSMTP** from **Settings** of **WordPress** **Dashboard**in the left sidebar, and select SendGrid from the given **Connection Providers**.

![Fluent SMTP dshboard](https://fluentsmtp.com/wp-content/uploads/2021/01/1.-Fluent-SMTP-dshboard-2-scaled.webp)

But if you are already connected to any email service provider, go to the **Settings** section from the **FluentSMTP Navbar**and click the **+ Add Another Connection**button**.**

![+ Add Another Connection - Settings tab](https://fluentsmtp.com/wp-content/uploads/2021/01/2.-Add-Another-Connection-Settings-tab-3-scaled.webp)

Click the **SendGrid**tab to connect to this provider.

![Sendgrid](https://fluentsmtp.com/wp-content/uploads/2021/01/3.-Sendgrid.webp)

After you choose the provider, it will take you to the **Add Connection** page where you will get all the options to connect your **SendGrid**.

> Additionally, if you want to change the connection provider, simply click the Change button right next to the SendGrid tab at the top of the page.

**Here, you need to provide –**

- **From Email**: The “From Email” should be the email you verified with **SendGrid**.

- **From Name**: From name can be anything you want. You can use a combination of your name and company name.

- **Force Sender Name**: Check the box to align the return path with the form. This setting indicates where bounce messages are sent. If unchecked, bounce messages will be lost. When enabled, you will receive an email at the “From Email” address for any bounced messages due to recipient email issues.

- **API Key**: The API Key has to be obtained from the **SendGrid**. To get it you can click on the [Create API Key](https://app.sendgrid.com/settings/api_keys) link under the API Key box.

Once you provide all the necessary information, click the **Save Connection Settings** button.
And, your**SendGrid** will be connected with your **FluentSMTP** plugin.

![Add Connection Page](https://fluentsmtp.com/wp-content/uploads/2021/01/4.-Add-Connection-Page-2.webp)

### Get SendGrid API Key

Learn how to get the API Key from **SendGrid**by following the steps with the screenshots below –

First, log into your [SendGrid Account](https://app.sendgrid.com/settings/api_keys), click the **Settings**section from the left sidebar, open the **API Keys**page, and click the**Create API Key**button.

![SendGrid's Settings - API keys - Generate API key button](https://fluentsmtp.com/wp-content/uploads/2021/01/5.-SendGrids-Settings-API-keys-Generate-API-key-button.webp)

Give your**API Key**a **Name** as per your requirements.

Then, give the necessary **Permissions**according to your needs, click the **Create & View**button, and your API key will be created.

![Provide Name & Permission for API](https://fluentsmtp.com/wp-content/uploads/2021/01/6.-Provide-Name-Permission-for-API.webp)

Here, you will get your created API key, simply **Copy** it.

![Copy API Key](https://fluentsmtp.com/wp-content/uploads/2021/01/7.-Copy-API-Key.webp)

Then, go back to the desired **Add Connection** page under **Settings** from the **Fluent SMTP Navbar** and **paste** the API Key you copied from **SendGrid** inside the **API Key** box.

Once you input all the necessary information, finally, click the **Save Connection Settings**button.
And, your **SendGrid** server will be connected to your **FluentSMTP**.

![Paste API Key](https://fluentsmtp.com/wp-content/uploads/2021/01/8.-Paste-API-Key.webp)

## Details of SendGrid API Settings

- **Store API Keys in DB**: By default, this is enabled and strongly recommended. This will keep the information in the Databases in Encrypted format.

- **Store API Keys in Config File**: This allows you to store the access keys in the following section inside the**wp-config.php file** by the following directives.

Simply **copy** the **following** **snippet** and **replace** the **stars** **with** the **corresponding** **credential**. Then simply **paste** **it to the wp-config.php file** of your **WordPress** **installation**

define( ‘FLUENTMAIL_SENDGRID_API_KEY’, ‘********************’ );

![Detail of SendGrid API Settings](https://fluentsmtp.com/wp-content/uploads/2021/01/9.-Detail-of-SendGrid-API-Settings-.webp)

## Configured SendGrid

Here, you can see that your SendGrid is connected and ready to send emails from your WordPress site.

> To learn the details about General Settings, read this Documentation.Additionally, it is recommended to send a test email to check whether the configuration is successful or not, to learn how to send a test email in detail, read this Documentation.

![Added Sendgrid & General Settings](https://fluentsmtp.com/wp-content/uploads/2021/01/10.-Added-Sendgrid-General-Settings-scaled.webp)

That’s all about Configuring FluentSMTP with SendGrid to send emails from the WordPress website.
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Set Up the Netcore Mailer in FluentSMTP

**Source:** [https://fluentsmtp.com/docs/set-up-the-pepipost-mailer-in-fluent-smtp/](https://fluentsmtp.com/docs/set-up-the-pepipost-mailer-in-fluent-smtp/)

Do you want to use Netcore Mailer to improve the email delivery of your WordPress site? In this article, you will learn about how you can use Netcore for sending WordPress emails using FluentSMTP’s Netcore Driver.

## Configuring FluentSMTP for Netcore

Log into your WordPress admin dashboard and hover over Settings and select FluentSMTP from the dropdown menu.

![Configuring Fluent SMTP for Pepipost](https://fluentsmtp.com/wp-content/uploads/2021/01/Configuring-Fluent-SMTP-for-Pepipost.png)

If this is the first time you are using FluentSMTP and haven’t set up any connection yet, you will see the list of available Mailers to configure, as we will work with Netcore, select Netcore from the list.

![](https://fluentsmtp.com/wp-content/uploads/2023/07/Fluent-SMTP-‹-Demosite-—-WordPress.png)

If you already have one or multiple SMTP driver setups and now you want to add Netcore also, go to the **Settings Tab of FluentSMTP** and select **Add New Connection**. Now again all the available drivers will appear from where you need to select **Netcore**.

![Fluent SMTP for Pepipost](https://fluentsmtp.com/wp-content/uploads/2021/01/Fluent-SMTP-for-Pepipost.png)

## Sender Settings

Now we will configure the sender details. Fill up the “From Email” and “From Name” from the sender settings

**From Email:** The “From Email” should be the email you verified with Netcore. Check the box to set the return path to match the from. The Return Path indicates where non-delivery receipts or bounce messages are to be sent. If unchecked, bounce messages will be lost. With this enabled,
you’ll be emailed using “From Email” if any messages bounce as a result of issues with the recipient’s email.

**From Name:** From name can be anything you want. You can use a combination of your name and company name. For example, I would choose something like “Jafor From WPManageNinja” where Jafor is the name and WPManageNinja is the company. The API key will be provided by Netcore.

## Get Netcore API Key

Log into your Netcore account and click on Settings and choose Integrations. Now select API Tab. Copy the API Key from here and paste it into the FluentSMTP Private API Key filed of MailGun configuration.

![ Where will I find my Pepipost SMTP details API key](https://fluentsmtp.com/wp-content/uploads/2021/01/Screenshot_11.png)

After getting the Netcore API key, go back to FluentSMTP’s Netcore configuration panel and enter the API key. Once done, click on **Save Connection Settings,** and your Netcore Driver is ready to send emails from your WordPress site.

---

## Configure Mailgun with FluentSMTP

**Source:** [https://fluentsmtp.com/docs/configure-mailgun-in-fluent-smtp-to-send-emails/](https://fluentsmtp.com/docs/configure-mailgun-in-fluent-smtp-to-send-emails/)

With [FluentSMTP](https://fluentsmtp.com/), you can integrate Mailgun into WordPress to improve email deliverability and authenticity. Mailgun is one of the leading mailer options for WordPress, that is reliable and easy to set up.

This article will guide you through integrating Mailgun into WordPress using the FluentSMTP plugin to send emails via SMTP.

## Configuring Mailgun

To learn how to configure the **Mailgun**with **FluentSMTP**, follow the steps with screenshots below –

First, go to **FluentSMTP** from **Settings** of **WordPress** **Dashboard**in the left sidebar, and select Mailgun from the given **Connection Providers**.

![Fluent SMTP dshboard](https://fluentsmtp.com/wp-content/uploads/2021/01/1.-Fluent-SMTP-dshboard-1-scaled.webp)

But if you are already connected to any email service provider, go to the **Settings** section from the **FluentSMTP Navbar**and click the **+ Add Another Connection**button**.**

![+ Add Another Connection - Settings tab](https://fluentsmtp.com/wp-content/uploads/2021/01/2.-Add-Another-Connection-Settings-tab-1-scaled.webp)

Click the **Mailgun** tab to connect to this provider.

![Mailgun](https://fluentsmtp.com/wp-content/uploads/2021/01/3.-Mailgun.webp)

After you choose the provider, it will take you to the **Add Connection** page where you will get all the options to connect your **Mailgun**.

> Additionally, if you want to change the connection provider, simply click the Change button right next to the Mailgun tab at the top of the page.

**Here, you need to provide –**

- **From Email**: The “From Email” should be the email you verified with **Mailgun**.

- **From Name**: From name can be anything you want. You can use a combination of your name and company name.

- **Set the return-path to match the From Email**: Return Path indicates where non-delivery receipts or bounce messages will be sent. If you enable this, you’ll be emailed using “From Email” if any messages bounce due to recipient email issues. If you keep it unchecked, bounce messages may be lost

- **Force Sender Name**: Check the box to align the return path with the form. This setting indicates where bounce messages are sent. If unchecked, bounce messages will be lost. When enabled, you will receive an email at the “From Email” address for any bounced messages due to recipient email issues.

- **Private API Key**: The API Key has to be obtained from the **Mailgun**. To get it you can click on the [Get a Private API Key](https://app.mailgun.com/settings/api_security/api_keys) link under the Private API Key box.

- **Domain Name**: Here, you have to provide the domain that you added and verified in your Mailgun. To get it you can click on the [Get a Domain Name](https://app.mailgun.com/mg/sending/domains) link under the Domain Name box.

- **Select Region**: Select the region by checking the US or EU. This should match what you set up in Mailgun (anyone outside of the European Union should select the US option). To learn details, click the [More information on Mailgun.com](https://www.mailgun.com/regions) link.

Once you provide all the necessary information, click the **Save Connection Settings** button.
And, your **Mailgun** will be connected with your **FluentSMTP** plugin.

![Add COnnection Page](https://fluentsmtp.com/wp-content/uploads/2021/01/4.-Add-COnnection-Page-1.webp)

### Get Private API Key from Mailgun

Learn how to get the Private API Key from **Mailgun** by following the steps with the screenshots below –

First, log into your [Mailgun Account Dashboard](https://app.mailgun.com/settings/api_security/api_keys), click the **Dropdown Arrow**right next to the profile section from the top navbar, and open the **API Security**tab**.**

![API Security tab](https://fluentsmtp.com/wp-content/uploads/2021/01/5.-API-Security-tab-scaled.webp)

This will take you to a page that includes your **Mailgun API keys**.

> Remember, in your Mailgun account, you will see 3 API keys; Mailgun API keys, HTTP Webhook Signing key, and Verification Public key. We recommend using your Mailgun API Key to configure FluentSMTP.

Now, if you want to generate a new API key for the configuration, click the **Add new key** button.

![Add New Key button](https://fluentsmtp.com/wp-content/uploads/2021/01/6.-Add-New-Key-button.webp)

Now add a **Name** for your API key into the **Description** box to find it easily later, select the **Role** from the **Dropdown List**, and click the **Create Key** button to get your desired API key.

Plus, by expanding the **“What does each role have access to?”** option, you can see what permissions each role has. To know more details, visit the **Learn more about role-based access control**link.

![Create Key button](https://fluentsmtp.com/wp-content/uploads/2021/01/7.-Create-Key-button.webp)

Here is your **Mailgun Private API Key**, copy it by clicking the **Copy** icon.

> Remember, make sure you copy the key and store it somewhere safe and accessible, as the key is only displayed once. If you lose the key, you’ll need to generate a new one by repeating the previous steps.

![Copy API Key](https://fluentsmtp.com/wp-content/uploads/2021/01/8.-Copy-API-Key-1.webp)

### Get Domain Name from Mailgun

Learn how to get the Domain verified from **Mailgun** by following the steps with the screenshots below –

First, log into your [Mailgun Account Dashboard](https://app.mailgun.com/mg/sending/domains), expand the **Send** dropdown list****from the left sidebar, open the **Domains** tab by clicking the **Sending** button, and click the **Add new domain**button.

![Add New Domain button](https://fluentsmtp.com/wp-content/uploads/2021/01/9.-Add-New-Domain-button-scaled.webp)

**On this page, provide all the necessary information to get your desired Domain Name.**

**Domain Name**: Here, enter the site domain you want to add in****the**Domain Name** field.

> We recommend you use a subdomain of your website’s domain name (e.g., subdomain.example.com). Mailgun will use this subdomain exclusively for sending emails and it will not be visible on your site. It doesn’t matter what you name to your subdomain, but you can use “mail” or “mg” in your subdomain as it makes the purpose clear.

**Domain Region:** Here, you need to select the domain region between **US** and **EU**. If your site is hosted in the European Union, please choose the EU. If your site is hosted outside of the European Union, please leave the default option as the US.

**DKIM key length**: This advanced setting adds an extra security layer for spam protection. We recommend selecting the **2048** option, which creates a longer**DKIM key**to make spamming more difficult for spammers.

Once you are done, click the **Add Domain** button, and your desired domain will be added.

![Add Domain page](https://fluentsmtp.com/wp-content/uploads/2021/01/10.-Add-Domain-page-scaled.webp)

After adding the domain, you will be redirected to the **DNS records** tab to verify the added domain and activate the configuration. You will see, each record is showing as **Unverified**.

![Unverified Domain](https://fluentsmtp.com/wp-content/uploads/2021/01/11.-Unverified-Domain-scaled.webp)

#### Verify Your Domain

> Like other SMTP services, Mailgun also requires you to verify your added domain by adding Mailgun-provided Records to your Site’s DNS to protect the site owners and their visitors.You can find more information on the benefits of verifying your domain in Mailgun’s guide.

First, go to the **Site** which domain you added and open the **DNS** settings. Then**, add** all of the **Mailgun Records**for **Sending**, **Receiving**, and **Tracking**shown in the screenshot below into your **Site’s** **DNS Provider**.

If you’re not sure how to find your **DNS Provider,** **Mailgun** added a detailed **Guide** with some helpful links under the **Assist Me** dropdown list. Read these accordingly.

Once you have completed the process on your site, return to this page and click the **Verify** button.

![Verify button](https://fluentsmtp.com/wp-content/uploads/2021/01/12.-Verify-button--scaled.webp)

Once Mailgun verifies the DNS changes you made, you can see each record is shown as **Active**/**Verified**.

> Now Mailgun will verify whether your domain has proper DNS records. This verification can take a while (sometimes 24-48 hours) because DNS records may take some time to update.

![Preview os each record verified](https://fluentsmtp.com/wp-content/uploads/2021/01/13.-Preview-os-each-record-verified-scaled.webp)

After completing the Domain Verification, it will show a **Tick Sign** as an active status next to your domain name.

Simply, **copy** it for later use in the configuration with FluentSMTP.

![copy domain name png](https://fluentsmtp.com/wp-content/uploads/2021/01/14.copy-domain-name-png-scaled.webp)

Finally, go back to the desired **Add Connection** page under **Settings** from the **Fluent SMTP Navbar,** and **paste** the **Private** **API Key** and **Domain Name** you copied from **Mailgun** into respective fields.

Once you input all the necessary information, finally, click the **Save Connection Settings**button.
And, your **Mailgun Server** will be connected to your Fluent SMTP.

![Paste Private Key & Domain Name](https://fluentsmtp.com/wp-content/uploads/2021/01/15.-Paste-Private-Key-Domain-Name.webp)

## Details of Mailgun API Settings

- **Store API Keys in DB**: By default, this is enabled and strongly recommended. This will keep the information in the Databases in Encrypted format.

- **Store API Keys in Config File**: This allows you to store the access keys in the following section inside the**wp-config.php file** by the following directives.

Simply **copy** the **following** **snippets** and **replace** the **stars** **with** the **corresponding** **credential**. Then simply **paste** **it to the wp-config.php file** of your **WordPress** **installation**

define( ‘FLUENTMAIL_MAILGUN_API_KEY’, ‘********************’ );
define( ‘FLUENTMAIL_MAILGUN_DOMAIN’, ‘********************’ );

![Details of Mailgun API Settings](https://fluentsmtp.com/wp-content/uploads/2021/01/16.-Details-of-Mailgun-API-Settings.webp)

## Configured Mailgun

Here, you can see that your Mailgun is connected and ready to send emails from your WordPress site.

> To learn the details about General Settings, read this Documentation.Additionally, it is recommended to send a test email to check whether the configuration is successful or not, to learn how to send a test email in detail, read this Documentation.

![Configured Mailgun](https://fluentsmtp.com/wp-content/uploads/2021/01/17.-Configured-Mailgun--scaled.webp)

That’s all about Configuring FluentSMTP with Mailgun to send emails from the WordPress website.
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Setup Brevo Mailer with FluentSMTP

**Source:** [https://fluentsmtp.com/docs/setting-up-sendinblue-mailer-in-fluent-smtp/](https://fluentsmtp.com/docs/setting-up-sendinblue-mailer-in-fluent-smtp/)

In [FluentSMTP](https://fluentsmtp.com/), you can integrate **Brevo Mailer** to improve email deliverability and authenticity. **Brevo Mailer**(previously recognized****as**Sendinblue**) is one of the leading mailer options for WordPress, that is reliable and easy to set up.

This article will guide you through integrating Brevo Mailer into WordPress using the FluentSMTP plugin to send emails via SMTP.

## Configuring Brevo Mailer

To learn how to configure the **Brevo Mailer** with **FluentSMTP**, follow the steps with screenshots below –

First, go to **FluentSMTP** from **Settings** of **WordPress** **Dashboard**in the left sidebar, and select Brevo Mailer from the given **Connection Providers**.

![Fluent SMTP dshboard](https://fluentsmtp.com/wp-content/uploads/2021/01/1.-Fluent-SMTP-dshboard-scaled.webp)

But if you are already connected to any email service provider, go to the **Settings** section from the **FluentSMTP Navbar**and click the **+ Add Another Connection**button**.**

![+ Add Another Connection - Settings tab](https://fluentsmtp.com/wp-content/uploads/2021/01/2.-Add-Another-Connection-Settings-tab-scaled.webp)

Click the **Brevo Mailer** tab to connect to this provider.

![Brevo Mailer](https://fluentsmtp.com/wp-content/uploads/2021/01/3.-Brevo-Mailer.webp)

After you choose the provider, it will take you to the **Add Connection** page where you will get all the options to connect your **Brevo Mailer**.

> Additionally, if you want to change the connection provider, simply click the Change button right next to the Brevo Mailer tab at the top of the page.

**Here, you need to provide –**

- **From Email**: The “From Email” should be the email you verified with **Brevo Mailer**.

- **From Name**: From name can be anything you want. You can use a combination of your name and company name.

- **Force Sender Name**: Check the box to align the return path with the form. This setting indicates where bounce messages are sent. If unchecked, bounce messages will be lost. When enabled, you will receive an email at the “From Email” address for any bounced messages due to recipient email issues.

- **API Key**: The API Key has to be obtained from the SparkPost. To get it you can click on the [Get V3 API Key](https://app.brevo.com/settings/keys/api) link under the API Key box.

Once you provide all the necessary information, click the **Save Connection Settings** button.
And, your **Brevo Mailer** will be connected with your Fluent SMTP plugin.

![Add connection page](https://fluentsmtp.com/wp-content/uploads/2021/01/4.-Add-connection-page.webp)

### Get Brevo Mailer API Key

Learn how to get the API Key from**Brevo Mailer** by following the steps with the screenshots below –

First, log into your [Brevo Mailer Account](https://app.brevo.com/settings/keys/api), click the **Company Name**in the top right corner, and open the **SMTP & API**tab.

![SMTP & API option in Brevo](https://fluentsmtp.com/wp-content/uploads/2021/01/5.-SMTP-API-option-in-Brevo-scaled.webp)

Now, go to the **API Keys**tab and click the **Generate a new API key** button.

![API Keys tab & Generate new key button](https://fluentsmtp.com/wp-content/uploads/2021/01/6.-API-Keys-tab-Generate-new-key-button-scaled.webp)

Give your**API Key**a **Name** as per your requirements and click the **Generate** button and your API will be created.

![Name API key](https://fluentsmtp.com/wp-content/uploads/2021/01/7.-Name-API-key-.webp)

Here, you will get your API key. Now, press the **Copy** button and your API Key will be copied.

![Copy API key](https://fluentsmtp.com/wp-content/uploads/2021/01/8.-Copy-API-key.webp)

Then, go back to the desired **Add Connection** page under **Settings** from the **Fluent SMTP Navbar** and **paste** the API Key you copied from **Brevo Mailer** inside the **API Key** box.

Once you input all the necessary information, finally, click the **Save Connection Settings**button.
And, your **Brevo Mailer** server will be connected to your Fluent SMTP.

![Paste API key](https://fluentsmtp.com/wp-content/uploads/2021/01/9.-Paste-API-key.webp)

## Details of Sendinblue API Settings

- **Store API Keys in DB**: By default, this is enabled and strongly recommended. This will keep the information in the Databases in Encrypted format.

- **Store API Keys in Config File**: This allows you to store the access keys in the following section inside the**wp-config.php file** by the following directives.

Simply **copy** the **following** **snippet** and **replace** the **stars** **with** the **corresponding** **credential**. Then simply **paste** **it to the wp-config.php file** of your **WordPress** **installation**

```
define( 'FLUENTMAIL_SENDINBLUE_API_KEY', '********************' );
```

![Detail of Sendinblue API Settings](https://fluentsmtp.com/wp-content/uploads/2021/01/10.-Detail-of-Sendinblue-API-Settings.webp)

## Configured Brevo Mailer

Here, you can see that your Brevo Mailer is connected and ready to send emails from your WordPress site.

> To learn the details about General Settings, read this Documentation.Additionally, it is recommended to send a test email to check whether the configuration is successful or not, to learn how to send a test email in detail, read this Documentation.

![Configured Brevo Mailer and General Settings](https://fluentsmtp.com/wp-content/uploads/2021/01/11.-Configured-Brevo-Mailer-and-General-Settings-scaled.webp)

That’s all about Configuring FluentSMTP with Brevo Mailer to send emails from the WordPress website.
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

