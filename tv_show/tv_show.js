(function(angular) {

    var app = angular.module("tvShow", ["ngRoute", "myJsonpService"]);

    //配置路由规则
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/tv_show', { // #/home_page
            // templateUrl:'./home.html'
            templateUrl: 'tv_show/tv_show.html',
            controller: 'tvShowController'
        })
    }])

    // 创建控制器
    app.controller("tvShowController", ["$scope", "$http", "MyService", function($scope, $http, MyService) {

        $http.get('./tv_show/data.json')
            .then(function(res) {
                $scope.data = res.data;
                //console.log($scope.data);
            })
    }])


})(angular)