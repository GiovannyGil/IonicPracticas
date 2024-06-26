import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosModule } from './productos/productos.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db.sqlite',
    entities: ['dist/**/*.entity{.ts,.js}'],
  }),
  ProductosModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
