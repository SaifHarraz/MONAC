var themelist =document.getElementById("themelist");
var themebutton=document.getElementById("themebutton");
var theme1=document.getElementById("theme1");
var theme2=document.getElementById("theme2");
var theme3=document.getElementById("theme3");
var themeicon=document.getElementById("themeicon") ;//displayedalways;
var all=document.querySelectorAll("*");
var colorsbutton=document.getElementById("colorsbutton");
var colorslist=document.getElementById("colorslist");
var primarycolor=document.getElementById("primarycolor");
var colorsdone=document.getElementById("colorsdone");
var colorsreset=document.getElementById("colorsreset");
var Xmark=document.getElementById("Xmark");
var Pdefaultprimarycolor=document.getElementById("defaultprimarycolor") ;
var Pdefaultsecondarycolor=document.getElementById("defaultsecondarycolor"); 

var mainbg=document.getElementById("mainbg");
var maintext=document.getElementById("maintext");
//initial values 
Pdefaultprimarycolor.innerHTML=mainbg.value;
Pdefaultsecondarycolor.innerHTML=maintext.value;
// update p when change
function changePprimary() {
   
    Pdefaultprimarycolor.innerHTML = mainbg.value;
    document.documentElement.style.setProperty("--main-bg",mainbg.value);
    document.documentElement.style.setProperty("--sub1-bg",mainbg.value);
    document.documentElement.style.setProperty("--sub2-bg",mainbg.value);
    document.documentElement.style.setProperty("--sub3-bg",mainbg.value);
    document.documentElement.style.setProperty("--clr-1",mainbg.value);
}
function changePsecondary() {
    Pdefaultsecondarycolor.innerHTML = maintext.value;
    document.documentElement.style.setProperty("--main-text",maintext.value);
    document.documentElement.style.setProperty("--sub1-text",maintext.value);
    document.documentElement.style.setProperty("--sub2-text",maintext.value);
    
}
mainbg.addEventListener("input", changePprimary);
maintext.addEventListener("input", changePsecondary);
// update colors when change
Xmark.addEventListener("click",function () {
    colorslist.classList.toggle("show");
    colorsbutton.classList.toggle("show");

})
colorsbutton.addEventListener("click",colorslistshow);
function colorslistshow() {
    colorslist.classList.toggle("show");
    colorsbutton.classList.toggle("show");
}
colorsdone.addEventListener("click",function () {
    colorslist.classList.toggle("show");
    colorsbutton.classList.toggle("show");
})
colorsreset.addEventListener("click",function () {
    document.querySelector("[href*=styles]").setAttribute("href","css/styles.css");
    document.documentElement.style.setProperty("--main-bg", "#F8C365"); 
    document.documentElement.style.setProperty("--sub1-bg","white");
    document.documentElement.style.setProperty("--sub2-bg","rgb(255,246, 229)");
    document.documentElement.style.setProperty("--sub3-bg","black");
    document.documentElement.style.setProperty("--main-text","black");
    document.documentElement.style.setProperty("--clr-1","white");
    document.documentElement.style.setProperty("--clr-2","rgb(112,112, 112)");
    document.documentElement.style.setProperty("--clr-3","#D8A345");
    theme1F();
})




themebutton.addEventListener("click",themelistshow);
function themelistshow() {
     themelist.classList.toggle("show");
}
function theme1F() {
    document.querySelector("[href*=styles]").setAttribute("href","css/styles.css");
    document.documentElement.style.setProperty("--main-bg", "#F8C365"); 
    document.documentElement.style.setProperty("--sub1-bg","white");
    document.documentElement.style.setProperty("--sub2-bg","rgb(255,246, 229)");
    document.documentElement.style.setProperty("--sub3-bg","black");
    document.documentElement.style.setProperty("--main-text","black");
    document.documentElement.style.setProperty("--clr-1","white");
    document.documentElement.style.setProperty("--clr-2","rgb(112,112, 112)");
    document.documentElement.style.setProperty("--clr-3","#D8A345");
    Pdefaultprimarycolor.innerHTML = "#F8C365";
    Pdefaultsecondarycolor.innerHTML = "#000000";
    mainbg.value="#F8C365";
    maintext.value="#000000";
    document.querySelectorAll("i.checkmark").forEach(icon => {
        icon.style.setProperty("visibility","hidden");
    });
    document.querySelector("#theme1 i.checkmark").style.setProperty("visibility","visible");
    themeicon.className="";
    themeicon.className="fa-solid fa-sun";
    themelist.classList.toggle("show");
} 
theme1.addEventListener("click",theme1F);
theme2.addEventListener("click",function () {

    document.querySelector("[href*=styles]").setAttribute("href","css/styles2.css");
    
    Pdefaultprimarycolor.innerHTML = "#000000";
    Pdefaultsecondarycolor.innerHTML = "#ffffff";
    mainbg.value="#000000";
    maintext.value="#ffffff";
    document.documentElement.style.setProperty("--main-bg", "black"); 
    document.documentElement.style.setProperty("--main-text","white");
    document.querySelectorAll("i.checkmark").forEach(icon => {
        icon.style.setProperty("visibility","hidden");
    });
    document.querySelector("#theme2 i.checkmark").style.setProperty("visibility","visible");
    themeicon.className="";
    themeicon.className="fa-solid fa-moon";
    themelist.classList.toggle("show");
})
