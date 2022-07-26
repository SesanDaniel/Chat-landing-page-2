let hamburgerMenuButton = document.getElementById('menu-btn');
let hamburgerMenu = document.getElementById('menu')

hamburgerMenuButton.addEventListener('click', (e) =>{
    hamburgerMenuButton.classList.toggle('open')
    hamburgerMenu.classList.toggle('flex')
    hamburgerMenu.classList.toggle('hidden')
})

const startButton = document.getElementById('firstBtn');

function buttonClick() {
    prompt('Please input your email');
    alert('Please check your email for login details');
}
startButton.addEventListener(('click'), buttonClick)

