
const pages = document.querySelector('.page');
const DA = document.querySelector('.D-day');
const MO = document.querySelector('.D-month');
const YE = document.querySelector('.D-year');
const GE = document.querySelector('.D-gender');
const DAY = document.querySelector('.day');
const MONTH = document.querySelector('.month');
const YEAR = document.querySelector('.year');
const GENDER = document.querySelector('.gender');
const sign = document.querySelector('.signup-link');
const log = document.querySelector('.login-link');
const n1 = document.querySelector('.next1');
const b1 = document.querySelector('.back1');
const bu = document.querySelector('.button1');
const ba =document.querySelector('.arrow');
const Retry =document.querySelector('.re');
const back =document.querySelector('.backi1');
const forgot =document.querySelector('.forgot');

DAY.addEventListener('click', ()=>{
    DA.classList.add('active');
});

MONTH.addEventListener('click', ()=>{
    MO.classList.add('active');
});

YEAR.addEventListener('click', ()=>{
    YE.classList.add('active');
});

GENDER.addEventListener('click', ()=>{
    GE.classList.add('active');
});


forgot.addEventListener('click', ()=>{
    alert("You dont have any account");
    pages.classList.add('active');
});
back.addEventListener('click',()=>{
    
    pages.classList.remove('nope');
    pages.classList.remove('DOB');
    pages.classList.remove('active');
});
Retry.addEventListener('click', ()=>{
    pages.classList.remove('nope');
});
ba.addEventListener('click', ()=>{
    pages.classList.add('nope');
});
bu.addEventListener('click', ()=>{
    alert("No account found");
});
sign.addEventListener('click', ()=>{
    pages.classList.add('active');
});
log.addEventListener('click', ()=>{
    pages.classList.remove('active');
});
n1.addEventListener('click', ()=>{
    pages.classList.add('DOB');
    back.classList.add('DOB');

});
b1.addEventListener('click', ()=>{
    pages.classList.remove('DOB');
});