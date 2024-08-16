const item = document.getElementById("display");

function clickme(input){
    
    item.value += input;
};

function clearDisplay(){
    item.value = "";
};

function calculate(input){
    try{
        item.value = eval(item.value)
    }catch
    (error){
        throw new "error";
    }
    

}

