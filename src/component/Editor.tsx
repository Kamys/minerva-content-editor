import * as React from 'react';
import { Component } from 'react';
import { EditorState } from 'draft-js';
import { Editor as WEditor } from 'react-draft-wysiwyg';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export interface IState {
	editorState: string;
}

export interface IProps {

}

class Editor extends Component<IProps, IState> {

	state: IState = {
		editorState: EditorState.createEmpty(),
	};

	onEditorStateChange = editorState => {
		this.setState({
			editorState,
		});
	}

	render() {

		const { editorState } = this.state;

		return (
			<WEditor
				editorState={editorState}
				wrapperClassName='demo-wrapper'
				editorClassName='demo-editor'
				onEditorStateChange={this.onEditorStateChange}
			/>
		);
	}
}

export default Editor;