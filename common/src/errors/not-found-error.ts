import { CustomError } from "./custom-error";  

export class NotFoundError extends CustomError {
    generateError(): { message: string; field?: string; }[] {
        throw new Error("Method not implemented.");
    }
    statusCode = 404

    constructor() {
        super(' not found!')
            
    }

    generateErrors() {
        return [{message: 'not found'}]
    }
        
    }
