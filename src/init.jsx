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
    var SearchEngine = require('./search-engine.js');

    var SearchContainer = require('./SearchContainer.jsx');

    var _mylistDOM;
    var _searchEngine;

    var module = function() {

        _mylistDOM = new MylistDOM(document, window);
        _searchEngine = new SearchEngine(jQuery, my);

        if (!_mylistDOM.isAble()) return false;

        console.log('loading nicovideo searchbar extension...');

        _mylistDOM.renderedObserver(_renderSearchbar);
    };

    var _renderSearchbar = function() {
        if (!_searchEngine.isAble()) return false;

        // render react DOM
        var rendered = (
                <SearchContainer searchEngine={_searchEngine} />
        );

        var $searchbarExt = _mylistDOM.genContainer();
        React.render(rendered, $searchbarExt);

        return true;
    };

    return module;
});
