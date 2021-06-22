import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public usuario = {
    logged: true
  }

  constructor(private router: Router) {}

  goToHome() {
    if(this.usuario.logged) {
      this.router.navigateByUrl('/home');
      console.log('foi para home');
    } else {
      alert('você não ta logado');
    }
  }
}
