(function (definition) {

    // use webpack
    module.exports = definition();

})(function () {
    'use strict';

    var React = require('react');
    var _ = require('lodash');

    var Searchbar = require('./Searchbar.jsx');
    var SearchOptionContainer = require('./SearchOptionContainer.jsx');
    var SearchEngine = require('./search-engine.js');

    require('./css/style.css');

    var module = React.createClass({
        propTypes: {
            searchEngine: React.PropTypes.object.isRequired
        },

        handleClick: function() {
            var $searchbarExt = this.refs.searchbar_ext;

            if ($searchbarExt.classList) {
                $searchbarExt.classList.toggle('active');
            } else {
                var classes = $searchbarExt.className.split(' ');
                var existingIndex = classes.indexOf(className);

                if (existingIndex >= 0)
                    classes.splice(existingIndex, 1);
                else
                    classes.push(className);

                $searchbarExt.className = classes.join(' ');
            }
        },

        componentDidMount: function() {
            setTimeout(function() {
                this.refs.searchbar_ext.style.width = "auto";
            }.bind(this), 0);
        },

        render: function() {
            return(
                    <div id="searchbar-ext" ref="searchbar_ext">
                      <div className="slider" onClick={this.handleClick}>
                        <span>Search Mylist</span>
                      </div>
                      <div className="contents">
                        <SearchOptionContainer searchEngine={this.props.searchEngine} />
                        <Searchbar searchEngine={this.props.searchEngine} />
                      </div>
                    </div>
            );
        }
    });

    return module;
});
