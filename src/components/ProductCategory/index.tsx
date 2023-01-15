import "./styles.css";

type Props = {
  name : string;
}

export default function ProdudctCategory( {name} : Props ) {

  return (
    <div className="ec-category">
      {name}
    </div>
  );

}
