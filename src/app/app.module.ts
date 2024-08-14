import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './pages/products/products.component';
import { ManageComponent } from './pages/manage/manage.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ManageFormComponent } from './components/manage-form/manage-form.component';
import { PreviewProductComponent } from './components/preview-product/preview-product.component';
import { RatingStarComponent } from './components/rating-star/rating-star.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ProductsComponent,
    ManageComponent,
    GalleryComponent,
    ProductFormComponent,
    ManageFormComponent,
    PreviewProductComponent,
    RatingStarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
