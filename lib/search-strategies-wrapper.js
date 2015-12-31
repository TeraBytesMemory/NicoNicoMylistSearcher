(function (Definition) {

    // use webpack
    module.exports = new Definition();

})(function () {
    'use strict';

    var _ = require('lodash');

    var module = function () {};

    module.prototype.andWrapper = _.flowRight;

    module.prototype.orWrapper = function () {
        for (var i=0, len=arguments.length; i<len; i++) {
            if (arguments[i]) { return true; }
        }
        return false;
    };

    return module;
});
