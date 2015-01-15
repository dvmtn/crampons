(function(){

  window.crampons.teeth.Renderer = function(events, dom_element){
    events.subscribe('renderer:write',function(options){
      dom_element.innerHTML = options.data.content;
    });

    events.subscribe('renderer:append',function(options){
      dom_element.innerHTML += options.data.content;
    });
  };

})();
