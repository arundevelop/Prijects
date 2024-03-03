let menu=document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick=() =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
};
const sr = ScrollReveal ({
    distance: '40px',
    duration: 2500,
    reset: true
});
sr.reveal('.logo',{delay: 200,origin:'left'});
sr.reveal('.navbar',{delay: 300,origin:'top'});
sr.reveal('.menu-btn',{delay: 450,origin:'right'});

sr.reveal('.home-text span',{delay:500,origin:'top'});
sr.reveal('.home-text h1',{delay: 580,origin:'left'});
sr.reveal('.home-text p',{delay: 650,origin:'right'});
sr.reveal('.main-btn',{delay: 650,origin:'right'});

sr.reveal('.share',{delay: 860,origin:'bottom'});