(function(){
  window.crampons.teeth.JsonReader = function(events){

    var get_handler = function(options){
      var url = options.url;
      var raw_json = window.crampons.get(url);
      options.complete(JSON.parse(raw_json));
    };

    events.subscribe('json_reader:get', get_handler);
  };
}());
