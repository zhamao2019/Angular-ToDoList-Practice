import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor( 
    private authService: AuthService) { 
    //this.authService = new AuthService();
  }

  ngOnInit(): void {
  
  }

  onSubmit(form) {
    console.log(form);
    
    console.log('authService: ' + this.authService.loginWithCredentials(this.username, this.password));
    
  }

}
