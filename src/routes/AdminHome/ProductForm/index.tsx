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
      validation: function (value: string) {
        //return value.length >= 3 && value.length <= 80;
        return /^.{3,80}$/.test(value); 
      },
      message: "Favor informar um nome de 3 a 80 caracteres.",
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
    const result = forms.updateAndValidate(formData, event.target.name, event.target.value);
    setFormData(result);
  }

  function handleTurnDirty(name: string) {
    const newFormData = forms.dirtyAndValidate(formData, name);
    setFormData(newFormData);
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
                  onTurnDirty={handleTurnDirty}
                  className="ec-form-control"
                  onChange={handleInputChange}
                />
                <div className="ec-form-error">{formData.name.message}</div>
              </div>

              <div>
                <FormInput
                  {...formData.price}
                  onTurnDirty={handleTurnDirty}
                  className="ec-form-control"
                  onChange={handleInputChange}
                />
                <div className="ec-form-error">{formData.price.message}</div>
              </div>

              <div>
                <FormInput
                  {...formData.imgUrl}
                  onTurnDirty={handleTurnDirty}
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
