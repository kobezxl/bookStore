
import angular from "angular";
import toastr from 'angular-toastr';
import uibootstrap from 'angular-ui-bootstrap';
import uiRouter from 'angular-ui-router';

// import 'bootstrap';
//css
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './css/app.css';

//app js
import appConfig from './config';

import   './js/controllers';
import  './js/directives';
import  './js/filters/filters';
import  './js/services';


// Declare app level module which depends on filters, and services

 let homeModule= angular.module('myApp', [ toastr, uibootstrap, uiRouter,  'directives', 'controller', 'filters', 'service']);
     homeModule.config(appConfig) ;


angular.element(document).ready(function () {
        angular.bootstrap(document, ['myApp']);
});