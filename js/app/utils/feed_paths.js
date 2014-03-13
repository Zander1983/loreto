define(function (require) {

    "use strict";

 
    var Feeds = {};

   
    Feeds.getFeed = function(date_str) {
    
         var feeds = {};
         
            feeds[""]  = '/index.php?option=com_ninjarsssyndicator&feed_id=2&format=raw';
            feeds["news"]  = '/index.php?option=com_ninjarsssyndicator&feed_id=2&format=raw';
            feeds['events'] = 'https://www.google.com/calendar/feeds/'+gmail+'/public/full?orderby=starttime&sortorder=ascending&max-results=10&futureevents=true';
            feeds["about-us"]  = '/index.php?option=com_ninjarsssyndicator&feed_id=1&format=raw';
            feeds["about-loreto"]  = '/index.php?option=com_ninjarsssyndicator&feed_id=12&format=raw';
            feeds["junior-cycle"]  = '/index.php?option=com_ninjarsssyndicator&feed_id=3&format=raw';
            feeds["transition-year"]  = '/index.php?option=com_ninjarsssyndicator&feed_id=4&format=raw';
            feeds["senior-year"]  = '/index.php?option=com_ninjarsssyndicator&feed_id=5&format=raw';
            feeds["support"]  = '/index.php?option=com_ninjarsssyndicator&feed_id=6&format=raw';
            feeds["activities"]  = '/index.php?option=com_ninjarsssyndicator&feed_id=7&format=raw';
   
            return feeds[Backbone.history.fragment];

    };
   
    return Feeds;

    
});