var GreenDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('green-dancer');
};

GreenDancer.prototype = Object.create(Dancer.prototype);
GreenDancer.prototype.constructor = GreenDancer;

GreenDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};
