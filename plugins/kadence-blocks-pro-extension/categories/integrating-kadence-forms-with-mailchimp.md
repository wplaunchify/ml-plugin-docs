# Integrating Kadence Forms With Mailchimp

*Category from Kadence Blocks - PRO Extension documentation*

---

## Integrating Kadence Forms with Mailchimp

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-blocks/integrating-kadence-forms-with-mailchimp/](https://www.kadencewp.com/help-center/docs/kadence-blocks/integrating-kadence-forms-with-mailchimp/)

The [Kadence Blocks Pro](https://www.liquidweb.com/software/kadence/) plugin adds Mailchimp integration to both the [Kadence Form](https://www.liquidweb.com/docs/kadence-blocks/form-block/) and [Form (Adv) Blocks](https://www.liquidweb.com/docs/kadence-blocks/advanced-form-block/). Below, you will learn how you can start using Kadence Blocks Pro with MailChimp.

## Mailchimp Set Up

You must set up an account with **Mailchimp**, and connect a *Mailchimp API Key* to your *Kadence Form* to fully integrate Mailchimp with **Kadence**.

Get started by heading over to the **Mailchimp Website**. You can create a new account or log in to an existing one.

![Mailchimp Login](https://res.cloudinary.com/lwcom/images/w_1024,h_483,c_scale/f_auto,q_auto/v1780354084/prod/Mailchimp-Login/Mailchimp-Login.jpg?_i=AA)
### Managing Audiences

When using Mailchimp, all **Contacts** are typically added to your main **Audience**. While Mailchimp does offer the ability to create multiple audiences, it’s recommended to maintain a [single primary audience](https://mailchimp.com/resources/one-audience-organize-contacts-to-optimize-marketing/) to avoid issues like duplicate contacts and higher costs. Instead, you can use **Tags**, **Groups**, or **Segments** to organize your contacts within one audience. 

For example, if you have a subscription form for a general newsletter and another for a specialized newsletter on the same website, **Tags** allow you to categorize these contacts efficiently. This way, you can ensure the right emails reach the right users without needing multiple audiences.

In addition to **Tags**, Mailchimp also offers **Groups** and **Segments** to further refine your audience:

- **Tags** are flexible labels you can apply to contacts for easy organization.
- **Groups** allow subscribers to self-select categories (like interests or preferences) during signup, which helps further organize contacts.
- **Segments** allow you to create targeted lists within your audience based on specific criteria (like locations, engagements, or tags), enabling more personalized campaigns.

By using Tags, Groups, and Segments together, you can manage all your contacts under one audience while still delivering tailored content. 

These things can be managed by navigating to the Mailchimp Dashboard, expanding the **Audience** tab, and selecting **All Contacts**. From there, you can expand the **Manage Audience** dropdown, where you can manage Tags, Groups, Segments, and other Audience-related features for better organization and targeting.

![Manage Audiences](https://res.cloudinary.com/lwcom/images/w_1024,h_722,c_scale/f_auto,q_auto/v1780354077/prod/Manage-Audiences/Manage-Audiences.gif?_i=AA)In some cases, having multiple audiences may be viable. For example, if you are managing two completely separate businesses or brands with distinct messaging and subscriber bases, using multiple audiences might be more appropriate to keep the data and communication strategies separated. For more detailed and precise information on how to use Tags, Groups, and Segments, please refer to the official [Mailchimp Help Center](https://mailchimp.com/help/).

### Managing Audience Fields

When connecting **MailChimp** to a **Kadence** **Form**, you can link the fields from your Kadence Form to the corresponding fields in your MailChimp audience. This ensures that data transfers correctly from your Kadence Forms to MailChimp.

To manage your audience fields in MailChimp, first navigate to the **MailChimp Dashboard** and expand the **Audience** tab. From there, select **All Contacts** to view your contact list. On the contact page, click on the **Settings** dropdown menu and choose **Audience fields & |MERGE| tags**. This section allows you to add or modify audience fields, such as name, email, or custom fields, and adjust *|MERGE|* tags for your audience. By doing so, you can ensure that all data collected from your Kadence Form fields is properly mapped to the corresponding fields in MailChimp, ensuring an efficient data transfer from your Kadence Forms to your MailChimp audience(s).

![Audience Fields](https://www.liquidweb.com/wp-content/uploads/2024/10/Audience-Fields-scaled.jpg)This will take you to a page where you can **edit**, **delete**, or **add** audience fields. These fields are important because they will be linked to your Kadence Form or Advanced Form fields, ensuring that the data collected from your website is accurately mapped to your MailChimp audience. Properly managing these fields ensures smooth data transfer and allows you to collect and organize information effectively.

![Edit Fields](https://www.liquidweb.com/wp-content/uploads/2024/10/Edit-Fields-scaled.jpg)
### Creating an API Token

To get started with an **API** **Token**, go to your **MailChimp Dashboard** and click on your **Profile Picture**. Then, select the **Profile** option from the dropdown.

![Mailchimp Step 2](https://res.cloudinary.com/lwcom/images/w_1024,h_478,c_scale/f_auto,q_auto/v1780354137/prod/Mailchimp-Step-2/Mailchimp-Step-2.jpg?_i=AA)Under your **Profile**, navigate to the **Extras** tab and select the **API Keys** option.

![Mailchimp Step 4](https://res.cloudinary.com/lwcom/images/w_790,h_424,c_scale/f_auto,q_auto/v1780354132/prod/Mailchimp-Step-4/Mailchimp-Step-4.jpg?_i=AA)On this page, click the **Create A Key** button to generate a new API key.

![Mailchimp Step 5](https://res.cloudinary.com/lwcom/images/w_1024,h_596,c_scale/f_auto,q_auto/v1780354127/prod/Mailchimp-Step-5/Mailchimp-Step-5.jpg?_i=AA)Once the key is generated, you will not be able to view it again. Be sure to save it in a secure location for future use.

![Mailchimp Step 7](https://res.cloudinary.com/lwcom/images/w_867,h_454,c_scale/f_auto,q_auto/v1780354123/prod/Mailchimp-Step-7/Mailchimp-Step-7.jpg?_i=AA)Now that you have your API key, you can use it to connect the **Kadence Form Block** to your **MailChimp Audiences**.

## Using Mailchimp with the Kadence Form Block

First, enable the **MailChimp** option in the **Kadence Form Actions After Submit** block settings. This will add a new tab in the **Kadence Form General** block settings labeled **MailChimp Settings**.

![Mailchimp Action on Forms](https://res.cloudinary.com/lwcom/images/w_1024,h_723,c_scale/f_auto,q_auto/v1780354112/prod/Mailchimp-Action-on-Forms/Mailchimp-Action-on-Forms.gif?_i=AA)Next, expand the **MailChimp** **Settings** and enter your **MailChimp API Key** in the API****Key field. Then press **Save**. This will unlock the options to select your **Audience** and any applicable **Tags** and **Groups** where you want the form submissions added.

You can then assign each form field in the Kadence Form to the corresponding **Contact Fields** in MailChimp.![Mail Chimp API Connection on Forms](https://res.cloudinary.com/lwcom/images/w_277,h_714,c_scale/f_auto,q_auto/v1780354106/prod/Mail-Chimp-API-Connection-on-Forms/Mail-Chimp-API-Connection-on-Forms.jpg?_i=AA)
## Using Mailchimp with the Kadence Advanced Form Block

First, enable the **MailChimp** option in the **Kadence Form (Adv) Submit Actions** block settings. This will add a new tab in the **Kadence Form General** block settings labeled **MailChimp Settings**.

![Mailchimp Action on Advanced Forms](https://res.cloudinary.com/lwcom/images/w_1024,h_744,c_scale/f_auto,q_auto/v1780354096/prod/Mailchimp-Action-on-Advanced-Forms/Mailchimp-Action-on-Advanced-Forms.gif?_i=AA)Next, expand the **MailChimp Settings** section and input your **MailChimp API Key** in the **API Key** field. Afterward, click **Save**. This will enable the options to select your **Audience**, along with any applicable **Tags** and **Groups** for adding the form submissions.

You can then map each field in the **Advanced Form** to the corresponding **Contact Fields** in MailChimp.![Mail Chimp API Connection on Advanced Forms](https://res.cloudinary.com/lwcom/images/w_278,h_576,c_scale/f_auto,q_auto/v1780354092/prod/Mail-Chimp-API-Connection-on-Advanced-Forms/Mail-Chimp-API-Connection-on-Advanced-Forms.jpg?_i=AA)
## Viewing Contacts

Once a user fills out the form, the next step is to navigate to your **MailChimp Audience Dashboard**. Here, you can view your contacts, including new subscribers, and track key statistics.

To view your contacts, click the **View Contacts** button.

![Audience Dashboard](https://www.liquidweb.com/wp-content/uploads/2024/10/Audience-Dashboard-scaled.jpg)This will take you to the MailChimp **Contacts** page, where you can manage and view all your contacts.

![View Audience](https://www.liquidweb.com/wp-content/uploads/2024/10/View-Audience-scaled.jpg)Was this article helpful?Yes NoThank you for your input.Thank you for your feedback.

---

