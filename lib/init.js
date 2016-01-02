(function(Definition) {
    /**
     * This module provides a class;
     */

    // use webpack
    module.exports = Definition;

})(function() {
    'use strict';

    var _ = require('lodash');
    var Mylist = require('mylist');

    var mylist = new Mylist();

    /**
     * @constructor
     */
    var module = function() {
        this.init();
    };

    var url_prefix = "";

    module.prototype.init = function() {
        chrome.tabs.getCurrent(function (tab) {
            if (tab.url) return;

            // load my list
            mylist.init(tab.url);

            // construct react DOM

        });
    };

    return module;
});
