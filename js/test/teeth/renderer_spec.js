describe("renderer", function(){
  var context = describe;

  it("is defined", function(){
    expect(window.crampons.teeth.Renderer).toBeDefined();
  });

  context("for a single instance", function(){
    var events, dom_element, renderer, complete;

    beforeEach(function(){
      events = new crampons.Events();
      dom_element = document.createElement('span');
      renderer = new crampons.teeth.Renderer(events, dom_element);
      complete = jasmine.createSpy('complete');
    });

    it("should write to the dom element", function(){

      events.publish('renderer:write', {
        data:{
          content: 'foo'
        }
      });

      expect(dom_element.innerHTML).toEqual('foo');
    });

    it("should use a callback for write should one be provided", function(){

      events.publish('renderer:write', {
        data:{
          content: 'bar'
        },
        complete: complete
      });

      expect(complete).toHaveBeenCalledWith('bar');
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

    it("should use a callback for append should one be provided", function(){

      events.publish('renderer:append', {
        data:{
          content: 'bar'
        },
        complete: complete
      });

      expect(complete).toHaveBeenCalledWith('bar');
    });
  });

  context("for multiple instances", function(){
    var dom_element_1, dom_element_2, events, renderer_1, renderer_2, complete;

    beforeEach(function(){
      dom_element_1 = document.createElement('span');
      dom_element_2 = document.createElement('div');
      events = new crampons.Events();
      renderer_1 = crampons.teeth.Renderer(events, dom_element_1, 'one');
      renderer_2 = crampons.teeth.Renderer(events, dom_element_2, 'two');
      complete = jasmine.createSpy('complete');
    });

    it('should append to all bound renderers', function(){
      dom_element_1.innerHTML = 'baz';
      dom_element_2.innerHTML = 'qux';

      events.publish('renderer:append',{
        data:{
          content: 'foo'
        }
      })

      expect(dom_element_1.innerHTML).toEqual('bazfoo');
      expect(dom_element_2.innerHTML).toEqual('quxfoo');
    });

    it("should call an append callback for each renderer", function(){
      dom_element_1.innerHTML = 'baz';
      dom_element_2.innerHTML = 'qux';

      events.publish('renderer:append', {
        data:{
          content: 'foo'
        },
        complete: complete
      });

      expect(complete).toHaveBeenCalledWith('bazfoo');
      expect(complete).toHaveBeenCalledWith('quxfoo');
    });


    it('should write to all bound renderers', function(){
      dom_element_1.innerHTML = 'baz';
      dom_element_2.innerHTML = 'baz';

      events.publish('renderer:write',{
        data:{
          content: 'foo'
        }
      })

      expect(dom_element_1.innerHTML).toEqual('foo');
      expect(dom_element_2.innerHTML).toEqual('foo');
    });

    it("should call a write callback for each renderer", function(){

      events.publish('renderer:write', {
        data:{
          content: 'bar'
        },
        complete: complete
      });

      expect(complete).toHaveBeenCalledWith('bar');
      expect(complete).toHaveBeenCalledWith('bar');
    });

    it('should only append to the named renderer', function(){

      dom_element_1.innerHTML = 'baz';
      dom_element_2.innerHTML = 'bar';

      events.publish('renderer:append:one',{
        data:{
          content: 'foo'
        }
      })

      expect(dom_element_1.innerHTML).toEqual('bazfoo');
      expect(dom_element_2.innerHTML).toEqual('bar');
    });

    it('should only call the append complete callback from the named renderer', function(){

      dom_element_1.innerHTML = 'baz';
      dom_element_2.innerHTML = 'qux';

      events.publish('renderer:append:one',{
        data:{
          content: 'foo'
        },
        complete: complete
      })

      expect(complete).toHaveBeenCalledWith('bazfoo');
      expect(complete.calls.count()).toEqual(1);
    });

    it('should only write to the named renderer', function(){

      dom_element_1.innerHTML = 'baz';
      dom_element_2.innerHTML = 'baz';

      events.publish('renderer:write:one',{
        data:{
          content: 'foo'
        }
      })

      expect(dom_element_1.innerHTML).toEqual('foo');
      expect(dom_element_2.innerHTML).toEqual('baz');
    });

    it('should only call the write complete callback from the named renderer', function(){

      dom_element_1.innerHTML = 'baz';
      dom_element_2.innerHTML = 'qux';

      events.publish('renderer:write:one',{
        data:{
          content: 'foo'
        },
        complete: complete
      })

      expect(complete).toHaveBeenCalledWith('foo');
      expect(complete.calls.count()).toEqual(1);
    });
  });
});
