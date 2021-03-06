(function (Definition) {

    // use webpack
    var Mod = Definition();
    module.exports = new Mod();

})(function () {
    'use strict';

    var _ = require('lodash');

    var module = function () {};

    module.prototype.andOption = function (strategy, keywords, item) {
        var f = _.partialRight(strategy, item);
        return _.every(_.map(f, keywords));
    };

    module.prototype.orOption = function (strategy, keywords, item) {
        var f = _.partialRight(strategy, item);
        return _.any(_.map(f, keywords));
    };

    return module;
});
