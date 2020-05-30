import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth, public router : Router) { }
  public currentuser : firebase.User
  
  loginWithGG()
  {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(user=>{
      this.currentuser = user.user;
      console.log(user);
      this.router.navigate(['userinfo']);
    }).catch(error => {
      console.log("Some thing wrong!");
    })
  }
  
  quanly()
  {
    location.href="management";
  }
  
  
  SignOut()
  {
    this.auth.signOut().then(()=> {
      location.href ="login";
    })
  }
  
  
  
}
