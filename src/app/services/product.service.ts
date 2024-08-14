import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';
import { ProductFormData } from '../models/product-form-data.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly apiURL = environment.apiURL;

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiURL}/products`);
  }

  getOneProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiURL}/products/${id}`);
  }

  saveProduct(data: ProductFormData): Observable<Product> {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('price', data.price.toString());
    formData.append('description', data.description);
    formData.append('stars', data.stars.toString());
    formData.append('image', data.image);

    return this.http.post<Product>(`${this.apiURL}/products`, formData);
  }

  updateProduct(id: number, data: ProductFormData): Observable<Product> {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('price', data.price.toString());
    formData.append('description', data.description);
    formData.append('stars', data.stars.toString());
    formData.append('image', data.image);

    return this.http.put<Product>(`${this.apiURL}/products/${id}`, formData);
  }
}
