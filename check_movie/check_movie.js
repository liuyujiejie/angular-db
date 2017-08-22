(function(angular) {
    // 1.首页模块
    var app = angular.module('checkMovie', ['ngRoute', 'myJsonpService'])


    // 2.路由规则
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/check_movie/:id?', { // #/home_page
            // templateUrl:'./home.html'
            templateUrl: 'check_movie/check_movie.html',
            controller: 'checkMovieController'
        })
    }])

    // 3.创建控制器
    app.controller('checkMovieController', ['$scope', '$http', '$routeParams', 'MyService', function($scope, $http, $routeParams, MyService) {


        //var str = decodeURI('$routeParams.id');

        var arg = './check_movie/' + $routeParams.id + '_data.json';

        //console.log(arg);

        getInTheater(arg);


        function getInTheater(arg) {

            $http.get('./check_movie/tags.json')
                .then(function(res) {

                    $scope.data = res.data;
                    //console.log($scope.data);
                })

            // MyService.jsonp('https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&sort=recommend&page_limit=20&page_start=0', function(data) {
            //     defered.resolve(data);
            //     $scope.data2 = data; // 在异步给数据模型赋值，angular不会知道
            //     console.log($scope.data2);

            //     // 根据总条数及每页大小计算出总页数
            //     //$scope.totalPage = Math.ceil($scope.data.total / $scope.pageSize)
            //     $scope.loading = false // 让加载动画消失
            //         // 通过angular我们已经改变了数据模型的值了
            //     $scope.$apply() // 会把$scope的属性值重新渲染到页面。
            // })


            $http.get(arg)
                .then(function(res) {
                    $scope.data1 = res.data;
                    //console.log($scope.data1);

                })
        }

    }])
})(angular)