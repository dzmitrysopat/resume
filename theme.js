
document.querySelector('.theme').addEventListener('click', (event) => {
event.preventDefault();
if (localStorage.getItem('theme') === 'dark') {
localStorage.removeItem('theme');
}
else {
localStorage.setItem('theme', 'dark')
}
addDarkClassToHTML()
});

function addDarkClassToHTML() {
const image = document.getElementById("logoImg");

try {
        if (localStorage.getItem('theme') === 'dark') {
        document.querySelector('html').classList.add('dark');
        image.src = './img/bulb_sm_white.png';
}
else {
        document.querySelector('html').classList.remove('dark');
        image.src = './img/bulb_sm.png';
}
} catch (err) { }
}

addDarkClassToHTML();