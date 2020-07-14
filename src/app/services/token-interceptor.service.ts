import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }
  
  intercept(req: HttpRequest<any>,next: HttpHandler){
    let authService = JSON.parse(this.injector.get(UsersService).getToken());
    let tokenizedRequest = req.clone({
      setHeaders:{
        Authorization: `Bearer ${authService.access_token}`,
      }
    })
    return next.handle(tokenizedRequest);
  
  }
}
