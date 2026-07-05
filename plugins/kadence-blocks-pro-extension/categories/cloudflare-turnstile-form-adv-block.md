# Cloudflare Turnstile Form Adv Block

*Category from Kadence Blocks - PRO Extension documentation*

---

## Cloudflare Turnstile

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-blocks/cloudflare-turnstile-form-adv-block/](https://www.kadencewp.com/help-center/docs/kadence-blocks/cloudflare-turnstile-form-adv-block/)

## Introducing GiveWP’s first captcha integration

The GiveWP Cloudflare Turnstile add-on protects your donation forms from spam donations and bots by verifying that form submissions come from humans. It employs a frictionless checkbox field on your form to ensure security and build trust with your donors.

### Installing the GiveWP Cloudflare Turnstile Add-on

To install this add-on, you must either download the file or search for the plugin inside your WordPress admin. Choose whichever method works best for you.

**Download and Install the Add-on File**

1. [Download the plugin zip file](https://wordpress.org/plugins/give-cloudflare-turnstile/) for the GiveWP Cloudflare Turnstile add-on.
2. Log into your website’s WordPress admin area.
3. Go to **Plugins > Add New Plugin** in the left side menu.
4. Use the **Upload Plugin** option at the top of the page.
5. Upload the plugin zip file and choose **Install**.
6. Wait for the message saying the plugin was installed successfully, and choose **Activate**.

**Install and Activate from inside WordPress**

1. Log into your website’s WordPress admin area.
2. Go to **Plugins > Add New Plugin** in the left side menu.
3. Search for “GiveWP Cloudflare Turnstile.”
4. Identify the correct plugin by the title, “Give – Cloudflare Turnstile” and the author, “GiveWP.”
5. Choose **Install** on the plugin card.
6. Wait for the message saying the plugin was installed successfully, and choose **Activate**.

### Setting up the Cloudflare Turnstile Add-on

Once the add-on is installed, some setup is required. You will need a free Cloudflare account and a Turnstile widget for your website. If you don’t have a Cloudflare account, you must [sign up on the Cloudflare website](https://www.cloudflare.com/). Once you have an account, you can go to Turnstile inside your [Cloudflare dashboard](https://dash.cloudflare.com/) and [follow Cloudflare’s instructions](https://developers.cloudflare.com/turnstile/get-started/) to create a widget. This will give you the API keys to connect GiveWP with Cloudflare Turnstile.

**Steps to Connect**

1. Select **Settings** under the plugin title in the Plugins list or navigate to **GiveWP > Settings > Security > Cloudflare Turnstile**.
2. Enable Cloudflare Turnstile, and two key fields will appear.
3. Add the Site Key and Secret Key provided by Cloudflare when you created a Turnstile widget for your site.
4. Save your changes.

![](https://res.cloudinary.com/lwcom/images/w_1024,h_414,c_scale/f_auto,q_auto/v1778561608/prod/Cloudflare-Turnstile-settings/Cloudflare-Turnstile-settings.png?_i=AA)
## Understanding How The Cloudflare Turnstile Add-on Works

When Cloudflare Turnstile is enabled on your site with valid API keys, a Cloudflare Turnstile checkbox will appear at the bottom of your donation forms, just above the Donate button.

![](https://res.cloudinary.com/lwcom/images/w_578,h_280,c_scale/f_auto,q_auto/v1778561603/prod/Cloudflare-Turnstile-checkbox/Cloudflare-Turnstile-checkbox.png?_i=AA)In some scenarios (such as a logged-in user), the box may be checked automatically, and the user doesn’t have to do anything. In most cases, this is a required field that the user must check before submitting the form.

This adds a layer of protection to your donation forms, reducing spam donations by adding a step that can only be completed by a real person.

## FAQ

**Does the Cloudflare Turnstile add-on protect all of my forms?**GiveWP’s Cloudflare Turnstile add-on only protects GiveWP donation forms, not other forms on your website. Also, it will only protect forms created using the Visual Donation Form Builder. It does not protect Legacy forms and other forms created with the older donation form editor.**Can I add captcha to some forms and not others?**No. Once configured, the captcha is automatically added to all GiveWP donation forms created using the Visual Builder. There are no options to configure this on a per-form basis.Was this article helpful?Yes NoThank you for your input.Thank you for your feedback.

---

