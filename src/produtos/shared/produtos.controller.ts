import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Produto } from './produto';
import { ProdutosService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
  constructor(private produtosService: ProdutosService) {}

  @Get()
  obterTodos(): Promise<Produto[]> {
    return this.produtosService.obterTodos();
  }

  @Get(':id')
  obterUm(@Param('id') id: string): Promise<Produto> {
    return this.produtosService.obterUm(id);
  }

  @Post()
  criar(@Body() produto: Produto) {
    this.produtosService.criar(produto);
  }

  @Put(':id')
  alterar(@Param('id') id: string, @Body() produto: Produto): Promise<Produto> {
    return this.produtosService.alterar(id, produto);
  }

  @Delete(':id')
  apagar(@Param('id') id: string) {
    this.produtosService.apagar(id);
  }
}
