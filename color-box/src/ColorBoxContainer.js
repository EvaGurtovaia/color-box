import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./ColorBoxContainer.css";

class ColorBoxContainer extends Component {
    static defaultProps = {
        numOfBoxes: 16,
    };
    render() {
        const boxes = Array.from({ length: this.props.numOfBoxes }).map(() => (
            <ColorBox />
        ));
        return <div className="ColorBoxContainer">{boxes}</div>;
    }
}
export default ColorBoxContainer;
