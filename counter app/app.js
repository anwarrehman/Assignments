let inEl = document.querySelectorAll('.count');

let h1El = document.querySelectorAll('.count-num');

let h3El = document.querySelectorAll('.error-msg');


function addNum(){
    let formval = inEl[0].value;
    display(formval, '+');
}

function subNum(){
    let formval = inEl[0].value;
    display(formval, '-');
}

function clearInput(){
    let formval = inEl[0].value;
    display(formval, '');
    if(isNaN(formval)){
        h3El[0].innerHTML = `YOU MUST ENTER A NUMBER!`;
    }
}



function display(formValue, operater){
    
     if(operater === '+'){
        h1El[0].innerHTML = Number(h1El[0].innerHTML) + Number(formValue);
        removeErr();
    }
    else if(operater === '-'){
        h1El[0].innerHTML = Number(h1El[0].innerHTML) - Number(formValue);
        removeErr();
    }
    else{
        h1El[0].innerHTML = '';
        inEl[0].value = '';     
        removeErr();
        return removeErr();
    }
}



function removeErr(){
    h3El[0].innerHTML = '';
}