import * as React from 'react';
import { Component } from 'react';
import { Rnd } from 'react-rnd';
import { Card, CardContent } from '@material-ui/core';

import './RndCard.css';

export interface IState {

}

export interface IProps {
	x?: number;
	y?: number;
}

export class RndCard extends Component<IProps, IState> {

	static defaultProps: IProps = {
		x: 0,
		y: 0,
	};

	state: IState = {};

	render() {
		const { x, y, children } = this.props;
		return (
			<Rnd
				default={{
					x,
					y,
					width: 320,
					height: 200,
				}}
				dragHandleClassName={'drag'}
				enableResizing={{
					bottomRight: true,
				}}
				resizeHandleClasses={{
					bottomRight: 'resize'
				}}
			>
				<Card style={{ width: '100%', height: '100%', padding: 0 }}>
					<div className='drag'/>
					<CardContent style={{ padding: 5 }}>
						{children}
					</CardContent>
				</Card>
			</Rnd>
		);
	}
}