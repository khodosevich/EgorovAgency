function submitHandler(e) {
    e.preventDefault();
  
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() { 
      console.log("readyState=", this.readyState, "statis=", this.status);
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
          console.log("SUCCESS", this);
      }
    }
    
    request.open(this.method, this.action, true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    
    var data = new FormData(this);
    for (let key of data.keys())
      console.log(key, data.get(key));
      
    request.send(data);
  }
  
  document.querySelectorAll("form").forEach(form =>
    form.addEventListener("submit", submitHandler)
);