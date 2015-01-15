(function(){

  window.crampons.teeth.Renderer = function(events, dom_element, name){

    var complete_if_present = function(options){
      if(options.complete){
        options.complete(dom_element.innerHTML);
      }
    };

    var write = function(options){
      dom_element.innerHTML = options.data.content;
      complete_if_present(options);
    };

    var append = function(options){
      dom_element.innerHTML += options.data.content;
      complete_if_present(options);
    };

    events.subscribe('renderer:write', write);
    events.subscribe('renderer:append', append);

    if(name){
      events.subscribe('renderer:write:' + name, write);
      events.subscribe('renderer:append:' + name, append); 
    }
  };

})();
