import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import * as firebase from "firebase";
import { User } from '../model/user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<User>;
  items: Observable<User[]>;
  idValue: string;
  adValue:string;
  nameValue: string;
  phoneValue:string;
  StateOfStatus : boolean  = false;
  public test : Array<User>;
  
  constructor(public afs: AngularFirestore,public authsv : AuthService,public router : Router) {
    this.itemsCollection = afs.collection<User>('User');
    this.items = this.itemsCollection.valueChanges( );
    this.items.subscribe(data=>{
      this.test = data;
      console.log(this.test)
      
      
      
    })
   }

  ngOnInit(): void {
  }
  xemtinhtrang()
  {
    this.StateOfStatus = true;
  }
  hidestatus()
  {
    this.StateOfStatus = false;
  }
  getdatastatus()
  {
    const dbRefCanhBaodotnhap=firebase.database().ref().child('PhatHienDotNhap');
    dbRefCanhBaodotnhap.on('value',snap=>{
      var canhbao=snap.val();
      document.getElementById('dotnhap').innerHTML=canhbao;
        });
    const dbRefCanhBaochay=firebase.database().ref().child('PhatHienChay');
    dbRefCanhBaochay.on('value',snap=>{
      var canhbao=snap.val();
      document.getElementById('chay').innerHTML=canhbao;
        });
  }
  
}