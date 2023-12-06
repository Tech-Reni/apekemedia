let hamburger = document.querySelector('.hamburger');
let mbl_nav_cont = document.querySelector('.mobile-nav-container');
let close_btn = document.querySelector('.close');

hamburger.addEventListener('click', () => {
    mbl_nav_cont.classList.toggle('active');
    hamburger.style.display = 'none';
});

close_btn.addEventListener('click', () => {
    mbl_nav_cont.classList.toggle('active');
    hamburger.style.display = 'block';
})

const btns = document.querySelectorAll(".question-btn");

btns.forEach(function(btn) {
    btn.addEventListener("click", (e) => {
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-text");
    })
})


ScrollReveal({
    distance: '150px',
    duration: 1700,
    delay: 10
});

ScrollReveal().reveal('.article, .left, .question', { origin: 'right' });
ScrollReveal().reveal('.card, .right , .price-card', { origin: 'left' });
