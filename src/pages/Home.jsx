import { Hero } from '../components/sections/Hero/Hero';
import { About } from '../components/sections/About/About';
import { Audience } from '../components/sections/Audience/Audience';
import { Contact } from '../components/sections/Contact/Contact';

export const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Audience />
      <Contact />
    </main>
  );
};
