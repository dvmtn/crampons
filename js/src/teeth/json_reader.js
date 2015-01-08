(function(){
  window.crampons.teeth.JsonReader = function(events){

    var get_handler = function(options){
      var xhr = window.crampons.Rest.get(options.url, options);
      options.complete(JSON.parse(xhr.response));
    };

    events.subscribe('json_reader:get', get_handler);
  };
}());
