(function (Definition) {

    // use webpack
    module.exports = new Definition;

})(function () {
    'use strict';

    var React = require('react');

    var SearchOption = require('./SearchOption.jsx');
    var SearchOptionInput = require('./SearchOptionInput.jsx');
    var searchStrategies = require('./search-strategies.js');

    var module = React.createClass({
        render: function() {
            return (
                    <SearchOption>
                      <SearchOptionInput
                       andor={searchStrategies.andOption}
                       name='AND'
                       ref='and'
                      />
                      <SearchOptionInput
                       andor={searchStrategies.orOption}
                       name='OR'
                       ref='or'
                      />
                      <SearchOptionInput
                       strategy={searchStrategies.titleStrategy}
                       name='タイトル'
                       ref='title'
                      />
                      <SearchOptionInput
                       strategy={searchStrategies.myDescriptionStrategy}
                       name='説明文'
                       ref='description'
                      />
                    </SearchOption>
            );
        }
    });


    return module;
});
