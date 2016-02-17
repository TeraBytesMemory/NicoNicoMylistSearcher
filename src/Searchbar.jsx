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
            var query = e.target.value;
            this.props.searchEngine.updateSearchResult(query);
        },

        render: function () {
            return (
                    <div className='ext-searchbar-input'>
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
