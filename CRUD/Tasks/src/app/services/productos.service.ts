import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Productos } from 'Backend/dist/productos/entities/producto.entity';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = 'http://localhost:3000/productos';
  private productosSubject = new BehaviorSubject<Productos[]>([]);
  productos$: Observable<any[]> = this.productosSubject.asObservable();

  constructor(private http: HttpClient) { }

  // funcion para llamar el listado de todos los productos con el metodo get
  getProducts(){
    try {
      const products = this.http.get<any[]>(this.apiUrl).subscribe(
        data => this.productosSubject.next(data),
        error => console.error('Error al obtener los productos', error)
      )
    } catch (error) {
      throw new Error('No se encontraron productos');
    }
  }

  // funcion para llamar un solo producto con el metodo get
  getProductByID(id: number): Observable<any> {
    try {
      return this.http.get<any>(`${this.apiUrl}/${id}`);
    } catch (error) {
      throw new Error('No se pudo encontrar el producto')
    }
  }

  // funcion para crear un producto con el metodo post
  addProduct(product: any): Observable<any> {
    try {
      return this.http.post<any>(this.apiUrl, product)
    } catch (error) {
      throw new Error('No se pudo agregar el producto')
      
    }
  }

  // funcion para actualizar un producto con el metodo patch
  updateProduct(id: number, product: any){
    try {
      return this.http.patch<any>(`${this.apiUrl}/${id}`, product)
    } catch (error) {
      throw new Error('No se pudo actualizar el producto')
    }
  }

  // funcion para mantener refrecado los datos
  refreshProducts(){
    this.getProducts();
  }

  // funcion para eliminar un producto con el metodo delete
  deleteProduct(id: number): Observable<any> {
    try {
      return this.http.delete<any>(`${this.apiUrl}/${id}`)
    } catch (error) {
      throw new Error('No se pudo eliminar el producto')
    }
  }

}