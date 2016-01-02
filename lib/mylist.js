(function(Definition) {
    /**
     * This module provides a class;
     */

    // use webpack
    module.exports = Definition;

})(function() {
    'use strict';

    var _ = require('lodash');
    //var assert = require('assert');
    var request = require('ajax').request;

    var mylist = null;

    // definition for nicovideo api
    var _nicovideo_url = "http://www.nicovideo.jp/";
    var _tab_prefix = _nicovideo_url + "my/mylist/";
    var _api_prefix = _nicovideo_url + "api/";
    var _deflist_api = _api_prefix + "deflist/list";
    var _mylist_api = _api_prefix + "mylist/list";

    var module = function(url) {
        if (url) this.init(url);
    };

    module.prototype.init = function (url) {
        var api_url = this.urlToAPI(url);
        this.loadMyList(api_url);
    };

    module.prototype.urlToAPI = function (url) {
        if (url.indexOf(_tab_prefix) == -1) {
            // exception
            return null;
        }

        var suffix = url.slice(_tab_prefix.length);

        if (!suffix || _.startsWith(suffix, "#/home")) {
            return _deflist_api;
        } else if (_.startsWith(suffix, "#/")) {
            var group_id = suffix.slice("#/".length);
            return _mylist_api + "?group_id=" + group_id;
        } else {
            // exception
            return null;
        }
    };

    module.prototype.loadMyList = function (api_url) {
        request(api_url)
            .then(function(result) {
                mylist = result.mylistitem;
            });
    };

    module.prototype.getMyList = function() {
        return mylist;
    };

    return module;
});
