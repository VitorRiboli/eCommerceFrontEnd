import "./styles.css";

import { useEffect, useState } from "react";

import IconEdit from "../../../assets/images/edit.svg";
import IconDelete from "../../../assets/images/delete.svg";

import * as productService from "../../../services/product-service";

import { ProductDTO } from "../../../models/product";
import AdminListingCard from "../../../components/AdminListingCard";
import SearchBar from "../../../components/SearchBar";
import ButtonNextPage from "../../../components/ButtonNextPage";
import DialogInfo from "../../../components/DialogInfo";
import DialogConfirmation from "../../../components/DialogConfirmation";

type QueryParams = {
  page: number;
  name: string;
};

export default function ProductListing() {

  const [dialogInfoData, setDialogInfoData] = useState({
    visible: false,
    message: "Operação conluída com sucesso!"
  })

  const [dialogConfirmationData, setDialogConfirmationData] = useState({
    visible: false,
    id: 0,
    message: "Tem Certeza?"
  })
  
  const [isLastPage, setIsLastPage] = useState(false);

  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 0,
    name: "",
  });

  useEffect(() => {
    productService
      .findPageRequest(queryParams.page, queryParams.name)
      .then((res) => {
        const nextPage = res.data.content;
        setProducts(products.concat(nextPage));
        setIsLastPage(res.data.last);
      });
  }, [queryParams]);

  function handleSearch(searchText: string) {
    setProducts([]);
    setQueryParams({ ...queryParams, page: 0, name: searchText });
  }

  function handleNextPageClick() {
    setQueryParams({ ...queryParams, page: queryParams.page + 1 });
  }

  function handleDialogInfoClose() {
    setDialogInfoData({...dialogInfoData, visible: false})
  }

  function handleDeleteClick(productId : number) {
    setDialogConfirmationData({...dialogConfirmationData, id: productId, visible: true})
  }

  function handleDialogConfirmationAnswer(answer : boolean, productId : number) {
    if (answer) {
      productService.deleteById(productId)
        .then(() => {
          //Atualizar a lista e refazer a busca na pagina 0
          setProducts([]);
          setQueryParams({ ...queryParams, page: 0});
        })
        .catch(err => {
          setDialogInfoData({
            visible: true,
            message: err.response.data.error
          })
        })
    }

    setDialogConfirmationData({...dialogConfirmationData, visible: false})
  }

  return (
    <main>
      <section id="product-listing-section" className="ec-container">
        <h2 className="ec-section-title ec-mb20">Cadastro de Produtos</h2>

        <div className="ec-btn-container ec-mb20">
          <a className="ec-btn ec-btn-white" href="">
            Novo
          </a>
        </div>

        <SearchBar onSearch={handleSearch} />

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
            {products.map((product) => (
              <AdminListingCard
                key={product.id}
                id={product.id}
                price={product.price}
                name={product.name}
                imgUrl={product.imgUrl}
                onDialogView={() => handleDeleteClick(product.id)}
              />
            ))}
          </tbody>
        </table>

        {
          !isLastPage && 
          <ButtonNextPage onNextPage={handleNextPageClick} />
        }
      </section>

      {
        dialogInfoData.visible &&
        <DialogInfo 
        message={dialogInfoData.message} 
        onDialogClose={handleDialogInfoClose} />
      }
      
      {
        dialogConfirmationData.visible &&
        <DialogConfirmation
        id={dialogConfirmationData.id}
        message={dialogConfirmationData.message} 
        onDialogAnswer={handleDialogConfirmationAnswer} />
      }
    </main>
  );
}
