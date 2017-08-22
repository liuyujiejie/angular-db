(function(angular) {
    // 1.首页模块
    var app = angular.module('home', ['ngRoute', 'myJsonpService'])


    // 2.路由规则
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home_page', { // #/home_page
            // templateUrl:'./home.html'
            templateUrl: 'home/home.html',
            controller: 'homeController'
        }).when('/', { // #/home_page
            // templateUrl:'./home.html'
            templateUrl: 'home/home.html',
            controller: 'homeController'
        })
    }])

    // 3.创建控制器
    app.controller('homeController', ['$scope', 'MyService', function($scope, MyService) {

        $scope.pageSize1 = 5;

        getInTheater($scope.pageSize1);

        function getInTheater(pageSize) {
            MyService.jsonp('http://api.douban.com/v2/movie/in_theaters', { start: 0, count: pageSize }, function(data) {
                $scope.data1 = data // 在异步给数据模型赋值，angular不会知道
                    //console.log($scope.data1);
                    // 根据总条数及每页大小计算出总页数
                    //$scope.totalPage = Math.ceil($scope.data.total / $scope.pageSize)
                $scope.loading = false // 让加载动画消失
                    // 通过angular我们已经改变了数据模型的值了
                $scope.$apply() // 会把$scope的属性值重新渲染到页面。
            });
        }

        $scope.pageSize2 = 5;

        getComingSoon($scope.pageSize2);

        function getComingSoon(pageSize) {
            MyService.jsonp('http://api.douban.com/v2/movie/coming_soon', { start: 0, count: pageSize }, function(data) {
                $scope.data2 = data // 在异步给数据模型赋值，angular不会知道
                    //console.log($scope.data2);
                    // 根据总条数及每页大小计算出总页数
                    //$scope.totalPage = Math.ceil($scope.data.total / $scope.pageSize)
                $scope.loading = false // 让加载动画消失
                    // 通过angular我们已经改变了数据模型的值了
                $scope.$apply() // 会把$scope的属性值重新渲染到页面。
            })
        }


        $scope.getPageSize1 = function() {
            $scope.pageSize1 += 5;
            console.log($scope.pageSize1);
            getInTheater($scope.pageSize1);
        }
        $scope.getPageSize2 = function() {
            $scope.pageSize2 += 5;
            console.log($scope.pageSize2);
            getComingSoon($scope.pageSize2);
        }

    }])
})(angular)