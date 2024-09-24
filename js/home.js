//  document.getElementById("add-money").addEventListener("click", function(event){
//     event.preventDefault();
// const cashOutForm = document.getElementById("cash-out-form");
// if(cashOutForm){
//     cashOutForm.remove();
// }
// });
 document.getElementById("out-money").addEventListener("click", function(event){
    event.preventDefault();
     document.getElementById("cash-out-form").classList.remove("hidden");
     document.getElementById("add-money-form").classList.add("hidden");


});
document.getElementById("add-money").addEventListener("click",function(){
    document.getElementById("add-money-form").classList.remove("hidden");
    document.getElementById("cash-out-form").classList.add("hidden");
})
// add money to the account 
document.getElementById("btn-add-money").addEventListener("click", function(event){
    event.preventDefault();
    const pinNumber = document.getElementById("pin").value;
    if(pinNumber==="1234"){
        const enterAmount = document.getElementById("amount").value;
        const prevAmount = document.getElementById("balance").innerText;
        const enterAmountNumber = parseFloat(enterAmount);
        const prevAmountNumber = parseFloat(prevAmount);
        const newBalance = enterAmountNumber + prevAmountNumber;
        document.getElementById("balance").innerText = newBalance; 
    }
    else{
        alert("Failed to add money. please try again!");
    }
})

// cash out account 
document.getElementById("btn-cash-out").addEventListener("click", function(event){
    event.preventDefault();
    const pinNum = document.getElementById("pin-out").value;
    if(pinNum ==="1234"){
        const cashOutAmount = document.getElementById("cash-out-amount").value;
        cashOutAmountNumber = parseFloat(cashOutAmount);
        const balance = document.getElementById("balance").innerText;
        const balanceNumber = parseFloat(balance);
        const newBalance =  balanceNumber - cashOutAmountNumber;
        document.getElementById("balance").innerText = newBalance;

    }
    else{
        alert("cash out failed please try again!");
    }

})