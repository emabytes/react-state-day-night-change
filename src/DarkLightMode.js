import React, { Component } from 'react';

class DayNightMode extends Component {
    state = { 
        status: true
    }

    toggleDayNight = () => {
        this.setState({status: !this.state.status}) 
    }

    render() { 
        return ( 
            <div className={this.state.status ? 'light' : 'dark'} id="home">
                <h3>{this.state.status ? "Day" : "Night"}</h3>
                <input type="button" onClick={this.toggleDayNight} value={this.state.status ? "To Night" : "To Day" }/>
            </div>
         );
    }
}
 
export default DayNightMode;