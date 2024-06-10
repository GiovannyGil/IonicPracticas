import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core'
import { AlertController } from '@ionic/angular'
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private http: HttpClient,
      public alertController: AlertController,
      // public modal: IonModal
      private router: Router
  ) { }

  Api_url = 'http://localhost:3000/productos/';


  // funcion para mostrar los datos por consola automaticamente

  // esto sirve para que cuando se entre a la vista se muestren los datos automaticamente
  // ionViewDidEnter() {
  //   this.getDatos(); // ña funcion que se va a ejecutar automaticamente
  // }

  ngOnInit() {
    // this.getDatos();
    this.getProducts();
  }

  // funcion para obtener los datos de la API
  // getDatos() {
  //   fetch(this.Api_url)
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //   });
  // }

  navigateToAddProduct() {
    this.router.navigate(['/products/new']);
  }

  // funcion para traer todo los productos
  listaProductos: any = [];
  async getProducts() {
    return await this.http.get<any[]>(this.Api_url).subscribe(data => {
      this.listaProductos = data;
    })
  }

  // funcion para el modal
  isModalOpen = false;
  producto: any = {}; // Variable para almacenar la información del personaje seleccionado actualmente
  // funcion para abrir y cerrar el modal (Màs informacion de los personajes)
  
  
  setOpen(isOpen: boolean, productoID?: number) {
    this.isModalOpen = isOpen;
    if (productoID) {
      this.getProductoInfo(productoID);
    }
  }

    // Funcion para obtener la informacion de un personaje en especifico (ID)
    getProductoInfo(productoID: number) {
      this.http.get(this.Api_url+productoID)
        .subscribe((data: any) => {
          this.producto = data; // Almacena la información del personaje seleccionado actualmente
        });
    }


    // configuracion de alerta para eliminar un producto
    // función para confirmar la eliminación del producto
    async confirmDelete(productoID: number) {
      const alert = await this.alertController.create({
        header: 'Confirmar eliminación',
        message: '¿Estás seguro de que deseas eliminar este producto?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Acción cancelada');
            }
          }, {
            text: 'Eliminar',
            handler: () => {
              this.deleteProduct(productoID);
            }
          }
        ]
      });

      await alert.present();
    }

    // funcion para ir a la pagina de editar un producto
    navigateToUpdateProduct(id: number) {
      this.router.navigate(['/products/update', id]);
    }

    // funcion para eliminar un producto

    async deleteProduct(productoID: number) {
      return await this.http.delete(this.Api_url+productoID)
        .subscribe(() => {
          this.getProducts();
        });
    }

    
    // UPDATE


}
