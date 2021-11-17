import React, { Component } from "react";
import "./ColorBox.css";

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
          colors: "lightblue"
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){

    };

    render() {
        return (
            <div className="ColorBox" style={{backgroundColor: this.state.colors}} onClick={this.handleClick}>
                
            </div>
        );
    }
}
export default ColorBox;
