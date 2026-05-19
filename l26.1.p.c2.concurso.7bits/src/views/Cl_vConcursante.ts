import { I_vConcursante } from "../interfaces/I_vConcursante";

export default class Cl_vConcursante implements I_vConcursante {
    get nombre() { return (document.getElementById("v_nombre") as HTMLInputElement).value; }
    get apellido() { return (document.getElementById("v_apellido") as HTMLInputElement).value; }
    get cedula() { return (document.getElementById("v_cedula") as HTMLInputElement).value; }
    get sexo() { return (document.getElementById("v_sexo") as HTMLSelectElement).value; }
    get fecha() { return (document.getElementById("v_fecha") as HTMLInputElement).value; }
    get indice() { return parseFloat((document.getElementById("v_indice") as HTMLInputElement).value) || 0; }
    get prep() { return parseFloat((document.getElementById("v_preparador") as HTMLInputElement).value) || 0; }
    get dip() { return parseFloat((document.getElementById("v_diplomas") as HTMLInputElement).value) || 0; }
}