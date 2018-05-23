const nav = document.querySelector('#navigation')
const menuButton = document.querySelector('#menuButton')
const body = document.body

menuButton.addEventListener('click', e => {
    e.preventDefault()
    nav.classList.toggle('hidden')
    menuButton.classList.toggle('is-active')
    body.classList.toggle('stop-scrolling')
})