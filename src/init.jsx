(function (definition) {
    /**
     * This is main script.
     */

    // use webpack
    definition()();

})(function() {
    'use strict';

    var React = require('react');

    var MylistDOM = require('./mylist/MylistDOM.js');
    var Searchbar = require('./Searchbar.jsx');
    var SearchOptionContainer = require('./SearchOptionContainer.jsx');
    var SearchEngine = require('./search-engine.js');

    var _mylist;

    var module = function() {

        _mylist = _genMylist();
        if (!_mylist ||
            !_mylist.isAble()) return false;

        console.log('loading nicovideo searchbar extension...');

        _mylist.renderedObserver(_renderSearchbar);
    };

    var _renderSearchbar = function() {
        if (!document.getElementsByClassName('searchbar-extension'))
            return false;

        console.log('loading searchbar...');

        var _searchEngine = new SearchEngine(document, window);

        // render react DOM
        var rendered = (
                <div class="searchbar-extension">
                <SearchOptionContainer searchEngine={_searchEngine} />
                <Searchbar searchEngine={_searchEngine} />
                </div>
        );

        var container = _mylist.getRenderTo();
        container.appendChild(rendered);

        // initSearchOption
        _searchEngine.updateMethod();
    };

    var _genMylist = function() {
        return (document && window) ? new MylistDOM(document, window) : false;
    };

    return module;
});
