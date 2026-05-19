export default class Cl_mConcurso {
    constructor() {
        this.mayorPuntaje = -1;
        this.nombreGanador = "";
    }
    procesar(c) {
        if (c.puntajeFinal > this.mayorPuntaje) {
            this.mayorPuntaje = c.puntajeFinal;
            this.nombreGanador = c.nombre + " " + c.apellido;
        }
    }
    get ganador() { return this.nombreGanador; }
    get record() { return this.mayorPuntaje; }
}
