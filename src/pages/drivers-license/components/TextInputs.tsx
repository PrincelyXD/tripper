import { useState } from "react";
import { TextInputProps } from "../../../interfaces/interfaces";
import useId from "@mui/material/utils/useId";

const TextInputs = ({
  inputName,
  inputType,
  label,
  handleChange,
  value,
  placeHolderText,
}: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const id = useId();
  return (
    <div className="relative flex h-[60px] w-full max-w-[400px] items-center">
      {inputType === "date" ? (
        <label
          htmlFor={`${id}-${inputName}}`}
          className="text-brand-blue absolute left-4 top-[-1px] -translate-y-1/2 bg-white px-[5px] text-[13px]"
        >
          {label}
        </label>
      ) : (
        <label
          className={`pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 transform px-[5px] transition-all duration-300 ${isFocused || value ? "text-brand-blue top-[-1px] bg-white text-[13px]" : "text-[17px] text-gray-400"}`}
          htmlFor={`${id}-${inputName}`}
        >
          {label}
        </label>
      )}

      {inputName === "fixedDate" ? (
        <input
          type={inputType}
          id={`${id}-${inputName}`}
          name={inputName}
          value={value}
          disabled
          className={`h-[60px] w-[300px] rounded-lg px-4 text-[15px] ${inputType === "date" && "text-gray-500"} border-brand-blue border-[1px] border-solid outline-none`}
        />
      ) : (
        <input
          type={inputType}
          id={`${id}-${inputName}`}
          name={inputName}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={value}
          onChange={handleChange}
          placeholder={placeHolderText}
          required
          className={`h-[60px] w-[300px] rounded-lg px-4 text-[15px] ${inputType === "date" && "text-gray-500"} border-brand-blue border-[1px] border-solid outline-none`}
        />
      )}
    </div>
  );
};

export default TextInputs;
