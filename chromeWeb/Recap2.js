//  player에서 item을 가져오는 방법을 배움 
//  콘솔에서 object(객체)에 대해 써져있음 우리가 만든 콘솔과 같다 

const player = {
    name: "Nico",
    age = 94,

};
console.log(player);
player.name="nicolas";
console.log (player);
player.sexy = "soon";
console.log (player,console);

// function 특정 input을 기반으로 반복해서 하게 만듬 

function plus(a, b){
    console.log(a + b);
}
// function 안에 미리 데이터를 넣어두는 것보다 function 밖에서  data를 넣을 수 있게 하는 것이 훨씬 나음
//  function () -> place holder 라고 데이터 값을 갖는 자리 첫번째 argument 만 계산을 한다 (10,20,30,190,39) 에서 10만 받아서 계산함 
plus(4,16);

function minusFive(potato){
    console.log(potato-5);
}
console.log(potato);

minusFive(10, 10,12,34,4,5,6,3);

const player ={
    add: function(a,b){
        console.log(a,b);
    },
};

calculater.add(5,1);
