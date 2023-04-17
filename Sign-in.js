
const pages = document.querySelector('.page');
const sign = document.querySelector('.signup-link');
const log = document.querySelector('.login-link');

sign.addEventListener('click', ()=>{
    pages.classList.add('active');
});
log.addEventListener('click', ()=>{
    pages.classList.remove('active');
});
