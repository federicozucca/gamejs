var Alien = function(name, health, attackLevel, weakpoint) {
  this.name = name;
  this.health = health;
  this.attackLevel = attackLevel;
  this.weakpoint = weakpoint;
}

Alien.prototype = {
  fight: function(hero){
    hero.health -= this.attackLevel;
  }
};

module.exports = Alien;