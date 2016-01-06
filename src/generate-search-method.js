(function (Definition) {

    // use webpack
    module.exports = new Definition();

})(function () {
    'use strict';

    var _ = require('lodash');

    var module = function () {};

    var _searchMethod = function (andorOption, strategies, keywords, item) {
        for (var i=0; i<strategies.length; i++) {
            var result = andorOption(strategies[i], keywords, item);
            if (result) { return true; }
        }
        return false;
    };

    module.prototype.generateSearchMethod = function (andorOption, strategies) {
        return _.partialRight(_searchMethod, andorOption, strategies);
    };

    return module;
});
