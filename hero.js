var Hero = function(name, health, favFood, attackLevel) {
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.status = "It is a boring day for me";
  this.attackLevel = attackLevel;
}

Hero.prototype = {
  talk: function(){
    return("my name is " + this.name);
  },
  eat: function(food){
    if(food.name===this.favFood){
      var increase = (food.replenishmentValue*1.5)
      this.health+=increase}
    else{
      this.health += food.replenishmentValue}
  },
  kill: function(rat){
    this.status = "Do not touch my food :D"
  },
  fight: function(alien, part){
    if(part === alien.weakpoint){
      alien.health = 0;
    }
    else { alien.health -=this.attackLevel}
  }

};

module.exports = Hero;