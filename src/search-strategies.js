(function (Definition) {

    // use webpack
    module.exports = Definition();

})(function () {
    'use strict';

    var _ = require('lodash');

    var module = {};

    var _searchMethod = function(andorOption, strategies, keywords, item) {
        return andorOption(strategies, keywords, item);
    }

    module.generateSearchMethod = function (andorOption, strategies) {
        return _.curry(_searchMethod)(andorOption, strategies);
    };

    module.andOption = function (strategies, keywords, item) {
        var fs = _.map(strategies,
                       function(strategy) {
                           return _.curry(strategy)(_, item);
                       });

       return _.every(_.map(fs, function(f) {
           return _.every(_.map(keywords, f));
       }));
    };

    module.orOption = function (strategies, keywords, item) {
        var fs = _.map(strategies,
                       function(strategy) {
                           return _.curry(strategy)(_, item);
                       });

       return _.any(_.map(fs, function(f) {
           return _.any(_.map(keywords, f));
       }));
    };

    module.titleStrategy = function(keyword, item) {
        return item.item_data.title.indexOf(keyword) != -1;
    };

    module.myDescriptionStrategy = function(keyword, item) {
        return item.description.indexOf(keyword) != -1;
    };

    return module;
});
