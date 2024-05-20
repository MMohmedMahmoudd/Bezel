// let prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// let currentScrollPos = window.pageYOffset;

// if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar-fun").style.top = "0";
// }
// if (document.documentElement.scrollTop > 1000) {
//   document.getElementById("navbar-fun").style.top = "0";
// } else {
//     document.getElementById("navbar-fun").style.top = "-100px";
// }


// prevScrollpos = currentScrollPos;

// }
// // ___________last_


// let prevScrollPos = window.scrollY;
// window.onscroll = function() {
//     let currentScrollPos = window.scrollY;
//     if (prevScrollPos > currentScrollPos) {
//         document.getElementById("navbar-fun").style.top = "0";

//     } else {
//         document.getElementById("navbar-fun").style.top = "-100px";
//     }
//     if (document.documentElement.scrollTop > 1000) {
//   document.getElementById("progress-bar").style.width = "95%";
//   document.getElementById("progres80%").style.width = "80%";
//   document.getElementById("progres90%").style.width = "90%";
//   document.getElementById("navbar-fun").style.top = "0";
//   document.getElementById("navbar-fun").style.backgroundColor = "rgba(0,0,0,0.5)";
// }
//  else {
//     document.getElementById("navbar-fun").style.top = "-100px";
// }
//     prevScrollPos = currentScrollPos;
// }
// function scrollFunction() {
// if (document.documentElement.scrollTop > 1000) {
//     let sections = document.querySelectorAll('section');
//     window.onscroll = () => {
//     sections.forEach(sec => {
//         let top =window.scrollY;
//         let offset = sec.offsetTop - 100;
//         let height = sec.offsetHeight;

//         if (top>= offset && top <offset + height){
//             sec.classList.add('show-animate');
//         }
//         else{
//             sec.classList.remove('show-animate')
//         }
//     })
// }

// }
// prevScrollPos = currentScrollPos;
// }















// try-----------------
// let prevScrollPos = window.scrollY;
// let navlink= document.getElementsByClassName("nav-link")
// let navbar = document.getElementById("navbar-fun");
// let progressBar = document.getElementById("progress-bar");
// let progres80 = document.getElementById("progres80%");
// let progres90 = document.getElementById("progres90%");

// window.onscroll = function() {
//     let currentScrollPos = window.scrollY;

//     if (prevScrollPos > currentScrollPos || document.documentElement.scrollTop > 1000) {
//         navbar.style.top = "0";
//         if (document.documentElement.scrollTop > 1000) {
//             progressBar.style.width = "95%";
//             progres80.style.width = "80%";
//             progres90.style.width = "90%";
//             navbar.style.backgroundColor = "rgb(255,255,255)";
//             navlink.style.color="black"
//         }
//     } else {
//         navbar.style.top = "-100px";
//     }

//     let sections = document.querySelectorAll('section');
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 100;
//         let height = sec.offsetHeight;

//         if (top >= offset && top < offset + height) {
//             sec.classList.add('show-animate');
//         } else {
//             sec.classList.remove('show-animate');
//         }
//     });

//     prevScrollPos = currentScrollPos;
// };
// try end------------------


// try two------------------
// const navbar = document.getElementById("navbar-fun");
// const navLinks = document.getElementsByClassName("nav-link");
// const brand = document.querySelector(".navbar-brand");
// const progressBar = document.getElementById("progress-bar");
// const progres80 = document.getElementById("progres80%");
// const progres90 = document.getElementById("progres90%");
// let prevScrollPos = window.scrollY;

// window.addEventListener('scroll', () => {
//     let currentScrollPos = window.scrollY;

