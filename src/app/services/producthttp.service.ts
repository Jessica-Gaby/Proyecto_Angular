import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CreateproductDto, ProductModel, UpdateproductDto } from '../entities/product.model';

@Injectable({
  providedIn: 'root',
})

export class ProductHttpService {

  readonly API_URL ='https://api.escuelajs.co/api/v1/products';

  constructor(private httpClient: HttpClient) {}
//Llama toda la lista
  getAll():Observable<ProductModel[]> {
    const url=`${this.API_URL}`;
    return this.httpClient.get<ProductModel[]>(url);
  }
  //Llama por id de la lista
  getOne(id:ProductModel ['id']):Observable<ProductModel> {
    const url = `${this.API_URL}/${id}`;
    return  this.httpClient.get<ProductModel>(url);
  }
  //Crea un id
  store(product:CreateproductDto) {
    const url = `${this.API_URL}`;
    return  this.httpClient.post(url, product);
  }
  //Actualiza por id
  update(id:ProductModel ['id'], product:UpdateproductDto):Observable<ProductModel> {
    const url = `${this.API_URL}/${id}`
    return this.httpClient.put<ProductModel>(url, product);
  }
//Elimina por id
  destroy(id:ProductModel ['id']):Observable<any> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<any>(url).pipe(map((response:{rta:boolean})=>{return response.rta;})
    );
  }
}