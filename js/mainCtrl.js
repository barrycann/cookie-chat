angular.module('chatroom').controller('mainCtrl', function($scope, messageService){

  $scope.getMessages = function(){
    messageService.getMessages().then(function(resp){
      $scope.messages = resp.data
    });
  }

  $scope.convertTime = function(time){
    return messageService.convertTime(time);
  }

  $scope.reverseMessage = function(text){
    return messageService.reverseMessage(text);
  }

  $scope.postMessage = function(message){
    messageService.postMessage(message);
  }

  $scope.isMagicWord = function(message){
    return messageService.isMagicWord(message);
  }

  setInterval(function(){
    $scope.getMessages();
    $scope.isMagic = $scope.isMagicWord($scope.messages[$scope.messages.length-1].message);
    console.log($scope.isMagic);
    if($scope.isMagic === true){
      $scope.postMessage("Do NOT say the magic word! It is forbidden!");
    }
  }, 2000)

})