//     if (currentScrollPos === 0) {
//         navbar.style.backgroundColor = "transparent";
//         navbar.style.paddingTop = "2rem";
//         navbar.style.paddingBottom = "2rem";
//         Array.from(navLinks).forEach(link => {
//             link.style.color = "black";
//         });
//         navbar.classList.remove("bg-white");
//         brand.innerHTML = '<img class="w-50" src="Bezel _ Creative Multi-Purpose HTML Template_2/Bezel _ Creative Multi-Purpose HTML Template/logo-light.png" alt="">';
//     } else if (prevScrollPos > currentScrollPos || document.documentElement.scrollTop > 1000) {
//         navbar.style.top = "0";
//         navbar.style.paddingTop = "2rem";
//         navbar.style.paddingBottom = "2rem";
//         if (document.documentElement.scrollTop > 1000) {
//             progressBar.style.width = "95%";
//             progres80.style.width = "80%";
//             progres90.style.width = "90%";
//             navbar.classList.add("bg-white");
//             Array.from(navLinks).forEach(link => {
//                 link.style.color = "black";
//             });
//             brand.innerHTML = '<img class="w-50" src="Bezel _ Creative Multi-Purpose HTML Template_2/Bezel _ Creative Multi-Purpose HTML Template/logo-dark.png" alt="">';
//         }
        
//     } else {
//         navbar.style.top = "0px";

//     }

//     let sections = document.querySelectorAll('section');
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 100;
//         let height = sec.offsetHeight;

//         if (top >= offset && top < offset + height) {
//             sec.classList.add('show-animate');
//         } else {
//             sec.classList.remove('show-animate');
//         }
//     });

//     prevScrollPos = currentScrollPos;
// });
// try two end -------------------------
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
        brand.innerHTML = '<img class="w-50" src="Bezel _ Creative Multi-Purpose HTML Template_2/Bezel _ Creative/logo-light.png" alt="Light Logo">';
    } else if (prevScrollPos > currentScrollPos || document.documentElement.scrollTop > 1000) {
        navbar.style.backgroundColor = "white";
        progressBar.style.width = "95%";
        progres80.style.width = "80%";
        progres90.style.width = "90%";
        navbar.classList.add("bg-white");
        Array.from(navLinks).forEach(link => {
            link.style.color = "black"; 
        });
        brand.innerHTML = '<img class="w-50" src="Bezel _ Creative Multi-Purpose HTML Template_2/Bezel _ Creative/logo-dark.png" alt="Dark Logo">';
    } else {
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
        let up = window.scrollY;
        let off = card.offsetTop - 100;
        let tall = card.offsetHeight;

        if (up >= off || up < off + tall) {
            card.style.translateY="(300px)"
        } 



    prevScrollPos = currentScrollPos;
});
// laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaast-------------






























// __________sectionend________





// ___________________new__
// window.onscroll = function() {scrollFunction()};
// const section = document.getElementById("Services").innerHTML;

// function scrollFunction() {
//   if (document.body.scrollTop > . ) {
//     document.getElementById("navbar-fun").style.top = "0";
//   } else {
//     document.getElementById("navbar-fun").style.top = "-100";
//   }

// }

// _________ bayza ____
// window.onscroll = function() {scrollFunction()};
// const section =document.getElementById("Services");

// function scrollFunction() {
//   if (document.body.scrollTop = section ) {
//     document.getElementById("navbar-fun").style.top = "0";
//   } else {
//     document.getElementById("navbar-fun").style.top = "-100px";
//   }
// }





// __________
// document.getElementById('pills-seo-tab').addEventListener('change', function() {
// const cartona = `
// <div class="row d-flex justify-content-center align-items-center  mt-3">
//     <div class="card-parent rounded-2 position-relative rounded-2 d-flex flex-column justify-content-center align-items-center col-sm-12 col-md-5 col-lg-4 col-xl-4 text-dark">
//         <div class="cardimag">
//             <img class="w-100" src="imgs/imgs/portfolio/4.jpg" alt="">
//         </div>
//         <div class="hide d-flex flex-column w-100 h-100 position-absolute justify-content-center align-items-center bg-white">
//             <h4 class="fs-5 fw-bold ">WEB DESIGN</h4>
//             <div class="icons-card d-flex justify-content-center column-gap-2 align-items-center">
//                 <i class="fa fa-chain-broken d-flex justify-content-center align-items-center bg-black rounded-circle "></i>
//                 <i class="fa fa-search-plus d-flex justify-content-center align-items-center bg-black rounded-circle "></i>
//             </div>
//         </div>
//         </div> 
//         <div class="card-parent rounded-2 position-relative position-relative rounded-2 d-flex flex-column justify-content-center align-items-center col-sm-12 col-md-11 col-lg-4 col-xl-4 col-sm-12  text-dark">
//         <div class="cardimag">
//             <img class="w-100" src="imgs/imgs/portfolio/6.jpg" alt="">
//         </div>
//         <div class="hide d-flex flex-column w-100 h-100 position-absolute justify-content-center align-items-center bg-white">
//             <h4 class="fs-5 fw-bold ">WEB DESIGN</h4>
//             <div class="icons-card d-flex justify-content-center column-gap-2 align-items-center">
//             <i class="fa fa-chain-broken d-flex justify-content-center align-items-center bg-black rounded-circle "> </i>
//             <i class="fa fa-search-plus d-flex justify-content-center align-items-center bg-black rounded-circle "></i>
//             </div> 
//         </div>
//     </div>
// </div>

