# About the project

In this project we are given a web-based application that reads RSS feeds by Udacity. The tests are added using Jasmine to check the functionalites of the code written.

## How to run the project

You can clone the project using (https://github.com/Feritaba/FeedReaderTesting.git) to open the project.

## Technologies used

* Jasmine
* jQuery
* HTML5/CSS3

## Test Suite "RSS Feed"

We tested the "allFeeds" array which defines now the four category of our feed, should not be empty or not defined. Also we tested url of feeds and their names the same as before.

## Test Suite "The Menu"

First we check the menu to be hidden at the beginning.

Second we check if the menu works properly when we click on the hamburger button. It should be hidden when the page loads but with the first click it must show up and with the next click it should hide again.

## Test Suite "Initial Entries"

Because of the loadFeed() in app.js, if the feed load successfully, it will render the HTML inside the feed container. The loadFeed() is asynchronous so that the test should run beforeEach() and done() to ensure the loadFeed() runs in the test.

## Test Suite "New Feed Selection"

We have more than one feed in the allFeeds. The loadFeed() function load feeds with the id(index).

When the second feed content loaded it should be different from the first feed. So that by comparing the rendered HTML content, we want to check when a new feed is loaded the content changes properly?