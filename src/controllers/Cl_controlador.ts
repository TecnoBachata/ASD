import Cl_mRestaurante from "../models/Cl_mRestaurante.js";
import Cl_mComensal from "../models/Cl_mComensal.js";
import Cl_vRestaurante from "../views/Cl_vRestaurante.js";
import Cl_vComensal from "../views/Cl_vComensal.js";

const mRest = new Cl_mRestaurante();
const vRest = new Cl_vRestaurante();
const vCom = new Cl_vComensal();

document.getElementById("v_btnProcesar")?.addEventListener("click", () => {
    // Se extraen todos los valores de la vista y se pasan al constructor
    const n = new Cl_mComensal(
        vCom.nombre, 
        vCom.apellido, 
        vCom.cedula, 
        vCom.sexo, 
        vCom.fecha, 
        vCom.turno
    );

    mRest.procesarComensal(n);
    vRest.reportar(n, mRest);
});