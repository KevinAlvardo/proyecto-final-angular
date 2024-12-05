

// src/app/reservas/detalle/detalle.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  standalone: false,
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  vehiculoId: number = 0;
  reserva = { fechaInicio: '', fechaFin: '', cliente: '', estado: 'Disponible' }; // Datos de ejemplo

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.vehiculoId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('ID del vehículo:', this.vehiculoId);
    // Aquí normalmente se haría una solicitud HTTP para obtener los detalles del vehículo y la reserva.
  }

  reservar() {
    console.log('Reserva realizada');
    this.reserva.estado = 'Reservado';
  }
}
