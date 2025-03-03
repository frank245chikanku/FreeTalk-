import { CustomError } from "./custom-error";   

export class DatabaseConnectionError extends CustomError {
    statusCode = 500; 

    constructor() {
        super('db connection error')
    }

    generateError() {
        return [{ message: 'db connection error'}]

    }


    }
        
    
