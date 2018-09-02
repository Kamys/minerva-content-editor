import * as React from 'react';
import { Component } from 'react';

export interface IState {

}

export interface IProps {
	onHappenEvent?: (e) => void;
	eventName: string;
}

class EventListener extends Component<IProps, IState> {

	state: IState = {};

	componentDidMount(): void {
		const { eventName } = this.props;
		document.addEventListener(eventName, this.onMoveCursor);
	}

	componentWillUnmount(): void {
		const { eventName } = this.props;
		document.removeEventListener(eventName, this.onMoveCursor);
	}

	onMoveCursor = e => {
		this.props.onHappenEvent(e);
	}

	render() {
		return null;
	}
}

export default EventListener;