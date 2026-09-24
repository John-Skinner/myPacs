
var messageTimeoutTimer = null;
var ohifChannel = null;
const requestMessage = 'save-results begin';

// This function receives the message that the structured report
// has been saved and close can continue.
const  handleOhifCloseMessage = (event) => {
    const expectedResponse = 'save-results complete'
    if (event.data.startsWith(expectedResponse)) {

        clearTimeout(messageTimeoutTimer);
        handleOhifCloseMessage.resolve(event.data);
    }

}
// sendHandshakeMessage performs a hand-shaked message to the
// window containing the viewwer.  It is used to perform
// autoSave for recording annotations before the viewer is closed.
export function sendHandshakeMessage(frameWindow,delay ) {
    return new Promise((resolve,fail ) => {
        if (ohifChannel === null) {
            ohifChannel = new BroadcastChannel('SainceOhifChannel');
        }
        if (messageTimeoutTimer) {

            clearTimeout(messageTimeoutTimer);
            messageTimeoutTimer = null;
        }
        messageTimeoutTimer = setTimeout(() => {
            fail('timed-out');

        },delay);
        handleOhifCloseMessage.resolve = resolve;
        frameWindow.addEventListener('message', handleOhifCloseMessage);

        frameWindow.postMessage(requestMessage,"*");
    })
}
