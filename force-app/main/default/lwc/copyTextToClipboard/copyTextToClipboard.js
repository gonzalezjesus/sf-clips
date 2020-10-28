/**
 * The navigator clipboard API seems not to be available in Lightning. This component offers an alternative 
 * to programatically put some text in the user's clipboard. This solution extends an idea sugested by 
 * "@salesforce-sas" and others in stackexchange you can find here: 
 * https://salesforce.stackexchange.com/questions/272371/interacting-with-the-browser-clipboard-from-lwc
 * 
 * You can learn more about the clipboard API here:
 * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
 */

/**
 * Import and invoke the copyTextToClipboard method passing the content you want to put in the clipboard as param. 
 * You can use "\n" to add line breaks to the text. You can also see an example this in the component "copyToClipboardBtn".
 */
const copyTextToClipboard = (content) => {
	// Create an input field with the minimum size and place in a not visible part of the screen
	let tempTextAreaField = document.createElement('textarea');
	tempTextAreaField.style = 'position:fixed;top:-5rem;height:1px;width:10px;';

	// Assign the content we want to copy to the clipboard to the temporary text area field
	tempTextAreaField.value = content;

	// Append it to the body of the page
	document.body.appendChild(tempTextAreaField);

	// Select the content of the temporary markup field
	tempTextAreaField.select();

	// Run the copy function to put the content to the clipboard
	document.execCommand('copy');

	// Remove the temporary element from the DOM as it is no longer needed
	tempTextAreaField.remove();
}

export { copyTextToClipboard };