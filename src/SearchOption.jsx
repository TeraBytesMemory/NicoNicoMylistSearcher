(function (Definition) {
    module.exports = new Definition();
}
)(function () {
    'use strict';

    var React = require('react');
    var _ = require('lodash');

    var searchEngine = require('./search-engine.js');
    var SearchOptionInputClass = require('./SearchOptionInput.jsx');
    var optionDOMConfigure = require('./option-dom-configure.js')

    var SearchOption = React.createFactory(SearchOptionInputClass);
    var SearchOptionDOM = _.map(optionDOMConfigure, SearchOption);

    var module = React.createClass({
        update: function() {
            var andorOption = _.find(SearchOptionDOM, function (node) {
                return node.props.andor && node.state.checked;
            });

            var strategies = _.chain(SearchOptionDOM)
                    .filter(function(node) {
                        node.props.strategy && node.state.checked
                    }).map(function(node) {
                        return node.props.strategy
                    });

            searchEngine.updateMethod(andorOption, strategies);
        },

        render: function () {
            return (
                    <form class='ext-search-option'>
                    {_.map(SearchOptionDOM, function (x) { return {x} })}
                    </form>
            );
        }
    });

    return module;
});
