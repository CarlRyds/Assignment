angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('tabsController.currency', {
      url: '/page2',
      views: {
        'tab1': {
          templateUrl: 'templates/currency.html',
          controller: 'currencyCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.converter', {
      url: '/page3',
      views: {
        'tab2': {
          templateUrl: 'templates/converter.html',
          controller: 'converterCtrl'
        }
      }
    })
  
    .state('tabsController.converter-gbp', {
      url: '/pagegbp',
      views: {
        'tab2': {
          templateUrl: 'templates/converter-gbp.html',
          controller: 'converterCtrl'
        }
      }
    })
  
    .state('tabsController.converter-usd', {
      url: '/pageusd',
      views: {
        'tab2': {
          templateUrl: 'templates/converter-usd.html',
          controller: 'converterCtrl'
        }
      }
    })
  
    .state('tabsController.converter-euro', {
      url: '/pageeuro',
      views: {
        'tab2': {
          templateUrl: 'templates/converter-euro.html',
          controller: 'converterCtrl'
        }
      }
    })
  
      .state('tabsController.converter-aud', {
      url: '/pageaud',
      views: {
        'tab2': {
          templateUrl: 'templates/converter-aud.html',
          controller: 'converterCtrl'
        }
      }
    })
  
    .state('tabsController.converter-cad', {
      url: '/pagecad',
      views: {
        'tab2': {
          templateUrl: 'templates/converter-cad.html',
          controller: 'converterCtrl'
        }
      }
    })
  
      .state('tabsController.converter-yen', {
      url: '/pageyen',
      views: {
        'tab2': {
          templateUrl: 'templates/converter-yen.html',
          controller: 'converterCtrl'
        }
      }
    })
  

        
      
    
      
        
    .state('tabsController.settings', {
      url: '/page4',
      views: {
        'tab3': {
          templateUrl: 'templates/settings.html',
          controller: 'settingsCtrl'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/page1',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1/page2');

});