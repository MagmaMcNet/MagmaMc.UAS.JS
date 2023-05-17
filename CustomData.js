// CustomData.js
class CustomData {
  constructor() {
    this.DevToken = "";
    this.Token = "";
  }
  
  static GetS(DevToken, Token, Filename) {
    return WebRequest(`${UASAPI}CustomData.php?DevToken=${DevToken}&Filename=${Filename}&Token=${Token}`);
  }
  
  static SetS(DevToken, Token, Filename, Data) {
    return WebRequest(`${UASAPI}CustomData.php?DevToken=${DevToken}&Filename=${Filename}&Token=${Token}`);
  }
  
  Get(Filename) {
    return WebRequest(`${UASAPI}CustomData.php?DevToken=${this.DevToken}&Filename=${Filename}&Token=${this.Token}`);
  }
  
  Set(Filename, Data) {
    WebRequest(`${UASAPI}CustomData.php?DevToken=${this.DevToken}&Filename=${Filename}&Token=${this.Token}&Data=${Data}`);
  }
  
  curl_post_async(url, params) {
    const post_params = [];
    
    for (const [key, val] of Object.entries(params)) {
      if (Array.isArray(val)) {
        val = val.join(',');
      }
      
      post_params.push(`${key}=${encodeURIComponent(val)}`);
    }
    
    const post_string = post_params.join('&');
    
    const parts = new URL(url);
    
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status !== 200) {
          console.error('Request failed with status:', xhr.status);
        }
      }
    };
    xhr.send(post_string);
  }
}

const CustomDataInstance = new CustomData();
