var OrangeDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('orange-dancer');
};

OrangeDancer.prototype = Object.create(Dancer.prototype);
OrangeDancer.prototype.constructor = OrangeDancer;

OrangeDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};

OrangeDancer.prototype.grow = function() {
  Dancer.prototype.grow.call(this, '45%', '35%');
};
