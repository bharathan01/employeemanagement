import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpolyeeComponent } from './empolyee/empolyee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { RegisterComponent } from './register/register.component';
import { DeleteEmployeeComponent } from './log-in/delete-employee.component';

const routes: Routes = [
  {path:'' , component:EmpolyeeComponent},
  {path:'addEmployee', component:AddEmployeeComponent},
  {path:'editEmployee/:id',component:EditEmployeeComponent},
  {path:'register',component:RegisterComponent},
   {path:'login',component:DeleteEmployeeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
