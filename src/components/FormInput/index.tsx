export default function FormInput(props: any) {
  
  const {
    vaidation,
    invalid = "false",
    dirty = "false",
    onTurnDirty,
    ...inputProps
  } = props;

  function handleBlur() {
    onTurnDirty(props.name);
  }

  return (
    <input
      onBlur={handleBlur}
      {...inputProps}
      data-invalid={invalid}
      data-dirty={dirty}
    />
  );
}

//data-invalid={invalid} troca o nome do atributo do invalid para data-invalid
