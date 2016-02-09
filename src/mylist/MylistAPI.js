(function (Definition) {

    // use webpack
    module.exports = Definition();

})(function() {
    'use strict';

    var _ = require('lodash');

    var _nicovideoUrl = "http://www.nicovideo.jp/";
    var _tabPrefix = _nicovideoUrl + "my/mylist/";
    var _classRenderTo = 'outer listOption';

    var module = function(jQuery, my) {
        this.jQuery = jQuery;
        this.my = my;
    };

    module.prototype.isAble = function () {
        if (!this.jQuery) {
            console.error('cannot find window.jQuery in a mylist tab.');
            return false;
        }
        if (this.my.currentItems === undefined) {
            console.error('cannot find mylist data.');
            return false;
        }

        return true;
    };

    module.prototype.getMyList = function() {
        return this.my.currentItems;
    };

    module.prototype.renderMyList = function(itemlist) {
        var mode = (this.my.currentGroup) ? "mylist" : "deflist";
        var group = this.my.currentGroup;

        this.jQuery.event.trigger("nicoPageChanged",
                                  [mode, group, itemlist]);
    };

    return module;

});
