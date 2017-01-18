var Hero = require("../hero");
var Food = require("../food");
var Rat = require("../rat");
var Alien = require("../alien");
var assert = require("assert");

describe("Hero",function(){
  var myHero;
  var myFood;
  var myFavFood;
  var myRat;
  var myAlien

  beforeEach(function(){
    myHero = new Hero("Fede", 100, "pizza",10);
    myFood = new Food("haggis", 20);
    myFavFood = new Food("pizza", 10);
    myRat = new Rat("Miky");
    myAlien = new Alien("Gino",50 , 20, "head");
  });

  it("should give us back the hero name", function(){
    assert.equal("Fede",myHero.name);
  })

  it("should give us back the hero health", function(){
    assert.equal(100,myHero.health);
  })

  it("should give us back the hero favourite food", function(){
    assert.equal("pizza",myHero.favFood);
  })

  it("hero can talk", function(){
    assert.equal("my name is Fede",myHero.talk());
  })

  it("hero can eat increasing his health", function(){
    myHero.eat(myFood);
    assert.equal(120,myHero.health);
  })

  it("hero if eat his fav food his health groes up to 1.5 times the value of favFood", function(){
    myHero.eat(myFavFood);
    assert.equal(115,myHero.health);
  })

  it("hero if eat food poisoned his health decrease", function(){
    myRat.touch(myFood);
    myHero.eat(myFood);
    assert.equal(80,myHero.health);
  })

  it("hero status change if he kill the rat", function(){
    myHero.kill(myRat);
    assert.equal("Do not touch my food :D",myHero.status);
  })

  it("hero attack alien decreasing by 10 the enemy's health", function(){
    myHero.fight(myAlien,"leg");
    assert.equal(40,myAlien.health);
  })

  it("hero kill alien hitting weakpoint", function(){
    myHero.fight(myAlien,"head");
    assert.equal(0,myAlien.health);
  })

})


