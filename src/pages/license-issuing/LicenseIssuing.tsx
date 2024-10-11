import logo from "../../assets/images/light-logo.png";
import MoonLoader from "react-spinners/MoonLoader";
import { LicenseCollection } from "../../backend/firebase";
import { useState, useEffect } from "react";
import { getDocs } from "firebase/firestore";
import { useDocumentTitle } from "../../resources/Resources";

const LicenseIssuing = () => {
  useDocumentTitle("Driver's License Issuing | Tripper");

  const [userData, setuserData] = useState<any>(null);

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const querySnapshot = await getDocs(LicenseCollection);
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

  return (
    <section className="mt-[100px] flex h-[100vh] flex-col items-center justify-center bg-white px-[50px]">
      <div className="mt-[-30px] flex h-[500px] w-full max-w-[1000px] items-center overflow-hidden rounded-full bg-[#f1f1f1]">
        {userData ? (
          <div className="flex h-fit w-full items-center">
            <div className="h-[400px] w-1/2 text-[16px]">
              <ul>
                <li className="mb-3 h-[40px] border-b-[0.6px] border-[#5b5b5b67] pl-[110px]">
                  {" "}
                  <b className="pr-[10px]"> Full Name:</b>{" "}
                  {`${userData.firstName} ${userData.middleName} ${userData.lastName}`}{" "}
                </li>
                <li className="mb-3 h-[40px] border-b-[0.6px] border-[#5b5b5b67] pl-[110px]">
                  {" "}
                  <b className="pr-[10px]">State of Origin:</b>
                  {userData.state}{" "}
                </li>
                <li className="mb-3 h-[40px] border-b-[0.6px] border-[#5b5b5b67] pl-[110px]">
                  {" "}
                  <b className="pr-[10px]"> Date of Birth:</b>{" "}
                  {userData.dateOfBirth}{" "}
                </li>
                <li className="mb-3 h-[40px] border-b-[0.6px] border-[#5b5b5b67] pl-[110px]">
                  {" "}
                  <b className="pr-[10px]">Blood Group:</b>{" "}
                  {userData.bloodGroup}{" "}
                </li>
                <li className="mb-3 h-[40px] border-b-[0.6px] border-[#5b5b5b67] pl-[110px]">
                  {" "}
                  <b className="pr-[10px]">Issue Date:</b> {userData.issueDate}{" "}
                </li>
                <li className="mb-3 h-[40px] border-b-[0.6px] border-[#5b5b5b67] pl-[110px]">
                  {" "}
                  <b className="pr-[10px]">Expiry Date:</b>{" "}
                  {userData.expiryDate}{" "}
                </li>
                <li className="mb-3 h-[40px] border-b-[0.6px] border-[#5b5b5b67] pl-[110px]">
                  {" "}
                  <b className="pr-[10px]">Local Government Area:</b>
                  {userData.localGovernment}{" "}
                </li>

                <li className="mb-3 h-[40px] pl-[110px]">
                  {" "}
                  <b>vehicle Category:</b> {userData.vehicleClass}
                </li>
              </ul>
            </div>

            <div
              style={
                {
                  // backgroundImage: `${userData && `url(${userData.passportImage})`}`,
                }
              }
              className="ml-[50px] h-[300px] w-[300px] overflow-hidden rounded-full bg-cover bg-center"
            >
              <img src={userData.passportImage} alt="" />
            </div>
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <MoonLoader color="#66a1fd" />
          </div>
        )}
      </div>

      <div className="mt-[50px] flex w-full items-center">
        <span className="h-[3px] w-[50%] bg-gray-400"></span>{" "}
        <img className="h-[30px]" src={logo} alt="" />{" "}
        <span className="h-[3px] w-[50%] bg-gray-400"></span>
      </div>
    </section>
  );
};

export default LicenseIssuing;
