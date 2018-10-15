import * as React from 'react';
import { Component } from 'react';
import { AppBar, Grid, Toolbar } from '@material-ui/core';
import EditButton from 'src/component/ToolBar/EditButton';

export interface IState {

}

export interface IProps {

}

const editButtons = [
	{cmd:'bold', name:'Bold'},
	{cmd:'italic', name:'Italic'},
	{cmd:'formatBlock', arg:'h1', name:'H1'},
]

class ToolBar extends Component<IProps, IState> {

	state: IState = {};

	render() {
		return (
			<AppBar position='absolute' color='default'>
				<Toolbar>
					<Grid container spacing={16}>
						<Grid item xs={12}>
							<Grid container justify="center" spacing={8}>
								{
									editButtons.map(buttonProps => (
										<Grid item>
											<EditButton {...buttonProps}/>
										</Grid>
									))
								}
							</Grid>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		);
	}
}

export default ToolBar;