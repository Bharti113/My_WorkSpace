const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const menuIcon = document.getElementById("menuIcon");

/* TOGGLE MENU */

menuToggle.addEventListener("click", function(){

navLinks.classList.toggle("active");

if(menuIcon.classList.contains("fa-bars")){
menuIcon.classList.remove("fa-bars");
menuIcon.classList.add("fa-xmark");
}
else{
menuIcon.classList.remove("fa-xmark");
menuIcon.classList.add("fa-bars");
}

});

/* CLOSE MENU WHEN CLICKING OUTSIDE */

document.addEventListener("click", function(event){

if(!navLinks.contains(event.target) && !menuToggle.contains(event.target)){

navLinks.classList.remove("active");

/* CLOSE MENU WHEN CLICKING link */
document.querySelectorAll(".nav-links a").forEach(link => {
link.addEventListener("click", () => {
navLinks.classList.remove("active");
menuIcon.classList.remove("fa-xmark");
menuIcon.classList.add("fa-bars");
});
});

/* RESET ICON */

menuIcon.classList.remove("fa-xmark");
menuIcon.classList.add("fa-bars");

}

});