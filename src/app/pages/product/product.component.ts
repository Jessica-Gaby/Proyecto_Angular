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
    //this.getproduct();
    //this.createProduct();
    //this.updateProduct();
    //this.deleteProduct();

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
      title:'sombras',
      price:50,
      description:'Maquillajes / Jessica Ayala',
      images:["https://api.lorem.space/image/shoes?w=640&h=480&r=1883"],
      categoryId:1
    }
    const url ='https://api.escuelajs.co/api/v1/products'
    this.httpClient.post(url, data).subscribe
    (response => { console.log(response);
  });
}

updateProduct() {
  const data={
    title:'camisetas',
    price: 25,
    description: 'camisetas deportivas/ Jessica Ayala',
  }
  const url ='https://api.escuelajs.co/api/v1/products/277';
    this.httpClient.put(url, data).subscribe
    (response => { console.log(response);
  }); 
}

deleteProduct() {
  const url ='https://api.escuelajs.co/api/v1/products/277';
    this.httpClient.delete(url).subscribe
    (response => { console.log(response);
  }); 
}


}
