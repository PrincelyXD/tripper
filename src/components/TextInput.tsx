import  { useId } from "react";
import { TextInputProps } from "../interfaces/interfaces";

const TextInputs = ({
  inputName,
  inputType,
  label,
  handleChange,
  value,
  placeHolderText,
}: TextInputProps) => {
  const id = useId();
  return (
    <div className="flex h-[60px] w-[350px] text-[16px]">
      <label
        className="absolute h-[60px] w-[350px] cursor-pointer"
        htmlFor={`${id}-${inputName}`}
      >
        <p className="absolute top-[-50%] text-blue-500">{label}</p>
      </label>
      <input
      
        id={`${id}-${inputName}`}
        type={inputType}
        name={inputName}
        onChange={handleChange}
        value={value}
        placeholder={placeHolderText}
        className="relative w-[350px] rounded-lg px-2 text-[15px] outline-none bg-[#f3f3f3]"
      />
    </div>
  );
};

export default TextInputs;
