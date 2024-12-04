//src/app/vehiculos/listar/listar.component.ts
import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../services/vehiculo.service';
import { Vehiculo } from '../../models/vehiculo';

@Component({
  selector: 'app-listar',
  standalone: false,
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'], // Corregido el nombre de la propiedad
})
export class ListarComponent implements OnInit {
  vehiculos: Vehiculo[] = []; // Lista de vehículos

  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit(): void {
    this.cargarVehiculos(); // Cargar los vehículos al iniciar el componente
  }

  cargarVehiculos(): void {
    this.vehiculoService.listarVehiculos().subscribe(
      (data) => {
        this.vehiculos = data; // Asignar datos obtenidos
      },
      (error) => console.error('Error al cargar vehículos:', error)
    );
  }
}
