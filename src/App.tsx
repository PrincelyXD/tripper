import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/App.css";
import Layout from "./views/Layout";
import Home from "./pages/home/Home";
import VehicleRegistration from "./pages/vehicle-registration/VehicleRegistration";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DriversLicense from "./pages/drivers-license/DriversLicense";
import PlateNumberIssuing from "./pages/plate-number/PlateNumberIssuing";
import LicenseIssuing from "./pages/license-issuing/LicenseIssuing";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />}></Route>
          <Route
            path="vehicle-registration"
            element={<VehicleRegistration />}
          ></Route>
          <Route path="drivers-license" element={<DriversLicense />}></Route>
          <Route path="plate-number-issuing" element={<PlateNumberIssuing/>}></Route>
          <Route path="driver-license-issuing" element={<LicenseIssuing/>}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
