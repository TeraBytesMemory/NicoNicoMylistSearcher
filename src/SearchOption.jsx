(function (Definition) {
    module.exports = Definition;
}
)(function () {
    'use strict';

    var React = require('react');
    var _ = require('lodash');

    //var searchEngine = require('./search-engine.js');
    var SearchOptionInput = require('./SearchOptionInput.jsx');

    var module = React.createClass({
        propTypes: {
            searchEngine: React.PropTypes.object
        },

        renderChildren: function() {
            console.log("load inputs");
            return React.children.map(
                this.props.children,
                function(child) {
                    if (child.type == SearchOptionInput.type) {
                        console.log("find search option input");
                        return React.cloneElement(child, {
                            handleChange: this.update
                        });
                    } else {
                        return child;
                    }
                }.bind(this));
        },

        update: function() {
            var children = _.values(this.refs);

            var andorOption = _.find(children, function (child) {
                return child.props.andor && child.refs.input.checked;
            });

            var strategies = _.chain(nodes)
                    .filter(function(child) {
                        return child.props.strategy
                            && child.refs.input.checked;
                    }).map(function(child) {
                        return child.props.strategy;
                    });

            this.props.searchEngine.updateMethod(andorOption, strategies);
        },

        render: function () {
            console.log("load inputs");
            return (
                    <form class='ext-search-option'>
                    {this.renderChildren()}
                    </form>
            );
        }
    });

    return module;
});
