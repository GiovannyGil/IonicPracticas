import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import { environment } from '../../environments/environment';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private alertController: AlertController,
  ) {}

  ngOnInit() {
    this.productForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
      stock: ['', Validators.required],
    });
  }

  async onSubmit() {
    console.log("Formulario enviado", this.productForm.value); // Depuración
    if (this.productForm.valid) {

      // Recuperar los datos del formulario
      const newProduct = this.productForm.value
      
      // comprobar si el producto ya existe
      const ProductExist = await this.checkIfProductExists(newProduct.nombre);

      if(ProductExist){
        // mostrar una alerta si el producto ya existe
        this.showAlert('Error', 'El producto ya existe, por favor acualiza la cantidad en stock');
        return;
      }

      this.http.post('http://localhost:3000/productos', this.productForm.value).subscribe(
        () => {
          console.log("Producto creado exitosamente"); // Depuración
          this.router.navigate(['/tabs/tab1']); // Redirigir a la página principal
        },
        (error) => {
          console.error('Error al crear el producto (onSubmit)', error);
        }
      );
    }
  }

// funcion para comprobar si el producto ya existe
async checkIfProductExists(nombre: string): Promise<any>{
  const products = await this.http.get<any[]>('http://localhost:3000/productos').toPromise();
  return products?.find(product => product.nombre.toLowerCase() === nombre.toLowerCase())
}


// fucion para mostrar una alerta
async showAlert(header: string, message: string){
  const alert = await this.alertController.create({
    header,
    message,
    buttons: ['OK']
  })

  await alert.present()
}

  onCancel(){
    this.router.navigate(['/tabs/tab1']); // Redirigir a la página principal
  }
}
