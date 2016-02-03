describe('update search strategy', function() {

    var React = require('react');
    var ReactDOM = require('react-dom');
    var ReactTestUtils = require('react-addons-test-utils');

    var SearchOptionContainer = require('../../src/SearchOptionContainer.jsx');
    var SearchEngine = require('../../src/search-engine.js');
    var ajax = require('./lib/ajax.js');

    var orginalTimeout;

    beforeEach(function () {
        this.getInput = function (el, id) {
            return el.refs[id].refs.input;
        };

        this.searchEngine = new SearchEngine(document, window);
        var searchOption = <SearchOptionContainer searchEngine={this.searchEngine} />;
        console.log(searchOption.render);
        console.log(searchOption);

        this.el = ReactTestUtils.renderIntoDocument(searchOption);
        this.el = this.el.refs.container;

        this.result = new Array(3);

        source = require('./lib/dummy-source.js').mylistitem;

        // check 'And' and 'title'
        ReactTestUtils.Simulate.click(this.getInput(this.el, "or"));
        //ReactTestUtils.Simulate.click(this.getInput(this.el, "title"));

        _.debounce(function() {
            this.result[0] = this.searchEngine.getSearchResult("queryA", source);
        }.bind(this), 0)();

        // check 'And' and 'description'
        ReactTestUtils.Simulate.click(this.getInput(this.el, "title"));
        ReactTestUtils.Simulate.click(this.getInput(this.el, "description"));

        _.debounce(function() {
            this.result[1] = this.searchEngine.getSearchResult("queryA",source);
        }.bind(this), 0)();

        // check 'or' and 'title'
        ReactTestUtils.Simulate.click(this.getInput(this.el, "title"));
        ReactTestUtils.Simulate.click(this.getInput(this.el, "description"));
        ReactTestUtils.Simulate.click(this.getInput(this.el, "and"));

        _.debounce(function() {
            this.result[2] = this.searchEngine.getSearchResult("queryA",source);
        }.bind(this), 0)();

        _.debounce(done, 100)();
    });

    it('can switch', function() {
        expect(this.result[0].length).not.toEqual(7);
        expect(this.result[1].length).not.toEqual(10);
        expect(this.result[2].length).not.toEqual(3);
    });

});
