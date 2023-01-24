import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ProductHttpService } from 'src/app/services/producthttp.service';
import { ProductModel, UpdateproductDto } from 'src/app/entities/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    products:ProductModel[]=[];
    selectedProduct :UpdateproductDto = {};
  constructor(private productHttpService: ProductHttpService  ) {
    //this.initProduct
   }

  ngOnInit(): void {
    this.getProducts();
    //this.getproduct();
    //this.createProduct();
    //this.updateProduct();
    //this.deleteProduct();

  }
 
  initProduct(){
    this.selectedProduct = {title:'category', price: 0, description:''}
  }

  getProducts(){
    this.productHttpService.getAll().subscribe
    (response =>{
      this.products= response;
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
      price: 50,
      description:'Maquillajes / Jessica Ayala',
      images:["https://api.lorem.space/image/shoes?w=640&h=480&r=1883"],
      categoryId:1
    }
    this.productHttpService.store(data).subscribe
    (response => { 
      console.log(response);
  });
}

editProduct(product: ProductModel){
   this.selectedProduct = product;
}

updateProduct(id:ProductModel ['id']) {
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

deleteProduct(id: ProductModel['id']) {
    this.productHttpService.destroy(id).subscribe
    (response => { 
      this.products = this.products.filter(product => product.id != id);
      console.log(response);
  }); 
}


}
