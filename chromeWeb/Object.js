/*const playerName = "nico";
const playerPoints = 121212;
const playerHandsome ="true";
const playerFat = "little bit";*/

// player[0] == name
// player[1] == points

const player = ["nico",1212,false,"little bit"];
//  property를 갖는 object를 만들고 수정하는 것 
const player = {
    name: "nico",
    points: 10,
    fat: true,

};
console.log(player);
console.log(player.name);
console.log(player[name]);
player.fat =false;
player.name
player.points = 15;
// 없데이트 하는 방법 그냥 추가하고 싶은 내용을 쓰면 됨
player.lastname = "potato";

player.points = player.points + 15;