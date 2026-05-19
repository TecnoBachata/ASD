export default class Cl_mPersona {
    private _nombre: string;
    private _apellido: string;
    private _cedula: string;
    private _sexo: string;
    private _fechaNac: string;

    constructor(n: string, a: string, c: string, s: string, f: string) {
        this._nombre = n;
        this._apellido = a;
        this._cedula = c;
        this._sexo = s;
        this._fechaNac = f;
    }

    get nombre() { return this._nombre; }
    get apellido() { return this._apellido; }
    get cedula() { return this._cedula; }
    get sexo() { return this._sexo; }

    get edad(): number {
        let hoy = new Date();
        let cumple = new Date(this._fechaNac);
        let edad = hoy.getFullYear() - cumple.getFullYear();
        if (hoy.getMonth() < cumple.getMonth() || (hoy.getMonth() === cumple.getMonth() && hoy.getDate() < cumple.getDate())) {
            edad--;
        }
        return edad;
    }
}