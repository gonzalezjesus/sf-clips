/**
 * These two functions have the same goal - copy a given text to the clipboard. 
 * The first alternative is actually a workaround as the ideal implementation (the second) 
 * doesn't seem to work in LWC when running in Salesforce. It does when running under the 
 * LWC Local Development though. This last one has been left intentionally to illustrate how the 
 * "clipboard API" works. 
 */

 /**
  * To be able to copy the given text to the clipboard, we are using the document.execCommand('copy');
  * function. As you know, it requires a text to be selected beforehand. So, this method appends first
  * an input field to the body, then selects it, then calls the copy funtion and finally removes the 
  * temporary input field from the DOM again. This solution is actually an adaptation of an idea suggested 
  * by "@salesforce-sas" here:
  * https://salesforce.stackexchange.com/questions/272371/interacting-with-the-browser-clipboard-from-lwc
  */
const copyTextToClipboard = (content) => {
	// Create an input field with the minimum size and place in a not visible part of the screen
	let tempInputField = document.createElement('input');
	tempInputField.style = 'position:fixed;top:-5rem;height:1px;width:10px;';

	// assign the content we want to copy to the clipboard to the temporary input field
	tempInputField.value = content;

	// apend it to the body of the page
	let bodyTag = document.getElementsByTagName('body')[0];
	bodyTag.appendChild(tempInputField);

	// Select the content of the temporary input field
	tempInputField.select();
	
	// Run the copy funtion to put the content to the clipboard
	document.execCommand('copy');

	// remove the element from the DOM as it is no longer needed
	tempInputField.remove();
}

// This is the ideal implementation to copy a text to the clipboard. See more here:
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
const copyTextToClipboardStandard = (content) => {
	navigator.permissions.query({name: "clipboard-write"}).then(result => {
		if (result.state == "granted" || result.state == "prompt") {
			navigator.clipboard.writeText(content);
		} else {
			console.log('writting to clipboard not allowed: permissions state = ' + result.state);
		}
	});
}

export { copyTextToClipboard, copyTextToClipboardStandard };