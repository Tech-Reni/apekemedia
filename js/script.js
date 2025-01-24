const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

const btns = document.querySelectorAll(".question-btn");

btns.forEach(function(btn) {
    btn.addEventListener("click", (e) => {
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-text");
    })
})


ScrollReveal({
    duration: 1700,
    delay: 10
});

ScrollReveal().reveal('.article', { origin: 'right' });
ScrollReveal().reveal('.question', { origin: 'right' });
ScrollReveal().reveal('.left', { origin: 'right' });
ScrollReveal().reveal('.right', { origin: 'left' });
