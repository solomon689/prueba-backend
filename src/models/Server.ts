import express from "express";
import { Application } from "express";
import myIndicatorRoutes from "../routes/myIndicator.routes";

export default class Server {
    private app: Application;

    constructor() {
        this.app = express();

        this.middlewares();
        this.routes();
    }

    public listen(port: number): void {
        this.app.listen(port, () => {
            console.log('Servidor corriendo en el puerto ', port);
        });
    }
    
    private middlewares(): void {
        this.app.use(express.json());
    }

    private routes(): void {
        this.app.use('/api', myIndicatorRoutes);
    }

}