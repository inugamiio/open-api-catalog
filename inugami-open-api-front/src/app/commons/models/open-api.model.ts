
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

export interface Example{
    name:string;
    summary?:string; 
    description?:string;
    value?:any;
    externalValue?:string;
    extension?:any;
}
export interface OpenApiPathEndpointParameter{
    name?:string;
    in?:string;
    required?:boolean;
    description?:string;
    deprecated?:boolean;
    allowEmptyValue?:boolean;
    schema?:OpenApiSchema;
    style?:string;
    explode?:boolean;
    allowReserved?:boolean;
    example?:any;
    examples?:Example[]; //TODO : check real representation 

}

export interface MediaTypeObject{
    schema?:OpenApiSchema;
    example?:any;
    examples?:any;
    encoding?:any;
}

export interface OpenApiPathEndpointRequestBody{
    contentType?:string;
    required?:boolean;
    schema?:OpenApiSchema;
    description?:string;
    content?:MediaTypeObject;
}


export interface OpenApiPathEndpointResponse{
    status?:string;
    description?:string;
    contentType?:string;
    schema?:OpenApiSchema;
}

/** https://swagger.io/specification/#paths-object */
export interface OpenApiPathEndpoint{
    url:string;
    verb:string;
    globalSummary?:string;
    globalDescription?:string;
    globalTags?:string;
    summary?:string;
    description?:string;
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