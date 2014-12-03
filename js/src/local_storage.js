(function(){
  window.crampons.teeth.LocalStorage = function(events){
    var get = function(key){
      return JSON.parse(localStorage.getItem(key));
    };

    var set = function(key, value){
      var string = JSON.stringify(value);
      localStorage.setItem(key, string);
    };

    var get_handler = function(options){
      var value = get(options.key);
      options.complete(value);
    };

    var set_handler = function(options){
      set(options.key, options.value);
    };

    events.subscribe('local_storage:get', get_handler);
    events.subscribe('local_storage:set', set_handler);
  };
}());