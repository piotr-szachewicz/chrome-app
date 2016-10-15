var clickSound = new Audio('click.mp3');

var worker = new Worker('worker.js');
worker.addEventListener('message', function(e) {
  clickSound.play();
});

document.addEventListener('DOMContentLoaded', function() {
  var startButton = document.querySelector('#start');
  var stopButton = document.querySelector('#stop');
  var bpmField = document.querySelector('#bpm');

  startButton.addEventListener('click', function() {
    var msBetweenClicks = 60000/parseInt(bpmField.value);

    worker.postMessage({type: 'start', interval: msBetweenClicks});
  });

  stopButton.addEventListener('click', function() {
    worker.postMessage({type: 'stop'});
  });
});
