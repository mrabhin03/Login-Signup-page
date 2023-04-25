
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
const n4 = document.querySelector('.next4');
const n5 = document.querySelector('.next35');
const e_check =document.querySelector('.check');
const b1 = document.querySelector('.cancel');
const b2 = document.querySelector('.cancel1');
const b3 = document.querySelector('.cancel2');
const b4 = document.querySelector('.cancel35');
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
const pa_main =document.querySelector('.pbox');
const pa2 =document.querySelector('.pbox1');
const pa3 =document.querySelector('.pbox3');
const pa4 =document.querySelector('.forgot_page');
const pa1 =document.querySelector('.pbox4');
const lo =document.querySelector('.loadnow');
const loading =document.querySelector('.load');
const bar_load =document.querySelector('.bar_load');
const bar_load1 =document.querySelector('.bar_load1');
const Body =document.querySelector('.body');
dob=true;
dobd=true;
dobm=true;
doby=true;
dobg=true;
us=true;
em=true;
pa=true;
user='AB';
pass='q';
d=0;
m=0;
y=0;
g=0;
ok=1;
function forgot_password(){
    if(pass=="q")
    {
        alert("You dont have any account");
        pages.classList.add('active');
    }
    else
    {
        pages.classList.add('forgot');
    }
}
n4.addEventListener('click', function(){
    passcode1=document.getElementById("password1").value;
    passcode2=document.getElementById("re_password").value;
    if(passcode1==0)
    {
        pa1.classList.add('fail_first');
        pa1.classList.remove('morethan8');
        pa1.classList.remove('all_fail');
    }
    else
    {
        pa1.classList.remove('fail_first');
        if(passcode1.length>=8)
        {
            pa1.classList.remove('morethan8');
            if(passcode2==0)
            {
                pa1.classList.add('fail_second');
            }
            else
            {
                pa1.classList.remove('fail_second');
                if(passcode1==passcode2)
                {
                    pa1.classList.remove('all_fail');
                    pass=passcode1;
                    passcode01=document.getElementById("password1");
                    passcode02=document.getElementById("re_password");
                    passcode01.value='';
                    passcode02.value='';
                    setTimeout(function(){
                        bar_load.classList.add('op');
                    },2000)
                    setTimeout(function(){
                        loading.classList.add('op2');
                    },7000)
                    setTimeout(function(){
                        bar_load1.classList.add('op');
                    },7000)
                    setTimeout(function(){
                        pages.classList.remove('ok');
                        pages.classList.remove('pass');
                        pages.classList.remove('user');
                        pages.classList.remove('DOB');
                        pages.classList.remove('active');
                        bar_load1.classList.remove('op');
                        bar_load.classList.remove('op');
                        loading.classList.remove('op2');
                    },11000)
                        pages.classList.add('ok');
                        var passwordInput1 = document.getElementById("password1");
                        passwordInput1.type="password";
                        pa1.classList.remove('show1');
                        var passwordInput = document.getElementById("re_password");
                        passwordInput.type="password";
                        pa1.classList.remove('show2');
                }
                else
                {
                    pa1.classList.add('all_fail');
                }
            }
        }
        else
        {
            pa1.classList.add('morethan8');
        }
        
    }
    
});

function test(){
    wrong.classList.remove('fail');
    check_user=document.getElementById("Username").value;
    check_pass=document.getElementById("password").value;
    if((check_user==user)&&(check_pass==pass))
    {
        wrong.classList.remove('fail');
        Body.classList.add('welcome');
    }
    else
    {
        wrong.classList.add('fail');
    }
        
    
}
function exit(){
    Body.classList.remove('welcome');
}
function email_entery(){
    mail=document.getElementById("Email").value;
    if(mail<=0)
    {
        pa2.classList.add('fail1');
        Email.classList.remove('fail');
        em=true;
    }
    else{
        pa2.classList.remove('fail1');
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
function show_first(){
    var passwordInput = document.getElementById("password");
    if(passwordInput.type=="password")
    {
        passwordInput.type="text";
        pa_main.classList.add('show_it');
    }
    else
    {
        passwordInput.type="password";
        pa_main.classList.remove('show_it');
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
        passwordInput.type="password";
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
        passwordInput.type="password";
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
        if((year>1900)&&(year<2023))
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

back.addEventListener('click',()=>{
    if(!pa)
    {
        pages.classList.remove('pass');
        var passwordInput1 = document.getElementById("password1");
        passwordInput1.type="password";
        passwordInput1.value='';
        pa1.classList.remove('show1');
        var passwordInput = document.getElementById("re_password");
        passwordInput.type="password";
        passwordInput.value='';
        pa1.classList.remove('show2');
        pa1.classList.remove('morethan8');
        pa1.classList.remove('fail_first');
        pa1.classList.remove('fail_second');
        pa1.classList.remove('all_fail');
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
                day=document.getElementById("day").value;
                month=document.getElementById("month").value;
                year=document.getElementById("year").value;
                gender=document.getElementById("gender").value;
                if(day==0)
                {
                    DA.classList.remove('active');
                    d=0;
                }
                if(month==0)
                {
                    MO.classList.remove('active');
                    m=0;
                }
                if(year==0)
                {
                    YE.classList.remove('active');
                    y=0;
                }
                if(gender==0)
                {
                    GE.classList.remove('active');
                    g=0;
                }
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
        
        us=false;
        if((!dobd)&&(!dobm)&&(!doby)&&(!dobg)){
            pages.classList.add('user');
        }
        else{
            d=2;
            DOBIN();
        }
});
n3.addEventListener('click', ()=>{
    user_name=document.getElementById("user_name").value;
    if(user_name==0)
    {
        pa3.classList.add('fail');
    }
    else
    {
        user=user_name;
        pages.classList.add('pass');
        pages.classList.remove('forgot');
        pa3.classList.remove('fail');
        pa=false;
    }
    
});
n5.addEventListener('click', ()=>{
    user_name=document.getElementById("user_name_check").value;
    if(user_name==0)
    {
        pa4.classList.add('fail');
    }
    else
    {
        pa4.classList.remove('fail');
        if(user_name==user)
        {
            pa4.classList.remove('fail_test');
            user=user_name;
            pages.classList.add('pass');
            pages.classList.remove('forgot');
            pa=false;
        }
        else
        {
            pa4.classList.add('fail_test');
        }
        
    }
    
});
ba.addEventListener('click', ()=>{
    pages.classList.add('nope');
    var passwordInput = document.getElementById("password");
    passwordInput.type="password";
    pa_main.classList.remove('show_it');
    wrong.classList.remove('fail');
});
sign.addEventListener('click', ()=>{
    pages.classList.add('active');
    var passwordInput = document.getElementById("password");
    passwordInput.type="password";
    pa_main.classList.remove('show_it');
    wrong.classList.remove('fail');
    passwordInput.value='';
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
    
    location.reload();


});
b2.addEventListener('click', ()=>{
    
    location.reload();

});
b2.addEventListener('click', ()=>{
   
    location.reload();

});
b4.addEventListener('click', ()=>{


    location.reload();

});

