import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { QuiensoyComponent } from './pages/quiensoy/quiensoy.component';
import { EncuestaComponent } from './pages/encuesta/encuesta.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ResultadoEncuestaComponent } from './pages/resultado-encuesta/resultado-encuesta.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'quiensoy', component: QuiensoyComponent },
  { path: 'encuesta', component: EncuestaComponent },
  { path: 'resultadoencuesta', component: ResultadoEncuestaComponent },
  { path: 'listado', component: ListadoComponent },
  {
    path: 'juegos',
    loadChildren: () =>
      import('./pages/juegos/juegos.module').then((m) => m.JuegosModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
