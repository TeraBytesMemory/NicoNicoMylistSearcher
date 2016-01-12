(function (Definition) {

    // use webpack
    var Mod = Definition();
    module.exports = new Mod();

})(function() {
    'use strict';

    var _ = require('lodash');

    var generateSearchMethod = require('./search-strategies.js')
            .generateSearchMethod;
    var mylist = require('./mylist.js');

    var _searchMethod;

    var module = function() {};

    module.prototype.updateMethod = function(andorOption, strategies) {
        _searchMethod = generateSearchMethod(andorOption, strategies);
    };

    module.prototype.getMethod = function() {
        return _searchMethod;
    };

    module.prototype.getSearchResult = function(keywords, source) {
        _.filter(source, _.partial(_searchMethod, keywords));
    };

    module.prototype.updateSearchResult = function () {
        var source = mylist.getMyList();
        if (source) {
            var keywords = ""
            var result = this.getSearchResult(keywords, source);
            mylist.renderMyList(result);
        }
    };

    return module;

});
