import { CustomError } from "./custom-error";  


export class BadRequestError extends CustomError {
    generateError(): { message: string; field?: string; }[] {
        throw new Error("Method not implemented.");
    }
    statusCode = 400; 
    constructor(public message: string) {
        super(message); 
        

        }
        generateErrors() {
            return [{message: this.message}]
        }
    }

