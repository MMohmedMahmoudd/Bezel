// try the laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaast ________________
const navbar = document.getElementById("navbar-fun");
const navLinks = document.getElementsByClassName("nav-link");
const brand = document.querySelector(".navbar-brand"); 
const progressBar = document.getElementById("progress-bar");
const progres80 = document.getElementById("progres80%");
const progres90 = document.getElementById("progres90%");
let prevScrollPos = window.scrollY;

window.addEventListener('scroll', () => {
    let currentScrollPos = window.scrollY;

    if (currentScrollPos === 0) {
        navbar.style.backgroundColor = "transparent";
        navbar.style.borderBottom = "0.5px solid #888888";

        Array.from(navLinks).forEach(link => {
            link.style.color = "white"; 
        });
        brand.innerHTML = '<img class="w-25" src="Bezel _ Creative Multi-Purpose HTML Template_2/Bezel _ Creative/logo-light.png" alt="Light Logo">';
    }
    //  else if (prevScrollPos > currentScrollPos || document.documentElement.scrollTop > 1000) {
    //     navbar.style.backgroundColor = "white";
    //     progressBar.style.width = "95%";
    //     progres80.style.width = "80%";
    //     progres90.style.width = "90%";
    //     navbar.classList.add("bg-white");
    //     Array.from(navLinks).forEach(link => {
    //         link.style.color = "black"; 
    //     });
    //     brand.innerHTML = '<img class="w-50" src="Bezel _ Creative Multi-Purpose HTML Template_2/Bezel _ Creative/logo-dark.png" alt="Dark Logo">';
    // }
    else {
        navbar.style.backgroundColor = "white";
        navbar.style.border = "none";

        Array.from(navLinks).forEach(link => {
            link.style.color = "black"; 
        });
        brand.innerHTML = '<img class="w-50" src="Bezel _ Creative Multi-Purpose HTML Template_2/Bezel _ Creative/logo-dark.png" alt="Dark Logo">';
    }

    let sections = document.querySelectorAll('section');
    let card = document.getElementsByClassName('card')
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });
    prevScrollPos = currentScrollPos;
});
// laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaast-------------

