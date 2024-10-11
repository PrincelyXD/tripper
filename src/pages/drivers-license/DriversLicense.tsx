import DriversLicenseForm from "./components/DriversLicenseForm";
import { useDocumentTitle } from "../../resources/Resources";


const DriversLicense = () => {
  useDocumentTitle("Driver's License Application | Tripper")
  return (
    <section className="mt-[100px] flex h-[90vh]  items-center  bg-white px-[50px]">
      <div className="w-[50%]  h-full bg-license-img bg-center bg-cover "></div>

      <div className="w-[60%] h-full  bg-white pl-5  pt-5 flex justify-center items-center flex-col">
       
       <DriversLicenseForm/>
      </div>
    </section>
  );
};

export default DriversLicense;
