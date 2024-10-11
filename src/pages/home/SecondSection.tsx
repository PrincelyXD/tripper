import { Link } from "react-router-dom";

const SecondSection = () => {
  return (
    <div className="relative z-[1] mt-[-50px] h-fit w-full bg-white font-roboto">
      <div className="bg-tiny absolute right-[0px] z-[1] mt-[-60px] h-[300px] w-[300px] bg-[url('./../assets/ui/crosshair.svg')]"></div>
      
      <section className="flex w-full justify-center ">
        <div className="mx-[20px] flex h-fit w-full max-w-[1200px] pt-[120px] justify-between">
          <div>
            <h2 className="mb-2 font-ibm text-[45px] font-extrabold uppercase">
              Get Started
            </h2>
            <p className="mb-[50px] w-[450px] text-[16px]">
              Welcome to our vehicle and license registration platform! Getting
              started is easy—simply create an account, provide your vehicle
              details, and follow the step-by-step instructions to complete your
              registration. Our streamlined process ensures quick compliance
              with all legal requirements, saving you time and effort. Whether
              you're registering a new vehicle or renewing your license, we've
              got you covered. Let's make the process simple and stress-free!
            </p>

            <Link
              className="mr-5 h-fit rounded-full bg-[#ffffff7a] px-[22px] py-[14px] text-[16px] font-bold uppercase text-[#65a1fd] backdrop-blur"
              to="vehicle-registration"
            >
              Get Started
            </Link>
            <Link
              className="h-fit rounded-full bg-[#65a1fd] px-[22px] py-[14px] text-[16px] font-bold uppercase text-white backdrop-blur"
              to="drivers-license"
            >
              Get License
            </Link>
          </div>
          <div className="bg-blue-car h-[500px] w-[600px] bg-cover bg-center"></div>
        </div>
      </section>
    </div>
  );
};

export default SecondSection;
