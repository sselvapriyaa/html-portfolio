
function loadSession(){
    var employeeDetails =  sessionStorage.getItem("employeeData");
    

    if(typeof(employeeDetails) !==  'undefined'){
        var result = JSON.parse(employeeDetails); 
        message = result.empName + " who is a " + result.designation + " will get $" +result.salary;
        document.getElementById("message").innerHTML = message;
    }
    
}