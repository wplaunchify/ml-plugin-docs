# Hcaptcha Form Adv Block

*Category from Kadence Blocks - PRO Extension documentation*

---

## How to integrate hCaptcha with Kadence Form (Adv) Blocks

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-blocks/hcaptcha-form-adv-block/](https://www.kadencewp.com/help-center/docs/kadence-blocks/hcaptcha-form-adv-block/)

When adding forms to your website, it’s important to include spam protection to help prevent unwanted or automated submissions. The free [Kadence Form (Adv) Block](https://www.liquidweb.com/docs/kadence-blocks/advanced-form-block/) includes built-in support for hCaptcha, making it easy to secure your forms with reliable, privacy-focused spam prevention. This is a free feature within the [Kadence Blocks plugin](https://www.liquidweb.com/docs/kadence-blocks/installing-kadence-blocks/).

This guide will walk you through setting up and integrating hCaptcha with the Kadence Form (Adv) Block.

## Setting up hCaptcha

To use the Kadence Form (Adv) Block integrates nicely with hCaptcha to protect your forms. To get started, you should either log in to an existing hCaptcha account or create a new account [here ⧉](https://www.hcaptcha.com/). Once you are logged in or an account is created, you will be presented with the hCaptcha dashboard.

From the hCaptcha dashboard, navigate to the **Sites** page. Then, click on the **Add** **Site** button to begin adding a new site.

![Add a new hCaptcha Site](https://res.cloudinary.com/lwcom/images/w_1024,h_427,c_scale/f_auto,q_auto/v1780351077/prod/Add-a-new-hCaptcha-Site_460758092e8/Add-a-new-hCaptcha-Site_460758092e8.jpg?_i=AA)When adding a new site, you can fill out the initial details. This includes giving the site a **name** for recognition.

Under the **Domains** section, enter your website’s domain and click the**(+) icon** to add it. Be sure to include every domain where hCaptcha will be used. If the domain isn’t listed here, the integration will not work for that website. Add the domain for any site where you plan to enable hCaptcha protection.

![Adding a new site](https://www.liquidweb.com/wp-content/uploads/2025/12/Adding-a-new-site.jpg)Once your domain is added, you can adjust the **hCaptcha** **Behaviour** to your preferred method.

Once finished, save the changes. Then, navigate back to the **Sites** page. You will see your newly created site listed. Click on it to open the settings.

![Editing a site](https://res.cloudinary.com/lwcom/images/w_1024,h_338,c_scale/f_auto,q_auto/v1780351064/prod/Editing-a-site_46076106ae8/Editing-a-site_46076106ae8.jpg?_i=AA)When editing the settings, you will now notice that a **Site** **Key** is available for the website. Copy it and save it somewhere safe to be used in the Kadence Form (Adv) Block later.

![hCaptcha Site Key](https://res.cloudinary.com/lwcom/images/w_1024,h_721,c_scale/f_auto,q_auto/v1780351087/prod/image-1_460754f1303/image-1_460754f1303.jpeg?_i=AA)Next, you’ll need to save your **Secret Key**. Both the **Site Key** and **Secret Key** are required for the Kadence Form (Adv) Block to integrate with hCaptcha.

To access your **Secret** **key**, click your **account** **profile** **picture** in the hCaptcha dashboard, then select **Settings**.

![hCaptcha Settings](https://res.cloudinary.com/lwcom/images/w_1024,h_303,c_scale/f_auto,q_auto/v1780351081/prod/image_460753b49b1/image_460753b49b1.jpeg?_i=AA)On the **Settings** page, you’ll see the **Website Secret** section. Click **Generate New Secret**, then copy the secret key and store it somewhere safe, as you’ll need it when configuring the Kadence Form (Adv) Block.

![](https://res.cloudinary.com/lwcom/images/w_1024,h_588,c_scale/f_auto,q_auto/v1780351098/prod/image-3_4607561d600/image-3_4607561d600.jpeg?_i=AA)*Note: Keep in mind that the secret key cannot be viewed again after it’s generated, so saving it securely is important.*

## Adding hCaptcha keys to Form (Adv) Blocks

The [Form (Adv) Block](https://www.liquidweb.com/docs/kadence-blocks/advanced-form-block/) supports the use of hCaptcha. This is done by clicking on the blue plus icon to add a new block inside the Form (Adv) Block. Then, navigate to the [Misc tab](https://www.liquidweb.com/docs/kadence-blocks/advanced-form-block/#misc-fields) and add the CAPTCHA block to the form.

![adding a misc captcha block](https://res.cloudinary.com/lwcom/images/w_1024,h_830,c_scale/f_auto,q_auto/v1780351049/prod/image-4-e1764709791267/image-4-e1764709791267.jpeg?_i=AA)Afterward, select the CAPTCHA block and use the **General** **Block** **Settings** to set up hCaptcha.

Under **CAPTCHA TYPE**, select the **hCaptcha** option. 

Then, you can fill out your **Site** **Key** and **Secret** **Keys** accordingly.

You can also use the **Style** **Block** **Settings** to specify a **Color** **Theme** of **Light** or **Dark** and a **Size** of **Normal** or **Compact**.![hCaptcha Block Settings](https://res.cloudinary.com/lwcom/images/w_426,h_1024,c_scale/f_auto,q_auto/v1780351044/prod/image-5_4607652c3d3/image-5_4607652c3d3.jpeg?_i=AA)You can also use the **Style** **Block** **Settings** to specify a **Color** **Theme** of **Light** or **Dark** and a **Size** of **Normal** or **Compact**.![](https://res.cloudinary.com/lwcom/images/w_560,h_658,c_scale/f_auto,q_auto/v1780351038/prod/image-6_4607672a252/image-6_4607672a252.jpeg?_i=AA)Once everything is set up, the Form (Adv) Block will validate users through hCaptcha.

Was this article helpful?Yes NoThank you for your input.Thank you for your feedback.

---

