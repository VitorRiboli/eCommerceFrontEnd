export function update(inputs: any, name: string, newValue: string) {
  return { ...inputs, [name]: {...inputs[name], value: newValue } }
}

export function toValues(inputs: any) {
  const data: any = {}

  for (var name in inputs) {
      data[name] = inputs[name].value;
  }

  return data;
}

export function updateAll(inputs: any, newValues: any){
  const newInputs: any = {}

  for (var name in inputs) {
    newInputs[name] = { ...inputs[name], value: newValues[name] };
  }

  return newInputs;
}

export function vaidate(inputs: any, name: string) {
  //Testando se tem o vampo validation no atributo [name]
  if (!inputs[name].validation) {
    return inputs; //Caso não exista a função validate, retorne apenas o inputs
  }

  const isInValid = !inputs[name].validation(inputs[name].value)

  return { ...inputs, [name]: {...inputs[name], invalid: isInValid.toString() }}
}

export function toDirty(inputs: any, name: string) {
  return { ...inputs, [name]: { ...inputs[name], dirty: "true" }}
}

