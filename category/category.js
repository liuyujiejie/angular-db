(function(angular) {
    // 1.首页模块
    var app = angular.module('category', ['ngRoute', 'myJsonpService'])


    // 2.路由规则
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/category/:id?', { // #/home_page
            // templateUrl:'./home.html'
            templateUrl: 'category/category.html',
            controller: 'categoryController'
        })
    }])

    // 3.创建控制器
    app.controller('categoryController', ['$scope', '$http', '$routeParams', 'MyService', function($scope, $http, $routeParams, MyService) {


        $scope.loading = true // 为true显示加载动画


        //console.log($routeParams);

        var arg = './category/' + $routeParams.id + '_data.json';


        getInTheater(arg);

        function getInTheater(url) {

            $http.get(url)
                .then(function(res) {
                    //console.log(1234);
                    $scope.data = res.data;
                    //console.log($scope.data);
                    $scope.loading = false // 让加载动画消失
                })
        }


        // 假设已经得到数据了
        // console.log($routeParams)
        // $scope.pageSize = 10 // 每页多少条
        // $scope.page = ($routeParams.page || "1") - 0 // 第几页
        //     // page:1     0,1,2,3,4,5,6,7,8,9
        //     // page:2     10,11,12,13,14,15,16,17,18,19
        //     // page:3     20,21,22,23,24,25,26,27,28,29
        // var start = ($scope.page - 1) * $scope.pageSize // 从第几条开始


        // MyService.jsonp('http://api.douban.com/v2/movie/' + $routeParams.movieType, { start: start, count: $scope.pageSize, q: $routeParams.q }, function(data) {
        //     $scope.data = data // 在异步给数据模型赋值，angular不会知道

        //     // 根据总条数及每页大小计算出总页数
        //     $scope.totalPage = Math.ceil($scope.data.total / $scope.pageSize)
        //     $scope.loading = false // 让加载动画消失
        //         // 通过angular我们已经改变了数据模型的值了
        //     $scope.$apply() // 会把$scope的属性值重新渲染到页面。
        // })


        // // 获取指定页的数据
        // $scope.getPage = function(nowPage) {
        //     // 小于等于第1页时，不允许获取上一页
        //     if (nowPage <= 0 || nowPage > $scope.totalPage) {
        //         return
        //     }
        //     // 改变url中的锚点值
        //     // MyService.json
        //     // 这个方法可以改变url中锚点的参数部分
        //     $route.updateParams({ page: nowPage })
        // }



    }])
})(angular)