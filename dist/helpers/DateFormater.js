"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateFormatter = void 0;
class DateFormatter {
    constructor() { }
    static toDateAndHour(date) {
        const concatenation = '';
        const dateFormated = DateFormatter.toCommonDateFormat(date);
        let hour = DateFormatter.dateValueToString(date.getHours());
        let minutes = DateFormatter.dateValueToString(date.getMinutes());
        return concatenation.concat(dateFormated, ' ', hour, ':', minutes);
    }
    static toCommonDateFormat(date) {
        const concatenation = '';
        const year = date.getFullYear().toString();
        let day = DateFormatter.dateValueToString(date.getDate());
        let month = DateFormatter.dateValueToString(date.getMonth() + 1);
        return concatenation.concat(day, '/', month, '/', year);
    }
    static dateValueToString(dateValue) {
        if (dateValue < 10)
            return '0' + dateValue.toString();
        return dateValue.toString();
    }
}
exports.DateFormatter = DateFormatter;
//# sourceMappingURL=DateFormater.js.map