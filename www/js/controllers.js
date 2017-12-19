angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $state) {
$scope.startApp = function() {
     $state.go('intro');
   };

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate) {
  
   // Called to navigate to the main app
   $scope.goHome = function() {
    $state.go('tab.dash');
  };
   $scope.startApp = function() {
     $state.go('main');
   };
   $scope.next = function() {
     $ionicSlideBoxDelegate.next();
   };
   $scope.previous = function() {
     $ionicSlideBoxDelegate.previous();
   };
 
   // Called each time the slide changes
   $scope.slideChanged = function(index) {
     $scope.slideIndex = index;
   };
 })
 
 .controller('MainCtrl', function($scope, $state, $ionicHistory) {
   console.log('MainCtrl');

   $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };

   $scope.goBack = function() {
    $backView = $ionicHistory.backView();
    $backView.go();
  };

  $scope.goHome = function() {
    $state.go('tab.dash');
  };
   
   $scope.toIntro = function(){
     $state.go('intro');
   }
 });
 
