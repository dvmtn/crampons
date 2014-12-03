describe("LocalStorage", function(){
  beforeEach(function(){
    this.events = new window.crampons.Events();
  });

  it('is defined', function(){
    expect(window.crampons.teeth.LocalStorage).toBeDefined();
  });

  it('is instantiated with an events object', function(){
    var localstorage = new window.crampons.teeth.LocalStorage(this.events);
    expect(localstorage).toBeDefined();
  });

  describe("on the get event", function(){
    beforeEach(function(){
      this.localstorage = new window.crampons.teeth.LocalStorage(this.events);
      this.options = {
        key: 'foo',
        complete: function(){}
      };
    });

    it('it calls localStorage.getItem', function(){
      spyOn(window.localStorage, 'getItem').and.returnValue(null);
      this.events.publish('local_storage:get', this.options);
      expect( localStorage.getItem ).toHaveBeenCalledWith('foo');
    });

    it('it returns the value from local storage to a complete callback', function(){
      spyOn(window.localStorage, 'getItem').and.returnValue('"bar"');
      spyOn(this.options, 'complete');
      this.events.publish('local_storage:get', this.options );
      expect( this.options.complete ).toHaveBeenCalledWith('bar');
    });

    it('it parses stringified json', function(){
      spyOn(window.localStorage, 'getItem').and.returnValue('{"foo":"bar"}');
      spyOn(this.options, 'complete');
      this.events.publish('local_storage:get', this.options );
      expect( this.options.complete ).toHaveBeenCalledWith({ foo: 'bar' });
    });
  });

  describe("on the set event", function(){
    beforeEach(function(){
      this.localstorage = new window.crampons.teeth.LocalStorage(this.events);
      this.options = {
        key: 'foo',
        value: 'bar'
      };
      this.json_options = {
        key: 'json',
        value: {
          bar: 'baz'
        }
      }
    });

    it('it calls localStorage.setItem', function(){
      spyOn(window.localStorage, 'setItem');
      this.events.publish('local_storage:set', this.options);
      expect( localStorage.setItem ).toHaveBeenCalledWith('foo', '"bar"');
    });

    it('it stringifies json on the way in', function(){
      spyOn(window.localStorage, 'setItem');
      this.events.publish('local_storage:set', this.json_options);
      expect( localStorage.setItem ).toHaveBeenCalledWith('json', '{"bar":"baz"}');
    });
  });
});