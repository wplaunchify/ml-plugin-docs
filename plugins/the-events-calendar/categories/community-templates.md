# Community Templates

*Category from The Events Calendar documentation*

---

## Community Events Template Files

**Source:** [https://docs.nexcess.com/software/the-events-calendar/community-templates/](https://docs.nexcess.com/software/the-events-calendar/community-templates/)

Community Events come with a number of template files that determine how the add-on looks and behaves. We call these templates **views** because they create the pages and elements that you see on your site.

Each template can be copied and [customized in your theme folder](https://docs.nexcess.com/software/the-events-calendar/customize-template-files/).

## Community Events

All of the following templates are located at: 
```
/wp-content/plugins/the-events-calendar-community-events/src/views/community/
```

| Template | What it Does |
| --- | --- |
| community/blank-comments-template.php |  |
| community/default-placeholder.php |  |
| community/edit-event.php | The template for event submission for community events |
| community/edit-organizer.php | The template for editing organizers for community events |
| community/email-template.php | The template used for Community email notifications |
| community/event-list.php | The template to list logged in user’s events on the front end |
| community/modules/captcha.php | Renders the CAPTCHA field in the submission form |
| community/modules/delete.php | Used to delete a user submitted event |
| community/modules/header-links.php | The links in the header of the edit form |
| community/modules/image.php | Renders the image upload field in the submission form |
| community/modules/organizer-fields.php | Used to edit the details of individual organizers (phone, email, etc) |
| community/modules/recurrence.php | Adds a meta box to the event submission form to allow for choosing or creating recurrences of user submitted events |

---

All of the following templates are located at: 
```
/wp-content/plugins/the-events-calendar-community-events/src/views/integrations/the-events-calendar/
```

| Template | What it Does |
| --- | --- |
| the-events-calendar/edit-venue.php | The template for editing venues for community events |
| the-events-calendar/modules/organizer.php | Adds a meta box to the event submission form to allow for choosing or creating an organizer for user submitted events |
| the-events-calendar/modules/cost.php | Renders the pricing fields in the submission form |
| the-events-calendar/modules/custom.php | Adds a meta box to the event submission form to allow for custom field input for user submitted events |
| the-events-calendar/modules/datepickers.php | Adds a meta box to the event submission form to allow for choosing the event time and day. |
| the-events-calendar/modules/taxonomy.php | Renders the taxonomy field in the submission form |
| the-events-calendar/modules/venue.php | Adds a meta box to the event submission form to allow for choosing or creating a venue for user-submitted events. This is also used in the Venue edit view, so be careful to test changes in both places. |
| the-events-calendar/modules/website.php | Renders the website fields in the submission form |

## Tickets

All of the following templates are located at: 
```
/wp-content/plugins/the-events-calendar-community-events/src/views/community-tickets/
```

| Template | What it Does |
| --- | --- |
| community-tickets/modules/email-item-event-details.php | The link to the event from the order details page |
| community-tickets/modules/orders-report-after-organizer.php | Renders the PayPal organizer and a link to the email on record in reports |
| community-tickets/modules/payment-options.php | Displays the plugin’s payment options |
| community-tickets/modules/tickets.php | Renders the ticket settings in the submission form |

---

