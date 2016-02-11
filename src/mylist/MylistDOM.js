(function (Definition) {

    // use webpack
    module.exports = Definition();

})(function() {
    'use strict';

    var _ = require('lodash');

    /**
     * @constant
     */
    var _nicovideoUrl = "http://www.nicovideo.jp/";
    var _tabPrefix = _nicovideoUrl + "my/mylist";
    // 名前変更 $SearchOption とか
    var _classRenderTo = 'listOption';

    var module = function(document, window) {
        this.document = document;
        this.window = window;
    };

    module.prototype.isAble = function () {
        if (this.document.URL.indexOf(_tabPrefix) != 0) {
            console.log('This page is not nicovideo mylist.');
            return false;
        }

        return true;
    };

    module.prototype.renderedObserver = function(callback) {
        var observeDOM = this.document.getElementById('mylist');
        var option = { childList: true, subtree: true };

        var findRenderdTo = _.partial(_findClassByObserved.bind(this),
                                      _classRenderTo,
                                      callback);

        this.observer = new MutationObserver(findRenderdTo);
        this.observer.observe(observeDOM, option);

        return this.observer;
    };


    var _findClassByObserved = function(findClass, callback, mutation) {
        var $searchbarExt = this.getSearchbarExt();

        if(this.document.getElementsByClassName(findClass).length != 0
           && !$searchbarExt
           && callback()) {
            this.observer.disconnect();
        };
    };

    module.prototype.genContainer = function() {
        var $searchbarExt = this.getSearchbarExt();
        if ($searchbarExt) return $searchbarExt;

        var container = this.document.createElement('div');

        var renderTo = this.document.body;
        renderTo.appendChild(container);

        return container;
    };

    module.prototype.getSearchbarExt = function() {
        return this.document
                .getElementById('searchbar-ext');
    };

    return module;

});
