(function (Definition) {

    // use webpack
    module.exports = new Definition();

})(function () {
    'use strict';

    var searchStrategies = require('./search-strategies.js');

    var module = [
        {
            ref: "and",
            andor: searchStrategies.andOption,
            name: "AND"
        },
        {
            ref: "or",
            andor: searchStrategies.orOption,
            name: "OR"
        },
        {
            ref: "title",
            strategy: searchStrategies.titleStrategy,
            name: "タイトル"
        },
        {
            ref: "description",
            strategy: searchStrategies.myDescriptionStrategy,
            name: "説明文"
        }
    ];

    return module;
});
