(function () {
    'use strict';

    angular
        .module('app')
        .factory('statusService', StatusService);

    function StatusService() {
        var service = {
            list: list
        };

        return service;

        function list() {
            return [
                {
                    key: "AI",
                    value: "Todos"
                }, {
                    key: "A",
                    value: "Habilitado"
                }, {
                    key: "I",
                    value: "Desabilitado"
                }
            ]
        }
    }
})();