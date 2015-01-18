(function(){
  window.crampons.teeth.Collection = function(events, name){
    var collection = [];

    var return_all = function(options){
      options.complete(collection);
    };

    events.subscribe('collection:' + name + ':all', return_all);
  };
})();
