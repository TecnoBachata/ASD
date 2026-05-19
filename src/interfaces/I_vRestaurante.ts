export interface I_vRestaurante {
    reportar(
        c: {
            cedula: string | number;
            nombre: string;
            apellido: string;
            edad: number;
            montoPagar: () => number;
        },
        rest: {
            total: number;
            pDesc: number;
            pD: number;
            pA: number;
            pAm: number;
        }
    ): void;
}