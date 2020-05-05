import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modals/product.model';
import { CartItem } from 'src/app/modals/cart-item';
import { ProductService } from '../../shared/services/product.service';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-home-two',
  templateUrl: './home-two.component.html',
  styleUrls: ['./home-two.component.sass']
})
export class HomeTwoComponent implements OnInit {


  products: Product[];
  public banners = [];

  shoppingCartItems: CartItem[] = [];
  wishlistItems  :   Product[] = [];

  public featuredProducts: Array<Product>;
  public onSaleProducts: Array<Product>;
  public topRatedProducts: Array<Product>;
  public newArrivalsProducts: Array<Product>;

  public slides = [
    { title: 'Huge sale', subtitle: 'Up to 70%', image: 'https://cdn.cellphones.com.vn/media/ltsoft/promotion/TAB_S6_Lite_V2-01.png' },
    { title: 'Biggest discount', subtitle: 'Check the promotion', image: 'https://cdn.cellphones.com.vn/media/ltsoft/promotion/realme-6i.html_.jpg' },
    { title: 'Biggest sale', subtitle: 'Dont miss it', image: 'https://cdn.cellphones.com.vn/media/ltsoft/promotion/a12_4.5.png' },
    { title: 'Our best products', subtitle: 'Special selection', image: 'https://cdn.cellphones.com.vn/media/ltsoft/promotion/se_2020_4.5.jpg' },
    { title: 'Massive sale', subtitle: 'Only for today', image: 'https://cdn.cellphones.com.vn/media/ltsoft/promotion/Huawei_P40_Preorder_800x300-01-compressed.jpg' }
  ];

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
    this.productService.getProducts()
    .subscribe(
      (product: Product[]) => {
        this.products = product;
      }
    )
    this.productService.getBanners()
    .subscribe(
      data => this.banners = data
    );
  }



}
