import Cl_mConcurso from "../models/Cl_mConcurso.js";
import Cl_mConcursante from "../models/Cl_mConcursante.js";
import Cl_vConcurso from "../views/Cl_vConcurso.js";
import Cl_vConcursante from "../views/Cl_vConcursante.js";

const mConcurso = new Cl_mConcurso();
const vConcurso = new Cl_vConcurso();
const vAspirante = new Cl_vConcursante();

document.getElementById("v_btnProcesar")?.addEventListener("click", () => {
    const n = new Cl_mConcursante(
        vAspirante.nombre,
        vAspirante.apellido,
        vAspirante.cedula,
        vAspirante.sexo,
        vAspirante.fecha,
        vAspirante.indice,
        vAspirante.prep,
        vAspirante.dip
    );

    mConcurso.procesar(n);
    vConcurso.reportar(n, mConcurso);
});