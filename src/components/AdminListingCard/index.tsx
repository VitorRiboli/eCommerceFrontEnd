import IconEdit from "../../assets/images/edit.svg";
import IconDelete from "../../assets/images/delete.svg";

type Props = {
  id: number,
  price: number,
  name: string,
  imgUrl: string,
  onDialogView: Function,
  onUpdateClick: Function
}

export default function AdminListingCard({...product} : Props) {

  return (
    <tr>
      <td className="ec-tb576">{product.id}</td>
      <td>
        <img
          className="ec-product-listing-img"
          src={product.imgUrl}
          alt={product.name}
        />
      </td>
      <td className="ec-tb768">R$ {product.price.toFixed(2)}</td>
      <td className="ec-txt-left">{product.name}</td>
      <td>
        <img 
          onClick={() => product.onUpdateClick(product.id)}
          className="ec-product-listing-btn" 
          src={IconEdit} 
          alt="Editar" />
      </td>
      <td>
        <img
          onClick={() => product.onDialogView(product.id)}
          className="ec-product-listing-btn"
          src={IconDelete}
          alt="Deletar"
        />
      </td>
    </tr>
  );
}
