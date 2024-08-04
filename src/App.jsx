import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './style';
import { Navbar, Billing, Business, CardDeal, Clients, CTA, Footer, Stats, Testimonials, Hero, SidePanel, ChatWidget } from './components';
import TermsAndServices from './components/TermsAndServices';
import PolicyAndPrivacy  from './components/Policyandprivacy';


const App = () => (
  <Router>
    <div className="bg-primary w-full overflow-hidden relative">
      <Routes>
        <Route path="/" element={
          <>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <Navbar />
              </div>
            </div>
            <div className={`bg-primary ${styles.flexStart}`}>
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
            <SidePanel />
            <ChatWidget />
          </>
        } />
        <Route path="/terms" element={<TermsAndServices />} />
        <Route path="/policy" element={<PolicyAndPrivacy  />} />
      </Routes>
    </div>
  </Router>
);

export default App;
