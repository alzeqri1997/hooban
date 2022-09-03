import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import styles from './styles';
import Business from './components/Business';
import Billing from './components/Billing';
import CardDeal from './components/CardDeal';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import CTA from './components/CTA';
import Footer from './components/Footer';
function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className='sm:mx-16 mx-6 flex justify-center items-center' >
        <div className='xl:max-w-[1280px] w-full' >
          <Navbar />
        </div>
      </div>

      <div className="bg-primary flex justify-center items-start">
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
