import React, { Component } from 'react';

class FontAwesome extends Component {
    render() {
        let iconName = 'fa-bold';
        if(this.props.iconName){
            iconName = this.props.iconName;
        }
        let iconStyle = {
            color:'GhostWhite'
        };
        return (
            <i className={`fas fa-fw ${iconName}`} style={iconStyle}/>
        );
    }
}

export default FontAwesome;
