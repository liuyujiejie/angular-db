(function(angular) {
    // "use strict";

    // start your ride
    var app = angular.module('main', [
        'home',
        'details', // 路由规则，先引用，先匹配
        'checkMovie',
        'tvShow',
        'category',
        'movie_list',
        'auto-active'
    ])
})(angular);