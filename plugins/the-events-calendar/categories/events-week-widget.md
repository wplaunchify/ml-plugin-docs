# Events Week Widget

*Category from The Events Calendar documentation*

---

## Using the Events By Week Widget

**Source:** [https://docs.nexcess.com/software/the-events-calendar/events-week-widget/](https://docs.nexcess.com/software/the-events-calendar/events-week-widget/)

Head over to **Appearance → Widgets** from the WordPress dashboard. You’re looking for a widget called This Week Events.

See the Events By Week widget? Drag it over to the sidebar widget area of your choice, then save your settings.

![Events by Week Widget](https://docs.nexcess.com/wp-content/uploads/2026/06/week-widget-1.gif)

Now you can go to the front end of your website and see the Events By Week widget. The screenshots below show the two layouts.

![Events by Week Widget](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2021-04-29-at-9.54.39-AM.jpg)Vertical layout

![Events by Week Widget](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2021-04-29-at-9.55.49-AM.jpg)Horizontal layout

## Events By Week Widget Settings

There are a few options that allow you to customize things a bit. These are the available options:

- **Title:** This is the heading that sits above the widget on the front end of the site. By default, it is blank, but it can be changed to anything you like.
- **Layout:** This option enables a vertical or horizontal layout of the events. Choose the one that works best for the widget area.
- **Number of Events to Show:**This allows you to set the maximum number of events that show per day. By default, this is set to five, but can be any number between one and ten.
- **Add a filter:** This option allows you to limit the events that display in the widget to certain categories and tags. Let’s say you only want events categorized as Conference to display in the widget. Perfect, add a filter! How about Conferences and Workshops? Add two filters!

## Widget Display Notes

In the Events By Week widget you can expect the following:

- Recurring Events will show
- Events checked “Sticky in Month View” will show first
- **Condense events in Series** and **Front-end Condense Events Series toggle** will *not* hide events in This Week Events widget. Instead, use tags and categories to show only the events you would like

## Embedding the Widget with a Shortcode

The Events By Week widget can be embedded on any page or post outside of the sidebar. In other words, you can place it anywhere you want!

Embedding the widget can be as easy as pasting this shortcode into any page or post:

```
[tribe_this_week]
```

The shortcode has many different options for you to change the output and you can use this in any combination you like.

**Start Date:** This is used to set the week of events to show. This will find the start of the week based on your WordPress setting and use that for the first day of the week. For example if your setting is to start the week on Monday and you put the date of Wednesday the 6th it will start with Monday the 4th.

```
[tribe_this_week start_date="12-07-2015"]
```

Use the date format in your settings here: *Events > Settings > Display Tab > “Date with year”*

**Week Offset:** Use this to show a week in the future. For example if you want to always show next weeks events add a 1 and it will show the This Week Widget starting with the next start of the week.

```
[tribe_this_week week_offset="1"]
```

*Note the offset only accepts positive numbers.*

**Hide Weekends:** set this to 1 and it will hide Saturdays and Sundays.

```
[tribe_this_week hide_weekends="true"]
```

#### Shortcode Filtering

You can also filter the widget within your shortcode, just as you might do with the widget itself:

```
[tribe_this_week category="black-tie-events" tag="members-only"]
```

It is also possible to specify multiple categories (or tags) by separating them out with commas:

```
[tribe_this_week categories="black-tie-events,winter-balls"]
```

Note too that you can use **category** (singular) and **categories** (plural) interchangeably – the same is true of **tag** and **tags**.

In the above examples, you are using the category/tag slugs, but you can also use numeric IDs so long as they are prefixed with the **#** symbol:

```
[tribe_this_week category="#40, #45, #150" tags="open, #269, free"]
```

As the final example shows, numeric IDs and category/tag slugs can freely be mixed together.

**Operand:**You use this option to change between to using “and” or to use “or” for the filters. The default is “or” so if you have two event categories it will find all events with either of those. If you change to “and” it will return events that have both of those event categories.

```
[tribe_this_week operand="and"]
```

**Layout:**Set the layout of the shortcode to horizontal or vertical, the default is vertical for the shortcode.

```
[tribe_this_week layout="horizontal"]
```

**Count:**This sets the per day count of events

```
[tribe_this_week count="2"]
```

That is everything for the This Week Events widget and the shortcode, if you have further questions do not hesitate to ask us!

## Customizing the Events By Week Widget

### Styling with CSS

You can apply custom CSS to the Events By Week widget. The widget’s styles are loaded from 
```
widget-shortcode-skeleton.css
```

 (or 
```
widget-shortcode-full.css
```

 if you’re loading the full stylesheet). To target the widget with your own CSS rules, use the base class:

```
.tribe-events-widget-shortcode-events-week {
    /* your styles here */
}
```

Note that the Events By Week widget takes its styles from the main calendar Week View, so any template changes you make to the Week View will also affect this widget. For guidance on where to add custom CSS and how widget stylesheets work, see our [Customizing CSS](https://docs.nexcess.com/software/the-events-calendar/customize-css/) guide.

### Using Calendar Views

The Events By Week Widget will take styles from the main calendar Week View, so any template changes that you make to the Week View will impact the widget as well.

If you’d like to make changes, you can create a template override of the corresponding Week View [template](https://docs.nexcess.com/software/the-events-calendar/calendar-templates/).

---

