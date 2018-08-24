import { Component } from 'react';
import * as React from 'react';
import { Rnd } from 'react-rnd';
import { Card, CardContent } from '@material-ui/core';

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
			>
				<Card style={{ width: '100%', height: '100%' }}>
					<CardContent>
						{children}
					</CardContent>
				</Card>
			</Rnd>
		);
	}
}