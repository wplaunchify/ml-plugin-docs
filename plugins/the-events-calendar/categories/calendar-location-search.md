# Calendar Location Search

*Category from The Events Calendar documentation*

---

## Using The Events Calendar Location Search

**Source:** [https://docs.nexcess.com/software/the-events-calendar/calendar-location-search/](https://docs.nexcess.com/software/the-events-calendar/calendar-location-search/)

Events Calendar Pro includes location-based search, allowing visitors to filter calendar events by proximity to a city, address, or other mappable location. This article covers how to use the feature, how it works under the hood, and how to customize or troubleshoot it.

💡 Location search requires Events Calendar Pro and a Google Maps API key. Before proceeding, see [Setting Up Your Google Maps API Key](https://docs.nexcess.com/software/the-events-calendar/google-maps-api/). For best results, set up [restricted API keys](https://docs.nexcess.com/software/the-events-calendar/google-maps-api/) as described in that article.

💡 By default, only one venue will be visible on the map if you are using the built-in API key. To display more venues, you need a custom API key.

## Using Location Search

When viewing your calendar with Events Calendar Pro active, an **In a location** field appears in the events search bar alongside the keyword and date fields.

![The events search bar showing the In a location field added by Events Calendar Pro](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2021-06-11-at-1.41.55-PM.jpg)

Enter an address, city, or other mappable location and click **Find Events**. The calendar and event listings will refresh to show events at venues within the search radius.

In Map View, events are plotted on the map based on their venue’s location. After a location search, the map zooms to the relevant area and shows only nearby events.

![Map View showing all events plotted by venue location before a location search](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2021-06-11-at-1.44.11-PM.jpg)

![Map View after a location search showing only nearby events](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2021-06-11-at-1.47.31-PM.jpg)

Location search works on all calendar views — List, Month, Day, Week, Map, and Photo — and pairs well with the [Filter Bar](https://theeventscalendar.com/product/wordpress-events-filterbar/) add-on. When Filter Bar is active alongside Events Calendar Pro, a **Distance** filter lets users adjust the search radius.

![The Distance filter in the Filter Bar sidebar, allowing users to adjust the location search radius](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2021-06-11-at-1.50.19-PM.jpg)

### Hiding the Location Search Field

By default, the location search field appears on all calendar views. To restrict it to map-based views only, go to **Events → Settings → Display** and enable **Hide location search** under the Calendar Display heading.

![The Hide location search checkbox in Events Settings Display tab](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2021-06-11-at-1.51.42-PM.jpg)

![The events search bar after location search is hidden, showing only keyword and date fields](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2021-06-11-at-1.52.56-PM.jpg)

💡 This setting only appears when a custom API key is configured.

### Filtering Events by Location in WP_Query

From Events Calendar Pro version 4.4.16, the arguments 
```
tribe_geoloc
```

, 
```
tribe_geoloc_lat
```

, and 
```
tribe_geoloc_lng
```

 are available for use in [WP_Query](https://docs.nexcess.com/software/the-events-calendar/custom-event-status/) and [tribe_get_events()](https://docs.nexcess.com/software/the-events-calendar/query-events/) to filter events by location programmatically.

## How Location Search Works

Understanding the mechanics behind location search helps explain why some searches return no results, and what you can do about it.

### The Search Process

When a user enters a location and clicks Find Events, the site sends a geocoding request to the Google Maps API:

```
https://maps.googleapis.com/maps/api/geocode/json?address=search-term&key=YOUR-API-KEY
```

The API returns latitude and longitude coordinates for the search term. The site then searches its database of saved venues — those with stored latitude and longitude — within the radius you’ve set under **Events → Settings → Display → Map view search distance limit**.

![The Map view search distance limit setting in the Events Settings Display tab](https://docs.nexcess.com/wp-content/uploads/2026/06/s-d-l.jpg)

Events at matching venues within the timeframe are then shown in the selected calendar view. Location search only succeeds when the Google Maps API returns exactly one result — neither zero nor multiple.

💡 You can test a geocoding request by pasting the URL above into your browser (substituting your search term and API key) to see what the API returns.

### API Response Scenarios

#### Invalid API Key

![Error message showing the API key is invalid](https://docs.nexcess.com/wp-content/uploads/2026/06/ecp_location_search_key_invalid.jpg)

The key was not copied correctly. Check and re-enter your API key under **Events → Settings → Integrations**.

#### API Key Not Authorized

![Error message showing the API key is not authorized for this service](https://docs.nexcess.com/wp-content/uploads/2026/06/ecp_location_search_key_not_authorized.jpg)

This can mean one of the following:

- You’re using the default built-in API key, which doesn’t support location search. [Set up a custom API key.](https://docs.nexcess.com/software/the-events-calendar/google-maps-api/)
- The Geocoding API hasn’t been enabled for your API key. Go to [Google Cloud Console](https://console.cloud.google.com/google/maps-apis/api-list) and enable it.
- The API key has IP or domain restrictions that exclude the server’s IP address. Geocoding requests originate from your server’s IP, not the visitor’s browser. Check your restriction settings.

#### API Keys with Referer Restrictions Cannot Be Used

![Error message about referer restrictions on the API key](https://docs.nexcess.com/wp-content/uploads/2026/06/ecp_location_search_key_restricted.jpg)

The Geocoding API key has HTTP referer restrictions instead of IP restrictions. See [Creating Google Maps API Key Restrictions](https://theeventscalendar.com/extensions/google-maps-api-key-restrictions/) for how to configure restrictions correctly.

#### Zero Results

![The location search showing zero results](https://docs.nexcess.com/wp-content/uploads/2026/06/ecp_location_search_zero_result.jpg)

Two causes: the API found no match for the search term, or the search term is ambiguous enough that the API returned too many possible matches. For example, searching “Springfield” returns results across multiple US states and several European locations — too many for the API to resolve to a single point. Provide a more specific search term, such as “Springfield, IL.”

#### Wrong Result

![The location search returning a result for the wrong country](https://docs.nexcess.com/wp-content/uploads/2026/06/ecp_location_search_wrong_result.jpg)

The API found one result, but it’s for the wrong location — for example, searching “Perth” returns Perth, Australia, instead of Perth, UK. Add more context to the search term (e.g. “Perth, UK”), or use the localization tweak described in the Tweaks section below.

#### Multiple Results

![The location search showing multiple results for an ambiguous search term](https://docs.nexcess.com/wp-content/uploads/2026/06/ecp_location_search_multiple_results.jpg)

The search term is specific enough to narrow the field, but still returns more than one location. For example, “Springfield, US” returns three different cities. The site cannot show results when the API returns more than one coordinate. Narrow the search further — “Springfield, IL” resolves to a single result.

#### One Result (Success)

![The location search returning exactly one result and showing matching events](https://docs.nexcess.com/wp-content/uploads/2026/06/ecp_location_search_one_result.jpg)

When the API returns exactly one result, the site takes the coordinates, searches venues within the configured radius, and displays the matching events. This is the only scenario where location search returns calendar results.

### Key Takeaway

Location search only works when the Google Maps API can return exactly one, unambiguous result for the search term. The API is the limiting factor — TEC has no influence over how it resolves search terms, only over what search term is sent to it.

## Troubleshooting

If you are outside the United States and location search isn’t working as expected, the default Google Maps locale (US-based) may be causing issues. See [Change the Google Maps Localization Option](https://docs.nexcess.com/software/the-events-calendar/google-maps-handbook/) to set the locale to your region.

## Tweaks

### Add a Search Tip for Visitors

If you’ve identified a search approach that works well for your site, you can surface it as a tip below the search bar using a template hook:

```
add_action(
    'tribe_template_after_include:events/v2/components/events-bar',
    function( $file, $name, $template ) {
        echo '<div style="margin-top: -32px; margin-bottom: 32px; text-align:center; width: 100%; font-style: italic;">';
        echo 'When searching for a location, add the state after the city name. E.g. Springfield, MI.';
        echo '</div>';
    },
    10,
    3
);
```

![The calendar search bar with the custom tip text displayed below it](https://docs.nexcess.com/wp-content/uploads/2026/06/ecp_location_search_snippet_example.jpg)

### Change the Location Field Placeholder Text

Override the placeholder text in the location field via a template override:

1. Copy 
```
wp-content/plugins/events-calendar-pro/src/views/v2/location/form-field.php
```
2. Paste the copy at 
```
wp-content/themes/[your-theme]/tribe/events-pro/v2/location/form-field.php
```
3. Edit line 29, which contains the placeholder string.

You can also change the placeholder through translations if you’re running the calendar in a language other than English.

### Localize Google Maps to a Specific Region

By default, Google Maps uses US locale when resolving search terms. To change this to another region, see [Change the Google Maps Localization Option](https://docs.nexcess.com/software/the-events-calendar/google-maps-handbook/).

### Append a Default State or Region to Search Terms

If all your venues are in the same state or region, you can automatically append that context to every search term before it’s sent to the Google Maps API. This helps visitors get accurate results without needing to type the state themselves. Replace 
```
"TX"
```

 with the appropriate string for your area:

```
add_filter( 'tec_google_map_args', 'tec_limit_search_to_texas' );

function tec_limit_search_to_texas( $args ) {
    $args['address'] = $args['address'] . ', TX';
    return $args;
}
```

---

