/**
 * This component is an example of how to use the copyTextToClipboard js component
 * to copy any text in the clipboard.
 */

import { LightningElement } from 'lwc';
import { copyTextToClipboard } from 'c/copyTextToClipboard';

export default class CopyToClipboardBtn extends LightningElement {
	_textAreaContent;

	handleClick() {
		copyTextToClipboard(!this._textAreaContent ? 'Type some text in the text area field...' : this._textAreaContent);
	}

	handleTextAreaChange(event) {
        this._textAreaContent = event.target.value;
    }
}