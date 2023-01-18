import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateproductDto, ProductModel, UpdateproductDto } from '../entities/product.model';

@Injectable({
  providedIn: 'root',
})

export class ProductHttpService {

  readonly API_URL ='https://api.escuelajs.co/api/v1/products';

  constructor(private httpClient: HttpClient) {}

  getAll():Observable<ProductModel[]> {
    const url=`${this.API_URL}`;
    return this.httpClient.get<ProductModel[]>(url);
  }
  getOne(id:ProductModel ['id']):Observable<ProductModel> {
    const url = `${this.API_URL}/${id}`;
    return  this.httpClient.get<ProductModel>(url);
  }
  store(product:CreateproductDto) {
    const url = `${this.API_URL}`;
    return  this.httpClient.post(url, product);
  }
  update(id:ProductModel ['id'], product:UpdateproductDto): Observable<ProductModel[]> {
    const url = `${this.API_URL}/${id}`
    return this.httpClient.put<ProductModel[]>(url, product);
  }
  destroy(id:ProductModel ['id']):Observable<ProductModel> {
    const url = `${this.API_URL}/${id}`
    return this.httpClient.delete<ProductModel>(url);
  }
}