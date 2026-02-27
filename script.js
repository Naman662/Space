document.addEventListener("DOMContentLoaded",()=>{

/* Mobile Menu */
const menuToggle=document.getElementById("menuToggle");
const navLinks=document.getElementById("navLinks");

menuToggle.addEventListener("click",()=>{
navLinks.classList.toggle("active");
});

/* Smooth Scroll */
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
anchor.addEventListener("click",function(e){
e.preventDefault();
const target=document.querySelector(this.getAttribute("href"));
window.scrollTo({top:target.offsetTop-60,behavior:"smooth"});
navLinks.classList.remove("active");
});
});

/* Scroll Reveal */
const reveals=document.querySelectorAll(".reveal");
window.addEventListener("scroll",()=>{
reveals.forEach(el=>{
const top=el.getBoundingClientRect().top;
if(top<window.innerHeight-100){
el.classList.add("active");
}
});
});

/* Star Background */
const canvas=document.getElementById("starCanvas");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let stars=[];
for(let i=0;i<200;i++){
stars.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2
});
}

function drawStars(){
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.fillStyle="white";
stars.forEach(s=>{
ctx.beginPath();
ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
ctx.fill();
});
requestAnimationFrame(drawStars);
}

drawStars();

});
