import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { OpenApi } from 'src/app/commons/models/open-api.model';
import { OpenApiUnmarshaller } from '../unmarshaller/open-api.unmarshaller';

const BASE_URL : string = "ws/v1/version";

@Injectable({providedIn: 'root'})
export class VersionRestService {


    // =================================================================================================================
    // constructor
    // =================================================================================================================
    constructor( private http: HttpClient,
        private openApiUnmarshaller:OpenApiUnmarshaller) {
    }
    


    // =================================================================================================================
    // API
    // =================================================================================================================


    getOpenApi(uid:string): Observable<OpenApi>{
        return this.http
                   .get(`${BASE_URL}/${uid}/open-api`)
                   .pipe(map(response=> this.openApiUnmarshaller.convertToOpenApi(response)));
    }




}