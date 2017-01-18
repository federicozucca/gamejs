var Food = require("../food");
var Rat = require("../rat");
var assert = require("assert");

describe("Rat",function(){
  var myRat;
  var myFood;

  beforeEach(function(){
    myRat = new Rat("Miky")
    myFood = new Food("haggis", 20)

  })

  it("should give us back the rat name", function(){
    assert.equal("Miky",myRat.name);
  })

  it("should give a negative value of the food", function(){
    myRat.touch(myFood);
    assert.equal(-20,myFood.replenishmentValue);
  })

})
