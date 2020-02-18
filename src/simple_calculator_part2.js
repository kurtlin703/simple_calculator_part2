// const fs = require("fs")
let array = [],
LAST = 0 

class Calculator {
    constructor() {
    }

    add() {
      let result = 0;   
      for (let i = 0; i < arguments.length; i++) {             
        result += arguments[i];
      }
      array.push(result)
      return result;
    }

    multiply(){
        let sum = 1
        for(let i = 0; i < arguments.length; i++){
            sum *= arguments[i]
        }
        array.push(sum)
        return sum
    }

    last(){
        LAST = array[array.length - 1 ]
        return  LAST
    }
    set_slot(num1){
        

    }
    get_slot(){
        return
    }



  }
  let calculator_instance = new Calculator();
  
  console.log(calculator_instance.add(1,2))  //3
  console.log(calculator_instance.last(), "the last results ") // 3
  console.log(calculator_instance.add(LAST, 3, "should get 6"));
  
