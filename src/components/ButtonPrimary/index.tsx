import './styles.css'

type Props = {
  text: string;
}

export default function ButtonPrimary({text} : Props) {
  return (
    <>
      <a className="ec-btn ec-btn-orange">{text}</a>
    </>
  );
}
