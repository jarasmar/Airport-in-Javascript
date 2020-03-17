'use strict';

function Plane() {}

Plane.prototype.land = function(airport) {
  // plane talk to the airport to ask to land:
  airport.clearForLanding(this);
  this._location = airport;
};

Plane.prototype.takeoff = function() {
  this._location.clearForTakeoff();
};
