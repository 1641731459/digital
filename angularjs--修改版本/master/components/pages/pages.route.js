(function() {
    'use strict';

    angular
        .module('app.pages')
        .run(pagesRoute);

    pagesRoute.$inject = ['Router'];
    function pagesRoute(Router){

        Router.state('app.pages', {
            url: '/pages',
            abstract: true,
            template: '<div ui-view class="ng-fadeInLeftShort"></div>'
        })
        .state('app.pages.profile', {
            url: '/Profile',
            title: 'Profile',
            templateUrl: 'profile.html',
            require: ['xeditable']
        })
        .state('app.pages.gallery', {
            url: '/Gallery',
            title: 'Gallery',
            templateUrl: 'gallery.html',
            require: ['blueimp-gallery']
        })
        .state('app.pages.wall', {
            url: '/wall',
            title: 'Wall',
            templateUrl: 'wall.html'
        })
        .state('app.pages.search', {
            url: '/Search',
            title: 'Search',
            templateUrl: 'search.html'
        })
        .state('app.pages.messages', {
            url: '/messages',
            title: 'Messages Board',
            templateUrl: 'messages.html'
        })
        ;
    }

})();
