(function (Definition) {
    module.exports = Definition;
}
)(function () {
    'use strict';

    var React = require('react');
    var cloneWithProps = require('react-addons-clone-with-props');
    var _ = require('lodash');

    //var searchEngine = require('./search-engine.js');
    var SearchOptionInput = require('./SearchOptionInput.jsx');

    var module = React.createClass({

        renderChildren: function() {
            return React.children.map(
                this.props.children,
                function(child, idx) {
                    if (child.type == SearchOptionInput.type) {
                        return cloneWithProps(child, {
                            handleChange: this.update.bind(this),
                            ref: idx
                        })
                    } else {
                        return child
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
            return (
                    <form class='ext-search-option'>
                    {this.renderChildren()}
                    </form>
            );
        }
    });

    return module;
});
