export default class Cl_vConcursante {
    get nombre() { return document.getElementById("v_nombre").value; }
    get apellido() { return document.getElementById("v_apellido").value; }
    get cedula() { return document.getElementById("v_cedula").value; }
    get sexo() { return document.getElementById("v_sexo").value; }
    get fecha() { return document.getElementById("v_fecha").value; }
    get indice() { return parseFloat(document.getElementById("v_indice").value) || 0; }
    get prep() { return parseFloat(document.getElementById("v_preparador").value) || 0; }
    get dip() { return parseFloat(document.getElementById("v_diplomas").value) || 0; }
}
