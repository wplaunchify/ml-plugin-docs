# Integrity Add On

*Category from LearnDash documentation*

---

## Integrity Add-on

**Source:** [https://learndash.com/support/kb/add-ons/integrity-add-on/integrity-add-on/](https://learndash.com/support/kb/add-ons/integrity-add-on/integrity-add-on/)

LearnDash Integrity is the best way to protect the integrity of your courses with functionality such as hotlink protection, preventing concurrent logins, and preventing copied content; although theres no foolproof way to stop that from happening but Integrity certainly helps to keep the pirates at bay.

Top that off with our reCAPTCHA integration for our native login and registration forms for LearnDash.

There will be a few options that we will discuss below.

**NOTE**: You need to have LearnDash installed and activated before you can activate the Integrity plugin.

## Installation

#### Option 1: Add-ons Menu (requires an active LearnDash license)

In your WordPress admin area, go to LearnDash LMS > Add-Ons and locate the Integrity add-on. Click Now and once the installation is complete, click the Activate plugin button.

#### Option 2: Manual Upload

[Download the plugi](https://account.learndash.com/plugins/)[n](https://account.learndash.com/plugins/) file (remember that you must be [l](https://account.learndash.com/)[ogged in](https://account.learndash.com/) to download). In your WordPress admin dashboard go to Plugins > Add New and then Click to upload the Integrity add-on. You’ll need to browse for the plugin .zip that you downloaded previously. Once you find it (it may be in your computer’s Downloads folder), click Open, Install Now and finally, click the Activate Plugin button.

## How It Works

The LearnDash Integrity plugin allows you to secure and protect the integrity of your LMS site. It’s simple to use has a lot of available features.

To access the Integrity plugin settings head on to LearnDash LMS > Settings and click on the Integrity tab.

![](https://learndash.com/support/wp-content/uploads/2021/11/lddocs-integrity-addon-settings-screen.png)The Integrity Add-on Settings screen.

### Prevent Hotlinking

This option protects videos and images hosted on this site from hotlinking. Hotlinking is known as the act of stealing someone’s bandwidth or server resources by linking directly to their website’s assets, such as images or videos.

### Prevent Concurrent Login

Concurrent login is when one user with a single username and password logs-in at the same time from different locations or devices. This option prevents that from happening. Whenever someone else logs in under the same username/email while you are still logged in, they will get an error prompt indicating that the account has exceeded the maximum concurrent login number. This prevents one user from sharing their logins with the intent of having others complete all their courses.

You can also choose to have certain user roles excluded from this feature. Upon enabling this feature, you’ll see an option to exclude one or more user roles from the lockout

![](https://learndash.com/support/wp-content/uploads/2021/11/ld-int-concurrent-login.png)

You can also configure this on a per user basis where only that specific user will be able to log into multiple sessions. To enable this for a user, visit their user profile in the WP admin, scroll down to the Bypass Concurrent Login Lockout section, check the checkbox and then save the user profile.

![](https://learndash.com/support/wp-content/uploads/2021/11/ld-int-user-profile.png)

### Prevent Content Copy

This option disables the “Copy” and “Paste” functions on the website, in addition to the entire right-click functionality. Although this is not a foolproof method to prevent this, this may discourage users to copy and paste content and courses from your website.

### reCAPTCHA

reCAPTCHA is the easiest and most famous method of protecting your site from spam, fraud, and abuse, both from bots and users with malicious intent.

**NOTE**: There should only be 1 version of reCAPTCHA enabled at a time for this setting to work properly.

When this option is enabled, you are presented with two options: reCAPTCHA v3 (invisible) or reCAPTCHA v2 (checkbox).

Since reCAPTCHA is from Google, you need to register your site and acquire the site keys from them in order enable this setting. You are required to:

1. Have a Google Account to associate with your site keys
2. Register your website on the Google [reCAPTCHA page](https://www.google.com/recaptcha/admin/create)

![](https://learndash.com/support/wp-content/uploads/2021/11/reCAPTCHA.png)

The site and secret keys are provided by Google after filling out the registration form above.

### reCaptcha v3 (Invisible)

![](https://learndash.com/support/wp-content/uploads/2021/11/reCaptcha-v3-Invisible.png)

reCAPTCHA v3 is is the latest invisible security captcha introduced by Google. It adds protection to your website without forcing the user to go through a series of puzzles or checkboxes to verify if they are human.

reCAPTCHA v3 uses what is called a confidence score threshold based on the user’s mouse movement, previous activity, network status, location, among other things to verify how likely they are to be human or a bot. The higher the score threshold the more confidence is required for them to pass the captcha.

Based on the score, you can take variable action in the context of your site.

### reCaptcha v2 (Checkbox)

![](https://learndash.com/support/wp-content/uploads/2021/11/reCaptcha-v2-Checkbox.png)

reCAPTCHA v2 is also implemented by Google to provide widgets, either by checkboxes, puzzles, or other forms of verification, to avoid spam and automated bots from accessing the site.

On the Google registration form, you have the option to choose on what type of reCAPTCHA v2 you are going to be using:

1. “I’m not a robot” Checkbox
2. Invisible reCAPTCHA badge
3. reCAPTCHA Android

### Location

You can choose which forms on your website the reCAPTCHA will be displayed by selecting it on these options. You can opt to have it on the Login form only, the Registration form only, or on both.

![](https://learndash.com/support/wp-content/uploads/2021/11/Location.png)

---

