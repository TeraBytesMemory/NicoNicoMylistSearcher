(function (Definition) {

    // use webpack
    var Mod = Definition();
    module.exports = new Mod();

})(function() {
    'use strict';

    // definition for nicovideo api
    var _nicovideoUrl = "http://www.nicovideo.jp/";
    var _tabPrefix = _nicovideoUrl + "my/mylist/";
    var _classRenderTo = 'outer listOption';

    var module = function() {};

    module.prototype.isAble = function (url) {
        var rules = url.indexOf(_tabPrefix) !== -1
                && jQuery
                && window.my
                && window.my.currentGroup !== undefined
                && document.getElementsByClassName("articleBody").length;

        return new Boolean(rules);
    };

    module.prototype.getRenderTo = function() {
        return document.getElementsByClassName(_classRenderTo);
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

    return module;

});
