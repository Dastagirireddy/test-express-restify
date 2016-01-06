/*
 Angular-Rest v2.0.0
 Open Source API for Angular JS
*/
(function() {
    'use strict';

    angular
        .module('ngRest', [])
        .service('RestAPIService', ['$http', '$q', function($http, $q){

            var self = this;

            /**
             * @method
             * @param {object} - userConfig
             * @param {object} - defaults
             * @returns {object} - final config object
             */
            self.getConfigObject = function(defaultConfig, userConfig) {

                if (typeof userConfig === 'object') {

                    return angular.extend({}, userConfig, defaultConfig);
                } else {

                    return defaultConfig;
                }
            };

            /**
             * @method
             * @param {object} - config
             * @returns {object} - Promise
             */
            self.send = function(config) {

                var defer = $q.defer();

                $http(config)
                    .then(successCallback, errorCallback);

                function successCallback(response) {

                    if (response.status === 200 && typeof response.data !== undefined) {

                        defer.resolve(response.data);
                    } else {

                        defer.reject(response.data);
                    }
                }

                function errorCallback(error) {

                    defer.reject(error);
                }

                return defer.promise;
            };
        }])
        .factory('$rest', [
            'RestAPIService',
            function(RestAPIService) {

                /**
                 * @constructor
                 * @param {String} - url
                 */
                function HttpService(url) {

                    var self = this;
                    self.url = url;
                }

                /**
                 * @method
                 * @param {object} - data
                 * @param {object} - config (optional)
                 * @returns {object} 
                 */
                HttpService.prototype.save = function(data, config) {

                    var request = RestAPIService.getConfigObject({
                        method: 'POST',
                        url: this.url,
                        data: data
                    }, config);

                    return RestAPIService.send(request);
                };

                /**
                 * @method
                 * @param {object} - config (optional)
                 * @returns {object}
                 */
                HttpService.prototype.get = function(config) {

                    var request = RestAPIService.getConfigObject({
                        method: 'GET',
                        url: this.url
                    }, config);

                    return RestAPIService.send(request);
                };

                /**
                 * @method
                 * @param {object} - data
                 * @param {object} - config (optional)
                 * @returns {object}
                 */
                HttpService.prototype.query = function(data, config) {

                    var request = RestAPIService.getConfigObject({
                        method: 'GET',
                        url: this.url + '/' + data.id
                    }, config);

                    return RestAPIService.send(request);
                };

                /**
                 * @method
                 * @param {object} - data
                 * @param {object} - config (optional)
                 * @returns {object}
                 */
                HttpService.prototype.remove = function(data, config) {

                    var request = RestAPIService.getConfigObject({
                        method: 'DELETE',
                        url: this.url + '/' + data.id
                    }, config);

                    return RestAPIService.send(request);
                };

                /**
                 * @method
                 * @param {object} - data
                 * @param {object} - content
                 * @param {object} - config (optional)
                 * @returns {object}
                 */
                HttpService.prototype.update = function(data, content, config) {

                    var request = RestAPIService.getConfigObject({
                        method: 'PUT',
                        url: this.url + '/' + data.id,
                        data: content
                    }, config);

                    return RestAPIService.send(request);
                };

                /**
                 * @method
                 * @param {string} - url
                 * @returns {object} - Instance of HttpService
                 */
                var api = function(url) {

                    return new HttpService(url);
                };

                /**
                 * @returns {Function}
                 */
                return api;
            }
        ]);
})();