var getVideo = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.getUserMedia;
if(!getVideo){
	alert('WebRTC is not available in your browser.');
}

var startBtn = document.getElementById('start');
startBtn.addEventListener('click', () => {
	console.log('startBtn clicked')
	var p = navigator.webkitGetUserMedia({ audio: true, video: true }, success, fail);
})

function success(mediaStream) {
  var video = document.querySelector('video');
  video.src = window.URL.createObjectURL(mediaStream);
  video.onloadedmetadata = function(e) {
    // Do something with the video here.
    console.log('e in onloadedmetadat:',e)
  };
}

function fail(error){
console.log(error.name)
}
/*
p.then(function(mediaStream) {
  var video = document.querySelector('video');
  video.src = window.URL.createObjectURL(mediaStream);
  video.onloadedmetadata = function(e) {
    // Do something with the video here.
  };
});

p.catch(function(err) { console.log(err.name); }); // always check for errors at the end.
*/