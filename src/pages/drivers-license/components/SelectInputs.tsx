import { SelectInputProps } from "../../../interfaces/interfaces";

const SelectInputs = ({
  inputName,
  label,
  value,
  handleChange,
  options,
}: SelectInputProps) => {
  return (
    <div className="relative flex h-[60px] w-full max-w-[400px] items-center">
      <label
        htmlFor=""
        className="text-brand-blue absolute left-4 top-[-1px] -translate-y-1/2 bg-white px-[5px] text-[13px]"
      >
        {label}
      </label>

      <select
        name={inputName}
        id="select"
        value={value}
        onChange={handleChange}
        required
        className="border-brand-blue h-[60px] w-[300px] rounded-lg border-[1px] border-solid px-4 text-[15px] text-gray-500 outline-none"
      >
        <option value="">Select a state</option>

        {options.map((state, index) => {
          return (
            <option key={index} value={state.name}>
              {state.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInputs;
