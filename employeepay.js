function submitForm(){
    var name = document.getElementById("name").value;
    alert(name);
    var empId = Number(document.getElementById("empId").value);
    var startDate = document.getElementById("startDate").value;
    var hoursWorked = Number(document.getElementById("hoursWorked").value);
    var designation = document.getElementById("designation").value;

    function Employee(name, empId, startDate, hoursWorked, designation){ 
        this.name = name;
        this.empId = empId;
        this.startDate = startDate;
        this.hoursWorked= hoursWorked;
        this.designation = designation;
    
}    

 let employee1 = new Employee(name, empId, startDate, hoursWorked, designation); 
 let employee2 = new Employee(name, empId, startDate, hoursWorked, designation); 
 let employee3 = new Employee(name, empId, startDate, hoursWorked, designation); 
        if(designation = "Manager") {          
            var salary1 = employee1.hoursWorked * 90;     
        alert('Salary for ' + employee1.name +" "+ 'is: ' +salary1);  
       
        }
        else if(designation ="Consultant"){ 
        //alert('Salary for' + employee1.name + ""+ 'is: ' +salary);  
            var salary2 = employee2.hoursWorked * 70;     
            alert('Salary for ' + employee2.name + " "+ 'is:' +salary2);  
        
            }  
        else if(designation ="Trainee"){
            var salary3 = employee3.hoursWorked * 45;      
            alert('Salary for ' + employee3.name + 'is: ' +salary3);  
           
                   
        }
        sessionStorage.setItem("Employee Name", employee1.name);
       
        //sessionStorage.setItem("Designation", employee1.designation);
        //sessionStorage.setItem("Salary", employee1.salary);      

    }
    


 

   