import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) { }

  baseURL = 'http://localhost:3000/api/employee'

  addAnEmployee(employeeData:any){
    var emp = employeeData
    return this.http.post(this.baseURL+'/add', emp)

  }
 
 getEmployeeDetails(){

  return this.http.get(this.baseURL+'/get')
 }

 getEmpData(empId:any){

  return this.http.get(this.baseURL+'/empdata/'+empId)
 }

 updateEmpData(empId:any,upadatedData:any){

  return this.http.put(this.baseURL+'/update/'+empId,upadatedData)
 }

 deleteEmp(empId:any){

  return this.http.delete(this.baseURL+'/delete/'+empId)
 }

 registerNewuser(newUserDetails:any){
 
  return this.http.post(this.baseURL+'/register',newUserDetails)

 }
 logInUser(loginDetails:any){
  return this.http.post(this.baseURL+'/login',loginDetails)
 }

 


}
