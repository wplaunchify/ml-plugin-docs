# Security

*Category from Fluent Forms documentation*

---

## CleanTalk Spam Protection in Fluent Forms

**Source:** [https://fluentforms.com/docs/cleantalk-spam-protection-in-fluent-forms/](https://fluentforms.com/docs/cleantalk-spam-protection-in-fluent-forms/)

Fluent Forms integrates CleanTalk to enhance the security of your form submissions and protect them from spambots. This article will guide you through integrating CleanTalk on your WordPress Site through Fluent Forms.

This guide will show you how to connect CleanTalk to your forms. There are two simple ways to do this:

**Method 1:** Use your CleanTalk Access Key directly in Fluent Forms.

**Method 2:** Use the official CleanTalk plugin for WordPress.

## Connect with a CleanTalk Access Key

This is the easiest way to integrate **CleanTalk** with **Fluent Forms**. You’ll just need to get an “**Access Key**” from your CleanTalk account and paste it into Fluent Forms.

### Get Your Access Key from CleanTalk

To learn how to get the Access Key from CleanTalk, follow the steps with the screenshots below –

Go to the [CleanTalk](https://cleantalk.org/) website and log in to your dashboard. If you don’t have an account, you’ll need to create one first.

Once you’re logged in, you will find your **Access Key** displayed in your dashboard. **Copy** this key.

But if you log in to an existing CleanTalk account, you will get the **Access Key**shown in the screenshot below.

![](https://fluentforms.com/wp-content/uploads/2025/10/login-cleantalk-01-scaled.webp)

### Add the Key to Fluent Forms

First, go to **Global Settings** from the WordPress Left Sidebar or FluentForms Navbar, open the **Security** tab from the left sidebar, and click the **CleanTalk** option.

- **Access Key:**Now, you will be asked to provide the **Access Key** from your  CleanTalk Account for the configuration.

- **Spam Validation:** Using this option, you can select what will happen once a submission is marked as spam. You can choose any one among these “**Mask as Spam**“, “**Make the** **Form Submission as failed**“, or “**Mark as Spam and Skip Processing**” options.

Once you provide the **Access Key**, press the **Save Settings** button to make your CleanTalk Integration functional.

![](https://fluentforms.com/wp-content/uploads/2025/10/global-settings-04-scaled.webp)

## Connect with the CleanTalk Plugin

If you already use the official **CleanTalk** plugin on your website, you can connect it to Fluent Forms with a single click.

### Install and Activate the CleanTalk Plugin

To learn how to install and activate the CleanTalk plugin in WordPress, follow the steps below –

First, go to **Plugins** in the **WordPress** Left Sidebar, click **Add New Plugin**, and search for the **CleanTalk** plugin using the Search Plugins option on the right.

Once the CleanTalk plugin appears, click the **Install** **Now** button, and your CleanTalk plugin will be installed on your site. Then, click the **Activate** button, and the CleanTalk plugin will be activated and ready to function.

![Install CleanTalk](https://fluentforms.com/wp-content/uploads/2025/02/6.-Install-CleanTalk-scaled.webp)

### Enable the Integration in Fluent Forms

Once the CleanTalk plugin is active, follow the steps to integrate with Fluent Forms.

First, go to **Global Settings**from the WordPress Left Sidebar or **Fluent Forms** Navbar, open the **General** tab from the left menu, and click the **Miscellaneous** option.

Now, turn on the **Enable CleanTalk Integration**toggle, and the security will be enabled. Here, you will also get the **Spam** **Validation** option to select what will happen once a submission is marked as spam.

> Remember, to access the ‘Enable CleanTalk Integration’ option, CleanTalk has to be installed and activated on your WordPress site.

Finally, don’t forget to click the**Save Settings** button to make all the setup functional.

![Enable CleanTalk Integration toggle from Miscellaneous option](https://fluentforms.com/wp-content/uploads/2025/02/5.-Enable-CleanTalk-Integration-toggle-from-Miscellaneous-option-scaled.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Spam Protection With Honeypot and Google reCAPTCHA in Fluent Forms

**Source:** [https://fluentforms.com/docs/spam-protection-with-honeypot-and-google-recaptcha-in-fluent-forms/](https://fluentforms.com/docs/spam-protection-with-honeypot-and-google-recaptcha-in-fluent-forms/)

[Fluent Forms](https://fluentforms.com/) offers **Honeypot Security** and **reCAPTCHA** to protect your form entries from spambots and keep your contact lists spam-free. This article will guide you through the process of **Spam Protection** using **Honeypot** **Security** and **reCAPTCHA**.

## Spam Protection using Honeypot

Honeypot is a clever cybersecurity strategy that acts like a digital decoy, designed to lure cybercriminals into a trap and keep them away from legitimate targets. Enable this setting if you want Fluent Forms to verify honeypot security for all Fluent Forms.

Basically, it prevents spam bots by incorporating a hidden field into your contact form. This field is invisible to genuine users, but bots lacking intelligence will still fill it out. By doing so, the honeypot can identify these bots and block their submissions.

**To learn how to protect your forms using HoneyPot Security, follow the steps below –**

First, go to **Global Settings**from the **FluentForms Navbar**, open the **General**tab from the left sidebar, and click the **Miscellaneous**option.

Now, turn on the **Enable Honeypot Security** toggle, and the security will be enabled to protect your forms from spambots.

Don’t forget to click the **Save Settings**button to make all the setup functional.

![](https://fluentforms.com/wp-content/uploads/2024/12/1.-Enable-Honeypot-from-General-tab-of-global-Settings-scaled.webp)

> Remember, Honeypot Security does not protect your forms against manually submitted human spam. In this case, you need to use Google reCAPTCHA to catch spam.

## Spam Protection using reCAPTCHA

**reCAPTCHA** is a **CAPTCHA** system designed by **Google** to protect websites from bots by ensuring that a computer user is human with the power of machine learning.

**To learn how to protect your forms using reCAPTCHA, follow the steps below –**

First, go to **Global Settings**from the **FluentForms Navbar**, open the **General**tab from the left sidebar, and click the **Miscellaneous**option.

Now, scroll down to **Auto Load CAPTCHA**, turn on the **toggle**, select the **Google reCAPTCHA**option**,**and the **reCAPTCHA** will automatically load in all fluent forms to protect them from spam.

Don’t forget to click the **Save Settings**button to make all the setup functional.

![](https://fluentforms.com/wp-content/uploads/2024/12/2.-Auto-load-CAPTCHA-toggle-from-General-tab-of-global-Settings-scaled.webp)

> But, to enable this option, you need to integrate the Google reCAPTCHA with your Fluent Forms first.

To do this, go to **Global Settings**from the **FluentForms Navbar**, open the **Security**tab from the left sidebar, and click the **reCAPTCHA**option.

Now, select the desired **Version** of reCAPTCHA, provide the**Site & Secret Keys,** and click the**Save Settings**button.

> To learn the detailed process of collecting Site & Secret Keys to integrate reCAPTCHA with Fluent Forms, read this Documentation.

![](https://fluentforms.com/wp-content/uploads/2024/12/3.-reCAPTCHA-Settings-scaled.webp)

## Spam protection in a specific Form

You can also add an extra layer of spam protection by enabling the settings option below inside any particular form.

To do this, go to **Forms** from the top navbar, and **open** the **Editor** page of your **desired form**by clicking the **Edit** button where you want to set this protection.

![](https://fluentforms.com/wp-content/uploads/2024/12/4.-desired-Form-Editor-scaled.webp)

Now, go to **Settings & Integrations** from the top navbar, open the **Scheduling & Restrictions**tab, and turn on the **Login Requirement Settings** and **Empty Submission Blocking** toggle.

- **Login Requirement Setting**s: Once you enable this option, it will stop non-logged users from submitting the form.

- **Empty Submission Blocking**: Once you enable this option, it will prevent the form from empty submissions.

Don’t forget to click the **Save Settings**button to make all the setup functional.

![](https://fluentforms.com/wp-content/uploads/2024/12/5.-Settings-and-Integration-tab-in-a-form-scaled.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).

---

## How to Integrate Cloudflare Turnstile with Fluent Forms

**Source:** [https://fluentforms.com/docs/how-to-integrate-cloudflare-turnstile-with-fluent-forms/](https://fluentforms.com/docs/how-to-integrate-cloudflare-turnstile-with-fluent-forms/)

**Fluent Forms** integrates **Cloudflare Turnstile** to provide website visitors with a frustration-free, CAPTCHA-free browsing experience. It stops abuse and confirms visitors are real without the data privacy concerns or awful UX that CAPTCHAs thrust on users.

This article will guide you through configuring Cloudflare Turnstile in your WordPress Site through Fluent Forms.

## Configuring CloudFlare Turnstile

To learn how to configure Turnstile integration, follow the steps with screenshots below –

First, go to **Global Settings**from the **FluentForms Navbar**, open the **Security**tab from the left sidebar, and click the **Turnstile**option.

Now, you will be asked to provide the**Site Key**and**Secret Key** of your**Turnstile Account**for the configuration.

![](https://fluentforms.com/wp-content/uploads/2025/01/1.-Cloudefare-Turnstile-Settings-page-scaled.webp)

### Get the Turnstile Site and Secret Key

To learn how to get the Turnstile Site and Secret keys, follow the steps with the screenshots below –

First, log in to your [Turnstile Account](https://dash.cloudflare.com/login?lang=en-gb&_gl=1*1urh3iz*_gcl_au*MjEwNTA1MTg0Ni4xNzM2NzYyNDI2*_ga*MTU3NDUxODMwMC4xNzM2NzYyNDU2*_ga_SQCRB0TXZW*MTczNjc3MTAxOC4yLjAuMTczNjc3MTAxOS41OS4wLjA.), go to **Turnstile** from the left-side menu, and click the **Add widget** button.

> If you don’t have a Turnstile account, you can sign up here.

![](https://fluentforms.com/wp-content/uploads/2025/01/2.-Add-Widget-button-scaled.webp)

Now, put a **Name** to identify your website in the future and enter your website/s address using the **+ Add Hostnames**button to register your domain for Turnstile verification.

![](https://fluentforms.com/wp-content/uploads/2025/01/3.-Add-Widget-and-Host-Name--scaled.webp)

Now, enter your site domain in the**Add a Custom Hostname**field and click the **Add** button.

Then, your domain will be added under the **Selected Hostnames**. You can remove it anytime if needed. Again, click the **Add**button below.

![](https://fluentforms.com/wp-content/uploads/2025/01/4.-Add-button.webp)

Now, you can choose your **Widget Mode** and **Pre-clearance** according to your preference.
Once you are done, click the **Create** button, and the Site and Secret keys will be shown.

![](https://fluentforms.com/wp-content/uploads/2025/01/5.-Create-button.webp)

Here, you will get your desired Site key and Secret key. Simply, copy them by clicking the **Site Key** and **Secret Key** buttons.

![](https://fluentforms.com/wp-content/uploads/2025/01/6.-Copy-Site-Secret-Key-.webp)

## Connecting Turnstile with Fluent Forms

Return to the **Global Settings**from the **FluentForms Navbar**, open the **Security**tab from the left sidebar, and click the **Turnstile**.

Now, paste the **Keys**you copied from the **Turnstile**into the **Site Key**and**Secret Key**fields respectively.

Then, select the turnstile’s **Appearance Mode** and **Theme** according to your preference. Also, after providing the keys, a popup will appear to **Verify** their validity.

![](https://fluentforms.com/wp-content/uploads/2025/01/7.-Paste-keys-and-validate-turnstile-scaled.webp)

Once you have verified the keys, press the **Save Setting**s button to make your **Turnstile Integration** functional.

![](https://fluentforms.com/wp-content/uploads/2025/01/8.-Save-Settings-button-scaled.webp)

## Integrating Turnstile with Forms

To learn the process of integrating the Turnstile in a specific form, follow the steps with screenshots below –

First, go to **Forms** from the top navbar, and **open** the **Editor** page of your **desired form**by clicking the **Edit** button where you want to set this Turnstile protection.

> If you do not have any existing forms, read the Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![](https://fluentforms.com/wp-content/uploads/2025/01/6.-desired-Form-Editor-1-scaled.webp)

Once you are on the **Editor** page, go to the **Input Fields** on the right side, open the **Advanced Fields** dropdown list, and click the **Turnstile** input field.

Finally, click the **Save Form**button to integrate your configured Turnstile into this form.

![](https://fluentforms.com/wp-content/uploads/2025/01/10.-Add-Turnstile-input-field-scaled.webp)

Here is the preview of the integrated Turnstile in a specific form.

![](https://fluentforms.com/wp-content/uploads/2025/01/11.-Preview-of-added-Turnstile-field.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## How to Integrate hCaptcha with Fluent Forms

**Source:** [https://fluentforms.com/docs/how-to-integrate-hcaptcha-with-fluent-forms/](https://fluentforms.com/docs/how-to-integrate-hcaptcha-with-fluent-forms/)

**Fluent Forms** integrates **hCaptcha**, one of the most popular independent CAPTCHA services. Preventing bot submissions using hCaptcha is a contemporary, privacy-conscious solution.

This article will guide you through configuring hCaptcha in your WordPress Site through Fluent Forms.

## Configuring hCaptcha Integration

To learn how to configure hCaptcha integration, follow the steps with screenshots below –

First, go to **Global Settings**from the **FluentForms Navbar**, open the **Security**tab from the left sidebar, and click the **hCaptcha**option.

Now, you will be asked to provide the**Site Key**and**Secret Key** of your**hCaptcha Account**for the configuration.

![](https://fluentforms.com/wp-content/uploads/2025/01/1.-hCAPTCHA-Settings-page-scaled.webp)

### Getting the hCaptcha Site and Secret Key

To learn how to get the hCaptcha Site and Secret keys, follow the steps with the screenshots below –

First, log in to your [hCaptcha Account](https://www.hcaptcha.com/). If you don’t have an hCaptcha account, [sign up here](https://www.hcaptcha.com/).

![](https://fluentforms.com/wp-content/uploads/2025/01/2.-signup-here-.webp)

Now, select the option **Add hCaptcha to my website or app** option. Then you will see a login page to log in to your account using the desired email.

![](https://fluentforms.com/wp-content/uploads/2025/01/3.-Add-hCAPTCHA-to-my-website-or-app.webp)

Once you log in to the account, click the **Generate** button to generate the**Secret Key**.

![](https://fluentforms.com/wp-content/uploads/2025/01/4.-Generate-button.webp)

Now, copy the **Secret Key** and click the **Continue** button to get the Site Key.

![](https://fluentforms.com/wp-content/uploads/2025/01/5.-Copy-Secret-Key-Continue-button.webp)

Click on the **Add Site** button to add your desired site where you want to add hCaptcha.

![](https://fluentforms.com/wp-content/uploads/2025/01/6.-Add-Site-button-scaled.webp)

Now, put a **Name** to identify your website in the future and enter your website/s address in the **Domains** field to register your domain for hCaptcha verification.

Also, for additional **Settings**, you can select the **hCaptcha Behavior** and **Passing Threshold** according to your needs.

Once you provide all the necessary information, click the **Save** button, and you will get your desired Site key.

![](https://fluentforms.com/wp-content/uploads/2025/01/7.-Name-Domain-Settings-Save-button.webp)

Now, copy the**Site Key** by clicking the **Copy** button under the desired added site.

![](https://fluentforms.com/wp-content/uploads/2025/01/8.-copy-Site-Key-button.webp)

## Connecting hCaptcha with Fluent Forms

Return to the **Global Settings**from the **FluentForms Navbar**, open the **Security**tab from the left sidebar, and click the **hCaptcha**.

Now, paste the **Keys**you copied from the **hCaptcha**into the **Site Key**and**Secret Key**fields respectively.

![](https://fluentforms.com/wp-content/uploads/2025/01/9.-Paste-site-key-and-secret-key-scaled.webp)

After you provide the keys, a pop-up will appear to **Verify** their validity.

![](https://fluentforms.com/wp-content/uploads/2025/01/10.-Verify-button.webp)

Finally, press the **Save Setting**s button to make your **hCaptcha Integration** functional.

![](https://fluentforms.com/wp-content/uploads/2025/01/11.-Save-Settings-button-scaled.webp)

## Integrating hCaptcha with Forms

To learn the process of integrating the hCaptcha in a specific form, follow the steps with screenshots below –

First, go to **Forms** from the top navbar, and **open** the **Editor** page of your **desired form**by clicking the **Edit** button where you want to set this hCaptcha protection.

> If you do not have any existing forms, read the Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![](https://fluentforms.com/wp-content/uploads/2025/01/12.-Desired-form-Edit-button-scaled.webp)

Once you are on the **Editor** page, go to the **Input Fields** on the right side, open the **Advanced Fields** dropdown list, and click the **hCaptcha** input field.

Finally, click the **Save Form**button to integrate your configured hCaptcha into this form.

![](https://fluentforms.com/wp-content/uploads/2025/01/13.-Added-hCAPTCHA-input-field-Save-Form-button-scaled.webp)

Here is the preview of the integrated hCaptcha in a specific form.

![](https://fluentforms.com/wp-content/uploads/2025/01/14.-Preview-of-hCAPTCHA-field-in-a-form.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## How to Integrate reCAPTCHA with Fluent Forms

**Source:** [https://fluentforms.com/docs/how-to-integrate-recaptcha-with-fluent-forms/](https://fluentforms.com/docs/how-to-integrate-recaptcha-with-fluent-forms/)

**Fluent Forms** integrates **reCAPTCHA**, a **CAPTCHA** system developed by **Google,** to protect websites from spam bots and automated abuse. It utilizes machine learning to ensure that a user is human.

This article will guide you through configuring reCAPTCHA in your WordPress Site through Fluent Forms.

## Configuring reCAPTCHA Integration

To learn how to configure reCAPTCHA integration, follow the steps with screenshots below –

First, go to **Global Settings**from the **FluentForms Navbar**, open the **Security**tab from the left sidebar, click the **reCAPTCHA**option, and two options appear. These are:

- **Version 2 (Visible reCAPTCHA)**: This requires users to check a box indicating they are not a robot, i.e., it verifies the request with a challenge.

- **Version 3 (Visible reCAPTCHA)**: This operates in the background and scores the user’s interaction to determine if they are a bot, i.e., it verifies the request with a score.

Now, select the desired **Version** of **reCAPTCHA** and provide the**Site Key**and**Secret Key**of your chosen reCAPTCHA version. **For example**, I chose V3 to show the process.

![](https://fluentforms.com/wp-content/uploads/2025/01/1.-Global-Settings-Security-reCAPTCHA-Settings-scaled.webp)

### Get the reCAPTCHA Site and Secret Key

To learn how to get the reCAPTCHA Site and Secret keys, follow the steps with the screenshots below –

First, go to the [Google reCAPTCHA Site](https://www.google.com/recaptcha/admin/), and click the **Plus Icon**.

![](https://fluentforms.com/wp-content/uploads/2025/01/2.-Plus-Icon-scaled.webp)

Now, put a **Name** into the **Label** field to identify your website in the future and choose the**reCAPTCHA type** you prefer (v2 or v3). For example, I have chosen reCAPTCHA V3.

Then, enter your website/s address in the **Domains** field to register your domain for a reCAPTCHA verification. Also, you can choose your project from the **Google Cloud Platform** dropdown.

Once you provide all the necessary information, click the **Submit** button, and you will get your desired Site key and Secret key.

![](https://fluentforms.com/wp-content/uploads/2025/01/3.-Register-a-new-site-page.webp)

Here, you will get your desired Site key and Secret key. Simply, copy them by clicking the **Copy Site Key** and **Copy Secret Key** buttons.

For additional settings, click the **Go To Settings** button, and the settings page will appear.

![](https://fluentforms.com/wp-content/uploads/2025/01/4.-copy-site-and-secret-key.webp)

## Connecting reCAPTCHA with Fluent Forms

Return to the **Global Settings**from the **FluentForms Navbar**, open the **Security**tab from the left sidebar, and click the **reCAPTCHA**.

Now, paste the **Keys**you copied from the **Google reCAPTCHA Site**into the **Site Key**and**Secret Key**fields respectively.

Finally, press the **Save Setting**s button to make your **reCAPTCHA Integration** functional.

![](https://fluentforms.com/wp-content/uploads/2025/01/5.-paste-keys-scaled.webp)

## Integrating reCAPTCHA with Forms

To learn the process of integrating the reCAPTCHA in a specific form, follow the steps with screenshots below –

First, go to **Forms** from the top navbar, and **open** the **Editor** page of your **desired form**by clicking the **Edit** button where you want to set this reCAPTCHA protection.

> If you do not have any existing forms, read the Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![](https://fluentforms.com/wp-content/uploads/2025/01/6.-desired-Form-Editor-scaled.webp)

Once you are on the **Editor** page, go to the **Input Fields** on the right side, open the **Advanced Fields** dropdown list, and click the **reCAPTCHA** input field.

Finally, click the **Save Form**button to integrate your configured reCAPTCHA into this form.

> Remember, you can not add the reCaptcha field for a specific form if you already enabled it globally for all forms.

![](https://fluentforms.com/wp-content/uploads/2025/01/7.-reCAptcha-input-field-Save-Form-button-scaled.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Integrate Akismet with Fluent Forms

**Source:** [https://fluentforms.com/docs/integrate-akismet-with-fluent-forms/](https://fluentforms.com/docs/integrate-akismet-with-fluent-forms/)

Fluent Forms allows you to integrate **Akismet** to enhance security for your form entries, protecting them from spambots and keeping your contact lists spam-free. This article will guide you through the process of integrating**Akismet**with**Fluent Forms.**

## Installing & Activating Akismet in

> Before starting the Akismet Integration process, the Akismet Plugin has to be installed and activated on your WordPress Site. Otherwise, you will not get the Akismet Integration option in Fluent Forms.

**To learn how to install and activate the Akismet plugin in WordPress, follow the steps below –**

First, go to **Plugins** in the **WordPress Admin Panel** on the left side, click **Add New Plugin**, search for the **Akismet**plugin using the **Search Plugins** option on the right, and the **Akismet** plugin will appear.

Now, click the **Install** button, and your Akismet plugin will be installed on your site.

![](https://fluentforms.com/wp-content/uploads/2025/02/1.-Install-Akismat-scaled.webp)

Then, click the **Activate** button, and the Akismet plugin will be activated and ready to function.

![](https://fluentforms.com/wp-content/uploads/2025/02/2.-Active-Akismet-scaled.webp)

## Integrating Akismet with Fluent Forms

To learn how to integrate Akismet with Fluent Forms, follow the steps with screenshots below –

First, go to **Global Settings**from the **WordPress Left Sidebar** or **FluentForms Navbar**, open the **General**tab from the left menu, and click the **Miscellaneous**option.

- **Enable Akismet Integration**: Now, turn on this****toggle, and the security will be enabled to verify your form submissions with Akismet and provide better security.

- **Spam Validation**: Using this option, you can select what will happen once a submission is marked as spam. You can choose any one among these “**Mask as Spam**“, “**Make the Form Submission as failed**“, or**“Mark as Spam and Skip Processing**” options.

Lastly, don’t forget to click the **Save Settings**button to make all the setup functional.

![](https://fluentforms.com/wp-content/uploads/2025/02/3.-Global-Settings-Miscellaneous-Enable-Akismet-scaled.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

