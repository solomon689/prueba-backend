"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const myIndicatorController_1 = require("../controllers/myIndicatorController");
const router = (0, express_1.Router)();
router.get('/all-indicators', myIndicatorController_1.getAllIndicators);
exports.default = router;
//# sourceMappingURL=myIndicator.routes.js.map