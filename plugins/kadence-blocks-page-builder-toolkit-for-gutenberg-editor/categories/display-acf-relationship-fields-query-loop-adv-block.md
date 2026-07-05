# Display Acf Relationship Fields Query Loop Adv Block

*Category from Kadence Blocks — Page Builder Toolkit for Gutenberg Editor documentation*

---

## Dynamically Displaying ACF or Metabox Relationships in Query Loop (Adv) blocks

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-blocks/display-acf-relationship-fields-query-loop-adv-block/](https://www.kadencewp.com/help-center/docs/kadence-blocks/display-acf-relationship-fields-query-loop-adv-block/)

This guide covers how to display specific **Custom** **Post** **Type** **(CPT)** items, such as *Tours*, on another CPT, like *Guides*, using an **ACF Relationship Field** or [Metabox Relationships](https://docs.metabox.io/extensions/mb-relationships/). 

With the **Kadence Advanced Query Loop block** and a custom code snippet, this can be done dynamically, without the need to manually select posts.

Want to see this functionality built-in without the need of custom code? Then, consider [voting on this Feature Request](https://feedback.kadencewp.com/p/adv-query-loop-display-posts-dynamically-using-acf-relationship-field-as-a-source) to show your support. We often implement popular requests into our products.

Follow the steps below to start using relational data within *Advanced Query Loop blocks*. In this example, we’ll work with two Custom Post Types:**Guides**and**Tours**. The goal is to assign a specific **Guide** to a specific **Tour** and display this relationship dynamically using *Advanced Query Loop blocks*.  While this example provides a general use case, the same approach can be adapted to fit your specific needs.

In this example, the [Query Loop Vars Filter](https://www.liquidweb.com/docs/kadence-blocks/custom-queries-for-advanced-query-loop-block/) is used to modify the output of the Advanced Query Loop block. The custom code in this tutorial can be added to your site’s 
```
functions.php
```

 file if you are using a child theme. If you are not using a child theme, you should use a plugin such as **Code Snippets** to add custom code safely without editing theme files directly.

**Get started below:**

1. Add a new **ACF** **field** **group** with a **Relationship** **Field** or **Metabox Relationships**, and assign it to the **Guide** **Custom** **Post** **Type**.
2. Open a post from the **Guide** CPT and select the related **Tours** using the *Relationship Field*.
3. Within the post content, add an **Advanced Query Loop** block.
*(If you’re using a Hooked Element to display the query, you can add the Advanced Query Loop block to the Element’s content instead of placing it directly within the Guide post content.)*
4. In the [Query Loop (Adv) Block Settings](https://www.liquidweb.com/docs/kadence-blocks/advanced-query-loop-block/#general-settings), set the **Post Type** to **Tour**.
5. Then, add the following **Code** **Snippet** to your website if you are using ACF:

```
add_filter('kadence_blocks_pro_query_loop_query_vars', function( $query, $ql_query_meta, $ql_id ) {
   if ( 23146 == $ql_id ) { // Replace 23146 with your actual Query Loop block ID
       $relationship = get_field('ACF_RELATIONSHIP_NAME'); // Replace with your actual ACF field name
       
       $relationship_ids = array();
       
       if( !empty($relationship) ) {
           $relationship_ids = ( is_object($relationship) ? wp_list_pluck($relationship, 'ID') : $relationship );
       }
        
       $query['post__in'] = $relationship_ids;
       $query['orderby'] = 'post__in'; // Preserves the order from ACF field
   }
   return $query;
}, 10, 3);
```

**Notes**:

- Replace 
```
23146
```

 with your actual **Advanced Query Loop block ID**. 
(Read our full guide on customizing this filter *here*.)
- **ACF_RELATIONSHIP_NAME**: Replace this with your actual **ACF** **field** **name**

Add this Code Snippet if you are using **Metabox**:

```
add_filter('kadence_blocks_pro_query_loop_query_vars', function( $query, $ql_query_meta, $ql_id ) {
   if ( 23146 == $ql_id ) { // Replace 23146 with your actual Query Loop block ID

		$relationships = MB_Relationships_API::get_connected( [
			'id'   => 'METABOX_RELATIONSHIPS_ID', // Replace this with your actual Metabox Relationships ID
			'to'   => get_the_ID(),
		] );

		if ( ! empty( $relationships ) ) {
			// Extract just the post IDs from the array of post objects.
			$relationship_ids = wp_list_pluck( $relationships, 'ID' );

			$query['post__in'] = $relationship_ids;
			$query['orderby'] = 'post__in';
		} else {
			// If no relationships are found, ensure the query returns nothing.
			$query['post__in'] = [0];
		}
   }
   return $query;
}, 10, 3);
```

**Notes**:

- Replace 
```
23146
```

 with your actual **Advanced Query Loop block ID**. 
(Read our full guide on customizing this filter *here*.)
- **METABOX_RELATIONSHIP_ID**: Replace this with your actual **Metabox Relationships ID**

The **Guide** post will now show all the **Tour** posts from its associated **ACF** **Relationship** **Field**or **Metabox Relationships,** rendered dynamically using **Kadence’s Query Loop (Adv)** block.

Was this article helpful?Yes NoThank you for your input.Thank you for your feedback.

---

