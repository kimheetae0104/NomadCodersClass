// function 계속해서 반복해서 쓸수 있는 코드 조각
// 어떤코드를 캡슐화해서 반복해서 사용할수 있게 만들어준다
// function을 만드는 방법
//  데이터가 필요할 경우 () 안에 넣어주면 되는 거임
function sayHelle(nameOfPerson, age){
    // 코드 블록이라는 것을 만들거임
    console.log("Hello my name is "+ nameOfPerson+" and I'm "+ age);
}
sayHelle();

console.log("hello");
sayHelle("nico", 10);
sayHelle("dal" , 23);
sayHelle("lynn" , 27);

// function plus()
function plus(firtstNumber, SecondNumber){
    console.log(firtstNumber + SecondNumber);
}
function divide(a, b){
    console.log(a / b);

}
plus(8, 60);
divide(95, 5);





const player = {
    naem: "nico",
    sayHelle: function(otherPersonName){
        console.log("hello!" + otherPersonName + " nice to meet you!");
    },
};


player.sayHelle("nico");