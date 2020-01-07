import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center">Member Managerment Project using ReactJS</h1>
                    <p className="lead text-center">with JSON data</p>
                    <hr className="w-100" />
                </div>
            </div>
        );
    }
}

export default Header;