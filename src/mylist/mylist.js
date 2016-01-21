(function (Definition) {

    // use webpack
    var Mod = Definition();
    module.exports = new Mod();

})(function() {
    'use strict';

    var _ = require('lodash');

    var _nicovideoUrl = "http://www.nicovideo.jp/";
    var _tabPrefix = _nicovideoUrl + "my/mylist/";
    var _classRenderTo = 'outer listOption';

    var module = function(window, document) {
        this.document = document;
        this.window = window;
    };

    module.prototype.isAble = function (url) {
        if (!url.indexOf(_tabPrefix)) {
            console.log('This page is not nicovideo mylist.');
            return false;
        }
        if (!window.jQuery) {
            console.error('cannot find window.jQuery in a mylist tab.');
            return false;
        }
        if (this.my.currentGroup === undefined) {
            console.error('cannot find mylist data.');
            return false;
        }

        return true;
    };

    module.prototype.getRenderTo = function() {
        return this.document.getElementsByClassName(_classRenderTo)[0];
    };

    module.prototype.getMyList = function() {
        return this.window.my.currentItems;
    };

    module.prototype.renderMyList = function(itemlist) {
        var mode = (this.window.my.currentGroup) ? "mylist" : "deflist";
        var group = this.window.my.currentGroup;

        window.jQuery.event.trigger("nicoPageChanged",
                             [mode, group, itemlist]);
    };

    return module;

});
