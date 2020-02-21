let Calculator = require("../src/simple_calculator_part2");
let calculator_instance = new Calculator();

describe("calculate the total", function() {
  // beforeEach(() => {
  //   global.Calculator = require("../src/simple_calculator_part2");
    
  // });
  it("Checks if add() is defined", function() {
    expect(calculator_instance.add()).toBeDefined();
  });
  it("Checks if multiply() is defined", function() {
    expect(calculator_instance.multiply()).toBeDefined();
  });
  it("should sum the two numbers", function() {
    expect(calculator_instance.add(0, 0)).toBe(0);
  });
  it("should display the sum", function() {
    expect(calculator_instance.add(1, 2, 3, 4)).toBe(10);
  });
  it("should return 10", function() {
    expect(calculator_instance.add(2, 3, 5)).toBe(10);
  });
  it("should return 8", function() {
    expect(calculator_instance.add(3, 5)).toBe(8);
  });
  it("should give product of two numbers", function() {
    expect(calculator_instance.multiply(1, 2)).toBe(2);
  });
  it("should return 60 ", function() {
    expect(calculator_instance.multiply(30, 2)).toBe(60);
  });
  it("should give the product of the array", function() {
    expect(calculator_instance.multiply(1, 2, 3, 4)).toBe(24);
  });
  it("Should take single number as slot number", function() {
    calculator_instance.add(5, 4);
    expect(calculator_instance.get_slot(1)).toEqual(9);
  });
  it("Should take slot number and add with a number", function() {
    calculator_instance.add(5, 4);
    calculator_instance.get_slot(1);
    expect(calculator_instance.add("slot_1", 2)).toBe(11);
  });
});
