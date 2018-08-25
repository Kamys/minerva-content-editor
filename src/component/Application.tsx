import * as React from 'react';
import { Component } from 'react';
import { RndCard } from 'src/component/RndCard';

export interface IState {

}

export interface IProps {

}

class Application extends Component<IProps, IState> {

	state: IState = {};

	static defaultProps: IProps = {};

	componentDidMount(): void {
		document.addEventListener('paste', (e: ClipboardEvent) => {
			console.log(e.clipboardData.getData('text'));
		});
	}

	render() {
		return (
			<>
				<RndCard>
					<h1>Example text</h1>
				</RndCard>
			</>
		);
	}
}

export default Application;