(function (Definition) {

    // use webpack
    module.exports = Definition();

})(function() {
    'use strict';

    var _ = require('lodash');

    var generateSearchMethod = require('./search-strategies.js')
            .generateSearchMethod;
    var MylistAPI = require('./mylist/MylistAPI.js');

    var module = function(jQuery, my) {
        this._mylistAPI = new MylistAPI(jQuery, my);
        this._searchMethod;
    };

    module.prototype.isAble = function() {
        return this._mylistAPI.isAble();
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
        if (_.isEmpty(keywords)) return source;

        keywords = keywords.split(/\s/);
        keywords = _.filter(keywords, _.negate(_.isEmpty));

        source = (_.isArray(source)) ? source : source.mylistitem;
        return _.filter(source, this._searchMethod(keywords));
    };

    module.prototype.updateSearchResult = function (keywords) {
        var source = this._mylistAPI.getMyList();
        if (!source) return false;

        var result = this.getSearchResult(keywords, source);
        this._mylistAPI.renderMyList(result);
    };

    module.prototype.getQueryInput = function() {
        return document.getElementsByClassName('ext-searchbar-input')[0]
            .getElementsByTagName('input')[0]
            .value;
    };

    return module;

});
