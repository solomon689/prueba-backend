"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EconomicIndFormatter = void 0;
const axios_1 = __importDefault(require("axios"));
const DateFormater_1 = require("./DateFormater");
const UnitMeasure_1 = require("../models/enums/UnitMeasure");
class EconomicIndFormatter {
    constructor() {
        this.economicIndicators = ["uf", "ivp", "dolar", "dolar_intercambio", "euro", "ipc", "utm", "imacec", "tpm", "libra_cobre", "tasa_desempleo", "bitcoin"];
    }
    formatterStructure(data) {
        return __awaiter(this, void 0, void 0, function* () {
            this.eliminateProperties(data, ['version', 'autor']);
            data.fecha = DateFormater_1.DateFormatter.toDateAndHour(new Date(data.fecha));
            for (const indicator of this.economicIndicators) {
                const { data: serieData } = yield axios_1.default.get(`https://mindicador.cl/api/${indicator}`);
                this.eliminateProperties(data, ['fecha', 'valor'], indicator);
                data[indicator].simbolo_unidad_medida = this.addSimbolByUnitMeasure(data[indicator].unidad_medida);
                data[indicator].serie = this.formatterSeriesData(serieData.serie);
            }
            return data;
        });
    }
    eliminateProperties(data, properties, indicator) {
        if (!indicator) {
            for (const property of properties) {
                delete data[property];
            }
        }
        else {
            for (const property of properties) {
                delete data[indicator][property];
            }
        }
    }
    addSimbolByUnitMeasure(unitMeasure) {
        if (UnitMeasure_1.UnitMeasure.DOLAR === unitMeasure || UnitMeasure_1.UnitMeasure.PESOS === unitMeasure)
            return '$';
        if (UnitMeasure_1.UnitMeasure.PORCENTAJE === unitMeasure)
            return '%';
        return '';
    }
    formatterSeriesData(series) {
        for (let i = 0; i < series.length; i++) {
            series[i].fecha = DateFormater_1.DateFormatter.toCommonDateFormat(new Date(series[i].fecha));
            series[i].valor = parseInt(series[i].valor.toFixed());
        }
        return series;
    }
}
exports.EconomicIndFormatter = EconomicIndFormatter;
//# sourceMappingURL=EconomicIndFormatter.js.map