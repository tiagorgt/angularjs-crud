(function () {
    'use strict';

    angular
        .module('app')
        .factory('userService', UserService);

    UserService.$inject = ['$http', 'config'];
    function UserService($http, config) {
        var service = {
            list: list,
            update: update,
            save: save,
            remove: remove,
            get: get,
            getUsersByFilter: getUsersByFilter
        };

        return service;

        function list() {
            return $http.get(config.urlApi + '/user');
        }

        function update(user) {
            return $http.put(config.urlApi + '/user', user);
        }

        function save(user) {
            return $http.post(config.urlApi + '/user', user);
        }

        function remove(cpf) {
            return $http.delete(config.urlApi + '/user/' + cpf);
        }

        function get(cpf) {
            return $http.get(config.urlApi + '/user/' + cpf);
        }

        function getUsersByFilter(filterParams){
            return $http.post(config.urlApi + '/user/filter', filterParams);
        }
    }
})();