import * as React from 'react';
import { Component } from 'react';
import * as uniqid from 'uniqid';

import { RndCard } from 'src/component/RndCard';
import EventListener from 'src/component/helpers/EventListener';
import { extractText } from 'src/helpers/common'

interface ICard {
	id: string;
	x: number;
	y: number;
	body: string;
}

export interface IState {
	mouseX: number;
	mouseY: number;
	cards: ICard[];
}

export interface IProps {

}

class Application extends Component<IProps, IState> {

	state: IState = {
		mouseX: 100,
		mouseY: 100,
		cards: [],
	};

	static defaultProps: IProps = {};

	componentDidMount(): void {
		document.addEventListener('paste', (e: ClipboardEvent) => {
			console.log(e.clipboardData.getData('text'));
		});
	}

	onMoveCursor = ({ clientY, clientX }: MouseEvent) => {
		this.setState({
			mouseX: clientX,
			mouseY: clientY,
		});
	}

	render() {
		const { cards } = this.state;
		return (
			<>
				<EventListener
					eventName='paste'
					onHappenEvent={this.onPasteText}
				/>
				<EventListener
					eventName='mousemove'
					onHappenEvent={this.onMoveCursor}
				/>
				{
					cards.map(card => (
						<RndCard
							key={card.id}
							x={card.x}
							y={card.y}
						>
							<div
								dangerouslySetInnerHTML={{
									__html: card.body,
								}}
							/>
						</RndCard>
					))
				}
			</>
		);
	}
}

export default Application;