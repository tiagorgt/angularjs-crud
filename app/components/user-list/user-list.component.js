(function () {
    'use strict';

    angular
        .module('app')
        .component('userList', {
            templateUrl: 'components/user-list/user-list.html',
            controller: UserListController
        });

    UserListController.inject = ['$location', 'statusService', 'profileService', '$uibModal', '$routeParams', 'userService', 'NgTableParams', 'alertService'];

    function UserListController($location, statusService, profileService, $uibModal, $routeParams, userService, NgTableParams, alertService) {
        var $ctrl = this;
        $ctrl.addUser = addUser;
        $ctrl.$onInit = $onInit;
        $ctrl.onSearch = onSearch;
        $ctrl.closeAlert = closeAlert;
        $ctrl.remove = remove;
        $ctrl.profileService = profileService;
        $ctrl.statusService = statusService;
        $ctrl.changeStatus = changeStatus;
        $ctrl.edit = edit;
        $ctrl.remove = remove;
        $ctrl.getAlerts = alertService.getAlerts;

        function $onInit() {
            loadStatus();
            loadProfile();
            initFilters();
            search();
        }

        function changeStatus(row) {
            userService.update(row).then(function (response) {
                var statusMessage = row.status == 'A' ? 'habilitado' : 'Desabilitado';
                alertService.setAlerts([{ type: 'success', msg: 'Usuário ' + statusMessage + ' com sucesso!' }]);
            }, function (error) {
                alertService.setAlerts([{ type: 'danger', msg: 'Operação não realizada. ' + error.data.errorMessage }]);
            })
        }

        function edit(row) {
            $location.path('/user-registration/' + row.cpf);
        }

        function loadTableParams() {
            $ctrl.cols = [
                {
                    field: 'name',
                    title: 'Nome',
                    type: 'text',
                    'class': 'header-left'
                }, {
                    field: 'email',
                    title: 'E-mail',
                    type: 'text',
                    'class': "header-left"
                }, {
                    field: 'profile',
                    title: 'Perfil',
                    type: 'profile',
                    'class': "header-left"
                }, {
                    field: 'status',
                    title: 'Habilitado',
                    type: 'status',
                    'class': 'header-left'
                }, {
                    field: 'action',
                    title: 'Ações',
                    type: 'action',
                    'class': 'header-left'
                }
            ];

            $ctrl.tableParams = new NgTableParams(
                {
                    count: 10
                }, {
                    dataset: $ctrl.userList
                }
            )
        }

        function getUsers() {
            userService.list().then(function (response) {
                $ctrl.userList = response.data;
                loadTableParams();
            }, function (error) {
                alertService.setAlerts([{ type: 'danger', msg: 'Operação não realizada. ' + error.data.errorMessage }]);
            });
        }

        function addUser() {
            $location.path('/user-registration');
        }

        function loadStatus() {
            $ctrl.statusList = statusService.list();
        }

        function loadProfile() {
            $ctrl.profileList = profileService.list(true);
        }

        function onSearch() {
            $location.path('/user-list').search({
                name: angular.isDefined($ctrl.filter.name) ? $ctrl.filter.name : '',
                status: angular.isDefined($ctrl.filter.status) ? $ctrl.filter.status : '',
                profile: angular.isDefined($ctrl.filter.profile) ? $ctrl.filter.profile : ''
            });
        }

        function search() {            
            var filterParams = {
                name: angular.isDefined($ctrl.filter.name) ? $ctrl.filter.name : '',
                status: angular.isDefined($ctrl.filter.status) ? $ctrl.filter.status : '',
                profile: angular.isDefined($ctrl.filter.profile) ? $ctrl.filter.profile : ''
            };

            userService.getUsersByFilter(filterParams).then(function(response){
                $ctrl.userList = response.data;
                loadTableParams();
            }, function(error){
                alertService.setAlerts([{ type: 'danger', msg: 'Operação não realizada. ' + error.data.errorMessage }]);
            })
        }

        function remove(user) {
            $uibModal.open({
                animation: true,
                component: 'messageBox',
                resolve: {
                    type: function () {
                        return 'CONFIRMATION';
                    },
                    message: function () {
                        return 'Deseja realmente excluir o usuário ' + user.name + '?';
                    }
                }
            }).result.then(function (response) {
                if (response) {
                    userService.remove(user.cpf).then(function (response) {
                        alertService.setAlerts([{ type: 'success', msg: 'Exclusão efetuada com sucesso.' }]);
                        getUsers();
                    }, function (error) {
                        alertService.setAlerts([{ type: 'danger', msg: 'Operação não realizada. ' + error.data.errorMessage }]);
                    });
                }
            }, function () {

            });
        }

        function closeAlert(index) {
            alertService.closeAlert(index);
        }

        function initFilters() {
            $ctrl.filter = {};

            if (angular.isDefined($routeParams.name)) {
                $ctrl.filter.name = $routeParams.name;
            }

            if (angular.isDefined($routeParams.status)) {
                $ctrl.filter.status = $routeParams.status;
            }

            if (angular.isDefined($routeParams.profile)) {
                $ctrl.filter.profile = $routeParams.profile;
            }
        }
    }
})();
