import { Component, OnInit } from '@angular/core';
import { AdUser } from './AdUser';
import { AduserService } from '../../aduser.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  adusers: AdUser[];

  constructor(private aduserservice: AduserService) { }

logout(){
	location.href="";
}
 

  ngOnInit() {
    this.aduserservice
      .getAdUsers()
      .subscribe((data: AdUser[]) => {
      this.adusers = data;
    });
  }
}
