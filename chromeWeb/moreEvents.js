const h1 = document.querySelector("div.hello:first-child h1");


function handleTitleClick(){
    h1.style.color = "blue";
}
function handleMouseEnter(){
     h1.innerText = "Mouse is here!";
}
function handleMouseLeave(){
    h1.innerText = "Mouse is gone!";
}
function handleWidowResize(){
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy(){
    alert("copier!");
}
function handleWindowOnline(){
    alert("All Good!");
}
function handleWindowOffline(){
    alert("SOS no WIFI");
}
h1.onclick = handleTitleClick;
h1.onmouseenter = handleMouseEnter;
h1.addEventListener("mouseleave", handleMouseLeave);


window.addEventListener("resize", handleWidowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("online", handleWindowOnline);
window.addEventListener("offline", handleWindowOffline);