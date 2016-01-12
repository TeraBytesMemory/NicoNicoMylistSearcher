describe('update search strategy', function() {

    var React = require('react');
    var ReactTestUtils = require('react-addons-test-utils');

    var SearchOptionContainer = require('../../src/SearchOptionContainer.jsx');
    var searchEngine = require('../../src/search-engine.js');
    var ajax = require('./lib/ajax.js');

    beforeEach(function () {
        this.el = React.render(SearchOptionContainer,
                               document.getElementsByTagName('body'));
        this.getInput = function (el, id) {
            return el.refs[id].refs.input;
        };
    });

    it('can switch', function() {
        var result = new Array(3);

        ajax.request('./lib/dummy-source.js').then(function (source) {

            // check 'And' and 'title'
            ReactTestUtils.Simulate.click(this.getInput(this.el, "or"));
            //ReactTestUtils.Simulate.click(this.getInput(this.el, "title"));

            _.debounce(function() {
                result[0] = searchEngine.getSearchResult(source);
            }, 100);

            // check 'And' and 'description'
            ReactTestUtils.Simulate.click(this.getInput(this.el, "title"));
            ReactTestUtils.Simulate.click(this.getInput(this.el, "description"));

            _.debounce(function() {
                result[1] = searchEngine.getSearchResult(source);
            }, 100);

            // check 'or' and 'title'
            ReactTestUtils.Simulate.click(this.getInput(this.el, "title"));
            ReactTestUtils.Simulate.click(this.getInput(this.el, "description"));
            ReactTestUtils.Simulate.click(this.getInput(this.el, "and"));

            _.debounce(function() {
                result[2] = searchEngine.getSearchResult(source);
            }, 100);

            expect(result[0].length).not.toEqual(7);
            expect(result[1].length).not.toEqual(10);
            expect(result[2].length).not.toEqual(3);
        })
    });

});
