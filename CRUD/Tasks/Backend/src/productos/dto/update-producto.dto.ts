import { PartialType } from '@nestjs/mapped-types';
import { CreateProductoDto } from './create-producto.dto';

export class UpdateProductoDto extends PartialType(CreateProductoDto) {
    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
}
