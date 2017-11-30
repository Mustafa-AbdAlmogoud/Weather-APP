import React, {Component} from 'react'


class Weather extends Component {
    
    componentWillMount() {
        if (this.props.weather === undefined){
            this.props.fetchWeather(this.props.params.country);
        }
    }

    render() {
        return (
            <div>
                <p> { JSON.stringify(this.props.weather, null) }</p>
            </div>
        );
    }
}

export default Weather;