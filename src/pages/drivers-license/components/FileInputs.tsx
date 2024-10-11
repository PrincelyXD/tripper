import { useId } from "react"
import { FileInputProps } from "../../../interfaces/interfaces"
import PermMediaIcon from '@mui/icons-material/PermMedia';


const FileInputs = ({  inputName, label,inputDataFormat,handleChange, getFileName}:FileInputProps ) =>{

const id =useId()
   
  return (
    <div className=" h-[60px] inline-block mr-[10px] relative">
      <label
        className="absolute h-[60px] z-10 w-[170px] cursor-pointer text-[14px]"
        htmlFor={`${id}-${inputName}`}
      >
        <p className="absolute top-[-50%] text-brand-blue"></p>
      </label>

      
      <div className="mb-[40px] flex h-[60px] relative w-[170px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-[#1475cf] bg-white">
            <span className=" text-brand-blue absolute left-4 top-[-1px] -translate-y-1/2 bg-white px-[5px] text-[13px]">{label}</span>
        <input
          id={`${id}-${inputName}`}
          type="file"
          accept={inputDataFormat}
          name={inputName}
          onChange={handleChange}
          required= {true}
          className={` field-${inputName} hidden cursor-pointer`}
        />
        <span>
          <PermMediaIcon sx={{ color: "#1475cf", fontSize: "20px" }} />
        </span>

        <p className="text-[11px]"> {getFileName(`${inputName}`)}</p>
      </div>
    </div>
  )

}
export default FileInputs
