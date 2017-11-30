import React, { Component } from 'react';
import { Link } from 'react-router';

class Countries extends Component {    
    handelClick(e) {
        console.log(e.target.value)
        this.props.fetchWeather(e.target.value);
    }

    render() {
        return (
            <div>
                <Link to="/weather/alexandria">
                    <button value="Alexandria,eg" className="btn btn-default" onClick={this.handelClick.bind(this)}>
                        Alexandria,eg
                    </button>
                </Link>
                <Link to="/weather/london">
                    <button value="London,uk" className="btn btn-default" onClick={this.handelClick.bind(this)}>
                        London,uk
                    </button>
                </Link>
            </div>
        )
    }
}

export default Countries;
