import { I_vRestaurante } from "../interfaces/I_vRestaurante";

export default class Cl_vRestaurante implements I_vRestaurante {
    private tabla = document.getElementById("v_tabla")!;
    private reporte = document.getElementById("v_reporte")!;

    reportar(c: any, rest: any) {
        this.tabla.innerHTML += `
            <tr>
                <td>${c.cedula}</td>
                <td>${c.nombre} ${c.apellido}</td>
                <td>${c.edad}</td>
                <td>$${c.montoPagar().toFixed(2)}</td>
            </tr>`;
        
        this.reporte.innerHTML = `
            <div class="mb-1">
                <strong>Total Recaudado:</strong> $${rest.total.toFixed(2)} | 
                <strong>Con Descuento:</strong> ${rest.pDesc.toFixed(2)}%
            </div>
            <div class="small text-muted">
                Desayuno: ${rest.pD.toFixed(1)}% | 
                Almuerzo: ${rest.pA.toFixed(1)}% | 
                Ambos: ${rest.pAm.toFixed(1)}%
            </div>`;
    }   
}