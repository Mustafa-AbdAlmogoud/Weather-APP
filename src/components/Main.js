import React, { Component } from 'react';
import Header from './Header';

class Main extends Component {
    render() {
        return(
            <div className="container">
                { React.cloneElement(<Header />, this.props)};
                { React.cloneElement(this.props.children, this.props) };
            </div>
        );
    }
}

export default Main;
