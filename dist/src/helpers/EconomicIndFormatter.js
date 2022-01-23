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
const DateFormater_1 = require("./DateFormater");
const axios_1 = __importDefault(require("axios"));
class EconomicIndFormatter {
    constructor() { }
    static formatterStructure(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const economicIndicators = ["uf", "ivp", "dolar", "dolar_intercambio", "euro", "ipc", "utm", "imacec", "tpm", "libra_cobre", "tasa_desempleo", "bitcoin"];
            console.log("Probando");
            let newData = {
                fecha: DateFormater_1.DateFormatter.toDateAndHour(new Date(data.fecha))
            };
            for (const indicator of economicIndicators) {
                const { data: serieData } = yield axios_1.default.get(`https://mindicador.cl/api/${indicator}`);
                newData[indicator] = {
                    codigo: data[indicator].codigo,
                    nombre: data[indicator].nombre,
                    unidad_medida: data[indicator].unidad_medida,
                    serie: DateFormater_1.DateFormatter.formatterSeriesDate(serieData.serie)
                };
            }
            return newData;
        });
    }
}
exports.EconomicIndFormatter = EconomicIndFormatter;
//# sourceMappingURL=EconomicIndFormatter.js.map