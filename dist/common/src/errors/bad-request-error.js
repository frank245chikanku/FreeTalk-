"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = void 0;
const custom_error_1 = require("./custom-error");
class BadRequestError extends custom_error_1.CustomError {
    generateError() {
        throw new Error("Method not implemented.");
    }
    constructor(message) {
        super(message);
        this.message = message;
        this.statusCode = 400;
    }
    generateErrors() {
        return [{ message: this.message }];
    }
}
exports.BadRequestError = BadRequestError;
