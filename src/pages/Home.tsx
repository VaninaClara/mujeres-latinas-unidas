import Hero from '../components/Hero';
import ProgramasPreview from "../components/ProgramasPreview";
import BlogPreview from "../components/BlogPreview";
import Newsletter from "../components/Newsletter";
import BrandHighlight from "../components/BrandHighlight";

const Home = () => {
  return (
    <>
      <Hero />
      <BrandHighlight /> {/* Aquí aparece el logo con la frase */}
      <ProgramasPreview />
      <BlogPreview />
      <Newsletter />
    </>
  );
};

export default Home;
