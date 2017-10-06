(function () {
    'use strict';

    angular
        .module('app')
        .component('userRegistration', {
            templateUrl: 'components/user-registration/user-registration.html',
            controller: UserRegistrationController
        });

    UserRegistrationController.inject = ['$location'];

    function UserRegistrationController($location) {
        var $ctrl = this;
        $ctrl.hasError = hasError;
        $ctrl.save = save;
        $ctrl.back = back;

        function hasError(field) {
            if (field) {
                return field.$invalid && (field.$dirty || field.$$parentForm.$submitted);
            }
        }

        function save(form) {
            form.$setSubmitted(true);

            if (form.$invalid) {
                return;
            }
        }

        function back() {
            $location.path('/user-list');
        }
    }
})();