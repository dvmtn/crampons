(function(){
  window.crampons.teeth.LocalStorage = function(events){
    var get = function(key){
      localStorage.getItem(key);
    };

    var set = function(key, value){
      localStorage.setItem(key, value);
    };

    var get_handler = function(options){
      get(options.key);
    };

    var set_handler = function(options){
      set(options.key, options.value);
    };

    events.subscribe('local_storage:get', get_handler);
    events.subscribe('local_storage:set', set_handler);
  };
}());