(function (Definition) {

    // use webpack
    module.exports = Definition;

})(function () {
    'use strict';

    var React = require('react');

    var searchEngine = require('./search-engine');

    var module = React.createClass({

        handleChange: function (e) {
            searchEngine.search();
            this.setState({ text: e.target.value });
        },

        rendar: function () {
            return (
                    <div>
                      <input onChange={this.onChange} placeholder='検索''>
                    </div>
            );
        }
    });

    return module;
});
