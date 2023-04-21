
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
const n2 = document.querySelector('.next2');
const n3 = document.querySelector('.next3');
const e_check =document.querySelector('.check');
const b1 = document.querySelector('.cancel');
const b2 = document.querySelector('.cancel1');
const b3 = document.querySelector('.cancel2');
const bu = document.querySelector('.button1');
const ba =document.querySelector('.arrow');
const Retry =document.querySelector('.re');
const back =document.querySelector('.backi1');
const forgot =document.querySelector('.forgot');
const wrong =document.querySelector('.wrong');
const Email =document.querySelector('.l-mail');
const sday =document.querySelector('.D-day');
const smonth =document.querySelector('.D-month');
const syear =document.querySelector('.D-year');
const sgender =document.querySelector('.D-gender');
const pa1 =document.querySelector('.pbox4');
dob=true;
dobd=true;
dobm=true;
doby=true;
dobg=true;
us=true;
em=true;
pa=true;
d=0;
m=0;
y=0;
g=0;

function test(){
    wrong.classList.remove('fail');
    check_user=document.getElementById("Username").value;
    check_pass=document.getElementById("password").value;
    user='Abhin';
    pass='qwer';
    if((check_user==user)&&(check_pass==pass))
    {
        wrong.classList.remove('fail');
    }
    else
    {
        wrong.classList.add('fail');
    }
        
    
}
function email_entery(){
    mail=document.getElementById("Email").value;
    if(mail<=0)
    {
        Email.classList.add('fail');
    }
    else{
        Email.classList.remove('fail');
        if (!mail.match(/^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) 
        {
            e_check.classList.remove('True');
            Email.classList.add('fail');
            em=true;
            return false;
        }
        Email.classList.remove('fail');
        e_check.classList.add('True');
        dob=false;
        em=false;
    }
}
function show1(){
    var passwordInput = document.getElementById("password1");
    if(passwordInput.type=="password")
    {
        passwordInput.type="text";
        pa1.classList.add('show1');
    }
    else
    {
        passwordInput.type="password"
        pa1.classList.remove('show1');
    }
}
function show2(){
    var passwordInput = document.getElementById("re_password");
    if(passwordInput.type=="password")
    {
        passwordInput.type="text";
        pa1.classList.add('show2');
    }
    else
    {
        passwordInput.type="password"
        pa1.classList.remove('show2');
    }
}
function DOBIN(){
    day=document.getElementById("day").value;
    month=document.getElementById("month").value;
    year=document.getElementById("year").value;
    gender=document.getElementById("gender").value;
    if(d!=0)
    {
        if((day>0)&&(day<31))
        {
            sday.classList.remove('fail');
            dobd=false;
        }
        else{
            sday.classList.add('fail');
            dobd=true;
        }
    }
    if(m!=0)
    {
        if(month!=0)
        {
            smonth.classList.remove('fail');
            dobm=false;
        }
    else
        {
            smonth.classList.add('fail');
            dobm=true;
        }
    }
    if(y!=0)
    {
        if((year>1960)&&(year<2023))
        {
            syear.classList.remove('fail');
            doby=false;
        }
        else
        {
            syear.classList.add('fail');
            doby=true;
        }
    }
    if(g!=0)
    {
        if(gender!=0)
        {
            sgender.classList.remove('fail');
            dobg=false;
        }
        else
        {
            sgender.classList.add('fail');
            dobg=true;
        }
    }
}
    



DAY.addEventListener('click', ()=>{
    DA.classList.add('active');
    DOBIN();
    d++;
    
});

MONTH.addEventListener('click', ()=>{
    MO.classList.add('active');
    DOBIN();
    m++;
});

YEAR.addEventListener('click', ()=>{
    YE.classList.add('active');
    DOBIN();
    y++;
});

GENDER.addEventListener('click', ()=>{
    GE.classList.add('active');
    DOBIN();
    g++;
});


forgot.addEventListener('click', ()=>{
    alert("You dont have any account");
    pages.classList.add('active');
});
back.addEventListener('click',()=>{
    if(!pa)
    {
        pages.classList.remove('pass');
        pa=true;
    }
    else
    {
        if(!us)
        {
            pages.classList.remove('user');
            us=true;
        }
        else
        {
            if(!dob)
            {
                pages.classList.remove('DOB');
                dob=true;
            }
            else
            {
                pages.classList.remove('active');
            }
        }
    }
    
});

Retry.addEventListener('click', ()=>{
    pages.classList.remove('nope');
});
n2.addEventListener('click', ()=>{
        pages.classList.add('user');
        us=false;
});
n3.addEventListener('click', ()=>{
    pages.classList.add('pass');
    pa=false;
});
ba.addEventListener('click', ()=>{
    pages.classList.add('nope');
    wrong.classList.remove('fail');
});
sign.addEventListener('click', ()=>{
    pages.classList.add('active');
    wrong.classList.remove('fail');
});
log.addEventListener('click', ()=>{
    pages.classList.remove('active');
});
n1.addEventListener('click', ()=>{
    if(!em)
    {
        pages.classList.add('DOB');
        dob=false;
    }
    else
    {

    }

});
b1.addEventListener('click', ()=>{
    pages.classList.remove('pass');
    pages.classList.remove('user');
    pages.classList.remove('DOB');
    pages.classList.remove('active');
});
b2.addEventListener('click', ()=>{
    pages.classList.remove('pass');
    pages.classList.remove('user');
    pages.classList.remove('DOB');
    pages.classList.remove('active');
});
b2.addEventListener('click', ()=>{
    pages.classList.remove('pass');
    pages.classList.remove('user');
    pages.classList.remove('DOB');
    pages.classList.remove('active');

});