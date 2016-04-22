var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<div class="dancer"></div>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  this.step();
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var positionSettings = {
    top: top,
    left: left
  };
  this.$node.css(positionSettings);
};


Dancer.prototype.group = function() {
  var that = this;
  this.$node.fadeOut();

  setTimeout(function() {
    that.$node.css('left', 0);
  },500);

  setTimeout(function() {
    that.$node.fadeIn();
  },1000);
};
 