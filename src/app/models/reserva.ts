//src/app/models/reserva.ts
export interface Reserva {
    reservaId: number;
    vehiculoId: number;
    clienteId: number;
    fechaInicio: string;
    fechaFin: string;
    estado: string;
    vehiculo: string;
    cliente: string;
  }
  