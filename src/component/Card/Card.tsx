import * as React from 'react';
import { StatelessComponent } from 'react';
import { connect } from 'react-redux';
import { IReduxState } from 'src/store/rootState'
import ContentEditable from 'react-contenteditable'
import { RndCard } from 'src/component/RndCard'
import { ICard } from 'src/component/Card/Interface'
import Close from 'src/component/Card/Close'

export interface IState {

}

export interface IProps extends ICard {
	onChangeBody: (event) => void;
	onClose: () => void;
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

const Card: StatelessComponent<IProps> = props => {

	const {body, id, x, y, onChangeBody, onClose} = props;

	return (
		<RndCard
			key={id}
			x={x}
			y={y}
		>
			<Close  onClick={onClose}/>
			<ContentEditable
				html={body}
				disabled={false}
				onChange={onChangeBody}
				tagName='article'
			/>
		</RndCard>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)