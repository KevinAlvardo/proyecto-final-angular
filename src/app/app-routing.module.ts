//src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'vehiculos', loadChildren: () => import('./vehiculos/vehiculos.module').then(m => m.VehiculosModule) },// Carga diferida del módulo de vehículos
  { path: '', redirectTo: '/vehiculos', pathMatch: 'full' }, // Redirección a vehículos por defecto
  
  {
    path: 'reservas',
    loadChildren: () =>
      import('./reservas/reservas.module').then((m) => m.ReservasModule),
  }, // Carga diferida del módulo de reservas
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthModule),
  }, // Carga diferida del módulo de autenticación
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

