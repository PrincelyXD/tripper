import Icon1 from "../../assets/ui/Icon1";
import Icon2 from "../../assets/ui/Icon2";
import Icon3 from "../../assets/ui/Icon3";

const Hero = () => {
  return (
    <div className="relative z-[10] mt-[-80px] flex h-[115vh] w-full flex-col items-center justify-center  bg-hero-background bg-cover bg-center font-roboto">
      <div className="absolute top-0 z-[2] h-full w-full rounded-b-[50px] bg-black opacity-[0.6]"></div>

      <section className="relative z-[5] mt-[-80px] flex h-fit w-[700px] flex-col items-center text-center">
        <h1 className="mt-[30px] text-[70px] font-extrabold leading-[1.2] text-[#E0E0E0]">
          E-registration without{" "}
          <span className="bg-gradient-to-r from-white to-[#66A1FD] bg-clip-text text-transparent">
            the headaches !
          </span>
        </h1>

        <p className="bg-gradient-to-r from-white to-[#66A1FD] bg-clip-text font-semibold uppercase text-transparent">
          Instant Liscence plate & Registration
        </p>
      </section>

      <section className="absolute bottom-[50px] z-[5] flex h-[200px] w-[90%] justify-center">
        <div className="box relative h-[200px] w-fit p-[20px] pl-[50px] text-white">
          <span className="absolute left-0 top-[28%] rounded-full border-[2px] border-[#66A1FD] p-[2px]">
            <Icon1 />
          </span>

          <h3 className=" text-[30px] ml-[15px] font-medium uppercase tracking-wider">
            Home
          </h3>

          <div className="ml-[15px] flex flex-col border-r-[0.3px] border-[#f2f2f2] pr-[50px]">
            <span className="mb-[10px] text-[22px] font-normal">
              Digital Loyalty Solutions
            </span>
            <p className="w-[200px] text-start text-[13px] font-light">
              Increase satisfaction and loyalty among modern clients who expect
              digital solutions.
            </p>
          </div>
        </div>

        <div className="box relative h-[200px] w-fit p-[20px] pl-[50px] text-white">
          <span className="absolute left-0 top-[28%] rounded-full border-[2px] border-[#66A1FD] p-[2px]">
            <Icon3 />
          </span>

          <h3 className=" text-[30px] ml-[15px] font-medium uppercase tracking-wider">
            Services
          </h3>

          <div className="ml-[15px] flex flex-col border-r-[0.3px] border-[#f2f2f2] pr-[50px]">
            <span className="mb-[10px] text-[22px] font-normal">
              Automated Registration
            </span>
            <p className="w-[200px] text-start text-[13px] font-light">
              Our SaaS simplifies vehicle and license registration with fast,
              secure, and automated solutions.
            </p>
          </div>
        </div>

        <div className="box relative h-[200px] w-fit p-[20px] px-0 pl-[50px] text-white">
          <span className="absolute left-0 top-[28%] rounded-full border-[2px] border-[#66A1FD] p-[2px]">
            <Icon2 />
          </span>

          <h3 className=" text-[30px] ml-[15px] font-medium uppercase tracking-wider">
            company
          </h3>

          <div className="ml-[15px] flex flex-col pr-[50px]">
            <span className="mb-[10px] text-[22px] font-normal">
              Tripper Ltd
            </span>
            <p className="w-[250px] text-start text-[13px] font-light">
              Tripper Ltd offers hassle-free vehicle and license registration
              services, streamlining the process for client convenience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
