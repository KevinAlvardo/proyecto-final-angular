import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { HistorialComponent } from './historial/historial.component';
import { DisponibilidadComponent } from './disponibilidad/disponibilidad.component';
import { CostosComponent } from './costos/costos.component';


@NgModule({
  declarations: [
    HistorialComponent,
    DisponibilidadComponent,
    CostosComponent
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule
  ]
})
export class ReportesModule { }
