import axios from 'axios';
import { EconomicIndFormatter } from '../helpers/EconomicIndFormatter';
import { EconomicIndicatorObject } from '../models/interfaces/IndicatorObject';

export default class MyIndicatorService {

    constructor() {}

    public async getFormattedAllData(): Promise<EconomicIndicatorObject | null> {
        const economicIndFormatter: EconomicIndFormatter = new EconomicIndFormatter();

        try {
            const allData = await axios.get<EconomicIndicatorObject>('https://mindicador.cl/api');
            return await economicIndFormatter.formatterStructure(allData.data); 
        } catch (error) {
            console.error(error);
            return null;
        }

    }
}