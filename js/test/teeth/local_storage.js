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
    });

    it('it calls localStorage.getItem', function(){
      spyOn(window.localStorage, 'getItem');
      this.events.publish('local_storage:get', {
        key: 'foo'
      });
      expect( localStorage.getItem ).toHaveBeenCalledWith('foo');
    });

    it('it calls localStorage.setItem', function(){
      spyOn(window.localStorage, 'setItem');
      this.events.publish('local_storage:set', {
        key: 'foo',
        value: 'bar'
      });
      expect( localStorage.setItem ).toHaveBeenCalledWith('foo', 'bar');
    });
  });
});