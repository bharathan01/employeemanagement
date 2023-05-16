import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeServiceService } from '../service/employee-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmpolyeeComponent } from '../empolyee/empolyee.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private fb:FormBuilder,
    private es:EmployeeServiceService,
    private route:Router,
    private toastr: ToastrService,
    private em:EmpolyeeComponent){

  }
  errorMsg:any
 
  regForm:any = this.fb.group({

    name:['',[Validators.required,Validators.pattern('[a-zA-z]+')]],
    username:['',[Validators.required,Validators.pattern('[0-9a-zA-z- _@].+')]],
    email:['',[Validators.required,Validators.email,Validators.pattern('[0-9a-zA-z- _@].+')]],
    password:['',[Validators.required,Validators.pattern('[0-9a-zA-z- _@].+')]]

  })

  registerUser(){
    if(this.regForm.valid){
      
      this.es.registerNewuser(this.regForm.value).subscribe((data:any) =>{
        if(data.statusCode == 200){
          alert(data.message)
          this.em.openRegForm('login')
        }
        if(data.stausCode == 400){
          alert(data.message)
          this.em.openRegForm('login')    
        }
        else{
          this.regForm.reset()
        }
      
       })      
    }
  }
}
