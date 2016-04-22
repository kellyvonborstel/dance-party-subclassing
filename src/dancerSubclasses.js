// pink dancer subclass
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

// green dancer subclass
var GreenDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('green-dancer');
};

GreenDancer.prototype = Object.create(Dancer.prototype);
GreenDancer.prototype.constructor = GreenDancer;

GreenDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};

GreenDancer.prototype.grow = function() {
  Dancer.prototype.grow.call(this, '43%', '33%');
};

// orange dancer subclass
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

// blue dancer subclass
var BlueDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blue-dancer');
};

BlueDancer.prototype = Object.create(Dancer.prototype);
BlueDancer.prototype.constructor = BlueDancer;

BlueDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};

BlueDancer.prototype.grow = function() {
  Dancer.prototype.grow.call(this, '39%', '29%');
};
