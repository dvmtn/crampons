describe("Rest", function(){

  it('is defined', function(){
    expect(window.crampons.rest).toBeDefined();
  });

  describe("get", function(){
    var xhr_stub, options, complete_function, error_function;

    beforeEach(function() {
      xhr_stub = jasmine.createSpyObj('xhr', ['open', 'setRequestHeader', 'send']);
      spyOn(window, 'XMLHttpRequest').and.callFake(function(){
        return xhr_stub;
      });
      complete_function = jasmine.createSpy('complete_function');
      error_function = jasmine.createSpy('error_function');
      options = {
        complete: complete_function,
        on_error: error_function
      };
    });

    it('makes builds an XHR call', function(){
      window.crampons.rest.get('some_url');
      expect( xhr_stub.open ).toHaveBeenCalledWith('GET', 'some_url');
      expect( xhr_stub.send ).toHaveBeenCalledWith(null);
    });

  });
});
