import { Features } from "../components/Features";
import { FeatureBlocks } from "../components/FeatureBlocks";
import { Footer } from "../components/footer";

import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

const Home = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="flex flex-col overflow-hidden text-gray-800 dark:text-gray-100">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <Features />
        <FeatureBlocks />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
