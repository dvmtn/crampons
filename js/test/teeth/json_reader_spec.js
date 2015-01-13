describe("JsonReader", function(){
  beforeEach(function(){
    this.events = new window.crampons.Events();
  });

  it('is defined', function(){
    expect(window.crampons.teeth.JsonReader).toBeDefined();
  });

  it('is instantiated with an events object', function(){
    var json_reader = new window.crampons.teeth.JsonReader(this.events);
    expect(json_reader).toBeDefined();
  });

  describe("on a get event", function(){
    var stub_get_to_respond = function(response){
      window.crampons.get = jasmine.createSpy('get').and.returnValue(response);
    };

    beforeEach(function(){
      this.json_reader = new window.crampons.teeth.JsonReader(this.events);

      this.options = {
        url: 'example.json',
        complete: jasmine.createSpy('complete_function')
      };
    });

    it('passes the value from a GET to the complete callback', function(){
      stub_get_to_respond('"bar"');
      this.events.publish('json_reader:get', this.options);
      expect( this.options.complete ).toHaveBeenCalledWith('bar');
    });

    it('JSON parses the response', function(){
      stub_get_to_respond('{"foo":"bar"}');
      this.events.publish('json_reader:get', this.options);
      expect( this.options.complete ).toHaveBeenCalledWith({ foo: 'bar' });
    });
  });
});
