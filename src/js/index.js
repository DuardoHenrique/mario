const btnTrailer = document.querySelector('.botao-trailer')
const modal = document.querySelector('.modal')
const btnCloseModal = document.querySelector('.fechar-modal')
const video = document.getElementById('video')
const linkVideo = video.src;

btnTrailer.addEventListener('click', () => {
    video.setAttribute('src', linkVideo)
    togglerModal()
})

btnCloseModal.addEventListener('click', () => {
    video.setAttribute('src', '')
    togglerModal()
})

function togglerModal() {
    modal.classList.toggle('aberto')
}

