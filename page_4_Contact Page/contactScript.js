//Cathal: Function to change HTML to show user input was successful or if more input is required 
function validateForm() {

    let emailRequired1 = false;
    let nameValue = document.forms["contactForm"]["nameInput"].value;
    let emailValue = document.forms["contactForm"]["emailInput"].value;

    // For loop to check if '@' char is included in String user input
    for (let i = 0; i < emailValue.length; i++){
        if (emailValue[i] == '@'){
            emailRequired1 = true;
        }
    }

    //If statement to make sure inputs are filled before changing innerHTML for message
    if(nameValue != "" && emailRequired1 == true && emailValue != ""){
        //Calling input complete message
        submitSuccess()
    }  
    else if (nameValue == "" || emailValue== "" ) {
    }
    else if (nameValue == "" && emailValue == "" ){
    } 
}

//function to change innerHTML when input is completed
function submitSuccess(){
    event.preventDefault;
    document.getElementById("contactInput").innerHTML = "<h2>Thank you for your message </h2><br> We will contact you soon";    
}


