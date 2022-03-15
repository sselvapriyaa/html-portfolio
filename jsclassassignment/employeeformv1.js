class Employeepay{
    #empName;
    #empId;
    #startDate;
    #hoursWorked;
    #designation;
    #salary;

    constructor(){

    };

set empName(empName){

    if(empName === ""){
      throw new Error("Employee name cannot be empty");
    }
        this.#empName = empName;
    
}
get empName(){
    return this.#empName;
}

set empId(empId){
    
    if(empId === ""){
      throw new Error("Employee Id cannot be empty");
    
    }
        this.#empId = empId;  
}
get empId(){
    return this.#empId;
}

set startDate(startDate){
   
    if(startDate === ""){    
        throw new Error("Start date cannot be empty");
    } 
        this.#startDate = startDate;
    
}
get startDate(){
    return this.#startDate;
}

set hoursWorked(hoursWorked){
    if(hoursWorked === ""){
        throw new Error("Hours worked cannot be empty");       
    }
        this.#hoursWorked = hoursWorked;    
}
get hoursWorked(){
    return this.#hoursWorked;
}

set designation(designation){
    if(designation === ""){    
            throw new Error("Designation cannot be empty"); 
    }
        this.#designation = designation;
}
get designation(){
    return this.#designation;
}

set salary(salary){
    this.#salary = salary;
}
get salary(){
    return this.#salary;
}
 toJSON(){
     return{
         empName : this.#empName,
         empId : this.#empId,
         startDate : this.#startDate,
         hoursWorked : this.#hoursWorked,
         designation : this.#designation,
         salary : this.#salary

     }
 }

 getEmployeesalary(){
     if(this.#designation === "Manager"){
        this.#salary = this.#hoursWorked * 90;
     }else if (this.#designation === "Consultant"){
        this.#salary = this.#hoursWorked * 70;
     }else if (this.#designation === "Trainee"){
        this.#salary = this.#hoursWorked * 45;

 }
 }
}

function getEmployeepayroll(){
    var empObject  = new Employeepay();
    empObject.empName = document.getElementById('empName').value;
    empObject.empId = document.getElementById('empId').value;
    empObject.startDate = document.getElementById('startDate').value;
    empObject.hoursWorked = document.getElementById('hoursWorked').value;
    empObject.designation = document.getElementById('designation').value;
     
    empObject.getEmployeesalary();
    sessionStorage.setItem("employeeData", JSON.stringify(empObject.toJSON()));
    window.location.replace("displayemployeev1.html");


}





