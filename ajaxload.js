function loadJSON(url, callback){
  var request = new XMLHttpRequest();
  request.open('GET', url, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      var data = JSON.parse(request.responseText);
      return callback(null, data);
    } else {
      // We reached our target server, but it returned an error
      return callback(new Error('something went wrong'));
    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
    return callback(new Error('something went wrong'));
  };

  request.send();
}