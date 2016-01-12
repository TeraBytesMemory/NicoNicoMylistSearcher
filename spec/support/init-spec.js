// dummy chrome extension

describe('load extension', function() {

    // define to pass for isAble()
    global.jQuery = "dummy";
    // var window = {}
    window.my = {
        currentGroup: "dummy"
    };

    // chrome extension
    var getCurrent = function(callback) {
        var url = "http://www.nicovideo.jp/my/mylist/#/41876902"
        callback({ url: url });
    };
    global.chrome = {
        tabs: {
            getCurrent: getCurrent
        }
    };

    var container;

    // load modules
    beforeEach(function() {
        container = document.createElement('div');
        container.setAttribute('class', 'outer listOption');

        require('../../src/init.jsx');
    });

    it('has a additional search bar', function() {
        expect(container.querySelectorAll('ext-search-option'))
            .toBeTruthy();
        expect(container.querySelectorAll('ext-search-bar'))
            .toBeTruthy();
    });
});
