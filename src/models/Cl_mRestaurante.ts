export default class Cl_mRestaurante {
    private acMonto: number = 0;
    private cntTotal: number = 0;
    private cntD: number = 0;
    private cntA: number = 0;
    private cntAm: number = 0;
    private cntDesc: number = 0;

    procesarComensal(c: any) {
        this.cntTotal++;
        this.acMonto += c.montoPagar();
        if (c.turno === 1) this.cntD++;
        else if (c.turno === 2) this.cntA++;
        else if (c.turno === 3) this.cntAm++;
        if (c.esTerceraEdad) this.cntDesc++;
    }

    get total() { return this.acMonto; }
    get pD() { return this.cntTotal > 0 ? (this.cntD / this.cntTotal) * 100 : 0; }
    get pA() { return this.cntTotal > 0 ? (this.cntA / this.cntTotal) * 100 : 0; }
    get pAm() { return this.cntTotal > 0 ? (this.cntAm / this.cntTotal) * 100 : 0; }
    get pDesc() { return this.cntTotal > 0 ? (this.cntDesc / this.cntTotal) * 100 : 0; }
}