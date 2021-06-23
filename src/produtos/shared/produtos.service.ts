import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Produto } from './produto';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectModel('Produto') private readonly produtoModel: Model<Produto>,
  ) {}
  produtos: Produto[];

  async obterTodos(): Promise<Produto[]> {
    return await this.produtoModel.find().exec();
  }

  async obterUm(id: string): Promise<Produto> {
    return await this.produtoModel.findById(id).exec();
  }

  async criar(produto: Produto): Promise<Produto> {
    const produtoCriado = new this.produtoModel(produto);
    return await produtoCriado.save();
  }

  async alterar(id: string, produto: Produto): Promise<Produto> {
    await this.produtoModel.updateOne({ _id: id }, produto).exec();
    return await this.obterUm(id);
  }

  async apagar(id: string) {
    return await this.produtoModel.deleteOne({ _id: id }).exec();
  }
}
