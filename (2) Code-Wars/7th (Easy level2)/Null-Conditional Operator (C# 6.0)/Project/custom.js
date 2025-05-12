Car.prototype.getNumberOfGears = function getNumberOfGears() {
  return engine?.gearBox?.numberOfGears ?? null;
}