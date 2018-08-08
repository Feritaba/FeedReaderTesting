// The names and URLs to all of the feeds we'd like available.
var allFeeds = [
    {
        name: 'Udacity Blog',
        url: 'http://blog.udacity.com/feed'
    }, {
        name: 'CSS Tricks',
        url: 'http://feeds.feedburner.com/CssTricks'
    }, {
        name: 'HTML5 Rocks',
        url: 'http://feeds.feedburner.com/html5rocks'
    }, {
        name: 'Linear Digressions',
        url: 'http://feeds.feedburner.com/udacity-linear-digressions'
    }
];

// This function starts up our application.
function init() {
    // Load the first feed we've defined (index of 0).
    loadFeed(0);
}

// This function loads a feed using the Google Feed Reader API.
 function loadFeed(id, cb) {
     var feedUrl = allFeeds[id].url,
         feedName = allFeeds[id].name;

     $.ajax({
       type: "POST",
       url: 'https://rsstojson.udacity.com/parseFeed',
       data: JSON.stringify({url: feedUrl}),
       contentType:"application/json",
       success: function (result, status){

                var container = $('.feed'),
                    title = $('.header-title'),
                    entries = result.feed.entries,
                    entriesLen = entries.length,
                    entryTemplate = Handlebars.compile($('.tpl-entry').html());

            	title.html(feedName);   // Set the header text
                container.empty();      // Empty out all previous entries

				// Loop through the entries we loaded via the Google Feed Reader API.                     */
                entries.forEach(function(entry) {
                     container.append(entryTemplate(entry));
                 });

                 if (cb) {
                     cb();
                 }
               },
       error: function (result, status, err){
                 //run only the callback without attempting to parse result due to error
                 if (cb) {
                     cb();
                 }
               },
       dataType: "json"
     });
 }

// Google API: Loads the Feed Reader API

google.setOnLoadCallback(init);

$(function() {
    var container = $('.feed'),
        feedList = $('.feed-list'),
        feedItemTemplate = Handlebars.compile($('.tpl-feed-list-item').html()),
        feedId = 0,
        menuIcon = $('.menu-icon-link');

    // Assign an id property to each of the feeds based on index of array
    allFeeds.forEach(function(feed) {
        feed.id = feedId;
        feedList.append(feedItemTemplate(feed));

        feedId++;
    });

    // When a link in feedList is clicked on, hide the menu, load the feed
    feedList.on('click', 'a', function() {
        var item = $(this);

        $('body').addClass('menu-hidden');
        loadFeed(item.data('id'));
        return false;
    });

    // Toggle a class on click
    menuIcon.on('click', function() {
        $('body').toggleClass('menu-hidden');
    });
}());
