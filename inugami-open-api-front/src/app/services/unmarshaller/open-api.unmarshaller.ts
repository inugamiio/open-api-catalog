import { Injectable } from '@angular/core';
import {
    OpenApi,
    OpenApiComponent,
    OpenApiComponentSchema,
    OpenApiComponentSecurityScheme,
    OpenApiExternalDocs,
    OpenApiInfo,
    OpenApiPathEndpoint,
    OpenApiPathEndpointParameter,
    OpenApiPathEndpointRequestBody,
    OpenApiPathEndpointResponse,
    OpenApiProperty,
    OpenApiSchema,
    OpenApiServer 
} from 'src/app/commons/models/open-api.model';

@Injectable({providedIn: 'root'})
export class OpenApiUnmarshaller {


    // =================================================================================================================
    // API
    // =================================================================================================================
    public convertToOpenApi(response:any):OpenApi{
        const result = {
            openapi: response.openapi,
            components: this.unmarshallComponents(response.components),
            externalDocs: this.unmarshallExternalDocs(response.externalDocs),
            info: this.unmarshallInfo(response.info),
            paths: this.unmarshallPaths(response.paths),
            servers: this.unmarshallServers(response.servers),
        };
        return result;
    }


    // =================================================================================================================
    // PRIVATE
    // =================================================================================================================
    private unmarshallComponents(components: any): OpenApiComponent|undefined {
        if(!components){
            return undefined;
        }
        return  {
            schemas: this.unmarshallComponentsSchemas(components.schemas),
            securitySchemes: this.unmarshallComponentsSecuritySchemes(components.securitySchemes)
        };
    }

    private unmarshallComponentsSchemas(schemas: any): OpenApiComponentSchema[]|undefined {
        const result:OpenApiComponentSchema[] = [];
        if(!schemas){
            return result;
        }

        const keys =  Object.keys(schemas);
        keys.sort();
        for(let key of keys){

            const properties:OpenApiProperty[]= [];
            const rawProperties = schemas[key].properties;
            if(rawProperties){
                const propertyKeys = Object.keys(rawProperties);
                for(let propertyKey of propertyKeys){
                    const property = rawProperties[propertyKey];

                    let additionalProperties : OpenApiProperty|undefined;
                    if(property.additionalProperties){
                        additionalProperties = {
                            type: property.additionalProperties.type
                        }
                    }

                    let items : OpenApiSchema|undefined;
                    if(property.items){
                        items = {
                            type:property.items.type?property.items.type: undefined ,
                            ref: property.items['$ref']?property.items['$ref']: undefined
                        };
                    }
                    const propertyItem :OpenApiProperty = {
                        type: property.type,
                        name: propertyKey
                    };

                    if(additionalProperties){
                        propertyItem.additionalProperties=additionalProperties;
                    }
                    if(items){
                        propertyItem.items= items;
                    }
                    
                    properties.push(propertyItem);
                }
            }

            result.push({
                id: `#/components/schemas/${key}`,
                name: key,
                type:schemas[key].type,
                properties:properties
            });
        }

        return result;
    }

    private  unmarshallComponentsSecuritySchemes(schemas: any): OpenApiComponentSecurityScheme[]|undefined {
        const result:OpenApiComponentSecurityScheme[] = [];
        if(!schemas){
            return result;
        }

        const keys = Object.keys(schemas);
        keys.sort();
        for(let key of keys){
            const value = schemas[key];
            result.push({
                name: key,
                type: value.type,
                scheme: value.scheme
            });
        }

        return result;
    }

    private unmarshallExternalDocs(externalDocs: any): OpenApiExternalDocs|undefined {
        return !externalDocs? undefined : {
            url:externalDocs.url
        };
    }
    private unmarshallInfo(info: any): OpenApiInfo|undefined {
        return {
            title:info.title,
            description:info.description,
            version:info.version
        }
    }

    private unmarshallServers(servers: any): OpenApiServer[]|undefined {
        const result:OpenApiServer[] = [];
        if(!servers){
            return result;
        }
        for(let server of servers){
            result.push({
                url: server.url,
                description: server.description
            });
        }
        return result;
    }


    private unmarshallPaths(paths: any): OpenApiPathEndpoint[] {
        const result:OpenApiPathEndpoint[] = [];
        if(!paths){
            return result;
        }

        const keys = Object.keys(paths);
        keys.sort();
        for(let key of keys){
            const path = paths[key];
            const verbKeys = Object.keys(path);
            verbKeys.sort();

            for(let verbKey of verbKeys){
                const openApiEndpoint = path[verbKey];
                const endpoint :OpenApiPathEndpoint = {
                    url: key,
                    verb: verbKey,
                    tags: openApiEndpoint.tags,
                    operationId: openApiEndpoint.operationId,
                    parameters: this.unmarshallEndpointParameters(openApiEndpoint.parameters),
                    requestBody: this.unmarshallEndpointRequestBody(openApiEndpoint.requestBody),
                    responses: this.unmarshallEndpointResponse(openApiEndpoint.responses),
                };
                result.push(endpoint);
            }
        }

        return result;
    }


    private unmarshallEndpointParameters(value: any): OpenApiPathEndpointParameter[]|undefined {
        if(!value){
            return undefined;
        }

        const result:OpenApiPathEndpointParameter[] = [];
        for(let param of value){
            let schema :OpenApiSchema|undefined =undefined;
            if(param.schema){
                schema = {
                    type: param.schema?.type,
                    ref: param.schema['$ref']
                }
            }
            result.push({
                name:param.name,
                in:param.in,
                required:param.required,
                schema:schema
            });
        }

        return result;
    }

    private unmarshallEndpointRequestBody(value: any): OpenApiPathEndpointRequestBody|undefined {
        if(!value){
            return undefined;
        }

        let contentType :string|undefined;
        let schema :OpenApiSchema|undefined;
        
        if(value.content){
            contentType = Object.keys(value.content)[0];
            schema = {
                type : value.content[contentType].schema.type,
                ref : value.content[contentType].schema['$ref']
            }
        }

        return {
            contentType: contentType,
            schema:schema,
            required: value.required
        };
    }

    private unmarshallEndpointResponse(value: any): OpenApiPathEndpointResponse[]|undefined {
        if(!value){
            return undefined;
        }
        const result :OpenApiPathEndpointResponse[]= [];
        const keys = Object.keys(value);
        keys.sort();
        for(let key of keys){
            const response = value[key];
            let contentType:string|undefined;
            let schema:OpenApiSchema|undefined;

            if(response.content){
                contentType = Object.keys(response.content)[0];
                const rawSchema :any= response.content[contentType].schema;
                if(rawSchema){
                    let type : string|undefined =rawSchema.type;
                    let ref : string|undefined =rawSchema['$ref'];
                    schema = {
                        type: type ,
                        ref: ref
                    }
                }
            }


            result.push({
                status: key,
                description: response.description,
                contentType: contentType,
                schema:schema
            });
        }
        return result;
    }
}