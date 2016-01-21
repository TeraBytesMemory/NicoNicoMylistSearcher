(function (Definition) {

    // use webpack
    module.exports = Definition();

})(function() {
    'use strict';

    var _ = require('lodash');

    var generateSearchMethod = require('./search-strategies.js')
            .generateSearchMethod;
    var MylistAPI = require('./mylist/MylistAPI.js');

    var module = function(document, window) {
        this._mylistAPI = new MylistAPI(document, window);
    };

    module.prototype.updateMethod = function(andorOption, strategies) {
        if (andorOption && strategies) {
            this._searchMethod = generateSearchMethod(andorOption, strategies);
        }
    };

    module.prototype.getMethod = function() {
        return this._searchMethod;
    };

    module.prototype.getSearchResult = function(keywords, source) {
        _.filter(source, _.partial(this._searchMethod, keywords));
    };

    module.prototype.updateSearchResult = function (keywords) {
        var source = this._mylistAPI.getMyList();
        if (source) {
            var result = this.getSearchResult(keywords.split(/ ||　/), source);
            this._mylistAPI.renderMyList(result);
        }
    };

    return module;

});
