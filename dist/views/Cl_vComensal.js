export default class Cl_vComensal {
    get nombre() { return document.getElementById("v_nombre").value; }
    get apellido() { return document.getElementById("v_apellido").value; }
    get cedula() { return document.getElementById("v_cedula").value; }
    get sexo() { return document.getElementById("v_sexo").value; }
    get fecha() { return document.getElementById("v_fecha").value; }
    get turno() { return parseInt(document.getElementById("v_turno").value); }
}
