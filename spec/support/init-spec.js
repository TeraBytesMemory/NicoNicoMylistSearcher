describe('load extension', function() {

    // define to pass for isAble()
    var jQuery = "dummy";
    // var window = {}
    window.my = {
        currentGroup: "dummy"
    };

    // chrome extension
    var tabs = function(callback) {
        var url = "http://www.nicovideo.jp/my/mylist/#/41876902"
        callback({ url: url });
    };
    var chrome = {
        tabs: tabs
    };

    var container;

    // load modules
    beforeEach(function() {
        container = document.createElement(
            '<div class="outer listOption"></div>'
        );

        require('init.jsx');
    });

    var optionDOMConfigure = require('option-dom-configure.js');

    it('has a additional search bar', function() {
        expect(container.querySelectorAll('ext-search-option'))
            .toBeTruthy();
        expect(container.querySelectorAll('ext-search-bar'))
            .toBeTruthy();
        expect(container
               .querySelectorAll('ext-search-option-input')
               .length)
            .toEqual(optionDOMConfigure.length);
    });
});
