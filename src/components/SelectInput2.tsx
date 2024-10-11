import { SelectInput2Props} from "../interfaces/interfaces"


const SelectInput2 = ({
  inputName,
  label,
  handleChange,
  value,
  options,
}: SelectInput2Props) => {
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
        

        {options.map((lga, index) => {
          return (
            <option key={index} value={lga}>
              {lga}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInput2;
