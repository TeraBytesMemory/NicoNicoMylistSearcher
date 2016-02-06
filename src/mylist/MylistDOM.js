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

        var findRenderdTo = _.curry(_findClassByObserved.bind(this));
        findRenderdTo = findRenderdTo(_classRenderTo, callback);

        this.observer = new MutationObserver(findRenderdTo);
        this.observer.observe(observeDOM, option);

        return this.observer;
    };


    var _findClassByObserved = function(findClass, callback, mutation) {
        var $searchbarExt = this.getSearchbarExt();

        if(this.document.getElementsByClassName(findClass).length != 0
           && $searchbarExt.length == 0
           && callback()) {
            this.observer.disconnect();
        };
    };

    module.prototype.genContainer = function() {
        var $searchbarExt = this.getSearchbarExt();
        if ($searchbarExt.length != 0) return $searchbarExt[0];

        var container = this.document.createElement('div');
        container.className = 'searchbar-extension';

        var renderTo = this.document.getElementsByClassName(_classRenderTo)[0];
        renderTo.appendChild(container);

        return container;
    };

    module.prototype.getSearchbarExt = function() {
        return this.document
                .getElementsByClassName('searchbar-extension');
    };

    return module;

});
