var PinkDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this);
  this.$node.addClass('pink-dancer');
};

PinkDancer.prototype = Object.create(Dancer.prototype);
PinkDancer.prototype.constructor = PinkDancer;

PinkDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};
