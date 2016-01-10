describe('use API', function() {
    var mylist = require('./mylist.js');

    it("provides DOM to render the extension", function() {
        document.createElement('<div class="outer listOption">renderTo</div>');

        var text = mylist.getRenderTo().text;
        except(text).toEqual('renderTo');
    });

    
});
