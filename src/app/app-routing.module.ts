//src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ListarComponent } from './vehiculos/listar/listar.component';
import { DetalleComponent } from './reservas/detalle/detalle.component';


const routes: Routes = [
  { path: 'vehiculos', loadChildren: () => import('./vehiculos/vehiculos.module').then(m => m.VehiculosModule) },// Carga diferida del módulo de vehículos
  { path: '', redirectTo: '/vehiculos', pathMatch: 'full' }, // Redirección a vehículos por defecto
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'vehiculos', component: ListarComponent },
  { path: 'reservas/:id', component: DetalleComponent }
  
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

