import React, {Component} from 'react';
import './ToolBar.css'
import Resizable from "react-rnd";

class ToolBar extends Component {
    render() {
        return (
            <div>
                <Resizable minWidth="70"
                           minHeight="70"
                           default={{
                               x: 25,
                               y: 25,
                               width: "200px",
                               height: "300px",
                           }}
                           className="tool-bar tool-bar_shadow">
                    <div className="container tool-bar__button-list mt-2">
                        {this.props.children}
                    </div>
                </Resizable>
            </div>
        );
    }
}

export default ToolBar;