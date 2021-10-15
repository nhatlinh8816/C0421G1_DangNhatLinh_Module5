import {TypeProduct} from './TypeProduct';

export interface Product {
  id: number;
  name: string;
  code: string;
  description: string;
  price: number;
  type: TypeProduct;
}
