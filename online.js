$(document).ready(function(){

  //online.herp();

  /*var pollInterval = 1000; // 1 minute
  var test = 12;
  function startRequest() {
    chrome.browserAction.setBadgeText({text:test.toString()});
    test++;
    window.setTimeout(startRequest, pollInterval);
  }

  function stopRequest() {
    window.clearTimeout(timerId);
  }

  startRequest();*/

  var online = { 
    channels: new Array(),
    init: function(){
      $(".addbutton").click(function(){
        if ($(".textbox").val().length>0){
          online.addChannel($(".textbox").val());
          $(".textbox").val("");
          //alert("Channel added!");
          online.listChannels();

        }else{
          chrome.storage.sync.remove("channels");
        }

      });
    },
        
    addChannel: function(name){
      chrome.storage.sync.get("channels", function(r){
	//console.log(r["channels"]);
	if (r["channels"]!=null){
	  online.channels = JSON.parse(r["channels"]);
	  console.log(r["channels"]);
	  //online.listChannels();
	}
      });
      //this.channels = tmp;
      //this.channels.push(name);
      //console.log(this.channels);
      //chrome.storage.sync.set({"channels":this.channels});
      this.channels.push(name);
      
      chrome.storage.sync.set({"channels":JSON.stringify(this.channels)});
      console.log("new channelvar");
    },

    listChannels: function(){
      chrome.storage.sync.get("channels",function(r){
	var tmparr = JSON.parse(r["channels"]);
        for (i = 0; i<tmparr.length; i++){
          console.log(tmparr[i],"color: red;");
        }
      })
    }
  }

  online.init();
  

  $.get('http://api.justin.tv/api/stream/list.json?channel=wayne379',function(data){
    if (data[0]!=null){
      console.log(data[0].title);
    }else{
      console.log("Ikke en dritt som skjer!");
    }
  });
  //alert(chrome.storage.sync.get('channels',function(r){return r['channels']}));
  
});
