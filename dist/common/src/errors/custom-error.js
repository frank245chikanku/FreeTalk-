"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
// src/errors/custom-error.ts
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 400; // Default to a 400 error
        // Ensure the error is captured properly in stack traces
        Object.setPrototypeOf(this, CustomError.prototype);
    }
    // You may return a serializable error object
    generateError() {
        return [{ message: this.message }];
    }
}
exports.CustomError = CustomError;
