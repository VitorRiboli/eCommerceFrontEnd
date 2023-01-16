import './styles.css';

type Props = {
  text: string;
}

export default function ButtonSecondary({text}: Props) {
  return (
    <>
      <a className="ec-btn ec-btn-white">{text}</a>
    </>
  );
}