// `
// document.getElementById("pills-tabContent").innerHTML. cartona
// });
// _________try
// document.querySelectorAll('.nav-item').forEach(button => {
//     button.addEventListener('click', function() {
//         const filter = this.getAttribute('data-filter');
//         const items = document.querySelectorAll('.card-parent');

//         items.forEach(item => {
//             if (filter === 'all' || item.classList.contains(filter)) {
//                 item.style.display = 'block';
//             } else {
//                 item.style.display = 'none';
//             }
//         });
//     });
// });
// __________
// function filterSelection(category) {
//     let card = document.querySelectorAll('.cardparent');
//     card.forEach((card) => {
//         if (category === 'all') {
//             cardparent.style.display = 'block';
//         } else {
//             cardparent.style.display = card.classList.contains(category) ? 'block' : 'none';
//         }
//     });
// }
// _________________
// function filterSelection(category) {
//     let allCards = document.querySelectorAll('.cardparent'); // Select all cards
//     if (category === 'all') {
//         // If 'All' is selected, show all cards
//         allCards.forEach(card => card.style.display = 'flex');
//     } else {
//         // Otherwise, filter by category
//         allCards.forEach(card => {
//             if (card.classList.contains(category)) {
//                 card.style.display = 'flex';
//             } else {
//                 card.style.display = 'none';
//             }
//         });
//     }
// }
// // Initialize with all cards visible
// window.onload = () => filterSelection('all');
// _____________
// function filterSelection(category) {
//     const cards = document.querySelectorAll('.cardparent'); // Select all portfolio cards
//     cards.forEach(card => {
//         if (category === 'all') {
//             card.style.display = 'flex'; // Show all cards if 'All' is selected
//         } else {
//             if (card.classList.contains(category)) {
//                 card.style.display = 'flex'; // Show the card if it contains the category class
//             } else {
//                 card.style.display = 'none'; // Hide the card if it does not match the category
//             }
//         }
//     });
// }
// // Initially display all items
// document.addEventListener('DOMContentLoaded', () => {
//     filterSelection('all');
// });
// _________
// function filterSelection(category) {
//     const allCards = document.querySelectorAll('.cardparent'); // Select all cards
//     allCards.forEach(card => {
//         if (category === 'all') {
//             card.style.display = 'block'; // Show all cards if 'All' is selected
//         } else {
//             card.style.display = card.classList.contains(category) ? 'block' : 'none'; // Show/Hide based on category match
//         }
//     });
// }
// // _____________________
// function filterSelection(category) {
//     const cards = document.querySelectorAll('.cardparent');

//     cards.forEach(card => {
//         const cardCategory = card.classList[1]; // Assuming the category class is the second class
//         if (category === 'all' || cardCategory === category) {
//             card.style.display = 'block'; // Show the card
//         } else {
//             card.style.display = 'none'; // Hide the card
//         }
//     });
// }

// // Add click event listeners to the filter links
// document.querySelectorAll('.fillter').forEach(link => {
//     link.addEventListener('click', function() {
//         const category = this.getAttribute('onclick').split("'")[1]; // Get the category from the onclick attribute
//         filterSelection(category);
//     });
// });
