(function(Definition) {

    // use webpack
    module.exports = Definition;

})(function() {
    'use strict';

    var React = require('react');
    var SearchOption = require('./SearchOption.jsx');

    var module = React.createClass({
        propTypes: {
            andor: React.PropTypes.func,
            checked: React.PropTypes.boolean,
            handleChange: React.PropTypes.function,
            name: React.PropTypes.string.isRequired,
            strategy: React.PropTypes.func
        },

        provide: function() {
            return (this.refs.input.checked) ? this.props.strategy : null;
        },

        render: function() {
            var type = (this.props.strategy) ? "checkbox": "radio";
            var checked = (this.props.checked) ? "checked" : "";

            return (
                <label class='ext-search-option-input'>
                    <input
                ref='input'
                onChange={this.props.handleChange}
                type={type}
                checked={checked}
                    />
                    {this.props.name}
                </label>
            );
        }
    });

    return module;

});
