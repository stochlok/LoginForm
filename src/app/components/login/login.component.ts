import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AduserService } from '../../aduser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponent implements OnInit {

  angForm: FormGroup;

  constructor(private aduserservice: AduserService, private fb: FormBuilder) { 
    this.loginForm();
  }

  loginForm() {
    this.angForm = this.fb.group({
      user_nick: ['', Validators.required ],
      user_pass: ['', Validators.required ]
   });
  }

  addAdUser(user_nick, user_pass) {
    this.aduserservice.addAdUser(user_nick, user_pass);
	location.href="profile";
	
}
  ngOnInit() {
  }

}
