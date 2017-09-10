

<!-- hide javascript 

function makeDate()
{
    test = new Date()
    month = test.getMonth()
    month = (month * 1) + 1
    day = test.getDate()
    year = test.getFullYear()
    alert("You have reached the end of the page. Your visit date is: " + month+"/" + day+"/"+year+" ")
}

function changefont()
{
    var x = document.getElementById("pgNav");
    x.style.fontSize = "25px";           
    x.style.color = "red"; 
}

function checkForm(){
    var fName = document.forms["contact"]["name"].value;
    var fEmail = document.forms["contact"]["email"].value;
    
    if (fName == "") {
        alert("Please let me know your name");
        return false;
    }else if (fEmail == "") {
        alert("Please fill in your email address");
        return false;
    }else if (!fEmail.includes("@")){
        alert("Please make sure your email address is valid");
        return false;
    }else{
        alert("Thank you, "+ fName+"!");
        return true; }
}


// end hiding javascript  -->