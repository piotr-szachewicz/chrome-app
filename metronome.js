var clickSound = new Audio('click.mp3');
var interval;

function playClick() {
  clickSound.play();
}

document.addEventListener('DOMContentLoaded', function() {
  var startButton = document.querySelector('#start');
  var stopButton = document.querySelector('#stop');
  var bpmField = document.querySelector('#bpm');

  startButton.addEventListener('click', function() {
    var msBetweenClicks = 60000/parseInt(bpmField.value);

    clearInterval(interval);
    interval = setInterval(playClick, msBetweenClicks);
  });

  stopButton.addEventListener('click', function() {
    clearInterval(interval);
  });
});

