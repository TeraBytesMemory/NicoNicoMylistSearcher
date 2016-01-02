(function(Definition) {
    /**
     * This module provides a class;
     */

    // use webpack
    module.exports = Definition;

})(function() {
    'use strict';

    var _ = require('lodash');
    var request = require('ajax').request;

    var mylist = null;

    var module = function(group_id) {
        this.loadMyList(group_id);
    };

    module.prototype.loadMyList = function (group_id) {
        var api_url = "http://www.nicovideo.jp/api/mylist/list";
        api_url += "?group_id=" + group_id;

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
