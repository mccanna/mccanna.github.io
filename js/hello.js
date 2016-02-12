'use strict';

//
// app.js is the entry point for the entire client-side
// application. All of the top-level views should be
// instantiated here.

var $ = require('jquery');
// var analytics = require('./analytics.js');
var pageconfig = require('../data/pageconfig.json');

require('./recirc.js');

var _ = require("underscore");
var d3 = require('d3');
var moment = require('moment');
var colorbrewer = require("colorbrewer");
var pageconfig = require('../data/pageconfig.json');
var browser = require('bowser').browser;
window._ = _;

var categories = require("../data/AWARD_CSV_2015.json");

var lineCharts = require("./lineCharts.js");

function drawLineCharts() {

    var selector = "#categories";
    d3.select(selector).selectAll("svg").remove();
    var charts = lineCharts.init("#categories", categories);
    
}

drawLineCharts();

document.getElementById("twitter-sharer").onclick = function() {
  window.open("https://twitter.com/intent/tweet?text=" + trackingConfig.twitterText + "&url=" + trackingConfig.shortUrl, "", "resizable,height=251,width=550");
  return false;
}

document.getElementById("facebook-sharer").onclick = function() {
  window.open("https://www.facebook.com/sharer/sharer.php?u=" + trackingConfig.fullUrl + "%3Fex_cid=story-facebook", "", "resizable,height=354,width=626");
  return false;
}


// analytics.pageview();
