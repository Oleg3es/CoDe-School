import type { InputHTMLAttributes } from "react";

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InputForm = ({ label, ...props }: InputFormProps) => {
  return (
    <div className="input-form__wrapper">
      {label && <label className="input-form__label">{label}</label>}
      <input className="input-form" {...props} />
    </div>
  )
}

export default InputForm