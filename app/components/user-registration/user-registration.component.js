(function () {
    'use strict';

    angular
        .module('app')
        .component('userRegistration', {
            templateUrl: 'components/user-registration/user-registration.html',
            controller: UserRegistrationController
        });

    UserRegistrationController.inject = ['$location', '$routeParams', 'profileService', 'positionService', 'userService', 'alertService'];

    function UserRegistrationController($location, $routeParams, profileService, positionService, userService, alertService) {
        var $ctrl = this;
        $ctrl.hasError = hasError;
        $ctrl.save = save;
        $ctrl.back = back;
        $ctrl.closeAlert = closeAlert;
        $ctrl.$onInit = $onInit;
        $ctrl.getAlerts = alertService.getAlerts;

        function $onInit() {
            getPosition();
            loadProfile();
            if (angular.isDefined($routeParams.id)) {
                getUser();
            }
        }

        function getUser() {
            userService.get($routeParams.id).then(function (response) {
                $ctrl.user = response.data;
            }, function (error) {
                alertService.setAlerts([{ type: 'danger', msg: 'Operação não realizada. ' + error.data.errorMessage }]);
            });
        }

        function getPosition() {
            positionService.list().then(function (response) {
                $ctrl.positionList = response.data;
            }, function (error) {
                alertService.setAlerts([{ type: 'danger', msg: 'Operação não realizada. ' + error.data.errorMessage }]);
            })
        }

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

            if (angular.isDefined($routeParams.id)) {
                userService.update($ctrl.user).then(function (response) {
                    $location.path('/user-list').search({});
                    alertService.setAlerts([{ type: 'success', msg: 'Alteração efetuada com sucesso!' }]);
                }, function (error) {
                    alertService.setAlerts([{ type: 'danger', msg: 'Operação não realizada. ' + error.data.errorMessage }]);
                });
            } else {
                userService.save($ctrl.user).then(function (response) {
                    $location.path('/user-list').search({});
                    alertService.setAlerts([{ type: 'success', msg: 'Cadastro efetuado com sucesso!' }]);
                }, function (error) {
                    alertService.setAlerts([{ type: 'danger', msg: 'Operação não realizada. ' + error.data.errorMessage }]);
                });
            }
        }

        function back() {
            $location.path('/user-list');
        }

        function closeAlert(index) {
            alertService.closeAlert(index);
        }

        function loadProfile() {
            $ctrl.profileList = profileService.list(false);
        }
    }
})();