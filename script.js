const modal = document.getElementById('contact-modal')
const openmodal = document.getElementById('open-contact')
const sidebarContact = document.getElementById('sidebar-contact')
const mobileContactBtn = document.getElementById('mobile-contact-btn')
const closemodal = document.getElementById('close-contact')

function openContactModal() {
    modal.showModal();
}

openmodal.addEventListener('click', openContactModal)
sidebarContact.addEventListener('click', openContactModal)
mobileContactBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openContactModal();
})

closemodal.addEventListener('click', () => {
    modal.close();
    console.log('closing main modal')
})

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    // Initialize scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.aboutme, .skills-div, .projects-div, .experience-div');
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});