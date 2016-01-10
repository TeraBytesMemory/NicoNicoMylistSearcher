describe('test searching method', function() {

    var searchEngine = require('./search-engine.js');
    var searchStrategies = require('./search-strategies.js');

    var test_func = function(source, andorOption, strategies) {
        searchEngine.updateMethod(andorOption, strategies);
        searchEngine.getSearchResult(source);
    };

    it('can update a search strategy', function() {
        searchEngine.updateMethod();
        var tmp = searchEngine.getMethod();
        searchEngine.updateMethod();

        except(searchEngine.getMethod())
            .not.toEqual(tmp);
    });

    it('hits title', function() {
        var result = test_func({},
                               searchStrategies.andOption,
                               searchEngine.titleStrategy);

        except(result).toContain();
    });
});
