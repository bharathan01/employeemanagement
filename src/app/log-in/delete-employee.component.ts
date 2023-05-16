import { Component, Injectable } from '@angular/core';
import { EmpolyeeComponent } from '../empolyee/empolyee.component';
import { RegisterComponent } from '../register/register.component';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeServiceService } from '../service/employee-service.service';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent {
 

 constructor(private fb:FormBuilder,private es:EmployeeServiceService,private rt:Router,private em:EmpolyeeComponent ){

 }

 logInForm:any = this.fb.group({

  email:[[''],[Validators.required,Validators.pattern('[0-9a-zA-z- _@].+')]],
  password:[[''],[Validators.required,Validators.pattern('[0-9a-zA-z- _@].+')]]

 })

 logInSubmit(){
  if(this.logInForm.valid){
   this.es.logInUser(this.logInForm.value).subscribe((data:any)=>{
    alert(data.message)
    this.em.loginUserDetails = data
    this.logInForm.reset()
    this.em.closeLoginForm()
   })
  }
 }

}
