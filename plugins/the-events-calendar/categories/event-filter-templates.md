# Event Filter Templates

*Category from The Events Calendar documentation*

---

## Filter Bar Template Files

**Source:** [https://docs.nexcess.com/software/the-events-calendar/event-filter-templates/](https://docs.nexcess.com/software/the-events-calendar/event-filter-templates/)

Filter Bar comes with a number of template files that determine how the add-on looks and behaves. We call these templates **views** because they create the pages and elements that you see on your site.

Each template can be copied and [customized in your theme folder](https://docs.nexcess.com/software/the-events-calendar/customize-template-files/) and are located at: 
```
/wp-content/plugins/the-events-calendar-filterbar/src/views/
```

.

| Template | What it Does | Override Location |
| --- | --- | --- |
| v2_1/filter-bar.php | The main filter bar template that calls all the other components | [your-theme]/tribe/events-filterbar/v2_1/filter-bar.php |
| v2_1/filter-bar/selections.php | Displays the selected filters in vertical layout | [your-theme]/tribe/events-filterbar/v2_1/filter-bar/selections.php |
| v2_1/filter-bar/actions.php | Contains the clear button and action done button | [your-theme]/tribe/events-filterbar/v2_1/filter-bar/actions.php |
| v2_1/filter-bar/filters.php | Displays the filters in either the horizontal or vertical layout | [your-theme]/tribe/events-filterbar/v2_1/filter-bar/filters.php |
| v2_1/filter-bar/filters-slider.php | Contains the JavaScript to setup the filter slider in horizontal layout | [your-theme]/tribe/events-filterbar/v2_1/filter-bar/filters.php |
| v2_1/filter-bar/breakpoints.php | Contains the JavaScript to setup the css breakpoints |  |
| v2_1/components/events-bar/filter-button.php | Displays the button to open or close the filters in horizontal layout | [your-theme]/tribe/events-filterbar/v2_1/components/events-bar/filter-button.php |
| v2_1/components/checkbox.php | Contains the checkbox type input | [your-theme]/tribe/events-filterbar/v2_1/components/checkbox.php |
| v2_1/components/clear-button.php | Displays the clear button | [your-theme]/tribe/events-filterbar/v2_1/components/clear-button.php |
| v2_1/components/dropdown.php | Contains the dropdown type input | [your-theme]/tribe/events-filterbar/v2_1/components/dropdown.php |
| v2_1/components/field-type.php | Handles finding the type of filter | [your-theme]/tribe/events-filterbar/v2_1/components/field-type.php |
| v2_1/components/filter.php | Contains the main individual filter container | [your-theme]/tribe/events-filterbar/v2_1/components/filter.php |
| v2_1/components/multiselect.php | Contains the multiselect type input | [your-theme]/tribe/events-filterbar/v2_1/components/multiselect.php |
| v2_1/components/pill.php | Contains the template for vertical layout selections | [your-theme]/tribe/events-filterbar/v2_1/components/pill.php |
| v2_1/components/pill-button.php | Contains individual filter selections and remove button when in horizontal layout | [your-theme]/tribe/events-filterbar/v2_1/components/pill-button.php |
| v2_1/components/radio.php | Contains the radio type input | [your-theme]/tribe/events-filterbar/v2_1/components/radio.php |
| v2_1/components/range.php | Contains the range type input | [your-theme]/tribe/events-filterbar/v2_1/components/range.php |

---

