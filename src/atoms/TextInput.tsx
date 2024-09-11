import { ITextInput } from '../interfaces/ITextInput'

export default function TextInput({type,placeholder,required,value,handleChange}:ITextInput) {

  console.log("insided text input" + value);
  function handleOnChange(e:React.ChangeEvent<HTMLInputElement>){
      const value = e.target.value;
      console.log(value);
      handleChange(value);
  }
  return (
    <input onChange={handleOnChange} value={value} type={type} placeholder={placeholder} required={required}></input>
  )
}
