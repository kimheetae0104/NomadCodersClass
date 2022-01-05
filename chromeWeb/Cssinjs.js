
// JS로 모든 class name을 변경하지는 않는 것 

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
     h1.classList.toggle("clicked");
}
    
   

//  toggle 이 밑에 있는 코드의 역할을 해줌
//    if(h1.classList.contains(clickedClass)){
//     //    classList 
//        h1.classList.remove(clickedClass);
//    }else{
//        h1.classList.add(clickedClass);
//    }
   
// }

  
    h1.addEventListener("click", handleTitleClick);


