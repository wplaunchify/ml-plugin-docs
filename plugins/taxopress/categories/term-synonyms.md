# Term Synonyms

*Category from TaxoPress documentation*

---

## Synonyms and Linked Terms in the Database (Pro)

**Source:** [https://taxopress.com/docs/synonyms-linked-terms-data/](https://taxopress.com/docs/synonyms-linked-terms-data/)

This feature requires the Pro version of the TaxoPress plugin

Data for the both the Synonyms and Linked Terms features are stored in the _termmeta table in the WordPress database.

---

## Synonym Data

In this example below, we’ve added 3 synonyms to the “Apple” term. The main “Apple” term has an term ID of 2 in the database.

This next screenshot shows the synonym entries for this term in the database. The term_id is set to 2. The synonyms are stored in a serialized array which is the WordPress standard for term meta with multiple entries.

---

## Linked Terms Data

In this example below, we’ve added 3 linked terms to the “Fruit” term. The main “Fruit” term has an term ID of 22 in the database.

This next screenshot shows the linked terms entries for this term in the database. The term_id is set to 22. The linked terms are stored in a serialized array which is the WordPress standard for term meta with multiple entries.

---

## What’s the Difference Between Linked Terms and Synonyms? (Pro)

**Source:** [https://taxopress.com/docs/difference-linked-terms-synonyms/](https://taxopress.com/docs/difference-linked-terms-synonyms/)

This feature requires the Pro version of the TaxoPress plugin

TaxoPress Pro has two features called “Synonyms” and “Linked Terms”. Both of these new features allow you to have multiple words associated with a single term. Here are the differences between the two features:

- **Synonyms**: The extra words are not real terms. And those extra words can only be added to one term. For example, if your main term is “Apples” and the synonym is “Honeycrisp”, that synonym will not exist anywhere on your site. It will not have an archive page and users will be able to add it as a term.

- **Linked Terms**: The extra words are real terms. And those extra words can be added to as many terms as you want. For example, if your main term is “Apples” and the linked term is “Honeycrisp”, that linked term will have an archive page and users will be able to add it as a term.

---

## Introduction to Linked Terms (Pro)

**Source:** [https://taxopress.com/docs/linked-terms/](https://taxopress.com/docs/linked-terms/)

This feature requires the Pro version of the TaxoPress plugin

“Linked Terms” is a feature in TaxoPress Pro that allows you to connect terms. When the main term is added to a post, the linked terms will be added also.

For sites with a lot of terms, this feature makes it easier and quicker for your users to add the correct terms. For example, if you add the term “WordPress” to your posts, TaxoPress can automatically add Linked Terms that include “CMS”, “website”, and “website design”.

---

## How to Use Linked Terms

I’ll show you an example of how this Linked Terms feature works. Imagine you have four terms: “Apple”, “Honeycrisp”, “Red Delicious”, and “Golden Delicious”.

You can edit the “Apple” term, and select the other three terms as “Linked Terms”. In the image below, you can see I’ve added “Honeycrisp”, “Red Delicious”, and “Golden Delicious”. You can link terms across all the taxonomies on your site. For example, you can link a Tag to Category. Or you can link a WooCommerce Product Category to a WooCommerce Attribute.

Now, whenever the term “Apples” is added to a post, TaxoPress will automatically add the other terms too. In this screenshot, I’ve written a post about fruit and have added the term “Apples”.

When I save the post and refresh the page, all three Linked Terms have been added to the post:

---

## Linked Terms Screen

There is a “Linked Terms” screen in TaxoPress Pro which makes it easy to manage these connections.

linked terms screen

This screen has several options for managing the relationships between Linked Terms:

- Add primary term to posts with secondary term
- Add secondary term to posts with primary term
- Delete Relationship

linked terms links

---

## Linked Terms Options

It’s possible to customize the relationship between Linked Terms. Go to the “Settings” area of TaxoPress and click the “Linked Terms” tab.

Here you can choose with taxonomies to use with Linked Terms.

You can can also choose how this feature works. Imagine you have a main term called “Fruit” and a linked term called “Apple”. You can decide between multiple options:

- **2-way relationship**: When either “Fruit” or “Apple” is added to a post, the other term is added also.
- **Add the primary term, get the secondary term**: When “Fruit” is added to a post, the other term is added.
- **Add the secondary term, get the primary term**: When “Apple” is added to a post, the other term is added.

linked terms settings

---

## Introduction to Term Synonyms (Pro)

**Source:** [https://taxopress.com/docs/synonyms/](https://taxopress.com/docs/synonyms/)

This feature requires the Pro version of the TaxoPress plugin

Synonyms is a feature in TaxoPress Pro that allows you to have multiple words associated with a single term. If TaxoPress scans your content and finds a synonym, it will act as if it has found the main term.

---

## How to add Synonyms

Synonyms will be available on each term screen. In the screenshot below, the main name for the term is “Apple”. The synonyms are “Apples”, “Golden Delicious”, “Granny Smith”, “Pink Lady”, “Honeycrisp”, “Red Delicious”, “Braeburn” and “Gravenstein”.

---

## Examples of using Term Synonyms

Term Synonyms currently works with two key features of TaxoPress: Auto Terms and Auto Links.

With Auto Terms, TaxoPress will add the original term to the post if it finds a synonym in the content. So if you have “Apples”, “Golden Delicious” or “Granny Smith” in your post content, TaxoPress will add the term “Apple” to your post.

With Auto Links, there is a setting to enable the use of synonyms. If you check the box in the screenshot below, TaxoPress will add links to any synonyms in your post. So if you have “Apples”, “Golden Delicious” and “Granny Smith” in your post content, all of those words will be linked to the archive page for “Apple”.

---

## Synonyms are unique

It’s not possible to add a synonym to more than one term. If you attempt to add a synonym that already exists, you’ll see this message: “Duplicate synonyms found. apples is already added to another term.”

---

