const modal = document.querySelector('.contact-modal')
const openmodal = document.querySelector('.open-contact')
const closemodal = document.querySelector('.close-contact')

openmodal.addEventListener('click', () => {
    modal.showModal();
})

closemodal.addEventListener('click', () => {
    modal.close();
})

