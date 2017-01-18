var Rat = function(name) {
  this.name = name;
}

Rat.prototype = {
  touch: function(food){
    food.replenishmentValue *= -1;
  }
};

module.exports = Rat;



// Rats should be able to touch food, if they do the food becomes poisonous.
// Heroes that eat poisonous food should lose health.
// E. Be creative. Extend the game! Give the hero super powers. Bring a baddy into it who takes over the world.