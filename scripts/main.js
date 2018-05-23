const nav = document.querySelector('#navigation')
const menuButton = document.querySelector('#menuButton')

menuButton.addEventListener('click', e => {
    e.preventDefault()
    nav.classList.toggle('hidden')
    menuButton.classList.toggle('is-active')
})