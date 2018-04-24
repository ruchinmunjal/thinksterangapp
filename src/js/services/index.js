import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);

import UserService from './user.service';
servicesModule.service('User',UserService);

import JWTService from './jwt.service';
servicesModule.service('JWT',JWTService);

export default servicesModule;
