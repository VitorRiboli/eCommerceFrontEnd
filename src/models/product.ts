import { CategoryDTO } from "./category";

export type ProductDTO = {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
  categories: CategoryDTO[]; //Colchetes indica que vai ser uma coleção de categorias
}