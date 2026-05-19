import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mComensal extends Cl_mPersona {
    private _turno: number;

    constructor(n: string, a: string, c: string, s: string, f: string, t: number) {  
        super(n, a, c, s, f); 
        this._turno = t;
    }

    get turno() { return this._turno; }

    get esTerceraEdad(): boolean {
        if (this.sexo === "F" && this.edad > 50) return true;
        if (this.sexo === "M" && this.edad > 60) return true;
        return false;
    }

    montoPagar(): number {
        let monto = 0;
        if (this._turno === 1) monto = 5;
        else if (this._turno === 2) monto = 7;
        else if (this._turno === 3) monto = 10;
        
        // Aplicar 50% descuento 3ra edad [cite: 7]
        return this.esTerceraEdad ? monto * 0.5 : monto;
    }
}