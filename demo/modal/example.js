
angular.module('ui.bootstrap.demo', ['ui.bootstrap']);

angular.module('ui.bootstrap.demo')

.controller('ModalDemoCtrl', function ($scope, $modal, $log) {

	  $scope.items = ['item1', 'item2', 'item3'];
	
	  $scope.animationsEnabled = true;
	
	  $scope.open = function (size) {
	
	    var modalInstance = $modal.open({
	      animation: $scope.animationsEnabled,
	      templateUrl: 'myModalContent.html',
	      controller: 'ModalInstanceCtrl',
	      size: size,
	      resolve: {
	        items: function () {
	          return $scope.items;
	        }
	      }
	    });
	
	    modalInstance.result.then(function (selectedItem) {
	      $scope.selected = selectedItem;
	    }, function () {
	      $log.info('Modal dismissed at: ' + new Date());
	    });
	  };
	
	  $scope.toggleAnimation = function () {
	    $scope.animationsEnabled = !$scope.animationsEnabled;
	  };
	  
	  
	  
	  //showAlert('注意','测试弹出框');
	  

});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

angular.module('ui.bootstrap.demo').controller('ModalInstanceCtrl', function ($scope, $modalInstance,  $modal, items) {

	  $scope.items = items;
	  $scope.selected = {
	    item: $scope.items[0]
	  };
	
	  $scope.ok = function () {
	    $modalInstance.close($scope.selected.item);
	  };
	
	  $scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };
  
  
  
	
	//弹出框
	$scope.showAlert(txt1,txt2) {
        $modal.open({
            template:'\
            <div class="modal-header">\
            	<h3 class="modal-title">' + txt1 + '</h3>\
            </div>\
            <div class="modal-body">\
            	<h4>' + txt2 + '</h4>\
            </div>\
            <div class="modal-footer">\
                <button  class="btn btn-primary" ng-click="ok()">确定</button>\
                <button  class="btn btn-warning" ng-click="cancel()">取消</button>\
            </div>',
            plain: true,
            scope:$scope
        });
        
        $scope.item = 'hello';
		
		$scope.ok = function () {
		    $modalInstance.close($scope.item);
		};
		
		$scope.cancel = function () {
		    $modalInstance.dismiss('cancel');
		};
		
    }
  
  
  
  
  
});