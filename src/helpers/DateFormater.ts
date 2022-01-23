export class DateFormatter {

    private constructor() {}

    public static toDateAndHour(date: Date): string {
        const concatenation: string = '';
        const dateFormated = DateFormatter.toCommonDateFormat(date);
        let hour: string = DateFormatter.dateValueToString(date.getHours());
        let minutes: string = DateFormatter.dateValueToString(date.getMinutes());

        return concatenation.concat(dateFormated,' ',hour,':',minutes);
    }

    public static toCommonDateFormat(date: Date): string {
        const concatenation: string = '';
        const year: string = date.getFullYear().toString();
        let day: string = DateFormatter.dateValueToString(date.getDate());
        let month: string = DateFormatter.dateValueToString(date.getMonth() + 1);

        return concatenation.concat(day,'/',month,'/',year);
    }

    public static dateValueToString(dateValue: number): string {
        if (dateValue < 10) 
            return '0' + dateValue.toString();

        return dateValue.toString();
    }
}