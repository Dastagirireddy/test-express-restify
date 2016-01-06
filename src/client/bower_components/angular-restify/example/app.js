angular
	.module('app', ['ngRest'])
	.controller('RestAPIController', ['$scope', '$rest', function($scope, $rest){

		var restMethods = $rest('/api/contact');

		$scope.contacts = [];

		// Retrieve all the contacts on page load
		refreshData();

		$scope.add = function() {

			restMethods.save($scope.contact).then(function(data){

				$scope.contacts.push(data);
			}, errorCallback);
			$scope.contact = undefined;
		};

		$scope.edit = function(index) {

			$scope.contact = angular.copy($scope.contacts[index]);
			$scope.editIndex = index;
		};

		$scope.update = function(id){

			restMethods.update({'id': id}, $scope.contact).then(function(data){

				$scope.contacts[$scope.editIndex] = data;
				$scope.editIndex = undefined;
			}, errorCallback);
			$scope.contact = undefined;
		};

		$scope.delete = function(id, index) {

			restMethods.remove({'id': id}).then(function(data){

				$scope.contacts.splice(index, 1);
			}, errorCallback);
		};

		function refreshData() {

			restMethods.get().then(function(data){

				$scope.contacts = data;
			}, errorCallback); 
		}

		function errorCallback(err) {

			console.log(err);
		}


	}]);

angular.element(document).ready(function(){

	angular.bootstrap(document, ['app']);
});