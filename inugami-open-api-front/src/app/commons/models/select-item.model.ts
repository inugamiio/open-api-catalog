
export interface SelectGroupModel<T>{
    label?:string;
    styleClass?:string;
    type?:string;
    precision?:string;
    items?:SelectItemModel<T>[];
}


export interface TreeNode<T>{
    path?:string;
    type?:string;    
    label?:string;
    details?:string;
    icon?:string;
    value?:T;
    selected?:boolean;
    children?:TreeNode<T>[];
}

export interface SelectItemModel<T>{
    type?:string;    
    label?:string;
    details?:string;
    icon?:string;
    value?:T;
    selected?:boolean;
}

export interface TimeBucket<T>{
    time:Date;
    label?:string;
    styleClass?:string;
    items?:SelectItemModel<T>[];
}

export interface BoundedValue<F,S>{
    first?:F;
    second?:S;
}