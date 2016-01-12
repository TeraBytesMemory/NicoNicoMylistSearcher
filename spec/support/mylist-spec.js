describe('use API', function() {
    var mylist = require('../../src/mylist.js');
    console.log(mylist);

    it("provides DOM to render the extension", function() {
        container = document.createElement('div');
        container.setAttribute('class', 'outer listOption');
        container.textContent = 'renderTo';
        document.body.appendChild(container);

        var text = mylist.getRenderTo().textContent;
        expect(text).toEqual("renderTo");
    });
});
