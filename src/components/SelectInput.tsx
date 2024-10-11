import { SelectInputProps} from "../interfaces/interfaces"

const SelectInput = ({
  inputName,
  label,
  value,
  handleChange,
  options,
}: SelectInputProps) => {

 
  return (
    <div className="flex text-[16px]">
      <label
        className="absolute h-[60px] w-[350px] cursor-pointer"
        htmlFor="select"
      >
        <p className="absolute top-[-50%] text-blue-500">{label}</p>
      </label>

      <select
        name={inputName}
        id="select"
        value={value}
        onChange={handleChange}
        className="relative h-[60px] w-[350px] cursor-pointer rounded-lg outline-none bg-[#f3f3f3]"
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

export default SelectInput;
