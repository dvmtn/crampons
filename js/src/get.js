window.crampons.get = function(url, complete, error){
  var request = new XMLHttpRequest();
  request.open('GET', url, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var data = request.responseText;
      complete(data);
    }
  };

  request.onerror = function() {
    if(error){
      error(request);
    }
  };

  request.send();
};
