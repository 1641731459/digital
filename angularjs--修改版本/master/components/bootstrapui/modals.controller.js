(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('ModalController', ModalController);

    ModalController.$inject = ['$uibModal'];

    function ModalController($uibModal) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            vm.open = function(size) {

                var modalInstance = $uibModal.open({
                    templateUrl: '/myModalContent.html',
                    controller: ModalInstanceCtrl,
                    size: size
                });

                var state = $('#modal-state');
                modalInstance.result.then(function() {
                    state.text('Modal dismissed with OK status');
                }, function() {
                    state.text('Modal dismissed with Cancel status');
                });
            };

            // Please note that $uibModalInstance represents a modal window (instance) dependency.
            // It is not the same as the $uibModal service used above.

            ModalInstanceCtrl.$inject = ['$scope', '$uibModalInstance'];

            function ModalInstanceCtrl($scope, $uibModalInstance) {

                $scope.ok = function() {
                    $uibModalInstance.close('closed');
                };

                $scope.cancel = function() {
                    $uibModalInstance.dismiss('cancel');
                };
            }
        }
    }

})();
/*(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('ModalController2', ModalController2);

    ModalController2.$inject = ['$uibModal2'];

    function ModalController2($uibModal2) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            vm.open2 = function(size) {

                var modalInstance2 = $uibModal2.open({
                    templateUrl: '/myModalContent2.html',
                    controller: ModalInstanceCtrl2,
                    size: size
                });

                var state = $('#modal-state');
                modalInstance2.result.then(function() {
                    state.text('Modal dismissed with OK status');
                }, function() {
                    state.text('Modal dismissed with Cancel status');
                });
            };

            // Please note that $uibModalInstance represents a modal window (instance) dependency.
            // It is not the same as the $uibModal service used above.

            ModalInstanceCtrl2.$inject = ['$scope', '$uibModalInstance2'];

            function ModalInstanceCtrl2($scope, $uibModalInstance) {

                $scope.ok2 = function() {
                    $uibModalInstance.close('closed');
                };

                $scope.cancel2 = function() {
                    $uibModalInstance.dismiss('cancel');
                };
            }
        }
    }

})();*/
