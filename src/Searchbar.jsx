(function (Definition) {

    // use webpack
    module.exports = Definition;

})(function () {
    'use strict';

    var React = require('react');

    var searchEngine = require('./search-engine.js');

    var module = React.createClass({

        handleChange: function (e) {
            searchEngine.updateSearchResult();
            this.setState({ text: e.target.value });
        },

        rendar: function () {
            return (
                    <div class='ext-search-bar'>
                    <input
                onChange={this.handleChange}
                placeholder='検索ワード'
                    />
                    </div>
            );
        }
    });

    return module;
});
