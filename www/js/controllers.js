angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $state) {
  $scope.login = function() {
    $state.go('tab.news');
  }
})

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

.controller('SearchCtrl', function($scope, $state) {
  $scope.goToHub = function() {
    $state.go("tab.search-result");
  }
})

.controller('SearchResCtrl', function($scope) {

})

.controller('SettingsCtrl', function($scope) {

})
.controller('SavedCtrl', function($scope) {

})

.controller('NewsContentCtrl', function($scope, $state) {
    $scope.closeModal = function() {
        $scope.modal.hide();
    }

    $scope.openPublisher = function() {
      $state.go("tab.search-result");
      $scope.modal.hide();
    }
})