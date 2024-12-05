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
/*
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
*/
export class ListarComponent {
  vehiculos = [
    { marca: 'Toyota', modelo: 'Corolla', anio: 2020, precioPorDia: 50 },
    { marca: 'Ford', modelo: 'Focus', anio: 2018, precioPorDia: 45 },
    { marca: 'Chevrolet', modelo: 'Cruze', anio: 2019, precioPorDia: 55 },
  ];

  verReservas(vehiculo: any): void {
    console.log('Mostrar reservas para:', vehiculo);
  }
}