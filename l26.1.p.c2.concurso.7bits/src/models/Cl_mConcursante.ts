import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mConcursante extends Cl_mPersona {
    private _pIndice: number;
    private _pPrep: number;
    private _pDip: number;

    constructor(n: string, a: string, c: string, s: string, f: string, i: number, p: number, d: number) {
        super(n, a, c, s, f);
        this._pIndice = i;
        this._pPrep = p;
        this._pDip = d;
    }

    get puntosEdad(): number {
        if (this.edad < 30) return 10;
        if (this.edad < 40) return 5;
        return 0;
    }

    get puntajeFinal(): number {
        let suma = this._pIndice + this._pPrep + this._pDip + this.puntosEdad;
        return (suma * 30) / 60;
    }
}