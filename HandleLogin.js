// handlelogin.js

const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('Token');
Cookies.set("Token", token);