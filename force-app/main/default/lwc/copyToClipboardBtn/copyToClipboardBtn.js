/**
 * This component shows how to use the copyTextToClipboard js component
 * to copy any given text to the user's clipboard.
 */

import { LightningElement } from 'lwc';
import { copyTextToClipboard } from 'c/copyTextToClipboard';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CopyToClipboardBtn extends LightningElement {
	_textAreaContent;

	handleClick() {
		copyTextToClipboard(this._textAreaContent || 'Type some text in the text area field...');

		const event = new ShowToastEvent({
			title: 'Text copied',
			message: 'Text copied to the clipboard!',
			variant: 'success'
		});
		this.dispatchEvent(event);
	}

	handleTextAreaChange(event) {
		this._textAreaContent = event.target.value;
	}
}