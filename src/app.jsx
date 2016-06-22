var React = require('react');

var Vote = React.createClass({

	getInitialState: function () {
		return {
			awesome: 0,
			meh: 0
		}
	},

	awesomeCount: function () {
		this.setState({
			awesome: this.state.awesome + 1
		});
	},

	mehCount: function () {
		this.setState({
			meh: this.state.meh + 1
		});
	},

	render: function () {
		return (
			<div className="container">
				<button className="btn btn-success btn-large" onClick={this.awesomeCount}>
					Yay!
					<i className="glyphicon glyphicon-thumbs-up"></i>
					{this.state.awesome}
				</button>
				<button className="btn btn-danger btn-large" onClick={this.mehCount}>
					Meh.
					<i className="glyphicon glyphicon-thumbs-down"></i>
					{this.state.meh}
				</button>
			</div>
		);
	}

});

React.render(<Vote/>, document.getElementById('vote-mount'));
