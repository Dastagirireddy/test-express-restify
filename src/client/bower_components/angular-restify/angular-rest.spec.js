/**
 * @unit-test case - angular-rest.js(v2.0.0)
 */
describe('Test suite for angular-rest.spec.js', function(){

	var rest,
		$httpBackend,
		$q;

	describe('Success Callback -- case 1', function(){

		beforeEach(function(){

			module('ngRest');

			inject(function(_$rest_, _$httpBackend_, _$q_){

				$httpBackend = _$httpBackend_;
				$q = _$q_;
				rest = _$rest_;
				rest = rest('/api/url');
			});

			$httpBackend.whenGET('/api/url').respond(200, {
				data: {}
			});

			$httpBackend.whenPOST('/api/url').respond(200, {
				data: {}
			});

			$httpBackend.whenGET('/api/url/1').respond(200, {
				data: {}
			});

			$httpBackend.whenDELETE('/api/url/1').respond(200, {
				data: {}
			});

			$httpBackend.whenPUT('/api/url/1').respond(200, {
				data: {}
			});
		});

		it('Should instantiate $rest', function(){

			expect(rest).toBeDefined();
		});

		it('Call get method', function(){

			var http = rest.get();
			http.then(function(data){
				expect(data).toBeDefined();
			});
			$httpBackend.flush();
		});

		it('Call save method', function(){

			var http = rest.save({});
			http.then(function(data){
				expect(data).toBeDefined();
			});
			$httpBackend.flush();
		});

		it('Call query method', function(){

			var http = rest.query({
				id: '1'
			});
			http.then(function(data){
				expect(data).toBeDefined();
			});
			$httpBackend.flush();
		});

		it('Call remove method', function(){

			var http = rest.remove({
				id: '1'
			});
			http.then(function(data){
				expect(data).toBeDefined();
			});
			$httpBackend.flush();
		});

		it('Call update method', function(){

			var http = rest.update({
				id: '1'
			});
			http.then(function(data){
				expect(data).toBeDefined();
			});
			$httpBackend.flush();
		});
	});

	describe('Success Callback -- case 1', function(){

		beforeEach(function(){

			module('ngRest');

			inject(function(_$rest_, _$httpBackend_, _$q_){

				$httpBackend = _$httpBackend_;
				$q = _$q_;
				rest = _$rest_;
				rest = rest('/api/url');
			});

			$httpBackend.whenGET('/api/url').respond(200, {
				data: undefined
			});

			$httpBackend.whenPOST('/api/url').respond(200, {
				data: undefined
			});

			$httpBackend.whenGET('/api/url/1').respond(200, {
				data: undefined
			});

			$httpBackend.whenDELETE('/api/url/1').respond(200, {
				data: undefined
			});

			$httpBackend.whenPUT('/api/url/1').respond(200, {
				data: undefined
			});
		});

		it('Should instantiate $rest', function(){

			expect(rest).toBeDefined();
		});

		it('Call get method', function(){

			var http = rest.get();
			http.then(function(data){
				console.log(data);
				expect(data).toBeDefined();
			});
			$httpBackend.flush();
		});

		it('Call save method', function(){

			var http = rest.save({});
			http.then(function(data){
				expect(data).toBeDefined();
			});
			$httpBackend.flush();
		});

		it('Call query method', function(){

			var http = rest.query({
				id: '1'
			});
			http.then(function(data){
				expect(data).toBeDefined();
			});
			$httpBackend.flush();
		});

		it('Call remove method', function(){

			var http = rest.remove({
				id: '1'
			});
			http.then(function(data){
				expect(data).toBeDefined();
			});
			$httpBackend.flush();
		});

		it('Call update method', function(){

			var http = rest.update({
				id: '1'
			});
			http.then(function(data){
				expect(data).toBeDefined();
			});
			$httpBackend.flush();
		});
	});

	describe('Failure Callback', function(){

		beforeEach(function(){

			module('ngRest');

			inject(function(_$rest_, _$httpBackend_, _$q_){

				$httpBackend = _$httpBackend_;
				$q = _$q_;
				rest = _$rest_;
				rest = rest('/api/url');
			});

			$httpBackend.whenGET('/api/url').respond(500, {
				error: {
					errorMsg: "Server error"
				}
			});

			$httpBackend.whenPOST('/api/url').respond(500, {
				error: {
					errorMsg: "Server error"
				}
			});

			$httpBackend.whenGET('/api/url/1').respond(500, {
				error: {
					errorMsg: "Server error"
				}
			});

			$httpBackend.whenDELETE('/api/url/1').respond(500, {
				error: {
					errorMsg: "Server error"
				}
			});

			$httpBackend.whenPUT('/api/url/1').respond(500, {
				error: {
					errorMsg: "Server error"
				}
			});
		});

		it('Should instantiate $rest', function(){

			expect(rest).toBeDefined();
		});

		it('Call get method', function(){

			var http = rest.get({
				transformRequest: function(){},
				transformResponse: function(){}
			});
			http.then(function(data){
				expect(data).toBeDefined();
			}, function(error){
				expect(error.status).toBe(500);
			});
			$httpBackend.flush();
		});

		it('Call save method', function(){

			var http = rest.save({}, {
				transformRequest: function(){},
				transformResponse: function(){}
			});
			http.then(function(data){
				expect(data).toBeDefined();
			}, function(error){
				expect(error.status).toBe(500);
			});
			$httpBackend.flush();
		});

		it('Call query method', function(){

			var http = rest.query({
				id: '1'
			}, {
				transformRequest: function(){},
				transformResponse: function(){}
			});
			http.then(function(data){
				expect(data).toBeDefined();
			}, function(error){
				expect(error.status).toBe(500);
			});
			$httpBackend.flush();
		});

		it('Call remove method', function(){

			var http = rest.remove({
				id: '1'
			}, {
				transformRequest: function(){},
				transformResponse: function(){}
			});
			http.then(function(data){
				expect(data).toBeDefined();
			}, function(error){
				expect(error.status).toBe(500);
			});
			$httpBackend.flush();
		});

		it('Call update method', function(){

			var http = rest.update({
				id: '1'
			}, {
				transformRequest: function(){},
				transformResponse: function(){}
			});
			http.then(function(data){
				expect(data).toBeDefined();
			}, function(error){
				expect(error.status).toBe(500);
			});
			$httpBackend.flush();
		});
	});
});