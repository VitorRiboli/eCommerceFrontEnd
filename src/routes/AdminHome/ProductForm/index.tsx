import "./styles.css";

import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import ButtonPrimary from "../../../components/ButtonPrimary";
import ButtonSecondary from "../../../components/ButtonSecondary";
import FormInput from "../../../components/FormInput";
import FormTextArea from "../../../components/FormTextArea";
import FormSelect from "../../../components/FormSelect";

import * as forms from "../../../utils/forms";
import * as productService from "../../../services/product-service";
import * as categoryService from "../../../services/category-service";

import { CategoryDTO } from "../../../models/category";
import { selectStyles } from "../../../utils/select";

export default function ProductForm() {
  const params = useParams();

  const navigate = useNavigate();

  //Verifica se é edição ou atualização
  const isEditing = params.productId !== "create";

  const [categories, setCategories] = useState<CategoryDTO[]>([]);

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
    description: {
      value: "",
      id: "description",
      name: "description",
      type: "text",
      placeholder: "Descrição",
      validation: function (value: string) {
        return /^.{10,}$/.test(value);
      },
      message: "A descrição deve ter pelo menos 10 caracteres.",
    },
    categories: {
      value: [],
      id: "categories",
      name: "categories",
      placeholder: "Categorias",
      validation: function (value: CategoryDTO[]) {
        return value.length > 0; //retorna true se tiver ao menos uma categoria selecionada
      },
      message: "Escolha ao menos uma categoria selecionada",
    },
  });

  function handleInputChange(event: any) {
    const result = forms.updateAndValidate(
      formData,
      event.target.name,
      event.target.value
    );
    setFormData(result);
  }

  function handleTurnDirty(name: string) {
    const newFormData = forms.dirtyAndValidate(formData, name);
    setFormData(newFormData);
  }

  useEffect(() => {
    categoryService.findAllRequest().then((res) => {
      setCategories(res.data);
    });
  }, []);

  useEffect(() => {
    if (isEditing) {
      productService.findById(Number(params.productId)).then((res) => {
        const newFormData = forms.updateAll(formData, res.data);
        setFormData(newFormData);
      });
    }
  }, []);

  function handleSubmit(event: any) {
    event.preventDefault();

    const formDataValidated = forms.dirtyAndValidateAll(formData);

    if (forms.hasAnyInvalid(formDataValidated)) {
      setFormData(formDataValidated);
      return;
    }

    const requestBody = forms.toValues(formData);

    if (isEditing) {
      requestBody.id = params.productId;
    }

    const request = isEditing
      ? productService.updateRequest(requestBody)
      : productService.insertRequest(requestBody);

    request.then((res) => {
      navigate(`/admin/products`);
    });
  }

  return (
    <main>
      <section id="product-form-section" className="ec-container">
        <div className="ec-product-form-container">
          <form className="ec-card ec-form" onSubmit={handleSubmit}>
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

              <div>
                <FormSelect
                  className="ec-form-control ec-form-select-container"
                  styles={selectStyles}
                  {...formData.categories}
                  onChange={(obj: any) => {
                    const newFormData = forms.updateAndValidate(
                      formData,
                      "categories",
                      obj
                    );
                    setFormData(newFormData);
                  }}
                  onTurnDirty={handleTurnDirty}
                  isMulti //Permite a multipa escolha
                  options={categories} //variavel que trás as escolhas
                  getOptionLabel={(obj: any) => obj.name} //trocando o nome da label por name
                  getOptionValue={(obj: any) => String(obj.id)}
                />
                <div className="ec-form-error">
                  {formData.categories.message}
                </div>
              </div>

              <div>
                <FormTextArea
                  {...formData.description}
                  onTurnDirty={handleTurnDirty}
                  className="ec-form-control ec-textarea"
                  onChange={handleInputChange}
                />
                <div className="ec-form-error">
                  {formData.description.message}
                </div>
              </div>
            </div>

            <div className="ec-product-form-btns">
              <Link to="/admin/products" style={{ textDecoration: "none" }}>
                <ButtonSecondary text="Cancelar" />
              </Link>
              <div onClick={handleSubmit}>
                <ButtonPrimary text="Salvar" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
