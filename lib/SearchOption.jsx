(function (Definition) {
    module.exports = new Definition();
}
)(function () {
    'use strict';

    var React = require('React');
    var _ = require('lodash');

    var searchEngine = require('./search-engine.js');
    var SearchOptionInputClass = require('./search-option-input.jsx');
    var optionDOMConfigure = require('./option-dom-configure.js')

    var SearchOption = React.createFactory(SearchOptionInputClass);
    var SearchOptionDOM = _.map(optionDOMConfigure, SearchOption);

    var module = React.createClass({
        update: function() {
            var andorOption = _.reduce(SearchOptionDOM,
                                 function (value, node) {
                                     if (node.props.andor && node.state.checked) {
                                         return node.props.andor;
                                     }
                                 }, null);
            var strategies = _.reduce(SearchOptionDOM,
                                 function (value, node) {
                                     if (node.props.strategy && node.state.checked) {
                                         value.append(node.props.andor);
                                         return value;
                                     }
                                 }, []);

            searchEngine.updateMethod(andorOption, strategies);
        },

        render: function () {
            return (
                    <form>
                    {_.map(SearchOptionDOM, function (x) { return {x} })}
                    </form>
            );
        }
    });

    return module;
});
