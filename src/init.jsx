(function (Definition) {
    /**
     * This is main script.
     */

    // use webpack
    module.exports = Definition();

})(function() {
    'use strict';

    var React = require('react');

    var MylistDOM = require('./mylist/MylistDOM.js');
    var Searchbar = require('./Searchbar.jsx');
    var SearchOptionContainer = require('./SearchOptionContainer.jsx');
    var SearchEngine = require('./search-engine.js');

    var module = function() {

        this._mylist = genMylist();
        if (!this._mylist ||
            !this._mylist.isAble()) return false;

        console.log('loading nicovideo searchbar extension...');

        this._mylist.renderedObserver(this.renderSearchbar);
    };

    module.prototype.renderSearchbar = function() {
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

        var container = this._mylist.getRenderTo();
        container.appendChild(rendered);

        // initSearchOption
        _searchEngine.updateMethod();
    };

    var genMylist = function() {
        return (document && window) ? new MylistDOM(document, window) : false;
    };

    return module;
});
