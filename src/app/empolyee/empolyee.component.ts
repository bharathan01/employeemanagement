import { Component,Injectable } from '@angular/core';
import { EmployeeServiceService } from '../service/employee-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DeleteEmployeeComponent } from '../log-in/delete-employee.component';
import { RegisterComponent } from '../register/register.component';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-empolyee',
  templateUrl: './empolyee.component.html',
  styleUrls: ['./empolyee.component.css']
})
export class EmpolyeeComponent {

  constructor(private es:EmployeeServiceService,
    private at:ActivatedRoute, 
    private rt:Router,
    ){
  }

  employeeDetails:any 
  empId:any 
  fullname:any 
  displayAlret:boolean =true
  logInFormOpen:boolean = true
  openLoginForm:any
  loginUserDetails:any
  closeLogIn:boolean = false
  profileView:boolean=true
  userName:any
  user:any
  searchId:any

  

  ngOnInit():void{
      
   this.es.getEmployeeDetails().subscribe( (data:any) =>{

    this.employeeDetails = data 
    
    
    },data => {
      alert('somethig went wrong..')
    
    })
   
  this. getdata()
  
     

  }
  delete(emp:any,fullname:any){
    this.empId = emp
    this.fullname = fullname

  }
  deleteEmployee(){
    this.es.deleteEmp(this.empId).subscribe((data:any) => {
      if(data.statusCode = 200){
        this.displayAlret = false
      
        this.es.getEmployeeDetails().subscribe((data:any) =>{
          this.employeeDetails = data 
        })

      }
    },data =>{
      alert(data.message)
      
    })
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


  closeLoginForm(loginDetails:any){
    this.loginUserDetails =loginDetails
    if(this.loginUserDetails){
      localStorage.setItem("data",JSON.stringify(this.loginUserDetails.data))
      window.location.reload()
      
    }
    
  }
  getdata(){
    if(localStorage.getItem("data")){
      this.user = JSON.parse(localStorage.getItem("data") || "")
      this.userName = this.user.name
      this.closeLogIn=true
      this.logInFormOpen =true 
      this.profileView = false
    }
    else{
      this.rt.navigateByUrl('#')
    }
   
  }
  logOut(){
    localStorage.removeItem("data")
    window.location.reload()
    this.rt.navigateByUrl('')
  }
  close(){
    this.logInFormOpen = true 
  }

 

}
