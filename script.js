const display = document.getElementById("display");

function appendTODisplay(input){
    display.value += input;
}



function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Err";
    }
}

function clearDisplay(){
    display.value = "";
}