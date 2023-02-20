import Select from "react-select";

export default function FormSelect(props: any) {
  const {
    className,
    vaidation,
    invalid = "false",
    dirty = "false",
    onTurnDirty,
    ...selectProps
  } = props;

  function handleBlur() {
    onTurnDirty(props.name);
  }

  return (
    <div  
      className="ec-form-control ec-form-select-container" 
      data-invalid={invalid} 
      data-dirty={dirty}
    >
      <Select 
        {...selectProps} 
        onBlur={handleBlur} 
      />
    </div>
  );
}

//data-invalid={invalid} troca o nome do atributo do invalid para data-invalid
