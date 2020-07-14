import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm:FormGroup;
  loading = false;
  submitted = false;
  errors = null;
  constructor( private _fb:FormBuilder,
    private service: UsersService,
    route:Router) { }

  ngOnInit() {
    this.userData();
  }

  handleError(error){
    this.errors = error.error.errors;
 }
  userData(){
    this.signupForm=this._fb.group({
    first_name: [null, Validators.compose([Validators.required])],
    last_name: [null, Validators.compose([Validators.required])],
    business_name: [null, Validators.compose([Validators.required])],
    phone_number: [null, Validators.compose([Validators.required])],
    email: [null, Validators.compose([Validators.required])],
    password: [null, Validators.compose([Validators.required, Validators.minLength(6),Validators.maxLength(10)])],
    password_confirmation: [null, Validators.compose([Validators.required])]
  })
}

get getUserData(){
  return this.signupForm.controls;
  } 

  register(){
    if(this.signupForm.invalid){
      return
    }
   
    const first_name=this.getUserData.first_name.value;
    const last_name=this.getUserData.last_name.value;
    const business_name=this.getUserData.business_name.value;
    const phone_number=this.getUserData.phone_number.value;
    const email=this.getUserData.email.value;
    const password=this.getUserData.password.value;
    const password_confirmation=this.getUserData.password_confirmation.value;
    
    this.loading = true;
    this.service.registerUser(first_name,last_name,business_name,phone_number,email,password,password_confirmation).subscribe(
      data=>{
        // this.toarster.successToastr('Successfully registered',null,{toastTimeout:4000})
        // this.loading=false;
        //this.route.navigate(['/login'])
        console.log(data);
      },
      (error)=>{
        // this.toarster.warningToastr(error.error.warning,null, { toastTimeout: 4000 })
        console.log(error);
        this.handleError(error);
      }
    )
   
  }

}
