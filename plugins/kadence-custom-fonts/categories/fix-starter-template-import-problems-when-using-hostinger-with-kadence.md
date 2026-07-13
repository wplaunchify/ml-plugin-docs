# Fix Starter Template Import Problems When Using Hostinger With Kadence

*Category from Kadence Custom Fonts documentation*

---

## Fix Starter Template Import Problems When Using Hostinger with Kadence

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-theme/fix-starter-template-import-problems-when-using-hostinger-with-kadence/](https://www.kadencewp.com/help-center/docs/kadence-theme/fix-starter-template-import-problems-when-using-hostinger-with-kadence/)

If you’re having trouble *importing Kadence Starter Templates*on your WordPress website hosted with **Hostinger**, the issue may be caused by Hostinger’s **CDN settings** interfering with the import process.

*Hostinger’s CDN* *feature* improves your overall website security. However, some of the *Security Levels*can prevent the importation of **Kadence Starter Templates**. 

Follow this guide to disable the **Hostinger** **CDN** and ensure a smooth *Kadence Starter Template import*.

1. Log in to your **hPanel**.
2. On your **Hosting** section, select the desired hosting plan and click **“Manage”**.
3. Go to the *Performance tab > CDN*.
4. If your *CDN* is active and enabled, click “**Manage”**to access the **Security Level Settings**.
5. Set the security level to “**Essentially off**” and save the changes. *(This will ensure the Hostinger CDN Security Level doesn’t prevent your Kadence Imports from working.)*
6. Go back to your website and try to import a starter template. This time, it should be successful.
7. Once the import is finished, you should go to your **Hostinger** **CDN** **settings** once more and set the *Security Level* back to the original or a higher level.

Turning the *Security Level*back up is recommended to ensure your website stays secure. Anytime you need to reimport another *Starter Template*, repeat the process above.

If **disabling** the **CDN** doesn’t resolve the issue:

- Try **deactivating** all **Caching** and/or **Security** plugins from the website and see if the issue occurs.
- Check for**Console Logged Errors** and **WordPress Errors** to help indicate where the issue is coming from.
- Go through **all of the steps** in this [Starter Template Troubleshooting guide](https://docs.nexcess.com/software/kadence/starter-templates-faqs-troubleshooting/).
- If none of the steps above work for you, contact the [Kadence Support](https://www.kadencewp.com/premium-support-tickets/) team for further assistance.

---

