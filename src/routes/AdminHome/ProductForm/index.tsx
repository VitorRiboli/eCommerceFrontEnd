import "./styles.css";

export default function ProductForm() {
  return (
    <main>
    <section id="product-form-section" className="ec-container">
      <div className="ec-product-form-container">
        <form className="ec-card ec-form">
          <h2>Dados do Produto</h2>

          <div className="ec-form-controls-container">

            <div>
              <input className="ec-form-control" type="text" placeholder="Nome" />
             
            </div>

            <div>
              <input className="ec-form-control" type="text" placeholder="Preço" />
              
            </div>

            <div>
              <input className="ec-form-control" type="text" placeholder="Imagem" />
              
            </div>

            <div>
              <select className="ec-form-control ec-select" required>
                <option value="" disabled selected>Categorias</option>
                <option value="1">Eletrônicos</option>
                <option value="2">Casa</option>
                <option value="3">3</option>
              </select>
              
            </div>
         
            <div>
              <textarea className="ec-textarea ec-form-control" placeholder="Descrição"></textarea>
            </div>

          </div>

          <div className="ec-product-form-btns">
            <button type="reset" className="ec-btn ec-btn-white">
              Cancelar
            </button>
            <button type="submit" className="ec-btn ec-btn-login">
              Salvar
            </button>
          </div>
        </form>





      </div>
    </section>

  </main>
  )
}