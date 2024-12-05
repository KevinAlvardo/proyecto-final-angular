// src/app/reservas/reservas.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Asegúrate de importar FormsModule

import { ReservasRoutingModule } from './reservas-routing.module';
import { ListarComponent } from './listar/listar.component';
import { DetalleComponent } from './detalle/detalle.component';

@NgModule({
  declarations: [
    ListarComponent,
    DetalleComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,  // Asegúrate de incluir FormsModule aquí
    ReservasRoutingModule,
  ]
})
export class ReservasModule { }
