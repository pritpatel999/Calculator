const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');
const backBtn = document.querySelector('.btn-back');

btns.forEach(function(btn){
    btn.addEventListener('click',function(){
        screen.value += btn.getAttribute('data-num');
    })
})
equalBtn.addEventListener('click',function(){
    if(screen.value == ''){
        screen.value = 'PLEASE!! ENTER A VALUE..'
    }
    else{
        screen.value = eval(screen.value);
    }
})
clearBtn.addEventListener('click',function(){
    screen.value = "";
})
backBtn.addEventListener("click",function(){
    screen.value=screen.value.slice(0,screen.value.length-1);
})
