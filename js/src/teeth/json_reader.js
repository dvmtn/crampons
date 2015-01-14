(function(){
  window.crampons.teeth.JsonReader = function(events){

    var get_handler = function(options){
      var url = options.url;
      window.crampons.get(url, function(response){
        options.complete(JSON.parse(response));
      });
    };

    events.subscribe('json_reader:get', get_handler);
  };
}());
