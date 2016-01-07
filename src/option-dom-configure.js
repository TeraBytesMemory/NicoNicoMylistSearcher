(function (Definition) {

    // use webpack
    module.exports = new Definition();

})(function () {
    'use strict';

    var searchStrategies = require('./search-strategies.js');

    var module = [
        {
            andor: searchStrategies.andOption,
            name: "AND"
        },
        {
            andor: searchStrategies.orOption,
            name: "OR"
        },
        {
            strategy: searchStrategies.titleStrategy,
            name: "タイトル"
        },
        {
            strategy: searchStrategies.myDescriptionStrategy,
            name: "説明文"
        }
    ];

    return module;
});
