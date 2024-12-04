import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservasRoutingModule } from './reservas-routing.module';
import { ListarComponent } from './listar/listar.component';
import { DetalleComponent } from './detalle/detalle.component';


@NgModule({
  declarations: [
    ListarComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    ReservasRoutingModule
  ]
})
export class ReservasModule { }
