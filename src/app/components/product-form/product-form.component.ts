import { ProductService } from '../../services/product.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent {
  productForm: FormGroup;
  errors: any[] = [];
  responseMessage?: string;

  @ViewChild('inputFile')
  inputFile!: ElementRef;

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.productForm = this.fb.group({
      name: [''],
      price: [''],
      description: [''],
      stars: [''],
      image: [''],
    });
  }

  onChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const selectedFiles = target.files;

    if (selectedFiles && selectedFiles.length > 0) {
      this.productForm.patchValue({ image: selectedFiles[0] });
    }
  }

  onSubmit(): void {
    this.cleanResponseMessage();
    this.cleanErrors();

    const formData = new FormData();
    formData.append('name', this.productForm.get('name')?.value);
    formData.append('price', this.productForm.get('price')?.value);
    formData.append('description', this.productForm.get('description')?.value);
    formData.append('stars', this.productForm.get('stars')?.value);
    formData.append('image', this.productForm.get('image')?.value);

    // Convertir FormData a any para evitar el error de conversión
    this.productService.saveProduct(formData as any).subscribe(
      (response) => this.handleResponse(response),
      (errors) => this.handleErrors(errors)
    );
  }

  private cleanResponseMessage(): void {
    this.responseMessage = '';
  }

  private cleanErrors(): void {
    this.errors = [];
  }

  private handleResponse(response: any): void {
    this.showSuccessAlert(response.message);
    this.resetForm();
    this.inputFile.nativeElement.value = '';
  }

  private showSuccessAlert(message: string): void {
    this.responseMessage = message;

    // Ocultar alerta
    setTimeout(() => {
      this.cleanResponseMessage();
    }, 3000);
  }

  private resetForm(): void {
    this.productForm.reset({
      name: '',
      price: '',
      description: '',
      stars: '',
      image: '',
    });
  }

  private handleErrors(errors: any): void {
    for (let error in errors.error.errors) {
      this.errors.push(errors.error.errors[error][0]);
    }
  }
}
