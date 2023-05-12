import { Component } from '@angular/core';
import { EmployeeServiceService } from '../service/employee-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DeleteEmployeeComponent } from '../log-in/delete-employee.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-empolyee',
  templateUrl: './empolyee.component.html',
  styleUrls: ['./empolyee.component.css']
})
export class EmpolyeeComponent {

  constructor(private es:EmployeeServiceService,private at:ActivatedRoute, private rt:Router,private log:DeleteEmployeeComponent){

  }

  employeeDetails:any 
  empId:any  
  displayAlret:boolean =true
  logInFormOpen:boolean = true
  openLoginForm:any
  
  

  ngOnInit():void{
   
   this.es.getEmployeeDetails().subscribe( (data:any) =>{

    this.employeeDetails = data 
    
    
    },data => {
      alert('somethig went wrong..')
    
    })
    
     

  }
  delete(emp:any){
    this.empId = emp

  }
  deleteEmployee(){
    this.es.deleteEmp(this.empId).subscribe((data:any) => {
      if(data.statusCode = 200){
        this.reload()
        this.displayAlret = false
       

      }
    },data =>{
      
    })
  }
  reload(){
    window.location.reload()
    
  }
  openloginForm(){
    this.logInFormOpen =false
    this.openLoginForm = DeleteEmployeeComponent
    
  }
  openRegForm(component:any){
    if(component == 'login'){
      this.openLoginForm = DeleteEmployeeComponent
    }
    if(component == 'register'){
      this.openLoginForm = RegisterComponent
    }


  }
  

}
