import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authsv : AngularFireAuth,public router : Router) { }
  email: string;
  password:string;
  ngOnInit(): void {
  }
  login() {
    return this.authsv.signInWithEmailAndPassword(this.email, this.password)
      .then((result) => {
        console.log(result);
        this.router.navigate(['/userinfo',{tags: '%one,%two'}]);

      }).catch((error) => {
        alert ("Sai ID hoặc Password !");
      })
  }
}
