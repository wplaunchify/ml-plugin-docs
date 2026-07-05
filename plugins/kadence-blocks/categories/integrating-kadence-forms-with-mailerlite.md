# Integrating Kadence Forms With Mailerlite

*Category from Kadence Blocks documentation*

---

## Integrating Kadence Forms with Mailerlite

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-blocks/integrating-kadence-forms-with-mailerlite/](https://www.kadencewp.com/help-center/docs/kadence-blocks/integrating-kadence-forms-with-mailerlite/)

The [Kadence Form](https://www.liquidweb.com/docs/kadence-blocks/form-block/) and [Form (Adv) Blocks](https://www.liquidweb.com/docs/kadence-blocks/advanced-form-block/) both support integration with **Mailerlite**. Below, you will learn how you can start using Kadence alongside Mailerlite.

## Mailerlite Setup

You must set up an account with **Mailerlite**, create a *Group* for users to be added to, and connect a *Mailerlite API Key* to your *Kadence Form* to fully integrate Mailerlite with **Kadence**.

Get started by heading over to the **Mailerlite Website**. You can create a new account or log in to an existing one.

![Signup Mailerlite](https://res.cloudinary.com/lwcom/images/w_1024,h_339,c_scale/f_auto,q_auto/v1780354750/prod/Signup-Mailerlite/Signup-Mailerlite.jpg?_i=AA)
### Creating a new group

From the **Mailerlite** **Dashboard**, go to the **Subscribers** tab.

![Mailerlite Subscribers](https://res.cloudinary.com/lwcom/images/w_890,h_671,c_scale/f_auto,q_auto/v1780354742/prod/Mailerlite-Subscribers-e1716587804165/Mailerlite-Subscribers-e1716587804165.jpg?_i=AA)Once on the **Subscribers** page, find the sub-page named **Groups** and click on it.

![Mailerlite Groups](https://res.cloudinary.com/lwcom/images/w_1024,h_275,c_scale/f_auto,q_auto/v1780354737/prod/Mailerlite-Groups/Mailerlite-Groups.jpg?_i=AA)Click on the Create **group** button to create a new group. In the popup, create a name for the group, then click on the **Create** button.

![Mailerlite Create Group](https://res.cloudinary.com/lwcom/images/w_1024,h_456,c_scale/f_auto,q_auto/v1780354732/prod/Mailerlite-Create-Group/Mailerlite-Create-Group.jpg?_i=AA)![Create Group Name](https://res.cloudinary.com/lwcom/images/w_682,h_363,c_scale/f_auto,q_auto/v1780354727/prod/Create-Group-Name/Create-Group-Name.jpg?_i=AA)Once the group is created, you will be left with a basic overview of the new group.

![Your New Group](https://res.cloudinary.com/lwcom/images/w_1024,h_353,c_scale/f_auto,q_auto/v1780354723/prod/Your-New-Group/Your-New-Group.jpg?_i=AA)Navigate to the **Fields** tab to add or remove fields from the group. **Kadence** **Forms** and **Advanced** **Forms** **Fields** can be mapped to send input data to **Specified** **Group** **Fields**.

![MailerLite Fields](https://res.cloudinary.com/lwcom/images/w_1024,h_525,c_scale/f_auto,q_auto/v1780354717/prod/MailerLite-Fields/MailerLite-Fields.jpg?_i=AA)
### Creating an API Token

Next, you need an **API** **Token** for your **Form** to connect with. Navigate over to the **Integrations** **Tab** from the **MailerLite** **Dashboard**. Next to the **API** section, click on the **Use** button.

![UseIntegrations](https://res.cloudinary.com/lwcom/images/w_1024,h_419,c_scale/f_auto,q_auto/v1780354711/prod/UseIntegrations/UseIntegrations.jpg?_i=AA)Then, click on the **Generate** **New** **Token** button to generate a new one to associate with **Kadence**.

![Developer API](https://res.cloudinary.com/lwcom/images/w_1024,h_325,c_scale/f_auto,q_auto/v1780354707/prod/Developer-API/Developer-API.jpg?_i=AA)The **API** **token** will then be generated. Click on the **Copy** button to copy the **Token** to your clipboard. You can also download this **Token** using the **Download** button. This **API** **Token** can be used to connect **Mailerlite** to the **Kadence** **Form** **Blocks**.

![Generated API Key](https://res.cloudinary.com/lwcom/images/w_665,h_448,c_scale/f_auto,q_auto/v1780354702/prod/Generated-API-Key/Generated-API-Key.jpg?_i=AA)
## Using Mailerlite with the Kadence Form Block

Using **Mailerlite** with the **Kadence** **Form** **Block** is easy. 

Get started by adding a **Form** **Block** to a page. 

Then, navigate to the **Block Settings -> General Tab**and expand the **Actions** **After** **Submit** tab. 

Then click on the **Checkbox** next to **Mailerlite**.![Enable Mailerlite on Form](https://res.cloudinary.com/lwcom/images/w_273,h_672,c_scale/f_auto,q_auto/v1780354698/prod/Enable-Mailerlite-on-Form/Enable-Mailerlite-on-Form.jpg?_i=AA)Once **Mailerlite** is enabled, there will be a new tab in the **Form** block settings named **MailerLite** **Settings**.

You can expand this tab and add then save your **MailerLite** **API** **Token** to the **Kadence** **Form.**![Mailerlite Form Settings](https://res.cloudinary.com/lwcom/images/w_281,h_822,c_scale/f_auto,q_auto/v1780354695/prod/Mailerlite-Form-Settings/Mailerlite-Form-Settings.jpg?_i=AA)Finally, select the appropriate **Group** and map each **Kadence** **Form** **Field** to a **Group** **Field** using the **MailerLite** **Settings**

![Mailerlite Settings](https://res.cloudinary.com/lwcom/images/w_1024,h_602,c_scale/f_auto,q_auto/v1780354690/prod/Mailerlite-Settings/Mailerlite-Settings.jpg?_i=AA)
## Using Mailerlite with the Kadence Advanced Form Block

Get started by adding a **Form (Adv) Block** to a page. 

Then, navigate to the **Block Settings -> General Tab** and expand the **Actions After Submit**tab. 

Click on the dropdown toggle and select **Mailerlite** from the list of selectable options.![Form Adv Submit actions](https://res.cloudinary.com/lwcom/images/w_316,h_436,c_scale/f_auto,q_auto/v1780354685/prod/Form-Adv-Submit-actions/Form-Adv-Submit-actions.gif?_i=AA)Once **Mailerlite** is enabled, there will be a new tab in the **Form (Adv)** block settings named **MailerLite** **Settings**. 

Expand this tab and add then save the **MailerLite** **API** **Token** to the **Advanced** **Form**.![Advanced MailerLite Settings](https://res.cloudinary.com/lwcom/images/w_279,h_232,c_scale/f_auto,q_auto/v1780354683/prod/Advanced-MailerLite-Settings/Advanced-MailerLite-Settings.jpg?_i=AA)Finally, select the appropriate **Group** and assign each **Advanced** **Form** **Field** to a **Group** **Field** using the **MailerLite** **Settings**

![Advanced Form Integrated](https://res.cloudinary.com/lwcom/images/w_283,h_470,c_scale/f_auto,q_auto/v1780354671/prod/Advanced-Form-Integrated-e1716585631263/Advanced-Form-Integrated-e1716585631263.jpg?_i=AA)
## Viewing Subscribers

Once users have subscribed to a **Form**, you can control the rest of the process through the **MailerLite** **Dashboard**. Navigate to the **Subscribers -> Groups** page to view the current subscribers and/or change group details.

![New Subscriber](https://res.cloudinary.com/lwcom/images/w_1024,h_346,c_scale/f_auto,q_auto/v1780354665/prod/New-Subscriber/New-Subscriber.jpg?_i=AA)You can view your **Group** to get more details on the **Subscription** list.

![Active Subscriber](https://res.cloudinary.com/lwcom/images/w_1024,h_495,c_scale/f_auto,q_auto/v1780354659/prod/Active-Subscriber/Active-Subscriber.jpg?_i=AA)That’s all you need to get started using **Kadence** with **MailerLite**.

Was this article helpful?Yes NoThank you for your input.Thank you for your feedback.

---

