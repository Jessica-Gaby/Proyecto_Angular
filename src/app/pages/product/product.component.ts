import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ProductHttpService } from 'src/app/services/producthttp.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productHttpService: ProductHttpService  ) {
    
   }

  ngOnInit(): void {
    //this.getProducts();
    //this.getproduct();
    //this.createProduct();
    //this.updateProduct();
    //this.deleteProduct();

  }
 

  getProducts(){
    this.productHttpService.getAll().subscribe
    (response =>{ 
      console.log(response);
    });
  }
  getproduct(){
    this.productHttpService.getOne(2).subscribe
    (response => {
      console.log(response);
    });
  }
  createProduct(){
    const data={
      title:'sombras',
      price:50,
      description:'Maquillajes / Jessica Ayala',
      images:["https://api.lorem.space/image/shoes?w=640&h=480&r=1883"],
      categoryId:1
    }
    this.productHttpService.store(data).subscribe
    (response => { 
      console.log(response);
  });
}

updateProduct() {
  const data={
    title:'camisetas',
    price: 25,
    description: 'camisetas deportivas/ Jessica Ayala',
  }
    this.productHttpService.update(1, data).subscribe
    (response => { 
      console.log(response);
  }); 
}

deleteProduct() {
    this.productHttpService.destroy(3).subscribe
    (response => { 
      console.log(response);
  }); 
}


}
