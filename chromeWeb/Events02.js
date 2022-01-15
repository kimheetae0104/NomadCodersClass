const loginForm = document.querySelector("#login-form");
const loginForm =  document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const link = document.querySelector("a");
function onLoginSubmit(event){
    event.preventDefault();
    // const username = loginInput.value;
    // console.log(loginInput.value);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add("hidden");
    paintGreetings(savedUsername);
    // greeting.innerText = `Hello ${username}`; 백틱 기호 (물결아래 있는게 백틱기호 ``)
   
}

function paintGreetings(username){
    greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handLinkClick(event){
    event.preventDefault();
    console.log(event);
    alert("clicked!"); 

}

loginForm.addEventListener("submit", onLoginSubmit);
const savedUsername = localStorage.getItem(USERNAME_KEY);
link.addEventListener("click", handLinkClick);

if(savedUsername == null){
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener("submit", onLoginSubmit);
}else{
  paintGreetings(savedUsername);
}