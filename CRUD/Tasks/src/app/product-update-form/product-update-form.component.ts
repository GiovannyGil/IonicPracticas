import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-product-update-form',
  templateUrl: './product-update-form.component.html',
  styleUrls: ['./product-update-form.component.scss'],
})
export class ProductUpdateFormComponent implements OnInit {
  productForm: FormGroup = new FormGroup({});
  productId: number;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private alertController: AlertController
  ) {
    this.productId = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.productForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
      stock: ['', Validators.required],
    });

    this.loadProductData();
  }

  loadProductData() {
    this.http.get(`${environment.apiUrl}/productos/${this.productId}`).subscribe((data: any) => {
      this.productForm.patchValue(data);
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.http.patch(`${environment.apiUrl}/productos/${this.productId}`, this.productForm.value).subscribe(
        () => {
          console.log("Producto actualizado exitosamente");
          this.router.navigate(['/tabs/tab1']); // Redirigir a la página principal
        },
        (error) => {
          console.error('Error al actualizar el producto', error);
        }
      );
    }
  }

  onCancel() {
    this.router.navigate(['/tabs/tab1']);
  }
}
