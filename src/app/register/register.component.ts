import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private fb:FormBuilder){

  }
 
  regForm:any = this.fb.group({

    Name:['',[Validators.required]],
    username:['',[Validators.required]],
    email:['',[Validators.required]],
    password:['',[Validators.required]],

  })


}
