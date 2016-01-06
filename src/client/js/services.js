(function() {
    'use strict';

    angular
        .module('contactApp')
        .service('ContactService', [
            '$rest',
            function($rest) {

                var httpService = $rest('/api/contacts');

                function errorHandler(err) {

                    console.log(err);
                }

                var self = this;
                self.contacts = [];

                self.find = function() {

                    return httpService.get().then(function(result) {

                        self.contacts = result;
                    }, errorHandler);
                };

                self.findById = function(id) {

                    return httpService.query({
                        'id': id
                    }).then(function(result) {

                        self.contact = result;
                    }, errorHandler);
                };

                self.findByIdAndRemove = function(id, index) {

                    return httpService.remove({
                        'id': id
                    }).then(function(result) {

                        self.contacts.splice(index, 1);
                    }, errorHandler);
                };

                self.findByIdAndUpdate = function(id, contact, index) {

                    return httpService.update({
                        'id': id
                    }, contact).then(function(result) {

                        console.log(result);
                        self.contacts[index] = result;
                    }, errorHandler);
                };

                self.save = function(contact) {

                    return httpService.save(contact).then(function(result) {

                        self.contacts.push(result);
                    }, errorHandler);
                };
            }
        ]);
})();
