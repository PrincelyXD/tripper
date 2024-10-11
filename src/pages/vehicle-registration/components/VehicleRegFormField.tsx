import React, { useState, useId, useEffect } from "react";
import { storage } from "../../../backend/firebase";
import { addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { vehicleRegistrationCollection,} from "../../../backend/firebase";
import FileInput from "../../../components/FileInput";
import TextInput from "../../../components/TextInput";
import SelectInput from "../../../components/SelectInput";
import SelectInput2 from "../../../components/SelectInput2";
import apiEngine from "../../../api/requests";
import endpoints from "../../../api/endpoints";
import { toast } from "react-toastify";
import Button from '@mui/material/Button';
import {FileData, CountryDataFormat, FormDataFormat } from "../../../interfaces/interfaces"
import { useNavigate } from "react-router-dom";




const VehicleRegFormField = () => {

  const [formData, setFormData] = useState<FormDataFormat>({
    vehicleIdentificationNumber: "",
    fullName: "",
    state: "Select State",
    localGovernment: "",
    dateOfBirth: new Date().toISOString().split("T")[0],

  });
  const [cities, setCities] = useState<string[]>([]);
  const [fileName, setFileName] = useState<FileData[]>([]);
  const [imageUpload, setImageUpload] = useState<File | null>(null);
  const [countryData, setCountryData] = useState<CountryDataFormat | null>(
    null,
  );

  useEffect(() => {
    const getAllStates = async () => {
      try {
        const countryObject = await apiEngine.get(
          endpoints?.getStates + "q?country=Nigeria",
        );
        const nigeria = countryObject?.data;
        setCountryData(nigeria);
      } catch (error: any) {
        toast.error(error?.message);
      }
    };

    getAllStates();
  }, []);




  const id = useId();
  const navigate = useNavigate()
  
 
  const handleInputChange = async (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = evt.target;
    if (type === "file") {
      // const files = evt.target.files;
      if (files && files.length > 0) {
        const filesArray = Array.from(files);
        const uploadedFileName = filesArray[0].name;
        setFileName((prevFileName) => [
          ...prevFileName,
          { [name]: uploadedFileName },
        ]);
        // for only image accepting input file types
        if (files[0].type.startsWith('image/') && imageUpload === null) {
          setImageUpload(files[0]);
        }
      }
    }
    // handling events that are not files
    if (type !== "file")
      setFormData((prevData) => {
        return { ...prevData, [name]: value };
      });
  };


  const handleSelectChange = async (
    evt: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { name, value } = evt.target;

    if (name === "state") {
      try {
        const cities = await apiEngine.get(
          `${endpoints?.getCities}q?country=Nigeria&state=${value}`,
        );
        setCities(cities.data);
      } catch (error) {
        console.log(error);

      }
    }
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };
  const getFileName = (key: string) => {
    const fileObject = fileName.find((file) => file[key]);
    return fileObject ? fileObject[key] : "Browse Files to upload";
  };


  //   handle submit should be called only when posting data to fireBase DB

  const handleSubmit = async (event:React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
   
    if (imageUpload === null){
      toast.error("Please Fill in All Fields",{draggable:true, theme:"light"})
      return
    }
    const imageRef = ref(storage, `vehicleRegistrationImages/${imageUpload.name + id}`);
    try {
      await uploadBytes(imageRef, imageUpload);
      const downloadUrl = await getDownloadURL(imageRef)
         
      
      await addDoc(vehicleRegistrationCollection, {
        ...formData, 
        vehicleImage: downloadUrl
      })
     navigate("/plate-number-issuing")

    } catch (error: any) {
      console.log("upload failed", error);
    }
  };



  return (
    <section className="flex w-fit bg-white p-[20px] justify-center rounded-xl  pt-20 font-openSans">
      <div>
        <form
          action=""
          onSubmit={handleSubmit}
          className="mx-auto grid h-fit w-full max-w-[1000px] grid-cols-2 grid-rows-6 gap-x-[30px] gap-y-[0px] relative"
        >
          <FileInput
            inputName="receiptOfPurchase"
            label="Upload receipt of purchase"
            inputDataFormat=".pdf"
            handleChange={handleInputChange}
            getFileName={getFileName}
          />
          <FileInput
            inputName="proofOfOwnership"
            label="Upload proof of ownership"
            inputDataFormat=".pdf"
            handleChange={handleInputChange}
            getFileName={getFileName}
          />
          <FileInput
            inputName="identification"
            label="Upload any means of identification"
            inputDataFormat=".pdf"
            handleChange={handleInputChange}
            getFileName={getFileName}
          />
          <FileInput
            inputName="passport"
            label="Upload passport"
            inputDataFormat=".pdf"
            handleChange={handleInputChange}
            getFileName={getFileName}
          />
          <FileInput
            inputName="customPapers"
            label="Upload custom papers"
            inputDataFormat=".pdf"
            handleChange={handleInputChange}
            getFileName={getFileName}
          />
          <FileInput
            inputName="insurancePapers"
            label="Upload insurance papers"
            inputDataFormat=".pdf"
            handleChange={handleInputChange}
            getFileName={getFileName}
          />
          <FileInput
            inputName="vehicleImage"
            label="Upload image of vehicle"
            inputDataFormat="image/*"
            handleChange={handleInputChange}
            getFileName={getFileName}
          />

          <TextInput
            inputName="vehicleIdentificationNumber"
            inputType="text"
            label="Vehicle Identification Number"
            value={formData.vehicleIdentificationNumber}
            handleChange={handleInputChange}
            placeHolderText="Vin"
          />
          <TextInput
            inputName="fullName"
            inputType="text"
            label="Full Name"
            value={formData.fullName}
            handleChange={handleInputChange}
            placeHolderText="Full Name"
          />
          <TextInput
            inputName="dateOfBirth"
            inputType="date"
            label="Date Of Birth"
            value={formData.dateOfBirth}
            handleChange={handleInputChange}
            placeHolderText=""
          />

          {countryData && (
            <SelectInput
              inputName="state"
              label="State"
              value={formData.state}
              handleChange={handleSelectChange}
              options={countryData?.states}
            />
          )}

          {cities && (
            <SelectInput2
              inputName="localGovernment"
              label="Local Government"
              value={formData.localGovernment}
              handleChange={handleSelectChange}
              options={cities}
            />
          )}
          <span className="absolute bottom-[-50px] justify-self-end ">
              <Button onClick={handleSubmit} variant="contained" sx={{background:"#3379F9", paddingY: "13px", paddingX: "30px", borderRadius:'999px'}} disableElevation>
                     Upload Credentials
           </Button>
          </span>
            
          
        </form>
      </div>
    </section>
  );
};

export default VehicleRegFormField;
