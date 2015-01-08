(function(){
  // Based on https://github.com/remy/min.js/

  var request = function(type, url, opts) {
    var xhr = new XMLHttpRequest();
    var payload = null;
    var options = opts || {};

    xhr.open(type, url);

    if (type === 'POST' && options.payload) {
      payload = JSON.stringify(options);
      xhr.setRequestHeader('Content-Type', 'application/json');
    }

    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    xhr.send(payload);

    return xhr;
  };

  window.crampons.Rest = {
    get: request.bind(this, 'GET'),
    post: request.bind(this, 'POST')
  };
})();
