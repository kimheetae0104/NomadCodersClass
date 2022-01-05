

// prompt 는 유저에게 창을 띄울 수 있게 해줌 잘 안쓰는 이유는 안이쁨 아주 오래된 구현방식 브라우저에 직관적으로 보여주는 역할
//  type 을 받아서 다른 type으로 바꾸는 방법 parseInt()
//  typeof 는 type을 알게해줌


const age = prompt("How old are you?");
// console.log(typeof "15", typeof parseInt("15"));
console.log(age, parseInt(age));

const age = parseInt(prompt("How old are you?"));
console.log(age);

console.log(isNaN(age));

// const age = NaN;


if(isNaN(age || age < 0)){
    // condition === true
    console.log("Please write a real positive number");
}else if(age< 18){
    // condition == false
    console.log("You are too young.");
}else if(age >=18 && age <=50){
    console.log("You can drink");
}else if( age>50 && age<80){
    console.log("You should excecise");
}else {
    console.log("You can do whatever you want");
}