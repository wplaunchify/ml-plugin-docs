# Integrations

*Category from TaxoPress documentation*

---

## OpenAI Prompts (Pro)

**Source:** [https://taxopress.com/docs/openai-prompts/](https://taxopress.com/docs/openai-prompts/)

This feature requires the Pro version of the TaxoPress plugin

TaxoPress Pro integrates with OpenAI to scan your content and suggest existing terms. This feature has the ability to customize the prompts used to return results from OpenAI. You can see this in the “OpenAI Prompt” setting:

openai terms

Here are some suggestions for modifying the OpenAI prompt. These are only ideas and OpenAI will accept a wide variety of prompts so feel free to unleash your imagination and test your own use-cases. It’s worth reading [the OpenAI documentation on creating prompts](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api).

## Sample Prompts

In these first examples, you can use the prompt to return a maximum or minimum number of terms:

```
Extract a maximum of 20 tags from the following content: '{content}'
```

```
Extract a minimum of 30 categories from the following content: '{content}'.
```

OpenAI is very flexible about the phrases used, with the exception of {content} which much be included. For example, these variations will all work.

```
Extract keywords from the following content: {content}
```

```
Analyze the following content and extract keywords: {content}
```

```
Extract keyword from the following content: """{content}"""
```

## Ordering the Term Results

In the next example, you can use prompts to sort the tags in a specific order.

```
Extract tags from the following content: {content}. Order the tags by alphabetical order
```

```
Extract tags from the following content: {content}. Order the tags by popularity
```

## Choosing a Language for Term Results

You can use prompts to specify a language for the terms. This does not have to be the same language as the original content.

```
Extract tags from the following content: {content}. Make sure all Tags are Spanish dictionary words.
```

```
Extract tags from the following content: {content}. Make sure all Tags are written in Japanese characters.
```

## Exclude Words from Term Results

You can use prompts to exclude certain words:

```
Extract tags from the following content: {content}. Do not use the words "WordPress", "Plugins" or "Themes".
```

```
Extract tags from the following content: {content}. Do not use any curse words.
```

## Search Only Existing Terms

It’s also possible to restrict OpenAI to searching only the existing terms on the site. Use {site_terms} in your prompt as in this example:

```
Scan the following content '{content}' and choose keywords only from this list: '{site_terms}'
```

## Choose a Case for Term Results

You can add request that OpenAI return results using a specific case. Let’s take the example of the term “TShirts”.

- PascalCase: **“…return tags in PascalCase where applicable”** : This should return **TShirts**
- camelCase: **“…return tags in camelCase where applicable”** : This should return **tShirts**
- kebab-case : **“…return tags in kebab-case where applicable”** : This should return **T-shirts**
- Capital: **“…return tags in Tshirts where applicable”** : This should return **TShirts**
- Upper: **“…return tags in Uppercase where applicable”** : This should return **TShirts**
- Lower: **“…return tags in lowercase where applicable”** : This should return **TShirts**

---

## Comparing the TaxoPress AI Integrations (Pro)

**Source:** [https://taxopress.com/docs/comparing-the-ai-integrations/](https://taxopress.com/docs/comparing-the-ai-integrations/)

This feature requires the Pro version of the TaxoPress plugin

TaxoPress currently has integrations with four different AI services. Each service has different pros and cons. We recommend testing them to see which is the best choice for your site.

The services do support different languages and have different pricing structures. This table below has details for over 20 popular languages. If your language is in this table, IBM/Watson may produce the best results. If your language is not in this table, we recommend testing OpenAI as that is the most likely service to support other languages.

- **OpenAI**: There is no official language documentation, but they do have a [pricing guide](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them).
- **IBM Watson**: [language documentation](https://cloud.ibm.com/docs/natural-language-understanding?topic=natural-language-understanding-language-support) and [pricing guide](https://cloud.ibm.com/catalog/services/natural-language-understanding).
- **Dandelion**: [language documentation](https://dandelion.eu/docs/api/datatxt/nex/v1/#param-lang) and [pricing guide](https://dandelion.eu/profile/plans-and-pricing/).
- **LSEG / Refinitv**: [language documentation](https://developers.lseg.com/en/api-catalog/open-perm-id/intelligent-tagging-restful-api/documentation#intelligent-tagging-for-non-english-languages) and [pricing guide](https://developers.lseg.com/en/api-catalog/open-perm-id/intelligent-tagging-restful-api/documentation#side-by-side-comparison-of-packages-and-deployment-options).

|  | OpenAI | IBM Watson | Dandelion | LSEG / Refinitiv |
| --- | --- | --- | --- | --- |
| Arabic | [icon-yes/] | [icon-yes/] | [icon-no/] | [icon-no/] |
| Chinese (Simplified) | [icon-yes/] | [icon-yes/] | [icon-no/] | [icon-no/] |
| Czech | [icon-yes/] | [icon-yes/] | [icon-no/] | [icon-no/] |
| Danish | [icon-yes/] | [icon-yes/] | [icon-no/] | [icon-no/] |
| Dutch | [icon-yes/] | [icon-yes/] | [icon-no/] | [icon-no/] |
| English | [icon-yes/] | [icon-yes/] | [icon-yes/] | [icon-yes/] |
| Finnish | [icon-yes/] | [icon-yes/] | [icon-no/] | [icon-no/] |
| French | [icon-yes/] | [icon-yes/] | [icon-yes/] | [icon-no/] |
| German | [icon-yes/] | [icon-yes/] | [icon-yes/] | [icon-no/] |
| Hebrew | [icon-yes/] | [icon-yes/] | [icon-no/] | [icon-no/] |
| Hindi | [icon-yes/] | [icon-yes/] | [icon-no/] | [icon-no/] |
| Italian | [icon-yes/] | [icon-yes/] | [icon-no/] | [icon-no/] |
| Japanese | [icon-yes/] | [icon-yes/] | [icon-no/] | [icon-no/] |
| Korean | [icon-yes/] | [icon-yes/] | [icon-no/] | [icon-no/] |
| Norwegian | [icon-yes/] | [icon-yes/] | [icon-no/] | [icon-no/] |
| Polish | [icon-yes/] | [icon-yes/] | [icon-no/] | [icon-no/] |
| Portuguese | [icon-yes/] | [icon-yes/] | [icon-yes/] | [icon-no/] |
| Romanian | [icon-yes/] | [icon-yes/] | [icon-no/] | [icon-no/] |
| Russian | [icon-yes/] | [icon-yes/] | [icon-yes/] | [icon-no/] |
| Slovak | [icon-yes/] | [icon-yes/] | [icon-no/] | [icon-no/] |
| Spanish | [icon-yes/] | [icon-yes/] | [icon-yes/] | [icon-no/] |
| Swedish | [icon-yes/] | [icon-yes/] | [icon-no/] | [icon-no/] |
| Turkish | [icon-yes/] | [icon-yes/] | [icon-no/] | [icon-no/] |

---

## How to Register for IBM Watson (Pro)

**Source:** [https://taxopress.com/docs/register-ibm/](https://taxopress.com/docs/register-ibm/)

This feature requires the Pro version of the TaxoPress plugin

The Auto Terms feature has an integration with the IBM Watson service. This guide will help you register for an account at IBM Watson and get an API Key to use with TaxoPress. Unlike some of the other integrations we support, IBM requires you to register for a specific service. The feature that is integrated with TaxoPress is called “Natural Language Understanding”.

- Go to [the “Natural Language Understanding” area](https://cloud.ibm.com/catalog/services/natural-language-understanding) of the IBM website.

- Sign up for an IBM Cloud account:

- IBM will provide you with both an API Key and an API URL. You can use both of these to connect your IBM account to TaxoPress.

- In your WordPress site, go to TaxoPress > Auto Terms > Sources.
- Enter your new URL and key into the “API URL” and “API Key” fields.

ibm watson

---

## How to Register for OpenAI (Pro)

**Source:** [https://taxopress.com/docs/register-openai/](https://taxopress.com/docs/register-openai/)

This feature requires the Pro version of the TaxoPress plugin

The TaxoPress Auto Terms feature has an integration with the OpenAI service. This guide will help you register for an account at OpenAI and get an API Key to use with TaxoPress.

Please note that your OpenAI subscription needs access to their API. TaxoPress and similar services can not work with [a ChatGPT-only subscription](https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus). [Here’s our guide to choosing the correct OpenAI plan](https://taxopress.com/chatgpt-ai-pricing/).

- [Visit the OpenAI website](https://chat.openai.com/auth/login) and sign for an account.

- Go to [the OpenAI platform website](https://platform.openai.com/).
- In the top-right corner, go to “View API keys”.

- Click “Create new secret key”. This is the API Key you enter into the TaxoPress settings.
- In your WordPress site, go to TaxoPress > Auto Terms > Sources.
- Enter your new key into the “API Key” field.

openai keys

Please note that this is a paid service from OpenAI. You will need to go to “Settings” then “Billing” and make sure you have a payment method registered with OpenAI. [Find out what type of account you need](https://taxopress.com/chatgpt-ai-pricing/).

---

## How to Register for Dandelion (Pro)

**Source:** [https://taxopress.com/docs/register-dandelion/](https://taxopress.com/docs/register-dandelion/)

This feature requires the Pro version of the TaxoPress plugin

The TaxoPress Auto Terms feature has an integration with the Dandelion API service.

The TaxoPress team is not responsible for the quality of results from Dandelion.

---

## How to get a Dandelion API key

This guide will show you how to create a Dandelion API key to automatically suggest or add terms for your WordPress posts.

- [Register for a Dandelion account](https://dandelion.eu/accounts/register/).
- Confirm your email.
- [Go to the dashboard](https://dandelion.eu/profile/dashboard/).
- Get your API token:

- In your WordPress site, go to TaxoPress > Auto Terms > Sources.
- Enter your new key into the “API Token” field.

dandelion

---

## Understanding Dandelion units

Dandelion’s pricing model relies on “units”. The free plan at Dandelion provides 1,000 units per day.

What do units mean? That depends on the amount of text you are analyzing. [Their pricing page has some details](https://dandelion.eu/profile/plans-and-pricing/):

> “You can think of units like a sort of internal monetary systems. We offer different APIs, each one with a different cost in units. Units are not related to a single API, but to the wider system. Every API uses units from your daily or monthly vault. The unit price for each single API depends on its nature. APIs can be billed by number of requests you make, by the complexity of your query, by the amount of data you need to crunch, …“

---

## Dandelion is not responding currently

Sometimes you may see a message, “Sorry, Dandelion is not responding currently”. This can happen for several reasons. For example:

- You may be using the Dandelion service too frequently for your plan limits.
- The Dandelion service may be busy or temporarily offline.

---

## How to Register for LSEG / Refinitiv (Pro)

**Source:** [https://taxopress.com/docs/register-opencalais/](https://taxopress.com/docs/register-opencalais/)

This feature requires the Pro version of the TaxoPress plugin

The TaxoPress Auto Terms feature has an integration with the LSEG / Refinitiv / OpenCalais API service.

The TaxoPress team is not responsible for the quality of results from LSEG. This platform has changed names several times and is mainly included in TaxoPress as a legacy feature.

Please also note that registering for an API key can be a complex and confusing process. We’ll do our best to walk you through the steps. Getting an API key requires registering at one site and using those login details for a second site.

- [Click here to register for MyRefinitiv](https://my.refinitiv.com/content/mytr/en/register.html#/).

- Verify your email address.
- Refinitiv will say “We will send you email confirmation within the next 24 hours with further instructions on how to proceed with access to MyRefinitiv.”
- After approval, create a password.
- Go to [PermID.org](https://permid.org) and log in.
- On the PermID site, click “APIs” and then “Display my API token”.

- In your WordPress site, go to TaxoPress > Auto Terms > Sources.
- Enter your new key into the “API Key” field.

lseg

---

