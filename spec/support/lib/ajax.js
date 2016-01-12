(function (Definition) {

    // use webpack
    module.exports = new Definition();


})(function () {

    var module = function () {};

    module.prototype.request = function(url) {
        return new Promise(function(resolve, reject) {

            var request = new XMLHttpRequest();
            request.open('GET', url, true);

            request.onload = function() {
                if (request.status >= 200 && request.status < 400) {
                    // Success!
                    this.result = JSON.parse(request.responseText);
                    resolve(this.result);
                } else {
                    reject();
                }
            };

            request.onerror = function() {
                reject();
            };

            request.send();
        });
    };

});

