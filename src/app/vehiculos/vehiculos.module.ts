//src/app/vehiculos/vehiculos.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculosRoutingModule } from './vehiculos-routing.module';
import { ListarComponent } from './listar/listar.component';

import { DetalleComponent } from './detalle/detalle.component';

@NgModule({
  declarations: [
    ListarComponent, // Declarado aquí
    DetalleComponent,
  ],
  imports: [
    CommonModule,
    VehiculosRoutingModule,
  ],
})
export class VehiculosModule {}
