describe('Collection', function(){

  it("should be defined", function(){
    expect(crampons.teeth.Collection).toBeDefined();
  });

  it("should be able to return a defined collection", function(){
    var events = new crampons.Events();
    var foos = new crampons.teeth.Collection(events, 'foos');
    var complete = jasmine.createSpy('complete');
    events.publish('collection:foos:all',{
      complete: complete
    });
    expect(complete).toHaveBeenCalledWith([]);
  });

  it("should be able to add an item to the collection");

  it("should be able to add multiple items to the collection");

  it("should be able to find and return an item in a collection");

  it("should be able to find a subset of a collection");

  it("should be able to update an item in a collection");

  it("should be able to merge two similar collections");

  it("should be able to find an item by a predefined attribute");

  it("should be able to validate a collection by predefined attribute");
});
