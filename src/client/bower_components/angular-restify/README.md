# Angular-Rest demo application

***

## Purpose

The idea is to demonstrate how to write a typical, non-trivial CRUD application using AngularJS with angular-rest.js API, NodeJs and MongoDb**. Most of Single Page Applications involve CRUD Operations. If you are building CRUD operations using Angular JS, then you can leverage the power of the $rest service. Built on the top of the $http service, Angular’s $rest is a factory that lets you interact with Restful backbend’s easily. So, let’s explore $rest and use it to implement CRUD operations in Angular.

## How to use angular-rest

* Add ngRest to main module

  ```
  angular.module('app', ['ngRest'])
  ```

* `$rest` factory will be available as a dependency injectable for all the angular services and controllers and directives as well.
  
  ```
  angular.module('app').controller('RestAPIController', ['$scope', '$rest', function($scope, $rest){

  }])
  ```

* Register REST API url by passing an argument to $rest method and return an object.
  
  ```
  var restMethods = $rest('/api/contact')
  ```

* Returned object contains following methods
  
  ```
  save - Submit form data 
  get - retrieve all records from database
  query - retrieve particular record based on ID
  remove - remove particular record based on ID
  update - update particular record based on ID
  ```


## Stack

* Persistence store: [MongoDB](http://www.mongodb.org/)
* Backend: [Node.js](http://nodejs.org/)
* Awesome [AngularJS](http://www.angularjs.org/) on the client
* CSS based on [Twitter's bootstrap](http://getbootstrap.com/)

## Installation

### Platform & tools

You need to install Node.js and then the development tools. Node.js comes with a package manager called [npm](http://npmjs.org) for installing NodeJS applications and libraries.
* [Install node.js](http://nodejs.org/download/) (requires node.js version >= 0.8.4)

### Get the Code

Either clone this repository or fork it on GitHub and clone your fork:

```
git clone https://github.com/Dastagirireddy/angular-rest.git
cd angular-rest/example
```

### App Server

Our backend application server is a NodeJS application that relies upon some 3rd Party npm packages.  You need to install these:

* Install local dependencies (from the project root folder):

    ```
    npm install
    ```

  (This will install the dependencies declared in the package.json file)

  ## Running
  ### Start the Server
  * Run the application server 

      ```
      node server.js
      ```
  * Browse to the application at [http://localhost:5000]

