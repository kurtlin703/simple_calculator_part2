const fs = require("fs")

class Calculator {
    constructor() {

    }
    add() {
      let result = 0
      for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
      }
      fs.writeFile("simple_calculator_part2", result, (err) => {
          if(err){
              throw "sorry you have a bug in you file", err
          }
      })
      return result;
    }
    multiply(){
        let sum = 1
        for(let i = 0; i < arguments.length; i++){
            sum *= arguments[i]
        }
        fs.writeFile("simple_calculator_part2", sum, (err) => {
            if(err){
                throw "sorry you have a bug in your file ", err
            }
        })
        return sum
    }
    last(){
        fs.readFile("simple_calculator_part2",  (err, data) =>{
            try{
                if(err){
                    throw "file has bug"
                }
                 data = JSON.parse(data)
            

            }catch(err){
                throw err 
            }
            console.log(data)
        })


    }
  }
  let calculator_instance = new Calculator();
  console.log(calculator_instance.add(1,2)) //3
  calculator_instance.last() // 3

  let answer = calculator_instance.last();
  console.log(answer.add(last, 2))
//   console.log(calculator_instance.add(last,2)) //5

//   console.log(calculator_instance.multiply(2,2))
//   console.log(calculator_instance.last("hey"))
  