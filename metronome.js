document.addEventListener('DOMContentLoaded', function() {
  var startButton = document.querySelector('#start');
  var stopButton = document.querySelector('#stop');
  var bpmField = document.querySelector('#bpm');

  var clickSound = new Audio('click.mp3');

  startButton.addEventListener('click', function() {
    console.log("started!");
    console.log("bpm value is " + bpmField.value);
    clickSound.play();
  });

  stopButton.addEventListener('click', function() {
    console.log("stopped!");
  });
});

