import{CategoryModel} from "./category.model";

export interface productModel{
    id:number;
    title: string;
    price:number;
    description: string;
    category: CategoryModel;
}