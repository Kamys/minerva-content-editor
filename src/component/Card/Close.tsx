import * as React from 'react';
import { StatelessComponent } from 'react';

import './Close.css';
import { IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Close';

export interface IProps {
	onClick: () => void;
}

const Close: StatelessComponent<IProps> = props => {
	const { onClick } = props;
	return (
		<IconButton onClick={onClick} className='close-classic' aria-label="Delete">
			<DeleteIcon />
		</IconButton>
	);
}

export default Close;