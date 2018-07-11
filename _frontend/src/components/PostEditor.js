/* import react modules */
import React, {Component} from 'react';

/* import editor modules */
import Editor, {createEditorStateWithText} from 'draft-js-plugins-editor';
import createInlineToolbarPlugin, {Separator} from 'draft-js-inline-toolbar-plugin';
import {
    ItalicButton,
    BoldButton,
    UnderlineButton,
    CodeButton,
    HeadlineOneButton,
    HeadlineTwoButton,
    HeadlineThreeButton,
    UnorderedListButton,
    OrderedListButton,
    BlockquoteButton,
    CodeBlockButton
} from 'draft-js-buttons';

/* import css modules */
import styled from 'styled-components';
import editorStyles from './css/editorStyles.css';
import 'draft-js-inline-toolbar-plugin/lib/plugin.css';
/*
    # draft-js-image-plugin
    # draft-js-alignment-plugin
    # draft-js-focus-plugin
    # draft-js-drag-n-drop-plugin
    # draft-js-drag-n-drop-upload-plugin
    # draft-js-resizeable-plugin
*/

class HeadlinesPicker extends Component {
    componentDidMount() {
        setTimeout(() => {
            window.addEventListener('click', this.onWindowClick);
        });
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.onWindowClick);
    }

    onWindowClick = () =>
    // Call `onOverrideContent` again with `undefined`
    // so the toolbar can show its regular content again.
    this.props.onOverrideContent(undefined);

    render() {
        const buttons = [HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton];
        return (<div>
            {
                buttons.map((Button, i) => // eslint-disable-next-line
                        <Button key={i} {...this.props}/>)
            }
        </div>);
    }
}

class HeadlinesButton extends Component {
    // When using a click event inside overridden content, mouse down
    // events needs to be prevented so the focus stays in the editor
    // and the toolbar remains visible  onMouseDown = (event) => event.preventDefault()
    onMouseDown = (event) => event.preventDefault()

    onClick = () =>
    // A button can call `onOverrideContent` to replace the content
    // of the toolbar. This can be useful for displaying sub
    // menus or requesting additional information from the user.
    this.props.onOverrideContent(HeadlinesPicker);

    render() {
        return (
            <HeadlineButtonWrapper onMouseDown={this.onMouseDown}>
                <HeadlineButton onClick={this.onClick}>
                    H
                </HeadlineButton>
            </HeadlineButtonWrapper>
        );
    }
}

const inlineToolbarPlugin = createInlineToolbarPlugin({
    structure: [
        BoldButton,
        ItalicButton,
        UnderlineButton,
        CodeButton,
        Separator,
        HeadlinesButton,
        UnorderedListButton,
        OrderedListButton,
        BlockquoteButton,
        CodeBlockButton
    ]
});
const {InlineToolbar} = inlineToolbarPlugin;
const plugins = [inlineToolbarPlugin];
const text = 'In this editor a toolbar shows up once you select part of the text …';

class PostEditor extends Component {

    state = {
        editorState: createEditorStateWithText(text)
    };

    onChange = (editorState) => {
        this.setState({editorState});
    };

    focus = () => {
        this.editor.focus();
    };

    render() {
        return (
            <EditorWrapper onClick={this.focus}>
                <Editor
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                    plugins={plugins}
                    ref={(element) => {
                        this.editor = element;
                    }} />
                <InlineToolbar/>
            </EditorWrapper>);
    }
}
const HeadlineButtonWrapper = styled.div`
    display: inline-block;
`;
const HeadlineButton = styled.button`
    background: #fbfbfb;
    color: #888;
    font-size: 18px;
    border: 0;
    padding-top: 5px;
    vertical-align: bottom;
    height: 34px;
    width: 36px;
    &:hover,
    &:focus {
        background: #f3f3f3;
    }
`;
const EditorWrapper = styled.div`
    box-sizing: border-box;
    border: 1px solid #ddd;
    cursor: text;
    padding: 16px;
    border-radius: 2px;
    margin-bottom: 2em;
    box-shadow: inset 0px 1px 8px -3px #ABABAB;
    background: #fefefe;
    max-width: 600px;
    min-height: 140px;
    &:global(.public-DraftEditor-content) {
        min-height: 140px;
    }
`;

export default PostEditor;
