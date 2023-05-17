// Include.js
// Assuming it contains the WebRequest function implementation

// UserData.js
class UserData {
  static Login(callback) {
    if (!document.cookie.includes("Token")) {
      window.location.href = `https://accounts.magma-mc.net/Account.php?login&Callback=${callback}`;
      return;
    }
    
    const userData = UserData.GetUserData(Cookies.get("Token"));
    if (userData === null) {
      window.location.href = `https://accounts.magma-mc.net/Account.php?login&Callback=${callback}`;
      return;
    }
  }
  
  static GetUserData(token) {
    return WebRequest(`${UASAPI}UserData.php?Token=${token}`);
  }
  
  static GetToken(username, password) {
    return WebRequest(`${UASAPI}Token.php?Username=${username}&Password=${password}`);
  }
}

const UserDataInstance = new UserData();
