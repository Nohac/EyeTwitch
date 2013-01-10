$(document).ready(function(){

  var background = {
    channels: null,//chrome.storage.sync.get({'channels'}),
    init: function(){
      chrome.storage.sync.get('channels',function(r){console.log(r['channels'])});
    }
  }
  

});
