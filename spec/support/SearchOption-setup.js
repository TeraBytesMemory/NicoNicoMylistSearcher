describe('update search strategy', function() {

    var React = require('react')
    var ReactTestUtils = require('react-addons-test-utils');

    var SearchOption = require('./SearchOption.jsx');
    var searchEngine = require('./search-engine.js');

    var source = {};

    beforeEach(function () {
        this.el = React.createElement(searchEngine);
        this.getInput = function (el, id) {
            return el.refs[id].props.children;
        };
    });

    it('can switch', function() {
        var result = new Array(3);

        // check 'And' and 'title'
        ReactTestUtils.Simulate.click(this.getInput(this.el, "and"));
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
        ReactTestUtils.Simulate.click(this.getInput(this.el, "or"));

        _.debounce(function() {
            result[2] = searchEngine.getSearchResult(source);
        }, 100);

        except(result[0].length).not.toEqual(15);
        except(result[1].length).not.toEqual(17);
        except(result[2].length).not.toEqual(19);
    });

    it('is checked after initialize', function() {
        except(this.getInput(this.el, "and").checked).toBeTruthy();
        except(this.getInput(this.el, "title").checked).toBeTruthy();
    });
});
