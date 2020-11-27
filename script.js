function idCard(){
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let age = document.getElementById("age").value;
    let phoneNumber = document.getElementById("phoneNumber").value; 
    let address = document.getElementById("address").value; 

    document.getElementById("postFullName").innerHTML = firstName + " " + lastName;
    document.getElementById("postAddress").innerHTML = address;

    let numberArray = [];

    numberArray.push(age);
    numberArray.push(phoneNumber);

    for(let i = 0; i < numberArray.length; i ++){
        if(numberArray[i] <= 117){
            document.getElementById("postAge").innerHTML = numberArray[i];
        }
        else{
            document.getElementById("postPhoneNumber").innerHTML = numberArray[i];
        }
    }
}
