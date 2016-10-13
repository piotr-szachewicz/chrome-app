document.addEventListener('DOMContentLoaded', function() {
  var startButton = document.querySelector('#start');
  var stopButton = document.querySelector('#stop');
  var bpmField = document.querySelector('#bpm');

  startButton.addEventListener('click', function() {
    console.log("started!");
    console.log("bpm value is " + bpmField.value);
  });

  stopButton.addEventListener('click', function() {
    console.log("stopped!");
  });
});

