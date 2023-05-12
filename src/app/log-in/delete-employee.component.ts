import { Component, Injectable } from '@angular/core';
import { EmpolyeeComponent } from '../empolyee/empolyee.component';
import { RegisterComponent } from '../register/register.component';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent {
 

 constructor(){

 }

}
