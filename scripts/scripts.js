const modal = document.querySelector('.my_modal')
const modalClose = document.querySelector('.modal_close')
const catalog = document.querySelector('.catalog')

catalog.addEventListener('click', () => {
    modal.style.display = 'block'
})
modalClose.addEventListener('click', () => {
    modal.style.display = 'none'
})
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }