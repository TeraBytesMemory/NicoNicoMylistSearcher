(function (Definition) {
    /**
     * This module provides a class.
     */


    // use webpack
    module.exports = Definition;

})(function() {
    'use strict';

    var React = require('react');
    var _ = require('lodash');

    var reactResultList = require('reactResultList');
    var searchStrategies = require('search-strategies');
    var Mylist = require('mylist');

    var _searchMethod;
    var _mylist;

    var module = function(group_id) {
        _mylist = new Mylist(group_id);
    };

    module.prototype.updateMethod = function(andorOption, strategies) {
        _searchMethod = searchStrategies
            .makeSearchMethod(andorOption, strategies);
    };

    module.prototype.getMethod = function() {
        return _searchMethod;
    };

    module.prototype.search = function () {
        var result = _.filter(_mylist.getMyList(), _searchMethod);
        reactResultList.setState({ mylistitem: result });
    };

});
