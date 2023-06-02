import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EncuestaService } from 'src/app/servicios/encuesta.service';
@Component({
  selector: 'app-resultado-encuesta',
  templateUrl: './resultado-encuesta.component.html',
  styleUrls: ['./resultado-encuesta.component.css'],
})
export class ResultadoEncuestaComponent {
  lista: Observable<any[]>;
  constructor(private encuestaServ: EncuestaService) {
    this.lista = this.encuestaServ.getEncuestas();
    console.log(this.lista);
  }

  ngOnInit(): void {}
}
