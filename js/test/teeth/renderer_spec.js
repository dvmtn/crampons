describe("renderer", function(){
  it("is defined", function(){
    expect(window.crampons.teeth.Renderer).toBeDefined();
  });

  var events, dom_element, renderer;
  beforeEach(function(){
    events = new crampons.Events();
    dom_element = document.createElement('span');
    renderer = new crampons.teeth.Renderer(events, dom_element);
  });

  it("should write to the dom element", function(){

    events.publish('renderer:write', {
      data:{
        content: 'foo'
      }
    });

    expect(dom_element.innerHTML).toEqual('foo');
  });

  it("should append content to the dom element", function(){
    dom_element.innerHTML = 'foo';

    events.publish('renderer:append',{
      data:{
        content: 'bar'
      }
    });

    expect(dom_element.innerHTML).toEqual('foobar');
  });
});
