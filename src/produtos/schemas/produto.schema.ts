import * as mongoose from 'mongoose';

export const ProdutoSchema = new mongoose.Schema({
  codigo: String,
  nome: String,
  preco: Number,
});
