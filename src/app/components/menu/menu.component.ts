import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/clases/usuario';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  user$!: Observable<Usuario>;
  usuario$!: Observable<Usuario>;
  usuario!: any;
  constructor(private authSvc: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.user$ = this.authSvc.user$;

    this.authSvc.user$.subscribe((usuario) => {
      this.usuario = usuario;
    });
  }
  async logOut() {
    try {
      await this.authSvc.logout();
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }
  }
}
