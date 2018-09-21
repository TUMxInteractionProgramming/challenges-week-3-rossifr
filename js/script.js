console.log('app is alive');

function switchChannel(channelName){
  console.log('Tuning into channel ' + channelName);
  document.getElementById('chat').querySelector("h1").innerHTML=channelName;
}
