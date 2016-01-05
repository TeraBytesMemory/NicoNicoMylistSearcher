(function(Definition) {
    /**
     * This module provides a instance;
     */

    // use webpack
    module.exports = new Definition();

})(function() {
    'use strict';

    var request = require('ajax').request;

    // var mylist = null;

    // definition for nicovideo api
    var _nicovideoUrl = "http://www.nicovideo.jp/";
    var _tabPrefix = _nicovideoUrl + "my/mylist/";
    var _apiPrefix = _nicovideoUrl + "api/";
    var _deflistAPI = _apiPrefix + "deflist/list";
    var _mylistAPI = _apiPrefix + "mylist/list";

    var module = function() {};

    module.prototype.isAble = function (url) {
        return new Boolean(
            url.indexOf(_tabPrefix) !== -1
                && jQuery
                && window.my
                && window.my.currentGroup !== undefined
                && document.getElementsByClassName("articleBody").length
        );
    };

    module.prototype.getMyList = function() {
        return window.my.currentItems;
    };

    module.prototype.renderMyList = function(itemlist) {
        var mode = (window.my.currentGroup) ? "mylist" : "deflist";
        var group = window.my.currentGroup;

        jQuery.event.trigger("nicoPageChanged",
                             [mode, group, itemlist]);
    };

    module.prototype.loadAPI = function () {
        if (window.my.currentGroup) {
            return _mylistAPI + "?group_id=" + window.my.currentGroup;
        } else {
            return _deflistAPI;
        }
    };

    module.prototype.requestMyList = function (apiUrl) {
        request(apiUrl)
            .then(function(result) {
                mylist = result.mylistitem;
            });
    };

    return module;

});
