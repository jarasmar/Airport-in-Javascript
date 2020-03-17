'use strict';

function Plane() {}

Plane.prototype.land = function(airport) {
  // plane talk to the airport to ask to land:
  airport.clearForLanding(this);
};
