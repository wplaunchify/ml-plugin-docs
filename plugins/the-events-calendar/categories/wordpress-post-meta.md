# Wordpress Post Meta

*Category from The Events Calendar documentation*

---

## Events Calendar Post Meta Keys

**Source:** [https://docs.nexcess.com/software/the-events-calendar/wordpress-post-meta/](https://docs.nexcess.com/software/the-events-calendar/wordpress-post-meta/)

These are The Events Calendar’s [WordPress Post Meta (also known as WordPress Custom Fields)](http://codex.wordpress.org/Custom_Fields) keys and values as they appear in the post_meta database table. These can be useful in custom WP Queries, plugin modifications, and in understanding where and how our plugin stores settings and information. They are four sections, and each key is listed in alphabetical order in their respective sections.

### Event Custom Post Type

_EventAllDay
Specifies an all day event.
Only one possible value: “yes”. Unset or do not specify if this is not an all day event.
_EventDuration
Duration of event specified in minutes.
_EventCost
Cost of the event.
Should be a numeric value. 0 = free.
Only used if no ticketing plugin is active.
_EventCurrencyPosition
Possible values: “prefix”, “suffix”.
Only used if no ticketing plugin is active.
_EventCurrencySymbol
String indicating the currency.
Only used if no ticketing plugin is active.
_EventEndDate
End Date and time of event in this format YYYY-MM-DD HH:MM:SS
_EventHideFromUpcoming
Specifies if the event will be hidden from list/upcoming views.
Possible values: “yes”, or “”.
_EventOrganizerID
Post ID from wp_posts table for event this event’s organizer.
_EventOrigin
Method through which the event was added.
Example values: “events-calendar”.
_EventShowMap
Specifies whether to display a map on the events page.
Possible values: “TRUE”, “FALSE”, or “”.
_EventShowMapLink
Specifies whether to link to a third party mapping service with a map pin on the event location.
Possible values: “TRUE”, “FALSE”, or “”.
_EventShowTickets
Only one possible value: “yes”.
_EventStartDate
Start date and time of event in this format YYYY-MM-DD HH:MM:SS
_EventURL
Optional link to an event’s website/page for more info.
Value is preferably a full URI. If a URL is specified instead the plugin will do its best.
_EventVenueID
Post ID from wp_posts table for event this event’s venue.

### Venue Custom Post Type

_VenueAddress
Address line(s).
_VenueCity
City name.
_VenueCountry
Country name.
_VenueGeoAddress
Full address used to get the geopoints from Google Maps.
_VenueLat
Latitude of the venue.
_VenueLng
Longitude of the venue.
_VenueOrigin
Method through which the Venue was added.
Example values: “events-calendar”.
_VenuePhone
Telephone number.
_VenueProvince
If the country is not the United States this contains the full text value of the state/province.
_VenueShowMap
Specifies whether to display a map on the venue page.
Possible values: “TRUE”, “FALSE”, or “”.
_VenueShowMapLink
Specifies whether to link to a third party mapping service with a map pin on the venue location.
Possible values: “TRUE”, “FALSE”, or “”.
_VenueState
For events in the United States this contains the two letter state code.
_VenueStateProvince
If the country is set the United States the value is identical to _VenueState. If country is somewhere else then this value matches _VenueProvince.
_VenueURL
Optional link to the venue’s website/page for more info.
Value is preferably a full URI. If a URL is specified instead the plugin will do its best.
_VenueZip
Zip/postal code.

### Organizer Custom Post Type

_OrganizerEmail
Email address.
_OrganizerOrganizer
Title of the organizer.
_OrganizerOrigin
Method through which the Organizer was added.
Example values: “events-calendar”.
_OrganizerPhone
Telephone number.
_OrganizerWebsite
Optional link to the organizer’s website/page for more info.
Value is preferably a full URI. If a URL is specified instead the plugin will do its best.

### Miscellaneous

_tribe_*[Shopping Cart Name]*_for_event
Added to products which are actually a ticket for a given event.
Value is the event Post ID.

---

