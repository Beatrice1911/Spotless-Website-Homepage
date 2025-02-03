const faqs = document.querySelectorAll('.faq');
const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");


faqs.forEach(faq => {
    const question = faq.querySelector('.faq-question');
    const answer = faq.querySelector('.faq-answer');

    question.addEventListener('click', () => {
        answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
    });
});


menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// let faqDropdown = document.querySelector(".faq-question");
// let i;
// for (let i = 0; i < faqDropdown.length; i++) {
//     faqDropdown[i].addEventListener('click', () => {
//         this.classList.toggle("active");
//         let dropdown = this.nextElementSibling;
//         if (dropdown.style.display === "block") {
//             dropdown.style.display = 'none';
//         } else {
//             dropdown.style.display = 'block';
//         }
//     });
    
// } 



document.querySelectorAll('*').forEach(el => {
    if (el.scrollWidth > el.clientWidth) {
        console.log('Overflowing Element: ', el, 'Width: ', el.scrollWidth, 'Parent Width: ', el.parentNode.clientWidth);
        
    }
})