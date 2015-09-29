"use strict";

var React = require('react');

var Home = React.createClass({
	render: function(){
		return (
			<div>
				<h1></h1>
				<p>
					This application uses the following technologies: 
					<ul>
						<li>React</li>
						<li>React Router</li>
						<li>Flux</li>
						<li>Gulp</li>
						<li>Browserify</li>
						<li>Bootstrap</li>
					</ul>
				</p>
			</div>
		);
	}
});

module.exports = Home;