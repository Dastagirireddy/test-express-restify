(function() {
    'use strict';

    angular
        .module('contactApp')
        .controller('ContactController', [
            'ContactService',
            function(ContactService) {

                var vm = this;

                vm.save = function() {

                    ContactService.save(vm.contact);
                    document.forms[0].reset();
                    vm.contact = undefined;
                };

                vm.edit = function(id) {

                    ContactService.findById(id).then(function() {

                        vm.contact = ContactService.contact;
                    });
                };

                vm.update = function(id, index) {

                    ContactService.findByIdAndUpdate(id, vm.contact, index).then(function() {

                        vm.contact = undefined;
                    });
                };

                vm.delete = function(id, index) {

                    ContactService.findByIdAndRemove(id, index);
                };

                ContactService.find().then(function() {

                    vm.contacts = ContactService.contacts;
                });
            }
        ]);
})();
