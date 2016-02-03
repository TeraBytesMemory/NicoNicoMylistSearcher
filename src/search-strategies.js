(function (Definition) {

    // use webpack
    module.exports = Definition();

})(function () {
    'use strict';

    var _ = require('lodash');

    var module = {};

    var _searchMethod = function (andorOption, strategies, keywords, item) {
        for (var i=0; i<strategies.length; i++) {
            var result = andorOption(strategies[i], keywords, item);
            if (result) { return true; }
        }
        return false;
    };

    module.generateSearchMethod = function (andorOption, strategies) {
        return _.curry(_searchMethod)(andorOption, strategies);
    };

    module.andOption = function (strategy, keywords, item) {
        var f = _.curry(strategy)(_, item);
        return _.every(_.map(keywords, f));
    };

    module.orOption = function (strategy, keywords, item) {
        var f = _.curry(strategy)(_, item);
        return _.any(_.map(keywords, f));
    };

    module.titleStrategy = function(keyword, item) {
        return item.item_data.title.indexOf(keyword) != -1;
    };

    module.myDescriptionStrategy = function(keyword, item) {
        return item.description.indexOf(keyword) != -1;
    };

    return module;
});
