var clickSound = new Audio('click.mp3');

var worker = new Worker('worker.js');
worker.addEventListener('message', function(e) {
  clickSound.play();
});

var tapTempoTimestamps = [];

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

function calculateBpmFromTapTempo() {
  var sumOfDifferences = 0;
  for (var i = 1; i < tapTempoTimestamps.length; i++) {
    sumOfDifferences += (tapTempoTimestamps[i] - tapTempoTimestamps[i-1]);
  }

  var averageDiff = sumOfDifferences / (tapTempoTimestamps.length-1);
  return Math.round(60000 / averageDiff);
}

document.onkeypress = function(e) {
  var tagName = e.target.tagName;
  if (tagName != "INPUT" && tagName != "BUTTON") {
    var currentTimestamp = Date.now();

    if (tapTempoTimestamps.length > 0) {
      var timeSinceLastTap = currentTimestamp - tapTempoTimestamps[tapTempoTimestamps.length-1];
      if (timeSinceLastTap > 4000) {
        tapTempoTimestamps = [];
      }
    }

    tapTempoTimestamps.push(currentTimestamp);

    if (tapTempoTimestamps.length > 1) {
      var bpm = calculateBpmFromTapTempo();
      var bpmField = document.querySelector('#bpm');
      bpmField.value = bpm;
    }
  }
}
