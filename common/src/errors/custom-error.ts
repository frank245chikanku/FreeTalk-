// src/errors/custom-error.ts
export class CustomError extends Error {
    statusCode: number;

    constructor(message: string) {
        super(message);
        this.statusCode = 400;  // Default to a 400 error
        // Ensure the error is captured properly in stack traces
        Object.setPrototypeOf(this, CustomError.prototype);
    }

    // You may return a serializable error object
    generateError() {
        return [{ message: this.message }];
    }
}