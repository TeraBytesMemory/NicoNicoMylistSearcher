(function (definition) {

    // use webpack
    module.exports = definition();

})(function () {
    'use strict';

    var React = require('react');
    var _ = require('lodash');

    var Searchbar = require('./Searchbar.jsx');
    var SearchEngine = require('./search-engine.js');

    require('./css/style.css');

    var module = React.createClass({
        propTypes: {
            jQuery : React.PropTypes.object.isRequired,
            my : React.PropTypes.object.isRequired
        },

        handleClick: function() {
            var $searchbarExt = this.refs.searcbar_ext;

            if (this.classList) {
                this.classList.toggle('active');
            } else {
                var classes = this.className.split(' ');
                var existingIndex = classes.indexOf(className);

                if (existingIndex >= 0)
                    classes.splice(existingIndex, 1);
                else
                    classes.push(className);

                this.className = classes.join(' ');
            }
        },

        render: function() {
            var searchEngine = new SearchEngine(this.props.jQuery,
                                                this.props.my);

            return(
                    <div id="searchbar-ext" ref="searchbar_ext">
                      <div class="slider" onClick={this.handleClick}>
                        <span>Search Mylist</span>
                      </div>
                      <div class="contents">
                        <SearchOptionContainer searchEngine={searchEngine} />
                        <Searchbar searchEngine={searchEngine} />
                      </div>
                    </div>
            );
        }
    });

    return module;
});
