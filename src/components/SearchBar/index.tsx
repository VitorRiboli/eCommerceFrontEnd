import './styles.css';

import { useState } from 'react';


type Props = {
  onSearch: Function;
}

export default function SearchBar({onSearch} : Props) {

  const [text, setText] = useState("");

  function handleChange(event : any) {
    setText(event.target.value);
  }

  function handleSubmit(event : any) {
    event.preventDefault();
    onSearch(text);
  }

  return (
    <form className="ec-search-bar" onSubmit={handleSubmit}>
      <button type="submit">🔎︎</button>
      <input 
      value={text}
      onChange={handleChange}
      type="text" 
      placeholder="Nome do Produto" 
      />
      <button type="reset">🗙</button>
    </form>

  );
}
