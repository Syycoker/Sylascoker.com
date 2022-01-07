const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

window.onload=function(){
  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
  })
}