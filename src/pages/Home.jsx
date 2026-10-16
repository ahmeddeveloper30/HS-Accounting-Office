import { Hero } from '../components/sections/Hero/Hero';
import { About } from '../components/sections/About/About';
import { Audience } from '../components/sections/Audience/Audience';
import { Contact } from '../components/sections/Contact/Contact';
import { Projects } from "../components/sections/Projects/projects";
import {OurChannel} from "../components/sections/OurChannel/OurChannel";
export const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Audience />
       <Projects/>
      <OurChannel/>
      <Contact />
      

    </main>
  );
};
