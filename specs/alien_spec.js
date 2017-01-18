var Hero = require("../hero");
var Alien = require("../alien");
var assert = require("assert");

describe("Alien",function(){
  var myHero;
  var myAlien;

  beforeEach(function(){
    myHero = new Hero("Fede", 100, "pizza",10);
    myAlien = new Alien("Gino",50 , 20, "head");
  });

  it("should give us back the Alien name", function(){
    assert.equal("Gino",myAlien.name);
  })

  it("should give us back the Alien health", function(){
    assert.equal(50,myAlien.health);
  })

 it("should give us back the Alien attack level", function(){
   assert.equal(20,myAlien.attackLevel);
 })

 it("should give us back the Alien weakPoint", function(){
   assert.equal("head",myAlien.weakpoint);
 })

 it("should give us back the Alien weakPoint", function(){
  myAlien.fight(myHero);
   assert.equal(80,myHero.health);
 })

})


