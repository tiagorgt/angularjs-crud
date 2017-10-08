(function () {
    'use strict';

    angular
        .module('app')
        .factory('alertService', AlertService);

    function AlertService() {
        var service = {
            getAlerts: getAlerts,
            setAlerts: setAlerts,
            closeAlert: closeAlert
        };

        var alerts = [];

        return service;

        function getAlerts() {
            return alerts;
        }

        function setAlerts(newAlerts) {
            alerts = newAlerts;
        }

        function closeAlert(index) {
            alerts.splice(index, 1);
        }
    }
})();