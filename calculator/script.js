let output = document.getElementById("Display-value");

function display(num) {
    output.value += num;
}

function clear(){
    output.value=" ";
}

function Equals(){
    try{
        output.value = eval(output.value);
    }
    catch{
        alert("Invalid");
    }
}



function del(){
    output.value=output.value.slice(0,-1)
}