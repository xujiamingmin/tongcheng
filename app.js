/**
 * Created by qiusheng on 2016/10/8.
 */
require.config({
    paths: {
        jquery: './libs/jquery',
        angular: './libs/bower_components/angular/angular.min',
        'ui-router': './libs/bower_components/angular-ui-router/release/angular-ui-router',
        $css: './libs/css',
        HomeController: './components/home/HomeController',
        TripController:'./components/trip/TripController',
        DestController:'./components/trip_destination/DestController',
        ClassicController:'./components/trip_classic/ClassicController',
        index: './js/controllers/index',
        router: './router',

        index: './js/controllers/index',
        router: './router',
        HomeController: './components/home/HomeController',
        MineController:'./components/mine/MineController',
        SerController:'./components/serOrder/SerController',
        BackController:'./components/orderBack/BackController',
        PayController:'./components/pay/PayController'
    },
    shim:{
        angular: {
            deps: ['jquery'],
            exports: 'angular'
        },
        'ui-router': {
            deps: ['angular'],
            exports: 'ui-router'
        }
    }
});
require(['jquery','angular','index','ui-router','HomeController','TripController',
    'DestController','ClassicController'],function (jquery,angular,index) {
    index.index();
    //手动加载模块
    angular.bootstrap(document, ['webapp']);
});
require(['jquery',
        'angular',
        'index',
        'ui-router',
        'HomeController',
        'MineController',
        'SerController',
        'BackController',
        'PayController'
    ],
    function (jquery,angular,index) {
        index.index();
        //手动加载模块
        angular.bootstrap(document, ['webapp']);
});