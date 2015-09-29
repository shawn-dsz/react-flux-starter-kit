
$ = JQuery = require('jquery');
var React = require('react');
var Header = require('./components/common/header');
var RouteHandler = require('react-router');


var App = React.createClass({
	render: function (){
		return (
			<div>
				<Header/>	
				<div className="container-fluid">
					<RouteHandler/>
				</div>
			</div>
		);	
	}
});

module.exports = App;