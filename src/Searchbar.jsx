(function (definition) {

    // use webpack
    module.exports = definition();

})(function () {
    'use strict';

    var React = require('react');

    //var SearchEngine = require('./search-engine.js');

    var module = React.createClass({
        propTypes: {
            searchEngine: React.PropTypes.object
        },

        handleChange: function (e) {
            this.props.searchEngine.updateSearchResult(e.target.vaule);
        },

        render: function () {
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
