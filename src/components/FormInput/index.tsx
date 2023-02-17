

export default function FormInput(props : any) {
  const { vaidation, invalid, ...inputProps } = props;

  return (
    <input {...inputProps } data-invalid={invalid} />
  );
}

//data-invalid={invalid} troca o nome do atributo do invalid para data-invalid
