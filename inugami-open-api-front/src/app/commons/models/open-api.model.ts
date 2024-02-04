
export interface OpenApiProperty{
    type:string;
    name?:string;
    additionalProperties?:OpenApiProperty;
    items?:OpenApiSchema
}
export interface OpenApiComponentSchema{
    id:string;
    name:string;
    type?:string;
    properties?:OpenApiProperty[];

}

export interface OpenApiComponentSecurityScheme{
    name?:string;
    type?:string;
    scheme?:string;
}

export interface OpenApiComponent{
    schemas?:OpenApiComponentSchema[];
    securitySchemes?:OpenApiComponentSecurityScheme[];
}

export interface OpenApiExternalDocs{
    url?:string;
}

export interface OpenApiInfo{
    title?:string;
    description?:string;
    version?:string;
}

export interface OpenApiSchema{
    type?:string;
    ref?:string;
}

export interface OpenApiPathEndpointParameter{
    name?:string;
    in?:string;
    required?:boolean;
    schema?:OpenApiSchema;
}

export interface OpenApiPathEndpointRequestBody{
    contentType?:string;
    required?:boolean;
    schema?:OpenApiSchema;
}


export interface OpenApiPathEndpointResponse{
    status?:string;
    description?:string;
    contentType?:string;
    schema?:OpenApiSchema;
}


export interface OpenApiPathEndpoint{
    url:string;
    verb:string;
    tags?: string[]
    operationId?:string;
    parameters?:OpenApiPathEndpointParameter[];
    requestBody?:OpenApiPathEndpointRequestBody;
    responses?:OpenApiPathEndpointResponse [];

}

export interface OpenApiServer{
    url?:string;
    description?:string;
}

export interface OpenApi{
    openapi?:string;
    components?:OpenApiComponent;
    externalDocs?: OpenApiExternalDocs;
    info?:OpenApiInfo;
    paths?: OpenApiPathEndpoint[];
    servers?:OpenApiServer[];

}