import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage!: string;
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService)  {}
  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
    
    this.loginService.loginErrorSubject.subscribe((errMessage) => {
      this.errorMessage = errMessage;
    });
  }

  loginUser() {

    const user = this.loginForm.value;
    console.log(user);
    this.loginService.authenticateUser(user.username, user.password);
  }

}
