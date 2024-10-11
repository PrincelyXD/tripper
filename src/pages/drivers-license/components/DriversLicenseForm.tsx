import { useEffect, useState , useId} from "react";
import TextInputs from "./TextInputs";
import {
  CountryDataFormat,
  DriverLicenseFormDataFormat,
  FileData,
} from "../../../interfaces/interfaces";
import SelectInputs from "./SelectInputs";
import SelectInputs2 from "./SelectInputs2";
import apiEngine from "../../../api/requests";
import endpoints from "../../../api/endpoints";
import FileInputs from "./FileInputs";
import { bloodGroupTypes,fiveYearsString, vehicleClasses,} from "../../../resources/Resources";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { LicenseCollection, storage } from "../../../backend/firebase";
import { addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { toast } from "react-toastify";

const DriversLicenseForm = () => {
  const [formData, setFormData] = useState<DriverLicenseFormDataFormat>({
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    state: "",
    localGovernment: "",
    bloodGroup: "",
    vehicleClass: "",
    issueDate: new Date().toISOString().split("T")[0],
    expiryDate:
      fiveYearsString + new Date().toISOString().split("T")[0].split("2024")[1],
  });

  const [countryData, setCountryData] = useState<CountryDataFormat | null>(
    null,
  );
  const [imageUpload, setImageUpload] = useState<File | null>(null);
  const [cities, setCities] = useState<string[]>([]);
  const [fileName, setFileName] = useState<FileData[]>([]);
  const [submitted, setSubmitted] = useState<boolean>(false)
  const id =useId()
  const navigate = useNavigate()

  useEffect(() => {
    const getAllStates = async () => {
      try {
        const countryObject = await apiEngine.get(
          endpoints.getStates + "q?country=Nigeria",
        );
        const nigeria = countryObject?.data;
        setCountryData(nigeria);
      } catch (error) {
        console.log(error);
      }
    };

    getAllStates();
  }, []);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = evt.target;

    if (type === "file") {
      if (files && files.length > 0) {
        const filesArray = Array.from(files);
        const uploadedFileName = filesArray[0].name;
        setFileName((prevFileName) => [
          ...prevFileName,
          { [name]: uploadedFileName },
        ]);

        if (files[0].type.startsWith("image/") && imageUpload === null) {
          setImageUpload(files[0]);
        }
      }
    }
    if (type !== "file") {
      setFormData((prevData) => {
        return { ...prevData, [name]: value };
      });
    }
  };

  const handleSelectChange = async (
    evt: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { name, value } = evt.target;

    if (name === "state") {
      try {
        const cities = await apiEngine.get(
          `${endpoints.getCities}q?country=Nigeria&state=${value}`,
        );
        setCities(cities.data);
      } catch (error) {
        console.log(error, "error fetching state data");
      }
    }
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };
  // set file name to collapse to elipses, if name is longer than a given length
  const getFileName = (key: string) => {
   let  limit = 9
    const fileObject = fileName.find((file) => file[key]); 
      return fileObject ? `${fileObject[key].substring(0, limit)}... img`: "Click to upload";
  };

const handleSubmit = async (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>)=>{
      event.preventDefault()
      if (imageUpload === null){
        toast.error("Please Fill in All Fields",{draggable:true, theme:"light"})
        return
      }
    const imageRef = ref(storage, `licenseImages/${imageUpload.name + id}`)

    try {
      await uploadBytes(imageRef, imageUpload)
      const downloadUrl = await getDownloadURL(imageRef)

      await addDoc(LicenseCollection, {...formData, passportImage: downloadUrl })
      setSubmitted(true)
      toast("Upload Successfull")
      setTimeout(() => {
         navigate("/driver-license-issuing")
      }, 3000);
     
    } catch (error) {
      console.log(error, "Error Uploading data");
      
    }

}



  return (
    <div className="h-fit py-8 ">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 grid-rows-4 gap-y-[20px] gap-x-[20px]"
      >
        <TextInputs
          inputName="firstName"
          inputType="text"
          label="First Name"
          value={formData.firstName}
          placeHolderText=""
          handleChange={handleChange}
        />
        <TextInputs
          inputName="middleName"
          inputType="text"
          label="Middle Name"
          value={formData.middleName}
          placeHolderText=""
          handleChange={handleChange}
        />
        <TextInputs
          inputName="lastName"
          inputType="text"
          label="Last Name"
          value={formData.lastName}
          placeHolderText=""
          handleChange={handleChange}
        />
        <TextInputs
          inputName="dateOfBirth"
          inputType="date"
          label="Date of Birth"
          value={formData.dateOfBirth}
          placeHolderText=""
          handleChange={handleChange}
        />

        {countryData && (
          <SelectInputs
            inputName="state"
            options={countryData?.states}
            label="State"
            value={formData.state}
            handleChange={handleSelectChange}
          />
        )}

        {cities && (
          <SelectInputs2
            inputName="localGovernment"
            options={cities}
            label="Local Government"
            value={formData.localGovernment}
            handleChange={handleSelectChange}
          />
        )}

        <SelectInputs2
          inputName="bloodGroup"
          options={bloodGroupTypes}
          label="Blood Group"
          value={formData.bloodGroup}
          handleChange={handleSelectChange}
        />

        
    

        <TextInputs
          inputName="fixedDate"
          inputType="date"
          label="Issue Date"
          value={formData.issueDate}
          placeHolderText=""
          handleChange={handleChange}
        />
        <TextInputs
          inputName="fixedDate"
          inputType="date"
          label="Expiry Date"
          value={formData.expiryDate}
          placeHolderText=""
          handleChange={handleChange}
        />


     <div className="flex">  <FileInputs
            inputName="passport"
            label="Passport"
            inputDataFormat="image/*"
            handleChange={handleChange}
            getFileName={getFileName}
          />
          <FileInputs
            inputName="drivingSchoolCert"
            label="Driving school cert"
            inputDataFormat=".pdf"
            handleChange={handleChange}
            getFileName={getFileName}
          /></div>

        <SelectInputs2
          inputName="vehicleClass"
          options={vehicleClasses}
          label="Vehicle Class"
          value={formData.vehicleClass}
          handleChange={handleSelectChange}
        />

        {submitted ? (<Button disabled onClick={handleSubmit} variant="outlined" sx={{ width:"350px", paddingY: "15px", paddingX:"30px", borderColor:"#3379f9" }}>Submit</Button>):
       ( <Button onClick={handleSubmit} variant="outlined" sx={{ width:"350px", paddingY: "15px", paddingX:"30px", borderColor:"#3379f9" }}>Submit</Button>)
        }
       </form>
    </div>
  );
};

export default DriversLicenseForm;
