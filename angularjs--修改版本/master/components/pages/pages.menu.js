(function() {
    'use strict';

    angular
        .module('app.pages')
        .run(pagesRun);

    pagesRun.$inject = ['Menu'];

    function pagesRun(Menu) {

        var menuItem = {
            name: 'Pages',
            sref: 'app.pages',
            order: 8,
            // iconclass: 'ion-ios-browsers',
            imgpath: 'app/img/icons/ios-browsers.svg',
            subitems: [{
                name: 'Profile',
                sref: 'app.pages.profile'
            }, {
                name: 'Gallery',
                sref: 'app.pages.gallery'
            }, {
                name: 'Wall',
                sref: 'app.pages.wall'
            }, {
                name: 'Search',
                sref: 'app.pages.search'
            }, {
                name: 'Messages Board',
                sref: 'app.pages.messages'
            }]
        };

        Menu.addItem(menuItem);

    }
})();
