document.getElementById("submit_button").onclick = function(){
    let temp;
    temp = document.getElementById("user_input").value;
    temp = Number(temp);

    if(document.getElementById("cbutton").checked){
        result = to_celsius(temp);
        document.getElementById("user_output").innerHTML = result;
    }
    else if(document.getElementById("fbutton").checked){
        result = to_fahrenheit(temp);
        document.getElementById("user_output").innerHTML = result;
    }
    else{
        document.getElementById("user_output").innerHTML = "Enter a Unit !";
    }
};
function to_celsius(temp){
    return (temp-32) *(5/9);
};

function to_fahrenheit(temp){
    return temp * 9 / 5 + 32;
};