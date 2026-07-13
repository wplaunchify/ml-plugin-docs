# Using Google Chrome Developer Tools

*Category from The Events Calendar documentation*

---

## Using Google Chrome Developer Tools

**Source:** [https://docs.nexcess.com/software/the-events-calendar/using-google-chrome-developer-tools/](https://docs.nexcess.com/software/the-events-calendar/using-google-chrome-developer-tools/)

When troubleshooting a problem on your site, it is essential that you have powerful tools on your side. If you manage a website that is business critical, it’s important to learn how to accurately identify problems quickly.

The Google Chrome browser has a power toolkit called Developer Tools, that is easy to use and quickly helps identify problems. It’s easy enough to learn for quick troubleshooting and powerful enough to be trusted by professionals. We often use Chrome tools in our own troubleshooting and testing.

This tutorial will walk you through a few quick tips, and you’ll learn how to quickly identify the Tribe CSS selector on any element!

## Using Devtools

Getting started with Dev Tools is straightforward. On any element on your web page, right click on the object and select “Inspect Element.” This will open the Dev Tools pane in Chrome with the DOM element selected.

For example on the images below, I selected “Tribe Happy Hour” and with a right-click, selected ‘Inspect Element.’ The Dev Tools pane opens on the right of my screen and highlights the ‘Tribe Happy Hour’ anchor link in the DOM.

![KB - chrome dev tools 2](https://docs.nexcess.com/wp-content/uploads/2026/06/KB-chrome-dev-tools-2-665x557-1.jpg)

![KB - chrome dev tools 3](https://docs.nexcess.com/wp-content/uploads/2026/06/KB-chrome-dev-tools-3-665x356-1.jpg)

### Move the Dev Tools Pane

You can move the pane to the right of the screen, the bottom of the screen, or separate it to another window, by clicking the Dock button on the Dev Tools tab bar next to the Settings button.

![KB - chrome dev tools 4](https://docs.nexcess.com/wp-content/uploads/2026/06/KB-chrome-dev-tools-4.jpg)

### Select a DOM element by Magnifying Glass

By clicking on the Magnifying Glass in the Dev Tools tab bar, you highlight and select a new DOM on the page.

For example in the image below, I clicked the Magnifying Glass, then hovered over the ‘Upcoming Events’ DOM element. When I hover, the blue highlight shows me the width and height boundaries of the object, the orange shows me the margins attributed to the object, and the yellow flag tells me the name and CSS selectors of the element (in this case a name of ‘h2’ and a class of ‘tribe-events-page-title’) and it also tells me the width and height dimensions (a width of 960px and a height of 30px). If I click on the element, it will appear in the DOM pane on the right.

![KB - chrome dev tools 5](https://docs.nexcess.com/wp-content/uploads/2026/06/KB-chrome-dev-tools-5.png)

### Select a DOM Element by Traversing the DOM Pane

You can also select any element by scrolling (traversing) through the DOM pane and clicking on it. As you hover over the elements in the DOM pane, you will see them highlighted on the webpage.

This may be the easiest way to find and select hard to reach or hidden elements.

## Finding the Correct Tribe CSS Selector

With these methods, you are now able to quickly find the right Tribe CSS selector for any DOM element! This is especially useful for styling elements with template overrides.

Here are a few examples for finding common Tribe CSS selectors.

Use ‘div#tribe-events-bar’ to select elements in our Events Bar. As you can see here, the CSS selector is listed in at least three places.

![KB - chrome dev tools 6](https://docs.nexcess.com/wp-content/uploads/2026/06/KB-chrome-dev-tools-6.png)

On the single events page, use ‘div.tribe-events-cal-links’ to select the Google Cal and iCal Import link container. This is useful for hiding them with CSS, for example.

![KB - chrome dev tools 7](https://docs.nexcess.com/wp-content/uploads/2026/06/KB-chrome-dev-tools-7.png)

On the ‘Month’ view page, use ‘h3.tribe-events-month-event-title’ to change the styling on the titles

![KB - chrome dev tools 8](https://docs.nexcess.com/wp-content/uploads/2026/06/KB-chrome-dev-tools-8.png)

We hope the above will help you out when you’re troubleshooting an issue or looking to do some CSS customizing. If you need help, you can always head to our help desk, and we’ll do our best to point you in the right direction.

---

