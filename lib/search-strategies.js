(function (Definition) {

    // use webpack
    module.exports = new Definition();

})(function () {
    'use strict';

    var _ = require('lodash');

    var module = function () {};

    module.prototype.makeSearchMethod = function (andorOption, strategies) {

        var searchMethod = function (keywords, item) {
            for (var i=0, len=strategies.length; i<len; i++) {
                var result = andorOption(strategies[i], keywords, item);
                if (result) { return true; }
            }
            return false;
        };

        searchMethod = _.curry(searchMethod);
        return searchMethod;
    };

    module.prototype.addOption = function (strategy, keywords, item) {
        return _.every(
            _.map(function (keyword) {
                return strategy(keyword, item);
            }, keywords)
        );
    };

    return module;
});
