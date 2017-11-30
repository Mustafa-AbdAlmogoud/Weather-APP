import React, {Component} from 'react'


class Header extends Component{
    render(){
        let cities = this.props.params.country || "Cities"; 
        // let cities = "Cities"
        return(
            <div className="header">
                <p> {cities} Weather </p>
            </div>
        );
    }
}

export default Header;