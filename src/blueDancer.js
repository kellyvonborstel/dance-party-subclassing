var BlueDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this);
  this.$node.addClass('blue-dancer');
};

BlueDancer.prototype = Object.create(Dancer.prototype);
BlueDancer.prototype.constructor = BlueDancer;

BlueDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};
