import { Component, OnInit } from '@angular/core';
import { ValidateService } from "../../services/validate.service";
import { AuthService } from "../../services/auth.service";
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: String;
  password: String;

  constructor(
    private validateServece: ValidateService,
    private flashMessages: FlashMessagesService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      username: this.username,
      password: this.password
    };

    if(!this.validateServece.validateRegister(user)) {
      console.log("Please fill in all fields");
      this.flashMessages.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    this.authService.registerUser(user).subscribe (data => {
      if(data.success) {
        this.flashMessages.show('You are successfully registered and can log in', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/']);
      } else {
        this.flashMessages.show('Something went wrong...', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['regiser']);
      }
    });

  }

}
