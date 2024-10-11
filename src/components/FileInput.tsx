import { useId } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

interface FileInputProps {
  inputName: string;
  label: string;
  inputDataFormat: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  getFileName: (fileName: string) => string;
}

const FileInput = ({
  inputName,
  label,
  inputDataFormat,
  handleChange,
  getFileName,
}: FileInputProps) => {
  const id = useId();

  return (
    <div>
      <label
        className="absolute h-[60px] w-[350px] cursor-pointer text-[16px]"
        htmlFor={`${id}-${inputName}`}
      >
        <p className="absolute top-[-50%] text-blue-500"> {label}</p>
      </label>

      <div className="mb-[40px] flex h-[60px] w-[350px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-[#1475cf] bg-white">
        <input
          id={`${id}-${inputName}`}
          type="file"
          accept={inputDataFormat}
          name={inputName}
          onChange={handleChange}
          className={` field-${inputName} hidden cursor-pointer`}
        />
        <span>
          <CloudUploadIcon sx={{ color: "#1475cf", fontSize: "30px" }} />
        </span>

        <p className="text-[13px]"> {getFileName(`${inputName}`)}</p>
      </div>
    </div>
  );
};

export default FileInput;
