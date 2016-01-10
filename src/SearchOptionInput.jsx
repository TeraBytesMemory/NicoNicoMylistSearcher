(function() {

    // use webpack
    module.exports = new Definition();

})(function() {
    'use strict';

    var React = require('react');
    var SearchOption = require('./SearchOption.jsx');

    var module = React.createClass({
        propTypes: {
            andor: React.PropTypes.func,
            initChecked: React.PropTypes.boolean,
            name: React.PropTypes.string.isRequired,
            strategy: React.PropTypes.func
        },

        getInitialState: function() {
            return { checked: false }
        },

        componentDidMount: function() {
            var checked = !!this.props.initChecked;
            this.setState({ checked: checked });
        },

        handleChange: function (e) {
            this.setState({ checked: e.checked });
            SearchOption.update();
        },

        provide: function() {
            return (this.state.checked) ? this.props.strategy : null;
        },

        render: function() {
            var type = (this.props.strategy) ? "checkbox": "radio";
            var checked = (this.props.initChecked) ? "checked" : "";

            return (
                <label class='ext-search-option-input'>
                    <input
                onChange={this.handleChange}
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
