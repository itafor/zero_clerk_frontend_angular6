import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  readonly rootUrl:string = 'http://127.0.0.1:8000/api/';
  //readonly rootUrl:string = ' http://157.245.248.103/zero_clerk_api/public/api/';
  constructor(public http:HttpClient) { }

  
 login(
  email: string,
  password: string,
) {
  return this.http.post<any>(this.rootUrl +  `auth/` + `login`, {
      email,
      password,
    })
    .pipe();
}

getToken(){
  return  localStorage.getItem('usertoken');
}

registerUser(
  first_name:string,last_name:string,business_name:string,phone_number:string,email:string,password:string,password_confirmation:string
) {
  return this.http.post<any>(this.rootUrl +  `auth/` + `register`, {
    first_name,last_name,business_name,phone_number,email,password,password_confirmation
    })
    .pipe();
}

fetchPlan(uuid:any){
  return this.http.get(this.rootUrl + 'subscription/buy-plan/' + `${uuid}`)
}

buy_plan(
  name:string,amount:string,plan_id:string
) {
  return this.http.post<any>(this.rootUrl + `subscription/` + `buy-plan`, {
    name,amount,plan_id
    })
    .pipe();
}

transactionDone(
  tranxRef:string
) {
  return this.http.post<any>(this.rootUrl +  `subscription/` + `payment/callback`, {
    tranxRef,
    })
    .pipe();
}

profile(){
  return this.http.post(this.rootUrl + 'auth/' + `me`,{})
}

}
