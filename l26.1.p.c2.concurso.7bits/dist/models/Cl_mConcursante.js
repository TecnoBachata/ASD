import Cl_mPersona from "./Cl_mPersona.js";
export default class Cl_mConcursante extends Cl_mPersona {
    constructor(n, a, c, s, f, i, p, d) {
        super(n, a, c, s, f);
        this._pIndice = i;
        this._pPrep = p;
        this._pDip = d;
    }
    get puntosEdad() {
        if (this.edad < 30)
            return 10;
        if (this.edad < 40)
            return 5;
        return 0;
    }
    get puntajeFinal() {
        let suma = this._pIndice + this._pPrep + this._pDip + this.puntosEdad;
        return (suma * 30) / 60;
    }
}
