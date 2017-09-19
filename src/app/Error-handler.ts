import { Response } from '@angular/http'
import { Observable } from "rxjs/Observable";

export class HandlerError {
    static ErrorHandler(error: Response | any) {

        let messageError: string

        if(error instanceof Response) {
            messageError = `Error ${error.status} ao acessar a url ${error.url}
            - ${error.statusText}`
        }else {
            messageError = error.toString()
        }
        console.log(messageError)
        return Observable.throw(messageError)

    }
}