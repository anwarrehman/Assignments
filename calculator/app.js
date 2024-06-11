let input = document.querySelectorAll(".calculator")[0];

function appendToDisplay(calculate){
    input.value += calculate;
}

function calculateDisplay(){
    let result = eval(input.value);
    input.value = result
}

function clearDisplay(){
    input.value = '';
}