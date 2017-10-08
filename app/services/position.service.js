(function () {
    'use strict';

    angular
        .module('app')
        .factory('positionService', PositionService);

    PositionService.$inject = ['$http', 'config'];
    function PositionService($http, config) {
        var service = {
            list: list
        };

        return service;

        function list() {
            return $http.get(config.urlApi + '/position');
        }
    }
})();