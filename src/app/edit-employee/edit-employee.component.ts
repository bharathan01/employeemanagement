import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { EmployeeServiceService } from '../service/employee-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {
  constructor( private fb:FormBuilder ,private es:EmployeeServiceService,private route:ActivatedRoute, private rt:Router){

  }
   employeeDataForm:any
   empId:any
  ngOnInit():void{

    this.route.params.subscribe((dataId:any) => {

      this.empId = dataId['id']

      this.es.getEmpData(this.empId).subscribe((data:any) =>{

        this.employeeDataForm.patchValue({
          fullname:data.fullname,
          position:data.position,
          address:data.address,
          salary:data.salary
        })
      },data =>{
        alert(data.message)
      })
    })

   
    this.employeeDataForm = this.fb.group({
      fullname:['',[Validators.required,Validators.pattern('[a-zA-z _-]+')]],
      position:['' ,[Validators.required,Validators.pattern('[0-9a-zA-z _-]]+')]],
      address:['' ,[Validators.required,Validators.pattern('[0-9a-zA-z _-]]+')]],
      salary:['' ,[Validators.required,Validators.pattern('[0-9 _-]]+')]]    
   
    })

    

  }

  getUpdateData(){
    this.es.updateEmpData(this.empId,this.employeeDataForm.value).subscribe((data:any) =>{

     alert(data.message)
     this.rt.navigateByUrl('')
    }, data=>{
      alert('somthing went wrong...')
    })
    

  }


}
