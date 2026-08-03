// Accordion functionality for FAQ
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const faqItem = item.parentElement;

        // Toggle active on clicked item
        faqItem.classList.toggle('active');

        // Close other accordion items
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            if (otherItem !== faqItem) {
                otherItem.classList.remove('active');
            }
        });
    });
});
