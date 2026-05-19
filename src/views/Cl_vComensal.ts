import { I_vComensal } from "../interfaces/I_vComensal";

export default class Cl_vComensal implements I_vComensal {
    get nombre() { return (document.getElementById("v_nombre") as HTMLInputElement).value; }
    get apellido() { return (document.getElementById("v_apellido") as HTMLInputElement).value; }
    get cedula() { return (document.getElementById("v_cedula") as HTMLInputElement).value; }
    get sexo() { return (document.getElementById("v_sexo") as HTMLSelectElement).value; }
    get fecha() { return (document.getElementById("v_fecha") as HTMLInputElement).value; }
    get turno() { return parseInt((document.getElementById("v_turno") as HTMLSelectElement).value); }
}