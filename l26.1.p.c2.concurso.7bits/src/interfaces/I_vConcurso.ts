export interface I_vConcurso {
  reportar(
    c: {
      cedula: string | number;
      nombre: string;
      apellido: string;
      sexo: string;
      fechaNac: string;
      edad: number;
      puntajeFinal: number;
    },
    concurso: {
      ganador: string;
      record: number;
    }
  ): void;
}