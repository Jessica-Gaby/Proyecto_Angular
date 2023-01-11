import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private httpClient: HttpClient ) {
    
   }

  ngOnInit(): void {
    //this.getProducts();
    this.getproduct();

  }

  getProducts(){
    const response = this.httpClient.get('http://api.escuelajs.co/api/v1/products').subscribe
    (response =>{ console.log(response);
    });
  }
  getproduct(){
    const url = 'http://api.escuelajs.co/api/v1/products/20';
    const response = this.httpClient.get(url).subscribe
    (response => {console.log(response);
    });
  }
  createProduct(){
    const data = {
      title:'Libros',
      price:50,
      description:'Utiles escolares / Christian Aguirre',
      categoryId:1
    }
    const url ='https://api.escuelajs.co/api/v1/products'
    this.httpClient.post(url, data)
    .subscribe((response) => { console.log(response); });
  }
}
    /*const data={
      title : 'Libros',
      price: 15,
      description: 'utiles escolares /Jessica Ayala',
      categoryId: 1,
    }*/

