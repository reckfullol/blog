/** Created by Aquariuslt on 2016-03-19.*/
'use strict';
var angular = require('angular');
var ngMaterial = require('angular-material');
var ngMessages = require('angular-messages');
var ngAnimate = require('angular-animate');
var ngMdIcons = require('angular-material-icons');
//noinspection JSUnusedLocalSymbols
var ngDisqus = require('angular-utils-disqus');


var themeConfig = require('../common/configs/theme');
var locationConfig = require('../common/configs/location');

var homeRoutes = require('./routes/home-routes');

var templates = require('../../../../dist/templates');

var pageService = require('../common/services/page-service');
var articleService = require('../home/services/article-service');

var pageController = require('../common/controllers/page-controller');
var headerController = require('../common/controllers/header-controller');
var navbarController = require('../common/controllers/navbar-controller');
var homeController = require('./controllers/home-controller');
var tagController = require('./controllers/tag-controller');
var postController = require('./controllers/post-controller');
var friendLinkController = require('./controllers/friend-link-controller');

var summaryFilter = require('./filters/summary-filter');
var oddFilter = require('./filters/odd-filter');
var publishFilter = require('./filters/publish-filter');
var innerLinkFilter = require('./filters/inner-link-filter');
var trustAsHtmlFilter = require('./filters/trust-html-filter');


var feature = require('../feature');

module.exports = angular.module('home',[
  'ngMaterial',
  'ngMessages',
  'ngAnimate',
  'ngMdIcons',
  'ui.router',
  'templates',
  'feature',
  'angularUtils.directives.dirDisqus'
])
  .factory('pageService',pageService)
  .factory('articleService',articleService)
  .controller('pageController',pageController)
  .controller('headerController',headerController)
  .controller('navbarController',navbarController)
  .controller('homeController',homeController)
  .controller('tagController',tagController)
  .controller('postController',postController)
  .controller('friendLinkController',friendLinkController)
  .filter('summaryFilter',summaryFilter)
  .filter('oddFilter',oddFilter)
  .filter('publishFilter',publishFilter)
  .filter('innerLinkFilter',innerLinkFilter)
  .filter('trustAsHtmlFilter',trustAsHtmlFilter)
  .config(themeConfig)
  .config(locationConfig)
  .config(homeRoutes)
;