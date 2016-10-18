var ReactDOM = require('react-dom');
var React = require('react');

var clickSound = new Audio('click.mp3');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			bpm: 90,
			switchedOn: false
		};
	},

	valueChanged: function(ev) {
		var value = parseInt(ev.target.value);
		this.setState({bpm: value})
	},

	startClicked: function(ev) {
		this.setState({switchedOn: true});
	},

	stopClicked: function(ev) {
		this.setState({switchedOn: false});
	},

	render: function() {
		console.log(this.state);
		return <div>
			<input type='number' onChange={this.valueChanged} value={this.state.bpm} min='1' max='300'/>
			<button type="button" onClick={this.startClicked}>Start</button>
			<button type="button" onClick={this.stopClicked}>Stop</button>
		</div>;
	}
});