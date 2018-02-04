import React, {Component} from 'react';
import FontAwesome from "./fontAwesome/FontAwesome";
import ToolBarButton from "./toolBarButton/ToolBarButton";
import ToolBar from "./toolBar/ToolBar";



class App extends Component {
    buttonList = [
        {iconName:'fa-bold'},
        {iconName:'fa-align-left'},
        {iconName:'fa-align-center'},
        {iconName:'fa-align-right'},
        {iconName:'fa-list-ul'},
        {iconName:'fa-list-ol'},
        {iconName:'fa-italic'},
        {iconName:'fa-trash-alt'},
        {iconName:'fa-underline'},
        {iconName:'fa-unlink'}
    ];
    render() {

        return (
            <ToolBar>
                {this.buttonList.map(btnInfo => {
                    return (
                        <ToolBarButton>
                            <FontAwesome iconName={btnInfo.iconName}/>
                        </ToolBarButton>
                    );
                })}
            </ToolBar>
        );
    }
}

export default App;
