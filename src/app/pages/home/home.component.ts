import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  user2$!: Observable<Usuario>;
  constructor(private authSvc: AuthService) {}

  ngOnInit(): void {
    this.user2$ = this.authSvc.user$;
  }
}
