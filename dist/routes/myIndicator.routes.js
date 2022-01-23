"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const myIndicatorController_1 = __importDefault(require("../controllers/myIndicatorController"));
const router = (0, express_1.Router)();
router.get('/all-indicators', myIndicatorController_1.default.getAllIndicators);
exports.default = router;
//# sourceMappingURL=myIndicator.routes.js.map