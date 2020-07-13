import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public pageName = 'Job';
  constructor(public router: Router) {
  }

  ngOnInit() {
  }
  redirectToHome() {
    this.router.navigateByUrl('dashboard/home');
}
redirectToAbout() {
    this.router.navigateByUrl('dashboard/about');
}
logMeOut(){
    this.router.navigateByUrl('login');
}

}
