var React = require('react');

var Vote = React.createClass({

	render: function () {
		return (
			<h1>this is the voting component</h1>
		);
	}

});

React.render(<Vote/>, document.getElementById('vote-mount'));
