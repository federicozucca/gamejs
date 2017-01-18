var Food = require("../food");
var assert = require("assert");

describe("Food",function(){
  var myFood;

  beforeEach(function(){
    myFood = new Food("haggis", 20)
  })

  it("should give us back the food name", function(){
    assert.equal("haggis",myFood.name);
  })
  
  it("should give us back the food replenishment value", function(){
    assert.equal(20,myFood.replenishmentValue);
  })

})


