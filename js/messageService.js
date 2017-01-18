angular.module('chatroom').service('messageService', function($http){
  //Here you'll need to create two methods. One called postMessage and the other called getMessages.

  this.isMagicWord = function(ms){
    var key = ms.slice(0,8);
    console.log(key);
    if(key === 'testing'){
      return true;
    } else {
      return false;
    }
  }

  this.getMessages = function(){
    return $http({
      method: 'GET',
      url: 'https://practiceapi.devmounta.in/api/chats'
    });
  }

  this.postMessage = function(theMessage){
    return $http({
      data: {message: theMessage},
      method: 'POST',
      url: 'https://practiceapi.devmounta.in/api/chats'
    });
  }

  this.reverseMessage = function(text){
    var newText = text.split("");
    var finalText = [];
    for(var i=0;i<newText.length;i++){
      finalText.unshift(newText[i]);
    }
    var final = finalText.join("");
    return "Backward Bot Says: " + final;
  }

  this.convertTime = function(time){
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
});
