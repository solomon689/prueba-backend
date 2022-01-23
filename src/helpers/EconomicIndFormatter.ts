import axios from 'axios';
import { DateFormatter } from "./DateFormater";
import { UnitMeasure } from "../models/enums/UnitMeasure";
import { EconomicIndicatorObject, Serie } from '../models/interfaces/IndicatorObject';

export class EconomicIndFormatter {
    private economicIndicators: string[];

    constructor() {
        this.economicIndicators = ["uf", "ivp", "dolar", "dolar_intercambio", "euro", "ipc", "utm", "imacec", "tpm", "libra_cobre", "tasa_desempleo", "bitcoin"];
    }

    public async formatterStructure(data: EconomicIndicatorObject): Promise<EconomicIndicatorObject> {
        this.eliminateProperties(data, ['version','autor']);
        data.fecha = DateFormatter.toDateAndHour(new Date(data.fecha));

        for (const indicator of this.economicIndicators) {
            const { data: serieData } = await axios.get(`https://mindicador.cl/api/${ indicator }`);
            
            this.eliminateProperties(data, ['fecha', 'valor'], indicator);
            data[indicator].simbolo_unidad_medida = this.addSimbolByUnitMeasure(data[indicator].unidad_medida);
            data[indicator].serie = this.formatterSeriesData(serieData.serie);
        }

        return data;
    }

    private eliminateProperties(data: EconomicIndicatorObject, properties: string[], indicator?: string): void {
        if (!indicator) {
            for (const property of properties) {
                delete data[property];
            }
        } else {
            for (const property of properties) {
                delete (data as any)[indicator][property];
            }
        }
    }

    private addSimbolByUnitMeasure(unitMeasure: string): string {
        if (UnitMeasure.DOLAR === unitMeasure || UnitMeasure.PESOS === unitMeasure) return '$';
        if (UnitMeasure.PORCENTAJE === unitMeasure) return '%';

        return '';
    }

    private formatterSeriesData(series: Serie[]): Serie[] {
        for (let i = 0 ; i < series.length ; i++) {
            series[i].fecha = DateFormatter.toCommonDateFormat(new Date(series[i].fecha));
            series[i].valor = parseInt(series[i].valor.toFixed());
        }

        return series;
    }
}