var array_name = [];
var array_email = [];
var array_address = [];
var array_NOC = [];
var array_type = [];
var std = "Standard";
var gld = "Gold";
var Ult = "Ultimate";
console.log 

var input_name = document.getElementById("name1");
var input_email = document.getElementById("email");
var input_address = document.getElementById("address");
var input_NOC = document.getElementById("NOC");
var input_type = document.getElementById("type");
var checkbox = document.getElementById("agree");



function addValueToArray(){
    value_name = input_name.value;
    value_email = input_email.value;
    value_address = input_address.value;
    value_NOC = input_NOC.value;
    value_type = input_type.value;
    var atps=value_email.indexOf("@");

    if( value_name.length < 1||value_name.length == null){
        alert("Please input valid name");
        return;
    }

   if(value_email.length <10 || value_email.length == null){
        alert("please input valid email");
        return;
    }
    else if(atps<1){
        alert("Invalid Email please use @");
        return false;
        // if (atps<1) {
        //     alert("Alamat email tidak valid.");
        //     return false;
        // }
        // return;
    }
    if(value_address.length < 1 || value_address.length == null){
        alert("Please input address");
        return;
    }
    if(value_NOC.length < 1 || value_NOC.length == null){
        alert("Please input NOC");
        return;
    }
    else if(isNaN(value_NOC)){
            alert("please use number for Number Of Copies");
            return;
    }
    if (checkbox.checked != true){
        alert("Please check Terms and Conditions and Privacy Policy");
        return;
    }
    if(value_type.length < 1 || value_type.length == null){
        alert("Please input type");
        return;
    }
    else if(value_type=="Standard"|| value_type=="Gold" || value_type=="Ultimate"  ){
        array_name.push(value_name);
        div_data.innerHTML = "";
        array_name.sort((v1,v2) => v1 - v2);
        array_name.forEach( v => {
        div_data.innerHTML += "<h1>" +v+ "</h1>";
        })
        array_email.push(value_email);
        array_address.push(value_address);
        array_NOC.push(value_NOC);
        array_type.push(value_type);

    alert("success");
              return;
    
    
}else{
    alert("Type must be Standard,Gold,or Ultimate");
    return;
}
}

var div_data = document.getElementById("data");