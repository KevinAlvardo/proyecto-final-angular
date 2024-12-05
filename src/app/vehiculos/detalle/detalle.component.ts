import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiculoService } from '../../services/vehiculo.service';
import { Vehiculo } from '../../models/vehiculo';

@Component({
  selector: 'app-detalle',
  standalone: false,
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.scss'
})



export class DetalleComponent implements OnInit {
  vehiculo: Vehiculo | undefined; // Vehículo a mostrar en la vista de detalles

  constructor(
    private route: ActivatedRoute, // Para obtener el ID de la URL
    private vehiculoService: VehiculoService // Servicio para obtener el vehículo
  ) {}

  ngOnInit(): void {
    this.cargarVehiculo(); // Cargar el vehículo cuando el componente se inicializa
  }

  cargarVehiculo(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Obtener el ID de la URL
    if (id) {
      this.vehiculoService.obtenerVehiculo(id).subscribe(
        (data) => {
          this.vehiculo = data; // Asignar datos del vehículo
        },
        (error) => console.error('Error al cargar el vehículo:', error)
      );
    }
  }
}



