import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email = 'abc@mail.com';
  password = '123456';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loginClick() {
    if (this.email === 'abc@mail.com' && this.password === '123456') {
      console.log("Done");
      this.router.navigate(['/scanner']);
    } else {
      console.log("wrong:", this.email,",",this.password,".");

    }
  }

}
