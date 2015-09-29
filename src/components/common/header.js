"use strict";

var React = require('react');

var Header = React.createClass({
    render: function(){
        return (
            <nav className ="navbar navbar-default">
                <div className ="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">
                            <img alt="logo" className="logo" src="/images/logo.png"/>
                        </a>
                    </div>
                    
                        <ul className ="nav navbar-nav">
                            <li><a href="/">Home</a></li>
                            <li><a href="/#about">About</a></li>
                            <li><a href="/#authors">Authors</a></li>
                        </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;