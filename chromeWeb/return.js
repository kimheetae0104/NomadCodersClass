
// return 
//  calculator 를 쓰지 말아
const calculator = {
    plus: function(a , b){
        return a + b ;
    },
    min: function(a,b){
        return a -b ;
    },
    divide: function(a , b){
        return a /b ;
    },
    power: function(a, b){
        return a**b;
    },

};

const plusResult = calculator.plus(2,3);
const minResult = calculator.min(plusResult, 10);
const divideResult = calculator.divide(10, plusResult);
const powerResult = calculator.power(divideResult,minResult);

// 함수는 어떤 일을 수행하고 그 결과를 알려주는 것이라고 생각해보자
// return 을 하게 되면 96이라는 숫자가 calculatorKrAge(96) 으로 들어가고 ageOfForeigner 자리에 96이 들어가고 ageOfForeigner 자리에 96이 들어가서 결과는 98이 됨return t ag= 96;
function calculatorKrAge(ageOfForeigner){
 return  ageOfForeigner+2;
}

const krAge = calculatorKrAge(age);
console.log(krAge);