angular.module('starter.controllers', [])

.controller('NewsCtrl', function($scope, $ionicModal) {

  $scope.openFlash = function() {
    $ionicModal.fromTemplateUrl('templates/flashcard.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
      $scope.modal.show();
    });
  }
})

.controller('CatsCtrl', function($scope) {

})

.controller('SearchCtrl', function($scope) {

})