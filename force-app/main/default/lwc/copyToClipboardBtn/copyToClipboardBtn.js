/**
 * This component shows how to use the copyTextToClipboard js component
 * to copy any given text to the user's clipboard.
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