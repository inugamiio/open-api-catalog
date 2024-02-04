import { HttpEvent, HttpHandler, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";

@Injectable()
export class HttpInterceptor implements HttpInterceptor{


    // =================================================================================================================
    // constructor
    // =================================================================================================================
    constructor(){

    }


    // =================================================================================================================
    // constructor
    // =================================================================================================================
    intercept(req: HttpRequest<any> , next: HttpHandler):  Observable<HttpEvent<any>>{
        const newRequest = req.clone({

        });

        return next.handle(newRequest).pipe(tap((httpEvent: HttpEvent<any>)=>{
            if(httpEvent.type === 0 ){
                return;
            }
            if(httpEvent instanceof HttpResponse){
                //TODO : retrive correlation id
            }
        }));
    }
}