// app/page.tsx
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Rates from '@/components/Rates';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Quote from '@/components/Quote';
import Footer from '@/components/Footer';



export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Rates />
      <FAQ />
      <Quote />
      <Contact />
      <Footer />
    </main>
  );
}