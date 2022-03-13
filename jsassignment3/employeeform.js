
    function submitDetails() {
        var employeeDetails = {}
        employeeDetails.empName = document.getElementById('empName').value;
        employeeDetails.empId = document.getElementById('empId').value;
        employeeDetails.startDate = document.getElementById('startDate').value;
        employeeDetails.hoursWorked = document.getElementById('hoursWorked').value;
        employeeDetails.designation = document.getElementById('designation').value;  
    
        if (employeeDetails.empName == "" || employeeDetails.empId == "" || employeeDetails.startDate == ""||  employeeDetails.hoursWorked == "" || employeeDetails.designation == "") {
            alert("All fields are mandatory");
            return false;
        }
        var salary;

        if (employeeDetails.designation === 'Manager') {
            salary = employeeDetails.hoursWorked * 90;
            employeeDetails.salary=salary;
                
        }
        else if (employeeDetails.designation === 'Consultant') {
            salary = employeeDetails.hoursWorked * 70;
            employeeDetails.salary=salary;
             
              }
        else if (employeeDetails.designation === "Trainee") {
            salary = employeeDetails.hoursWorked * 45;
            employeeDetails.salary=salary;
           
        }      
        sessionStorage.setItem("employeeData", JSON.stringify(employeeDetails));
            window.location.replace("displayemployee.html");
    

    
}
    

