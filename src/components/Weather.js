import React, {Component} from 'react'

let data = '';

class Weather extends Component {

    componentWillMount() {
        if (this.props.weather === undefined){
            this.props.fetchWeather(this.props.params.country);
            data = this.props.weather;
        }
    }

    render() {
        console.log(data);
        return (
            <div>
            
            </div>
        );
    }
}

export default Weather;