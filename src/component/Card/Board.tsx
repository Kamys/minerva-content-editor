import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import * as uniqid from 'uniqid';

import { IReduxState } from 'src/store/rootState'
import EventListener from 'src/component/helpers/EventListener'
import { extractText } from 'src/helpers/common'
import { ICard } from 'src/component/Card/Interface'
import Card from 'src/component/Card/Card'

export interface IState {
	mouseX: number;
	mouseY: number;
	cards: ICard[];
}

export interface IProps {
}

const mapStateToProps = (state: IReduxState) => ({
	/// nameStore: state.nameStore
});

const mapDispatchToProps = (dispatch) => ({
	/*
	  onLoadingMail: () => {
	   dispatch(Mail.Actions.onLoadingMail.REQUEST());
	 },
	*/
});

class Board extends Component<IProps, IState> {

	state: IState = {
		mouseX: 100,
		mouseY: 100,
		cards: []
	};

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

	onChangeCard = cardId => event => {
		const newText = event.target.value

		this.setState({
			cards: this.state.cards.map(card => {
				if (card.id === cardId) {
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
				{
					cards.map(card => (
						<Card {...card} onChangeBody={this.onChangeCard(card.id)}/>
					))
				}
			</>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)