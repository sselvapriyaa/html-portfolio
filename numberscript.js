let num = Math.floor(Math.random() * 50) +1;
console.log(num);
let num_guess = 0;
function do_guess() {
    let guess = Number(document.getElementById("guess").value);
    let message = document.getElementById("message");
   if (guess > num) {
        message.innerHTML = "Not Really! try a lower number."
        num_guess += 1;
    }
    else if (guess < num) {
        message.innerHTML = "Not Really! try a higher number."
        num_guess += 1;
    }
    else if (guess == num) {
        message.innerHTML = "Great!! You took " + num_guess + " attempts to get it right.";
        document.getElementById("guess").value ='';
    }   

}







    

