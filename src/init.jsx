(function (Definition) {
    /**
     * This module provides a instance;
     */

    // use webpack
    module.exports = new Definition();

})(function() {
    'use strict';

    var React = require('react');

    var mylist = require('./mylist.js');
    var Searchbar = require('./Searchbar.jsx');
    var SearchOptionContainer = require('./SearchOptionContainer.jsx');

    /**
     * @constructor
     */
    var module = function() {
        chrome.tabs.getCurrent(function (tab) {
            if (tab.url && mylist.isAble(tab.url)) {
                this.init();
            }
        });
    };

    module.prototype.init = function() {
        // render react DOM
        var rendered = (
                <div>
                  <SearchOptionContainer />
                  <Searchbar />
                </div>
        );
        var nodeRendered = React.findDOMNode(rendered);
        var container = mylist.getRenderTo();

        container.appendChild(nodeRendered);
    };

    return module;
});
