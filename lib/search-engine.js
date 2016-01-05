(function (Definition) {
    /**
     * This module provides a instance.
     */


    // use webpack
    module.exports = new Definition();

})(function() {
    'use strict';

    var _ = require('lodash');

    var ResultList = require('./ResultList.jsx');
    var generateSearchMethod = require('./generate-search-method.js')
            .generateSearchMethod;
    var mylist = require('./mylist.js');

    var _searchMethod;

    var module = function() {
    };

    module.prototype.updateMethod = function(andorOption, strategies) {
        _searchMethod = generateSearchMethod(andorOption, strategies);
    };

    module.prototype.getMethod = function() {
        return _searchMethod;
    };

    module.prototype.updateSearchResult = function () {
        var source = mylist.getMyList();
        if (source) {
            var result = _.filter(source, _searchMethod);
            ResultList.setState({ searchResult: result });
        }
    };

});
