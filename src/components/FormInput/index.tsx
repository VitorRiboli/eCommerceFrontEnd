

export default function FormInput(props : any) {
  const { vaidation, ...inputProps } = props;

  return (
    <input {...inputProps} />
  );
}