// console.log("button added")

document.getElementById("btn-login").addEventListener("click",function(event){
    event.preventDefault();
     
    // const number = document.getElementById("phn-number").addEventListener("keyup",function(event){
    //    const storeNumber = event.target.value;
    //    console.log(storeNumber);
    // })

    const number = document.getElementById("phn-number").value;
    const pinNumber = document.getElementById("pin-num").value;
    // console.log(number);
    // console.log(pinNumber);
    if(number==="01776306113" && pinNumber=== "1234"){
        console.log("you are logged in");
        window.location.href = "home.html"
    }
    else{
        alert("wrong phone number or pin");
    }
    
})