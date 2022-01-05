
// hello class

const hellos = document.getElementsByClassName("hello");
//  한번에 많은 데이터를 가져와야하 할 때 
console.log(hellos);

hellos.

const title = document.getElementsByTagName("h1");
console.log(title);
const title = document.querySelector(".hello h1");
// selector 오직 첫번째 것만 가져온다 
// 다 가지고 오고 싶으면 querySelectorAll
// CSS Selector를 사용할수 있다 (".hello h1:frist-child")
//  id 를 찾고 싶다면 querySelector("#hello")
//  getElmentsbyid("hello") 와 차이가 있음 
//  class는 . id는 #
const title = document.querySelector(".div h1");
title.innerText = "hello";

