export default class Cl_mConcurso {
    private mayorPuntaje: number;
    private nombreGanador: string;

    constructor() {
        this.mayorPuntaje = -1;
        this.nombreGanador = "";
    }

    procesar(c: any) {
        if (c.puntajeFinal > this.mayorPuntaje) {
            this.mayorPuntaje = c.puntajeFinal;
            this.nombreGanador = c.nombre + " " + c.apellido;
        }
    }

    get ganador() { return this.nombreGanador; }
    get record() { return this.mayorPuntaje; }
}