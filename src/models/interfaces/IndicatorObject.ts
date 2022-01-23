export interface IndicatorObject {
    [key: string]: EconomicIndicator;
}

export type EconomicIndicatorObject = IndicatorObject & {
    fecha: string;
}

export interface EconomicIndicator {
    codigo: string;
    nombre: string;
    unidad_medida: string;
    simbolo_unidad_medida?: string;
    serie: Serie[];
}

export interface Serie {
    fecha: string;
    valor: number;
}