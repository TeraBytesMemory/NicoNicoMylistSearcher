(function (Definition) {

    // use webpack
    module.exports = new Definition();

})(function () {
    'use strict';

    var React = require('react');
    var _ = require('lodash');

    var reactSearchOption = require('./react-search-option');
    var resultFactory = require("./result-factory");
    var init = require('./init');

    var module = function () {};

    var _resource = init.mylist;
    var _searchMethod = function () {};

/*
    var _requestCurrentMylist = function () {
        var url = 'http'://www.nicovideo.jp/api/mylist/listgroup_id='
        var vaule = {
            listgroup_id: ""
        };
    };
*/

    module.prototype.init = function () {
        _searchMethod = function (item) {
            return true;
        };
    };

    module.prototype.updateMethod = function () {
        var makeSearchMethod;
        var andorOption = arguments[0];
        var stragegies = _.drop(arguments);

        _searchMethod = makeSearchMethod(andorOption, stragegies);
    };

    module.prototype.search = function () {
        var hit = _.filter(_searchMethod, _resource);
        resultFactory.update(hit);
    };

    return module;
});
