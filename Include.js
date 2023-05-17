// Include.js
const UASAPI = 'http://play.magma-mc.net:5555/Accounts/API/';

/**
 * The function makes a web request to a given URL and returns a Promise that resolves to the response text.
 * 
 * @param {string} url The URL of the web page or API endpoint that you want to make a request to.
 * 
 * @returns {Promise<string | null>} A Promise that resolves to the response text or null if no response.
 */
function WebRequest(url) {
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error('Request failed with status: ' + response.status);
      }
    })
    .catch(error => {
      console.error('Request failed:', error);
      return null;
    });
}
