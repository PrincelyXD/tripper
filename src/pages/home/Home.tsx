import Hero from "./Hero";
import SecondSection from "./SecondSection";
import { useDocumentTitle } from "../../resources/Resources";

const Home = () => {
  useDocumentTitle('Tripper | Vehicle & License Registration')
  return (
    <>
   <Hero/>
   <SecondSection/>
    </>
  );
};

export default Home;
