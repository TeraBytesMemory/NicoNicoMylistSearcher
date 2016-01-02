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

    module.prototype.makeSearchMethod = function (andorOption, strategies) {
        return _.partialRight(_searchMethod, andorOption, strategies);
    };

    module.prototype.andOption = function (strategy, keywords, item) {
        var f = _.partialRight(strategy, item);
        return _.every(_.map(f, keywords));
    };

    module.prototype.orOption = function (strategy, keywords, item) {
        var f = _.partialRight(strategy, item);
        return _.any(_.map(f, keywords));
    };

    module.prototype.titleStrategy = function(keyword, item) {
        return item.item_data.indexOf(keyword) != -1;
    };

    module.prototype.tagsStrategy = function(keyword, item) {
    };

    module.prototype.videoDescriptionStrategy = function(keyword, item) {
        return item.item_data.last_res_body.indexOf(keyword) != -1;
    };

    module.prototype.myDescriptionStrategy = function(keyword, item) {
        return item.description.indexOf(keyword) != -1;
    };

    return module;
});
