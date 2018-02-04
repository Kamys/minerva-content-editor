import React, { Component } from 'react';
import './ToolBarButton.css';

class ToolBarButton extends Component {
    render() {
        return (
            <button type="button"
                    onClick={this.props.onClick}
                    className="btn tool-bar__btn_shadow btn-secondary btn-sm mt-1 ml-1">
                {this.props.children}
            </button>
        );
    }
}

export default ToolBarButton;