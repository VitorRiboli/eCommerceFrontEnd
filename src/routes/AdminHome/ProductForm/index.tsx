import "./styles.css";

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import ButtonPrimary from "../../../components/ButtonPrimary";
import ButtonSecondary from "../../../components/ButtonSecondary";
import FormInput from "../../../components/FormInput";

import * as forms from "../../../utils/forms";
import * as productService from "../../../services/product-service";

export default function ProductForm() {
  const params = useParams();

  const isEditing = params.productId !== "create";

  const [formData, setFormData] = useState<any>({
    name: {
      value: "",
      id: "name",
      name: "name",
      type: "text",
      placeholder: "Nome",
    },
    price: {
      value: "",
      id: "price",
      name: "price",
      type: "number",
      placeholder: "Preço",
      validation: function (value: any) {
        return Number(value) > 0;
      },
      message: "Favor informar um valor positivo.",
    },
    imgUrl: {
      value: "",
      id: "imgUrl",
      name: "imgUrl",
      type: "text",
      placeholder: "Link da Imagem",
    },
  });

  function handleInputChange(event: any) {
    //Atualizando os dados digitados no input
    const dataUpdate = forms.update(formData, event.target.name, event.target.value);
    //Aplicando a função de validação 
    const dataValidate = forms.vaidate(dataUpdate, event.target.name);
    //Atualizando o setFormData
    setFormData(dataValidate);
  }

  useEffect(() => {
    if (isEditing) {
      productService.findById(Number(params.productId)).then((res) => {
        const newFormData = forms.updateAll(formData, res.data);
        setFormData(newFormData);
      });
    }
  }, []);

  return (
    <main>
      <section id="product-form-section" className="ec-container">
        <div className="ec-product-form-container">
          <form className="ec-card ec-form">
            <h2>Dados do Produto</h2>

            <div className="ec-form-controls-container">
              <div>
                <FormInput
                  {...formData.name}
                  className="ec-form-control"
                  onChange={handleInputChange}
                />
                <div>{formData.name.message}</div>
              </div>

              <div>
                <FormInput
                  {...formData.price}
                  className="ec-form-control"
                  onChange={handleInputChange}
                />
                <div className="ec-form-error">{formData.price.message}</div>
              </div>

              <div>
                <FormInput
                  {...formData.imgUrl}
                  className="ec-form-control"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="ec-product-form-btns">
              <Link to="/admin/products" style={{ textDecoration: "none" }}>
                <ButtonSecondary text="Cancelar" />
              </Link>
              <ButtonPrimary text="Salvar" />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
