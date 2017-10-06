(function () {
    'use strict';

    angular
        .module('app')
        .component('userList', {
            templateUrl: 'components/user-list/user-list.html',
            controller: UserListController
        });

    UserListController.inject = ['$location'];

    function UserListController($location) {
        var $ctrl = this;
        $ctrl.addUser = addUser;

        function addUser() {
            $location.path('/user-registration');
        }
    }
})();