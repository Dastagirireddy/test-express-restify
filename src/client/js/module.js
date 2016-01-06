(function() {
    'use strict';

    angular
        .module('contactApp', ['ngRest']);

    angular.element(document).ready(function() {

        angular.bootstrap(document, ['contactApp']);
    });
})();
