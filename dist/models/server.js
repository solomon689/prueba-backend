"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const myIndicator_routes_1 = __importDefault(require("../routes/myIndicator.routes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.middlewares();
        this.routes();
    }
    listen(port) {
        this.app.listen(port, () => {
            console.log('Servidor corriendo en el puerto ', port);
        });
    }
    middlewares() {
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use('/api', myIndicator_routes_1.default);
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map