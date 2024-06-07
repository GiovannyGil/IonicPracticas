import { PartialType } from '@nestjs/mapped-types';
import { CreateProductoDto } from './create-producto.dto';

// heredar de CreateProductoDto, excepto el ID, y todos los campos opcionales
export class UpdateProductoDto extends PartialType(CreateProductoDto) {

}

