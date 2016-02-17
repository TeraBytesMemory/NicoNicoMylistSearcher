(function (definition) {
    module.exports = definition();
})(function () {
    'use strict';

    var React = require('react');
    var _ = require('lodash');

    var SearchOptionInput = require('./SearchOptionInput.jsx');

    var module = React.createClass({
        propTypes: {
            searchEngine: React.PropTypes.object
        },

        renderChildren: function() {
            return React.Children.map(
                this.props.children,
                function(child) {
                    return React.cloneElement(child, {
                        handleChange: this.update,
                        ref: child.ref
                    });
                }.bind(this));
        },

        update: function() {
            console.log("update search method");

            var children = _.values(this.refs);
            console.log(this);

            var andorOption = _.find(children, function (child) {
                return child.props.andor && child.refs.input.checked;
            }).props.andor;

            var strategies = _.chain(children)
                    .filter(function(child) {
                        return child.props.strategy
                            && child.refs.input.checked;
                    }).map(function(child) {
                        return child.props.strategy;
                    }).value();

            this.props.searchEngine.updateMethod(andorOption, strategies);

            var query = this.props.searchEngine.getQueryInput();
            this.props.searchEngine.updateSearchResult(query);
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
