const burger = document.querySelector('.burger-menu');
let displayStatus = false;

burger.addEventListener('click', () => {
    if(!displayStatus){
        burger.classList.add('open');
        displayStatus = true;
    }
    else{
        burger.classList.remove('open');
        displayStatus = false;
    }
})