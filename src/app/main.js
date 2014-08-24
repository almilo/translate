angular.module('app', ['ngRoute', 'gettext']);

require('./translations.js');

angular.module('app')
    .controller('languageController', function ($scope, gettextCatalog) {
        $scope.$watch(function () {
            return gettextCatalog.currentLanguage;
        }, function (language) {
            $scope.language = language;
        });

        $scope.setLanguage = function (locale) {
            gettextCatalog.setCurrentLanguage(locale);
        };
    })
    .controller('dynamicMessageController', function ($scope, gettextCatalog) {
        $scope.$watch(function () {
            return gettextCatalog.getString('dynamicMessage');
        }, function (message) {
            $scope.dynamicMessage = message;
        });
    })
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                template: require('./views/home.tpl.html')
            })
            .when('/page1', {
                template: require('./views/page1.tpl.html')
            })
            .when('/page2', {
                template: require('./views/page2.tpl.html')
            })
            .otherwise({
                redirectTo: '/home'
            });
    })
    .run(function (gettextCatalog) {
        gettextCatalog.setCurrentLanguage('en');

        gettextCatalog.setStrings('en', {'dynamicMessage': 'Dynamic Message'});
        gettextCatalog.setStrings('fr', {'dynamicMessage': 'Message Dynamic'});
        gettextCatalog.setStrings('it', {'dynamicMessage': 'Messaggio Dinamico'});
        gettextCatalog.setStrings('de', {'dynamicMessage': 'Dynamische Mitteilung'});
    });
