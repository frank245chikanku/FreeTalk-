"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotAuthorizedError = void 0;
const custom_error_1 = require("./custom-error");
class NotAuthorizedError extends custom_error_1.CustomError {
    constructor() {
        super('not authorized');
        this.statusCode = 401;
    }
    generateError() {
        return [{ message: 'not authorized' }];
    }
}
exports.NotAuthorizedError = NotAuthorizedError;
