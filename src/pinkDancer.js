var PinkDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('pink-dancer');
};

PinkDancer.prototype = Object.create(Dancer.prototype);
PinkDancer.prototype.constructor = PinkDancer;

PinkDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};

PinkDancer.prototype.grow = function() {
  Dancer.prototype.grow.call(this, '38%', '28%');
};
