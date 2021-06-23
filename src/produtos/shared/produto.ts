import { Document } from 'mongoose';

export class Produto extends Document {
  codigo: string;
  nome: string;
  preco: number;
}
