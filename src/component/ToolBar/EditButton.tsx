import * as React from 'react';
import { Button } from '@material-ui/core';

export interface IProps {
	cmd: string;
	name: string;
	arg?: string;
}

function EditButton(props: IProps) {

	const onClick = event => {
		event.preventDefault();
		document.execCommand(props.cmd, false, props.arg);
	}

	return (
		<Button
			key={props.cmd}
			onClick={onClick}
			variant='contained'
		>
			{props.name || props.cmd}
		</Button>
	);
}

export default EditButton;