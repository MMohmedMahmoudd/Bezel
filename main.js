// try the laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaast ________________
const navbar = document.getElementById("navbar-fun");
const navLinks = document.getElementsByClassName("nav-link");
const brand = document.querySelector(".navbar-brand"); 
let sectionInfo = document.getElementsByClassName('info');

let prevScrollPos = window.scrollY;

// window.addEventListener('scroll', () => {
//     let currentScrollPos = window.scrollY;

//     if (currentScrollPos === 0) {
//         navbar.style.backgroundColor = "transparent";
//         navbar.style.borderBottom = "0.5px solid #888888";

//         Array.from(navLinks).forEach(link => {
//             link.style.color = "white"; 
//         });
//         brand.innerHTML = '<img class="w-25" src="Bezel _ Creative Multi-Purpose HTML Template_2/Bezel _ Creative/logo-light.png" alt="Light Logo">';
//     }
//     else {
//         navbar.style.backgroundColor = "white";
//         navbar.style.border = "none";

//         Array.from(navLinks).forEach(link => {
//             link.style.color = "black"; 
//         });
//         brand.innerHTML = '<img class="w-25" src="Bezel _ Creative Multi-Purpose HTML Template_2/Bezel _ Creative/logo-dark.png" alt="Dark Logo">';
//     }
//     // if (currentScrollPos === 10) {
//     //     card.classList.add('scrolltop');
//     // }


//     let sections = document.querySelectorAll('section');
//     let card = document.getElementsByClassName('.card');

//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 100;
//         let height = sec.offsetHeight;

//         if (top >= offset && top < offset + height) {
//             sec.classList.add('show-animate');
//             card.classList.add('scrolltop');
//         } 
//         else {
//             sec.classList.remove('show-animate');
//         }
//     });
//     prevScrollPos = currentScrollPos;
// });
window.addEventListener('scroll', () => {
    let currentScrollPos = window.scrollY;

    // Change navbar styles based on scroll position
    if (currentScrollPos === 0) {
        navbar.style.backgroundColor = "transparent";
        Array.from(navLinks).forEach(link => {
            link.style.color = "white"; 
        });
        brand.innerHTML = '<img class="w-25" src="Bezel _ Creative Multi-Purpose HTML Template_2/Bezel _ Creative/logo-light.png" alt="Light Logo">';
    } else {
        navbar.style.backgroundColor = "white";
        Array.from(navLinks).forEach(link => {
            link.style.color = "black"; 
        });
        brand.innerHTML = '<img class="w-25" src="Bezel _ Creative Multi-Purpose HTML Template_2/Bezel _ Creative/logo-dark.png" alt="Dark Logo">';
    }

    // Animations for sections and cards
    let sections = document.querySelectorAll('section');
    sections.forEach(section => {
        let offset = section.offsetTop - 100;
        let height = section.offsetHeight;
        let top = window.scrollY;
        let bottom = top + window.innerHeight;

        if (top >= offset && top < offset + height) {
            section.classList.add('show-animate');
            // Add 'scrolltop' class to cards in the visible section
            let cards = section.querySelectorAll('.card');
            cards.forEach(card => {
                card.classList.add('scrolltop');
            });
        } else {
            section.classList.remove('show-animate');
            let cards = section.querySelectorAll('.card');
            cards.forEach(card => {
                card.classList.remove('scrolltop');
            });
        }
    });

    prevScrollPos = currentScrollPos;
});

// laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaast-------------

function validate(element, regex) {
    if (element.value.trim() === "") {
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
    } else if (regex.test(element.value)) {
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
    } else {
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
    }
}

// Event listeners for input validation
document.getElementById('name').addEventListener('input', function() {
    validate(this, /.+/);
});

document.getElementById('email').addEventListener('input', function() {
    validate(this, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
});

document.getElementById('number').addEventListener('input', function() {
    validate(this, /^\d{10}$/); // Assuming phone number should be 10 digits
});

document.getElementById('message').addEventListener('input', function() {
    validate(this, /.+/);
});

// Form submit event
document.getElementById('contactForm').addEventListener('submit', function(event) {
    const inputs = document.querySelectorAll('#contactForm .form-control');
    let formIsValid = true;

    inputs.forEach(input => {
        const regex = input.id === 'email' ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/ :
                    input.id === 'number' ? /^\d{10}$/ : /.+/;
        validate(input, regex);

        if (!input.classList.contains('is-valid')) {
            formIsValid = false;
        }
    });

    if (!formIsValid) {
        event.preventDefault();
        alert('Please fill out the form correctly.');
    }
});
