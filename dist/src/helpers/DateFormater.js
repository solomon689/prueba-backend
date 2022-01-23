"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateFormatter = void 0;
class DateFormatter {
    constructor() { }
    static toDateAndHour(date) {
        const concatination = '';
        const dateFormated = DateFormatter.toCommonDateFormat(date);
        let hour = date.getHours().toString();
        let minutes = date.getMinutes().toString();
        if (hour.length < 2)
            hour = '0' + hour;
        if (minutes.length < 2)
            minutes = '0' + minutes;
        return concatination.concat(dateFormated, ' ', hour, ':', minutes);
    }
    static toCommonDateFormat(date) {
        const dateFormated = '';
        const year = date.getFullYear().toString();
        let day = date.getDay().toString();
        let month = date.getMonth() + 1;
        if (date.getDay() < 10)
            day = '0' + day;
        if (date.getMonth() < 10)
            month = '0' + month.toString();
        return dateFormated.concat(day, '/', month, '/', year);
    }
    static formatterSeriesDate(series) {
        for (let i = 0; i < series.length; i++) {
            series[i].fecha = DateFormatter.toCommonDateFormat(new Date(series[i].fecha));
        }
        return series;
    }
}
exports.DateFormatter = DateFormatter;
//# sourceMappingURL=DateFormater.js.map