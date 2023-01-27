
export class OrderDTO {
  id?: number; //id opcional
  items: OrderItemDTO[] = []; //lista de items que é do OrdemItemDTO

  //Dado calculado, retorna o preço total
  get total(): number {
    let sum = 0;
    this.items.forEach(item => {
      sum += item.subTotal;
    })
    return sum;
  }
}

export class OrderItemDTO {
  constructor(
    public productId: number,
    public quantity: number,
    public name: string,
    public price: number,
    public imgUrl: string
  ) { }

  //Dado calculado, retorna o subtotal
  get subTotal(): number {
    return this.price * this.quantity;
  } 

}

//Foi criado como classe pois terá dados calculados
//Diferente do expor Type.
