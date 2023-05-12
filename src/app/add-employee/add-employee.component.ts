import { Component, Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeServiceService } from '../service/employee-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent { 


  constructor(private fb:FormBuilder,private es:EmployeeServiceService,private rt:Router){

  }

   showValid:boolean = false
   btnEnable:boolean = false

  employeeFrom  = this.fb.group({
    _id:[null],
    fullname:['' ,[Validators.required,Validators.pattern('[a-zA-z]+')]],
    position:['' ,[Validators.required,Validators.pattern('[0-9a-zA-z]+')]],
    address:['' ,[Validators.required,Validators.pattern('[0-9a-zA-z]+')]],
    salary:['' ,[Validators.required,Validators.pattern('[0-9]+')]]

  })

  addEmployee(){
   
    if(this.employeeFrom.valid){
      this.btnEnable =true
      this.es.addAnEmployee(this.employeeFrom.value).subscribe((res:any) =>{
        alert(res.message)
        this.resetForm()
        this.rt.navigateByUrl('')       
      },res => {
        alert('somthing went Wrong...')
      })
      
    }
    else(
      this.showValid = true
    )
   
  }

  resetForm(){
    this.employeeFrom.reset()
    this.btnEnable =false

  }




}
