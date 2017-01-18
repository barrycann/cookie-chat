angular.module('chatroom').controller('mainCtrl', function($scope, messageService){

  $scope.getMessages = function(){
    messageService.getMessages().then(function(resp){
      $scope.messages = resp.data
    });
  }

  $scope.convertTime = function(time){
    var hour = Number(time.slice(11, 13))-7;
    var ampm = 'am';
    if(hour > 12){
      hour-= 12;
      ampm = 'pm'
    }
    var minute = time.slice(14,16);
    var date = time.slice(0, 10);
    return hour + ":" + minute + ampm + ", " + date;
  }

  //The postMessage function will take whatever the user typed in (hint: look at the html and see what ng-model correlates to on the input box),
  //pass that text to the postMessage method on the messageService object which will
  //then post it to the backend.
  $scope.postMessage = function(message){
    messageService.postMessage(message);
  }

  setInterval(function(){
    $scope.getMessages();

  }, 1500)

})
