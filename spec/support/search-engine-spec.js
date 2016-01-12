describe('test searching method', function() {

    var searchEngine = require('../../src/search-engine.js');
    var searchStrategies = require('../../src/search-strategies.js');

    var source = {};

    var testFunc = function(source, andorOption, strategies) {
        searchEngine.updateMethod(andorOption, strategies);
        searchEngine.getSearchResult(source);
    };

    it('can update a search strategy', function() {
        searchEngine.updateMethod();
        var tmp = searchEngine.getMethod();
        searchEngine.updateMethod();

        expect(searchEngine.getMethod())
            .not.toEqual(tmp);
    });

    it('hits title', function() {
        /*
        var result = testFunc(source,
                              searchStrategies.andOption,
                              searchEngine.titleStrategy);

        expect(result).toContain();
         */
    });
});
