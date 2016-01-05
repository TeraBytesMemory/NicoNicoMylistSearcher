(function(Definition) {
    /**
     * This module provides a instance;
     */

    // use webpack
    module.exports = new Definition();

})(function() {
    'use strict';

    var React = require('React');

    var _ = require('lodash');
    var searchEngine = require('search-engine.js');
    var mylist = require('./mylist.js')
    var Searchbar = require('./Searchbar.jsx');
    var SearchOption = require('./SearchOption.jsx');

    /**
     * @constructor
     */
    var module = function() {
        this.init();
    };

    module.prototype.init = function() {
        chrome.tabs.getCurrent(function (tab) {
            if (tab.url && mylist.isAble()) return;

            // render react DOM
            React.render(<SearchOption />,
                         document.getElementsByClassName("outer listPosition"));
            React.render(<Searchbar />,
                         document.getElementsByClassName("outer listPosition"));
        });
    };

    return module;
});
