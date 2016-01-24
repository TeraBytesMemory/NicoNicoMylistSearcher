// dummy chrome extension

describe('load extension', function() {

    // define to pass for isAble()
    global.jQuery = "dummy";
    global.document.URL = "http://www.nicovideo.jp/my/mylist";
    window.my = {
        currentGroup: "dummy"
    };

    var container;
    var Init = require('../../src/init.jsx');

    // load modules
    beforeEach(function() {
        container = document.createElement('div');
        container.setAttribute('class', 'outer listOption');
    });

    it('has a additional search bar', function() {
        new Init().renderSearchbar();

        expect(container.querySelectorAll('ext-search-option'))
            .toBeTruthy();
        expect(container.querySelectorAll('ext-search-bar'))
            .toBeTruthy();
    });
});
