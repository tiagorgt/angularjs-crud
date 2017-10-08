(function () {
    'use strict';

    angular
        .module('app')
        .factory('profileService', ProfileService);

    function ProfileService() {
        var service = {
            list: list,
            getByKey: getByKey
        };

        return service;

        function list(isFilter) {
            if (isFilter) {
                return [
                    {
                        key: 99,
                        value: "Todos"
                    }, {
                        key: 0,
                        value: "Aluno"
                    }, {
                        key: 1,
                        value: "Gestor Municipal"
                    }, {
                        key: 2,
                        value: "Gestor Estadual"
                    }, {
                        key: 3,
                        value: "Gestor Nacional"
                    }
                ]
            } else {
                return [
                    {
                        key: 0,
                        value: "Aluno"
                    }, {
                        key: 1,
                        value: "Gestor Municipal"
                    }, {
                        key: 2,
                        value: "Gestor Estadual"
                    }, {
                        key: 3,
                        value: "Gestor Nacional"
                    }
                ]
            }
        }

        function getByKey(key) {
            return list().find(function (p) {
                return p.key == key;
            });
        }
    }
})();