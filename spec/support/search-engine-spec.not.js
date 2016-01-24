describe('test searching method', function() {

    var SearchEngine = require('../../src/search-engine.js');
    var searchStrategies = require('../../src/search-strategies.js');

    beforeEach(function() {
        this.searchEngine = new SearchEngine(document, window);
    });

    it('can update a search strategy', function() {
        this.searchEngine.updateMethod();
        var tmp = this.searchEngine.getMethod();
        this.searchEngine.updateMethod();

        expect(this.searchEngine.getMethod())
            .not.toEqual(tmp);
    });
});
