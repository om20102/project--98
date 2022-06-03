var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function start(){
document.getElementById("tb").innerHTML = "";
Recognition.start();
}

Recognition.onresult = function (event){
console.log (event);
var msg = event.results[0][0].transcript;
document.getElementById("tb").innerHTML = msg; 
}