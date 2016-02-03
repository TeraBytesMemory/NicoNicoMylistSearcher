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

        var findRenderdTo = _.curry(_findClassByObserved);
        findRenderdTo = findRenderdTo(_classRenderTo, callback);

        var observer = new MutationObserver(findRenderdTo);
        observer.observe(observeDOM, option);

        return observer;
    };

    var _findClassByObserved = function(findClass, callback, mutation) {
        _.chain(mutation)
            .map(function(m) {
                return m.addedNodes;
            })
            .forEach(
                function(nodes) {
                    for (var i=0;  i<nodes.length; i++) {
                        nodes[i].classList
                            && nodes[i].classList.contains(findClass)
                            && callback();

                    }
                })
            .commit();
    };

    module.prototype.getRenderTo = function() {
        return this.document.getElementById(_classRenderTo);
    };

    return module;

});






