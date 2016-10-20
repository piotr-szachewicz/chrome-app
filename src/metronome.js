var Metronome = function() {
  this.clickSound = new Audio('click.mp3');
  this.worker = new Worker('../worker.js');

  this.worker.addEventListener('message', this._playClick.bind(this));
};

Metronome.prototype.start = function() {
  this.worker.postMessage({type: 'start', interval: this._intervalMs()});
};

Metronome.prototype.stop = function() {
  this.worker.postMessage({type: 'stop'});
};

Metronome.prototype.setBpm = function(bpm) {
  this.bpm = bpm;
};

Metronome.prototype._intervalMs = function() {
  return 60000/this.bpm;
};

Metronome.prototype._playClick = function() {
  this.clickSound.play();
};

module.exports = Metronome;