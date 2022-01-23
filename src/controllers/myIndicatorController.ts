import { Request, Response } from "express";
import MyIndicatorService from '../services/MyIndicatorService';
import { EconomicIndicatorObject } from '../models/interfaces/IndicatorObject';

export default class MyIndicatorController {

    private constructor() {}

    public static async getAllIndicators(req: Request, res: Response): Promise<Response> {
        const myIndicatorService: MyIndicatorService = new MyIndicatorService();
        const dataFormatted: EconomicIndicatorObject | null = await myIndicatorService.getFormattedAllData();

        if (dataFormatted) {
            return res.status(200).json(dataFormatted);
        } else {
            return res.status(400).json({
                msg: 'Error al momento de solicitar información',
                code: 400
            });
        }    
    }
}