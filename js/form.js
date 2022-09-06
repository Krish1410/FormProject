function varify() {
    var name = document.getElementById("Name").value
    var email = document.getElementById("email").value
    var pnumber = document.getElementById("pnumber").value
    var age = document.getElementById("age").value
    

    if (name=="") {
        document.getElementById("error").innerHTML="Please enter your name"
        return false
    }
    else{
        document.getElementById("error").innerHTML=""
    }
    if (email=="") {
        document.getElementById("error1").innerHTML="Please enter your vaid Email"
        return false
    }
    else{
        document.getElementById("error1").innerHTML=""
    }
    if (pnumber=="") {
        document.getElementById("error2").innerHTML="Please enter your Number"
        return false
    }
    else{
        document.getElementById("error2").innerHTML=""
    }
    if (age=="") {
        document.getElementById("error3").innerHTML="Please enter your age "
        return false
    }
    else{
        document.getElementById("error3").innerHTML=""
    }
    if (pnumber.length > 10 ) {
        document.getElementById("error2").innerHTML="Please enter your valid Number"
        return false
    }
    else{
        document.getElementById("error2").innerHTML=""
    }
    if (age > 99 ) {
        document.getElementById("error3").innerHTML="Please enter your valid age"
        return false
    }
    else{
        document.getElementById("error3").innerHTML=""
    }
    
    if(localStorage.getItem('cart')==null){

var value={};
}
else{
value=JSON.parse(localStorage.getItem('value'));

}
   
    var idstr= this.id.toString();
    lname=name
    lemail=email
    lpnumber=pnumber
    lage=age
    value[idstr] = [lname,lemail,lpnumber,lage]
    
    localStorage.setItem('value', JSON.stringify(value));
    
}