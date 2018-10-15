import * as React from 'react';
import { Component } from 'react';
import * as uniqid from 'uniqid';

import { RndCard } from 'src/component/RndCard';
import EventListener from 'src/component/helpers/EventListener';
import { extractText } from 'src/helpers/common';
import ContentEditable from 'react-contenteditable'
import ToolBar from 'src/component/ToolBar/ToolBar'

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

	onPasteText = (e: ClipboardEvent) => {
		const body = extractText(e);

		const { cards, mouseY, mouseX } = this.state;
		this.setState({
			cards: [
				...cards,
				{
					id: uniqid(),
					x: mouseX - 100,
					y: mouseY - 100,
					body,
				},
			],
		});
	}

	onMoveCursor = ({ clientY, clientX }: MouseEvent) => {
		this.setState({
			mouseX: clientX,
			mouseY: clientY,
		});
	}

	onChange = cardId => event => {
		const newText = event.target.value

		this.setState({
			cards: this.state.cards.map(card => {
				if(card.id === cardId) {
					return {
						...card,
						body: newText,
					};
				}
				return card;
			})
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
				<ToolBar/>
				{
					cards.map(card => (
						<RndCard
							key={card.id}
							x={card.x}
							y={card.y}
						>
							<ContentEditable
								html={card.body}
								disabled={false}
								onChange={this.onChange(card.id)}
								tagName='article'
							/>
						</RndCard>
					))
				}
			</>
		);
	}
}

export default Application;