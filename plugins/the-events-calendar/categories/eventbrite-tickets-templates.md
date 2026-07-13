# Eventbrite Tickets Templates

*Category from The Events Calendar documentation*

---

## Eventbrite Tickets Template Files

**Source:** [https://docs.nexcess.com/software/the-events-calendar/eventbrite-tickets-templates/](https://docs.nexcess.com/software/the-events-calendar/eventbrite-tickets-templates/)

Eventbrite Tickets comes with a number of template files that determine how the add-on looks and behaves. We call these templates **views** because they create the pages and elements that you see on your site.

Each template can be copied and [customized in your theme folder](https://docs.nexcess.com/software/the-events-calendar/customize-template-files/) and are located at: 
```
/wp-content/plugins/the-events-calendar-eventbrite-tickets/src/views/
```

.

| Template | What it Does |
| --- | --- |
| eventbrite/add-existing-event.php | displays the existing Eventbrite event (admin fields) |
| eventbrite/eb-admin-notices.php | Renders Eventbrite notices on the WordPress Post Edit screen |
| eventbrite/eventbrite-events-table.php | Displays the existing Eventbrite event in the event meta box |
| eventbrite/eventbrite-meta-box-extension.php | Displays the existing Eventbrite event meta box in the editor |
| eventbrite/import-eventbrite-events.php | Imports events from Eventbrite events in the admin form |
| eventbrite/hooks/ticket-form.php | Contains the hook logic required to create an effective address module view |
| eventbrite/modules/ticket-form.php | Contains the filters required to create an effective ticket form module view |

---

