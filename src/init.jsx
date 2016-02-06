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
    var Searchbar = require('./Searchbar.jsx');
    var SearchOptionContainer = require('./SearchOptionContainer.jsx');
    var SearchEngine = require('./search-engine.js');

    var _mylist;
    var _searchEngine;

    var module = function() {

        _mylist = new MylistDOM(document, window);
        _searchEngine = new SearchEngine(jQuery, my);

        if (!_mylist.isAble() ||
            !_searchEngine.isAble()) return false;

        console.log('loading nicovideo searchbar extension...');

        _mylist.renderedObserver(_renderSearchbar);
    };

    var _renderSearchbar = function() {

        // render react DOM
        var rendered = (
                <div>
                <SearchOptionContainer searchEngine={_searchEngine} />
                <Searchbar searchEngine={_searchEngine} />
                </div>
        );

        var $searchbarExt = _mylist.genContainer();
        React.render(rendered, $searchbarExt);

        // initSearchOption
        _searchEngine.updateMethod();

        return true;
    };

    return module;
});
