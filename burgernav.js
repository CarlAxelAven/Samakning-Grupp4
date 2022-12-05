// //Kod för att öppna och stänga hamburgermenyn
// $(document).ready(function(){
//     $(".burger-nav").on("click", function(){
//         $(".navbar").toggleClass("open");
//     });
// });
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.navbar')

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active")
    }))