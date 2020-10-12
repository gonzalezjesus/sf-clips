/**
 * The navigator clipboard API is not allowed in Lightning. This component is an alternative 
 * that extends an idea sugested by "@salesforce-sas" and others in stackexchange here: 
 * https://salesforce.stackexchange.com/questions/272371/interacting-with-the-browser-clipboard-from-lwc
 * 
 * You learn more about the clipboard API here:
 * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
 */

 /**
  * Import and invoke the copyTextToClipboard method passing the content as param. You can use "\n" to
  * add line breaks to the text. You can see an example of use in the component "copyToClipboardBtn"
  */
const copyTextToClipboard = (content) => {
	// Create an input field with the minimum size and place in a not visible part of the screen
	let tempTextAreaField = document.createElement('textarea');
	tempTextAreaField.style = 'position:fixed;top:-5rem;height:1px;width:10px;';

	// assign the content we want to copy to the clipboard to the temporary input field
	tempTextAreaField.value = content;

	// apend it to the body of the page
	let bodyTag = document.getElementsByTagName('body')[0];
	bodyTag.appendChild(tempTextAreaField);

	// Select the content of the temporary input field
	tempTextAreaField.select();
	
	// Run the copy funtion to put the content to the clipboard
	document.execCommand('copy');

	// remove the element from the DOM as it is no longer needed
	tempTextAreaField.remove();
}

export { copyTextToClipboard };