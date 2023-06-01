import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ListadoService } from 'src/app/servicios/listado.service';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  lista: Observable<any[]>;
  constructor(private listado: ListadoService) {
    this.lista = this.listado.getListas();
    console.log(this.lista);
  }

  ngOnInit(): void {}
}
