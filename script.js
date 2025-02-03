const faqs = document.querySelectorAll('.faq');
const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");
const email = document.getElementById('email');
const form = document.querySelector('form');
const errorMsg = document.getElementById('error-msg');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

faqs.forEach(faq => {
    const question = faq.querySelector('.faq-question');
    const answer = faq.querySelector('.faq-answer');

    question.addEventListener('click', () => {
        answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (email.value === '') {
        errorMsg.style.display = 'block';
        errorMsg.innerText = 'Email cannot be empty!';
        errorMsg.style.color = 'red';
        errorMsg.style.fontSize = '18px';
    } else {
        errorMsg.style.display = 'block';
        errorMsg.innerText = 'Subscribed!';
        errorMsg.style.color = 'navy';
        errorMsg.style.fontSize = '18px';
    }
    form.reset();
});




 



// document.querySelectorAll('*').forEach(el => {
//     if (el.scrollWidth > el.clientWidth) {
//         console.log('Overflowing Element: ', el, 'Width: ', el.scrollWidth, 'Parent Width: ', el.parentNode.clientWidth);
        
//     }
// })