const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const starts = this.journeys.map((journey) => {
    return journey.startLocation;
  });
  return starts;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const end = this.journeys.map((journey) => {
    return journey.endLocation;
  });
  return end;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  })
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((runningTotal,journey) => {
    return runningTotal + journey.distance
  }, 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const unique = [];
  return this.journeys.forEach((journey) => {
    if (unique.includes(journey.transport) === false){
      unique.push(journey.transport);
    };
  });
  return unique;
};


module.exports = Traveller;
