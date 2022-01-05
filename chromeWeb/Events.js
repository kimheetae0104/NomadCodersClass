// console.dir 을 하게 되면 콘솔 내부를 볼 수 있게 됨
const title = document.querySelector("div.hello:first-child h1");
// console.dir(title);
title.style.color = "blue";
// event 란 내가 하는 모든 것들이 event고 그걸 listen 할 수 있음 


// function handleTitleClick(){
//     console.log("title was clicked!");
// }
// // handleTitleClick(); 이 함수가 사용됨 ()남겨둠으로 플레이 할 수 있는 버튼을 남겨둠

// title.addEventListener("click", handleTitleClick);

// handleTitleClick()

// //  찾고 싶은 listen이 있을경우에 h1 html element mdn 을 검색해보기
// //  WebApi 

// console.dir(title); 에서 찾아보기
function handleTitleClick(){
    title.style.color = "blue";
}

function handleMouseEnter(){
      title.innerText = "Mouse is here!";
}
function handleMouseLeave(){
    title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
