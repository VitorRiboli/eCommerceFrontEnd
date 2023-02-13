import "./styles.css";

import IconEdit from "../../../assets/images/edit.svg";
import IconDelete from "../../../assets/images/delete.svg";

export default function ProductListing() {
  return (
    <main>
    <section id="product-listing-section" className="ec-container">

      <h2 className="ec-section-title ec-mb20">Cadastro de Produtos</h2>

      <div className="ec-btn-container ec-mb20">
        <a className="ec-btn ec-btn-white" href="">
          Novo
        </a>
      </div>

      <form className="ec-search-bar">
        <button type="submit">🔎︎</button>
        <input type="text" placeholder="Nome do Produto" />
        <button type="reset">🗙</button>
      </form>

      <table className="ec-table ec-mb20 ec-mt20">
        <thead>
          <th className="ec-tb576">id</th>
          <th></th>
          <th className="ec-tb768">Preço</th>
          <th className="ec-txt-left">Nome</th>
          <th></th>
          <th></th>
        </thead>
        <tbody>
          <tr>
            <td className="ec-tb576">341</td>
            <td><img className="ec-product-listing-img" src="img/computer.png" alt="Computer" /></td>
            <td className="ec-tb768">R$ 5000,00</td>
            <td className="ec-txt-left">Computador Gamer XT Plus Ultra</td>
            <td><img className="ec-product-listing-btn" src={IconEdit} alt="Editar" /></td>
            <td><img className="ec-product-listing-btn" src={IconDelete}  alt="Deletar" /></td>
          </tr>

          <tr>
            <td className="ec-tb576">341</td>
            <td><img className="ec-product-listing-img" src="img/computer.png" alt="Computer" /></td>
            <td className="ec-tb768">R$ 5000,00</td>
            <td className="ec-txt-left">Computador Gamer XT Plus Ultra</td>
            <td><img className="ec-product-listing-btn" src={IconEdit}  alt="Editar" /></td>
            <td><img className="ec-product-listing-btn" src={IconDelete}  alt="Deletar" /></td>
          </tr>

          
        </tbody>

      </table>
    

      <div className="ec-btn-next-page">
        carregar mais
      </div>
      
    </section>
  </main>
  )
}