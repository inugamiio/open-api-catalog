import { Component, Input } from '@angular/core';
import { OpenApiComponentSchema } from '../../models/open-api.model';

@Component({
    selector: 'inu-code',
    styleUrls: ['./code.component.scss'],
    templateUrl: './code.component.html'
})
export class CodeComponent {
    /**************************************************************************
   * ATTRIBUTES
   **************************************************************************/
    @Input()
    public data: string | null |undefined = null;
    @Input()
    public type: string  = 'json';
    @Input()
    public schemas: OpenApiComponentSchema[] | null = null;
    @Input()
    public objectRef: string | undefined| null = null;
    @Input()
    public objectRefType: string | undefined | null = null;


    /**************************************************************************
    * CONSTRUCTOR
    **************************************************************************/
    constructor() { }
    ngOnInit(): void {
        if(this.objectRef){
            const objRef = this.objectRef;
            setTimeout(()=>{
                this.data = this.getSchemaObject(objRef);
            });
        }
    }

    /**************************************************************************
    * RESOLVER
    **************************************************************************/
    private resolveSchema(objectRef: string): OpenApiComponentSchema | null {
        if (this.schemas) {
            for (let schema of this.schemas) {
                if (schema.id == objectRef || schema.name==objectRef) {
                    return schema;
                }
            }
        }
        return null;
    }

    private resolveSubSchema(schema:OpenApiComponentSchema):void{
        if(schema.properties){
            for(let property of schema.properties){
                if(property.items && property.items.ref){
                     const subType = this.resolveSchema(property.items.ref);
                     if(subType){
                        property.items.type = subType.name;
                     }
                }
            }
        }
    }
    /**************************************************************************
    * RESOLVER
    **************************************************************************/
    private getSchemaObject(objectRef: string): string {
        const result = this.resolveSchemaObject(objectRef);
        return result? JSON.stringify(result, null, 4) :'';
        
    }
    private resolveSchemaObject(objectRef: string, cursor?:string|null): any{
        let result :any= null;
        switch(objectRef){
            case 'string':
                return 'string';
                break
            case 'boolean':
                return true;
                break
            case 'integer':
                return 0;
                break
        }
        const currentSchema = this.resolveSchema(objectRef);
        if(currentSchema){
            this.resolveSubSchema(currentSchema);

            if(currentSchema.properties){
                const object: any = {};

                for(let field of currentSchema.properties){
                    if(field.name){
                        if('object'==field.type){
                            if(field.items){
                                let subType :any|null= null;
                                const currentType :string = field.items.type?field.items.type:'void';
                                if(cursor==null || cursor.indexOf(currentType)==-1){
                                    subType =this.resolveSchemaObject(currentType, `${objectRef}.${currentType}`);
                                }else{
                                    subType='<'+field.items.type+'>';
                                }

                                object[field.name]=subType;
                            }else{
                                object[field.name]=field.type;
                            }
                            
                        }
                        else if('array'==field.type){
                            if(field.items){
                                let subType :any|null= null;
                                const currentType :string = field.items.type?field.items.type:'void';
                                if(cursor==null || cursor.indexOf(currentType)==-1){
                                    subType =this.resolveSchemaObject(currentType, `${objectRef}.${currentType}`);
                                }else{
                                    subType='<'+field.items.type+'>';
                                }

                                object[field.name]=[subType];
                            }else{
                                object[field.name]=[field.type];
                            }
                            
                        }else{
                            switch(field.type){
                                case 'boolean':
                                    object[field.name]= true;
                                    break;
                                case 'integer':
                                    object[field.name]= 0;
                                    break;
                                default :
                                    object[field.name]=field.type;
                                    break
                            }
                            
                        }
                        
                    }
                }

                const keys =Object.keys(object);
                keys.sort();
                result = {};
                for(let key of keys ){
                    result[key] = object[key];
                }
            }else if(currentSchema.name){
                result= this.resolveSchemaObject(currentSchema.name);
            }
            
            if(this.objectRefType && 'array'==this.objectRefType){
                result = [result] ;
            }

        }
        return result;
    }

}