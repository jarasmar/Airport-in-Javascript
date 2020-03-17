'use strict';

describe('Plane', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    // Jasmine Mocking, creates a double of a different class //
    airport = jasmine.createSpyObj('airport', ['clearForLanding', 'clearForTakeoff']);
  });

  it('can land at an airport', function() {
    // stubbing the outgoing interaction from plane to airport
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

  it('can takeoff from an airport', function() {
    plane.land(airport);
    plane.takeoff();
    expect(airport.clearForTakeoff).toHaveBeenCalled();
  });
});
