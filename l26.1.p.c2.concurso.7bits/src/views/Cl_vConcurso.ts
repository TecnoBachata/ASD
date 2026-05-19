import {I_vConcurso} from "../interfaces/I_vConcurso";

export default class Cl_vConcurso implements I_vConcurso {
    private tabla = document.getElementById("v_tabla")!;
    private reporte = document.getElementById("v_reporte")!;

    reportar(c: any, concurso: any) {
        let sexoCompleto = c.sexo === "M" ? "Masculino" : "Femenino";
        
        this.tabla.innerHTML += `
            <tr>
                <td>${c.cedula}</td>
                <td>${c.nombre} ${c.apellido}</td>
                <td>${sexoCompleto}</td>
                <td>${c.fechaNac}</td>
                <td>${c.edad}</td>
                <td>${c.puntajeFinal.toFixed(2)} pts</td>
            </tr>`;
        
        this.reporte.innerHTML = `
            <strong>Seleccionado para el cargo:</strong> ${concurso.ganador} 
            (${concurso.record.toFixed(2)} / 30 puntos)`;
    }
}