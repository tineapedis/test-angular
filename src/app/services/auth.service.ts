import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$ = this.ofAuth.user;

  constructor(private ofAuth: AngularFireAuth) { }

  login() {
    this.ofAuth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((result) => {
        console.log(result);
      });
  }

  logout() {
    this.ofAuth.signOut();
  }
}
