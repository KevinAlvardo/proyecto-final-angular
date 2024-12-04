//src/app/vehiculos/vehiculos-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { DetalleComponent } from './detalle/detalle.component';



const routes: Routes = [
  { path: '', component: ListarComponent }, // Ruta principal de vehículos
  { path: ':id', component: DetalleComponent }, // Detalles del vehículo
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiculosRoutingModule {}
