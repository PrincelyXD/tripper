import logo from "../../assets/images/light-logo.png";
import placeHolder from "../../assets/images/hero-img.png";
import MoonLoader from "react-spinners/MoonLoader";
import { useState, useEffect } from "react";
import { getDocs } from "firebase/firestore";
import { useDocumentTitle } from "../../resources/Resources";
import { vehicleRegistrationCollection } from "../../backend/firebase";

const PlateNumberIssuing = () => {
useDocumentTitle('Plate Number Issuing | Tripper')
  const [userData, setuserData] = useState<any>(null);

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const querySnapshot = await getDocs(vehicleRegistrationCollection);
        const documents = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setuserData(documents[0]);
      } catch (error) {
        console.log("error fetching documents", error);
      }
    };

    fetchCollection();
  }, []);

  const findUserAge = () => {
    const date = new Date();
    const currYear = date.getFullYear();

    const userYearOfBirth = userData.dateOfBirth.slice(0, 4);
    const age = currYear - userYearOfBirth;
    return age;
  };

 const generateRandNum = () => 100 + Math.floor(Math.random()*900)



    const generateRandLetters = ()=>{
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
    let randomLetters = ""

    for(let i = 0; i < 2 ; i++){
        const  randNum = Math.floor(Math.random() * alphabet.length)
        randomLetters += alphabet[randNum]   
    }
 return randomLetters
}


  const generateStateCode = ()=>{
  const str = userData.localGovernment.toUpperCase()

    if (str.length <= 3){
      return userData.state
    }
    const secondLetter = str[1]
    const lastTwoLetters = str.slice(-2)
    const codeLetters = secondLetter + lastTwoLetters
    return codeLetters
}
  
const dynamicLiscencePlate = ()=>{
if (userData){
 return  `${generateStateCode()+" " +generateRandNum() + " " +generateRandLetters()}`

}
     
}

    
  



  
  return (
    
    <section className="mt-[100px] flex h-[100vh] flex-col items-center justify-center bg-white px-[50px]">
       {userData ? (
         <div className="mt-[-30px] flex h-[500px] w-full max-w-[1000px] items-center rounded-full bg-[#f1f1f1]">
        <div className="ml-[-20px] mr-[10px] w-[50%] rounded-r-xl bg-white">
          <ul>
            <li className="mb-3 flex h-[60px] max-w-[400px] items-center border-b-[1.2px] border-[#5b5b5b82] py-2 pr-4 text-[18px] font-semibold">
              Name: {userData === null ? "Loading..." : userData.fullName}
            </li>
            <li className="mb-3 flex h-[60px] w-[100%] max-w-[400px] items-center border-b-[1.2px] border-[#5b5b5b82] py-2 pr-4 text-[18px] font-semibold">
              Age: {userData === null ? "Loading..." : findUserAge()}
            </li>
            <li className="mb-3 flex h-[60px] w-[100%] max-w-[400px] items-center border-b-[1.2px] border-[#5b5b5b82] py-2 pr-4 text-[18px] font-semibold">
              State: {userData === null ? "Loading..." : userData.state}
            </li>
            <li className="mb-3 flex h-[60px] w-[100%] max-w-[400px] items-center border-b-[1.2px] border-[#5b5b5b82] py-2 pr-4 text-[18px] font-semibold">
              City :{" "}
              {userData === null ? "Loading..." : userData.localGovernment}
            </li>
            <li className="mb-3 flex h-[60px] w-[100%] max-w-[400px] items-center py-2 pr-4 text-[18px] font-semibold">
              Plate Number: <pre className="ml-10 uppercase"> {dynamicLiscencePlate()} </pre>
            </li>
          </ul>
        </div>

        <div
          style={{
            backgroundImage: `${userData === null ? `url(${placeHolder})` : `url(${userData.vehicleImage})`}`,
          }}
          className="ml-[10px] mr-[-20px] h-[400px] w-[55%] rounded-r-2xl bg-cover bg-center"
        ></div>
      </div>
       ): (
        <div className="mt-[-30px] flex h-[500px] w-full max-w-[1000px] items-center rounded-full bg-[#f1f1f1] justify-center">
           <MoonLoader color="#66a1fd"/>
        </div>
       )}
     
      <div className="mt-[50px] flex w-full items-center">
        <span className="h-[3px] w-[50%] bg-gray-400"></span>{" "}
        <img className="h-[30px]" src={logo} alt="" />{" "}
        <span className="h-[3px] w-[50%] bg-gray-400"></span>
      </div>
      {/* bg-gray-900  */}
    </section>
  );
};

export default PlateNumberIssuing;
