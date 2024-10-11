import Typewriter from "typewriter-effect";
import { useDocumentTitle } from "../../resources/Resources";
import VehicleRegFormField from "./components/VehicleRegFormField";

const VehicleRegistration = () => {

  useDocumentTitle('Vehicle Registration | Tripper')


  return (
    <div className="flex h-fit flex-col items-center pb-[80px] pt-[90px] font-roboto  bg-white">
      <section className="h-[250px] w-full max-w-[1200px]">
        <div className="mt-[40px] h-[200px] w-full max-w-[500px]">
          <h2 className="mb-3 bg-gradient-to-r from-[#161619] to-[#66A1FD] bg-clip-text text-[40px] font-extrabold leading-[1.2] text-transparent">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "It's efficient, intuitive, secure, and cutting-edge",
                  )
                  .start();
              }}
            />
          </h2>
          <p className="font-light">
            Just fill in the required details in the provided form fields, and
            you're all set! We've streamlined the process to ensure fast and
            hassle-free registration.
          </p>
        </div>
      </section>

      <VehicleRegFormField />
    </div>
  );
};

{
  /* <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString("Hello World!").start()
          .pauseFor(2500);
          typewriter.typeString("Hello World!").start();
        }}
      /> */
}
export default VehicleRegistration;
