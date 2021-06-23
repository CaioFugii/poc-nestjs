import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { Module } from '@nestjs/common';
import { ProdutoSchema } from '../schemas/produto.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Produto', schema: ProdutoSchema }]),
  ],
  controllers: [ProdutosController],
  providers: [ProdutosService],
})
export class ProdutosModule {}
