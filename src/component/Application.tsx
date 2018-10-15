import * as React from 'react';
import { Component } from 'react';
import Board from 'src/component/Card/Board'
import ToolBar from 'src/component/ToolBar/ToolBar'

export interface IState {
}

export interface IProps {

}

class Application extends Component<IProps, IState> {

	state: IState = {
	};

	static defaultProps: IProps = {};



	render() {
		return (
			<>
				<ToolBar />
				<Board />
			</>
		);
	}
}

export default Application;