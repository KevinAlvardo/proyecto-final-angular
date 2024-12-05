//src/app/reservas/listar/listar.component.ts

import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../../services/reserva.service';
import { Reserva } from '../../models/reserva';

@Component({
  selector: 'app-listar',
  standalone: false,
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {
  reservas: Reserva[] = []; // Lista de reservas

  constructor(private reservaService: ReservaService) {}

  ngOnInit(): void {
    this.cargarReservas(); // Cargar las reservas al iniciar el componente
  }

  cargarReservas(): void {
    this.reservaService.listarReservas().subscribe(
      (data) => {
        this.reservas = data; // Asignar datos obtenidos
      },
      (error) => console.error('Error al cargar reservas:', error)
    );
  }
}
