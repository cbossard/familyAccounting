angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



  .state('tabsController.myExpenses', {
    url: '/expenses',
    views: {
      'tab1': {
        templateUrl: 'templates/myExpenses.html',
        controller: 'myExpensesCtrl'
      }/*,
      'modal' : {
        templateUrl: 'templates/newExpenses.html',
        controller: 'myExpensesCtrl'
      }*/
    }
  })

  .state('tabsController.accounting', {
    url: '/accounting',
    views: {
      'tab2': {
        templateUrl: 'templates/accounting.html',
        controller: 'accountingCtrl'
      }
    }
  })

  .state('tabsController.myProfile', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/myProfile.html',
        controller: 'myProfileCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/home',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/home/expenses')



});
