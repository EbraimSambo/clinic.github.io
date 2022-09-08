let menu = document.querySelector('#btn');
let navbar = document.querySelector('.navbar');


menu.onclick = () => {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    }
    ///ppoup modal consulta
document.querySelector('#marcacao').onclick = () => {
    document.querySelector('.consulta-poup').classList.toggle('activar');
}
document.querySelector('.btn-consulta').onclick = () => {
    document.querySelector('.consulta-poup').classList.toggle('activar');
}
document.querySelector('#close-poup').onclick = () => {
    document.querySelector('.consulta-poup').classList.toggle('activar');
}
