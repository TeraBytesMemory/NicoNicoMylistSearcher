(function (definition) {
    /**
     * This is main script.
     */

    // use webpack
    definition()();

})(function() {
    'use strict';

    var React = require('react');
    var _ = require('lodash');

    var MylistDOM = require('./mylist/MylistDOM.js');
    var mylistAPI = require('./mylist/MylistAPI.js');

    var SearchContainer = require('./SearchContainer.jsx');

    var _mylistDOM;
    var _mylistAPI;

    var module = function() {

        _mylistDOM = new MylistDOM(document, window);
        _mylistAPI = new mylistAPI(jQuery, my);

        if (!_mylistDOM.isAble()) return false;

        console.log('loading nicovideo searchbar extension...');

        _mylistDOM.renderedObserver(_renderSearchbar);
    };

    var _renderSearchbar = function() {
        if (!_mylistAPI.isAble()) return false;

        // render react DOM
        var rendered = (
                <SearchContainer jQuery={jQuery} my={my} />
        );

        var $searchbarExt = _mylistDOM.genContainer();
        React.render(rendered, $searchbarExt);

        // initSearchOption
        _mylistAPI.updateMethod();

        return true;
    };

    return module;
});
