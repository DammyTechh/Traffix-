import Nav from './components/Nav';
import Hero from './components/Hero';
import Sensing from './components/Sensing';
import Cycle from './components/Cycle';
import Stack from './components/Stack';
import Operations from './components/Operations';
import Safety from './components/Safety';
import Team from './components/Team';
import Closing from './components/Closing';
import Footer from './components/Footer';
import useReveal from './hooks/useReveal';

export default function App() {
  useReveal();

  return (
    <>
      <a className="sr-only" href="#sensing">Skip to content</a>
      <Nav />
      <main>
        <Hero />
        <Sensing />
        <Cycle />
        <Stack />
        <Operations />
        <Safety />
        <Team />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
