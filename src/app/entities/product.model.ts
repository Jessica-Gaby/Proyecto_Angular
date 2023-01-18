import{CategoryModel} from "./category.model";

export interface ProductModel{
    id:number;
    title: string;
    price:number;
    description: string;
    images:string [];
    category: CategoryModel;
}

export interface CreateproductDto extends Omit <ProductModel, 'id' | 'category'>{
categoryId:number;
}

export interface UpdateproductDto extends Partial<ProductModel>{
categoryId?:number; //el signo ? hace que el atributo se ha opcional
}