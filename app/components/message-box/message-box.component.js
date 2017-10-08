(function () {
    'use strict';

    angular
        .module('app')
        .component('messageBox', {
            templateUrl: 'components/message-box/message-box.html',
            controller: MessageBoxController,
            bindings: {
                resolve: '<',
                close: '&',
                dismiss: '&'
            },
        });

    function MessageBoxController() {
        var $ctrl = this;
        $ctrl.$onInit = $onInit;
        $ctrl.ok = ok;
        $ctrl.cancel = cancel;
        $ctrl.yes = yes;
        $ctrl.no = no;

        function $onInit() {
            $ctrl.type = $ctrl.resolve.type;
            $ctrl.message = $ctrl.resolve.message;

            if ($ctrl.type == 'CONFIRMATION') {
                $ctrl.title = 'Confirmação';
            } else {
                $ctrl.title = 'Aviso';
            }
        };

        function ok() {
            $ctrl.close({ $value: 'ok' });
        };

        function cancel() {
            $ctrl.dismiss({ $value: 'cancel' });
        };

        function yes() {
            $ctrl.close({ $value: true });
        }

        function no() {
            $ctrl.close({ $value: false });
        }
    }
})();