/*
    # draft-js-image-plugin
    # draft-js-alignment-plugin
    # draft-js-focus-plugin
    # draft-js-drag-n-drop-plugin
    # draft-js-drag-n-drop-upload-plugin
    # draft-js-resizeable-plugin
*/

/* import react modules */
import React, {Component} from 'react';
import PostEditorTitle from '../components/PostEditorTitle';
import { Create } from '@material-ui/icons';

/* import editor modules */
import {stateToHTML} from 'draft-js-export-html';
import {convertFromRaw, EditorState} from 'draft-js';
import Editor, {composeDecorators, createEditorStateWithText} from 'draft-js-plugins-editor';
import createInlineToolbarPlugin, {Separator} from 'draft-js-inline-toolbar-plugin';
import createFocusPlugin from 'draft-js-focus-plugin';
import createSideToolbarPlugin from 'draft-js-side-toolbar-plugin';
import createDividerPlugin from 'draft-js-divider-plugin';

import BlockTypeSelect from 'draft-js-side-toolbar-plugin/lib/components/BlockTypeSelect';
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
import 'draft-js-inline-toolbar-plugin/lib/plugin.css';
import 'draft-js-divider-plugin/lib/plugin.css';
import 'draft-js-side-toolbar-plugin/lib/plugin.css';
import 'draft-js-focus-plugin/lib/plugin.css';

const focusPlugin = createFocusPlugin();
const decorator = composeDecorators(focusPlugin.decorator);
const dividerPlugin = createDividerPlugin({decorator});

const DefaultBlockTypeSelect = ({getEditorState, setEditorState, theme}) =>
    (<BlockTypeSelect
        getEditorState={getEditorState}
        setEditorState={setEditorState}
        theme={theme}
        structure={[dividerPlugin.DividerButton]}
    />);
const sideToolbarPlugin = createSideToolbarPlugin({structure: [DefaultBlockTypeSelect]});
const {SideToolbar} = sideToolbarPlugin;
const initialState = {
    entityMap: {
        '0': {
            type: 'divider',
            mutability: 'IMMUTABLE',
            data: {}
        }
    },
    blocks: [
        {
            key: '9gm3s',
            text: '',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {}
        }, {
            key: 'ov7r',
            text: ' ',
            type: 'atomic',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [
                {
                    offset: 0,
                    length: 1,
                    key: 0
                }
            ],
            data: {}
        }
    ]
};
class HeadlinesPicker extends Component {
    componentDidMount() {
        setTimeout(() => {
            window.addEventListener('click', this.onWindowClick);
        });
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.onWindowClick);
    }

    onWindowClick = () => this.props.onOverrideContent(undefined);

    render() {
        const buttons = [HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton];
        return (<div>
            {buttons.map((Button, i) => <Button key={i} {...this.props}/>)}
        </div>);
    }
}

class HeadlinesButton extends Component {
    onMouseDown = (event) => event.preventDefault();

    onClick = () => this.props.onOverrideContent(HeadlinesPicker);

    render() {
        return (<HeadlineButtonWrapper onMouseDown={this.onMouseDown}>
            <HeadlineButton onClick={this.onClick}>
                H
            </HeadlineButton>
        </HeadlineButtonWrapper>);
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
const plugins = [focusPlugin, dividerPlugin, sideToolbarPlugin, inlineToolbarPlugin];

class PostEditor extends Component {
    state = {
        title: '',
        editorState: EditorState.createWithContent(convertFromRaw(initialState))
    };

    onChange = (editorState) => {
        this.setState({
            editorState
        });
        console.log(stateToHTML(this.state.editorState.getCurrentContent()));
    };

    focus = () => {
        this.editor.focus();
    };

    _handleOnTitleChanged = (e) => {
        this.setState({
            title: e.target.value
        })
        console.log(this.state);
    }
    _onUpload = () => {
        const data = JSON.stringify({
            "title": this.state.title,
            "contents": stateToHTML(this.state.editorState.getCurrentContent())
       });
        fetch('http://localhost:3001/api/post/write', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: data
        })
    }
    render() {
        return (
            <Constainer>
                <PostEditorTitle
                    title={this.state.title}
                    handleOnChanged={this._handleOnTitleChanged} />
                <EditorWrapper onClick={this.focus}>
                    <Editor
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                        plugins={plugins}
                        ref={(element) => {
                            this.editor = element;
                        }}
                    />
                    <InlineToolbar />
                    <SideToolbar />
                </EditorWrapper>
                <PostUploadButton onClick={this._onUpload}>
                    <Create /><span>글 쓰기</span>
                </PostUploadButton>
            </Constainer>
        );
    }
}
const Constainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 600px;
    margin-top: 20px;
`;

const PostUploadButton = styled.button`
    width: 300px;
    cousor: pointer;
    background-color: #fff;
    -webkit-appearance: none;
    cursor: pointer;
    &:active,
    &:focus {
        outline: none;
    }
`;

const HeadlineButtonWrapper = styled.div `
    display: inline-block;
`;
const HeadlineButton = styled.button `
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
const EditorWrapper = styled.div `
    box-sizing: border-box;
    border: 1px solid #ddd;
    cursor: text;
    padding: 16px;
    border-radius: 2px;
    margin-bottom: 2em;
    box-shadow: inset 0px 1px 8px -3px #ABABAB;
    background: #fefefe;
    min-width: 600px;
    min-height: 140px;
    &:global(.public-DraftEditor-content) {
        min-height: 140px;
    }
`;

export default PostEditor;
