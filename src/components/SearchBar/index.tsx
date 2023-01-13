import './styles.css';

export default function SearchBar() {
  return (

    <form className="ec-search-bar">
      <button type="submit">🔎︎</button>
      <input type="text" placeholder="Nome do Produto" />
      <button type="reset">🗙</button>
    </form>

  );
}
