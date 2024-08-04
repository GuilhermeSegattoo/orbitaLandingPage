import styles from "../style";
import { discount } from "../assets";
import GetStarted from "./GetStarted";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Solicite</span> um atendimento{" "}
            <span className="text-white">em menos de</span> 10 segundos
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 data-aos="fade-right" className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Revolucionando <br className="sm:block hidden" />{" "}
            <span className="text-gradient">a gestão de Pacientes</span>
          </h1>
        </div>

        <h1 data-aos="fade-left" className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          na Saúde.
        </h1>
        <p data-aos="fade-up" className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Nossa plataforma inovadora simplifica o cadastro de pacientes, 
          agendamento de consultas e gerenciamento de prontuários médicos 
          para provedores de saúde.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <video autoPlay muted loop className="w-[100%] h-[full] relative z-[5]">
          <source src="videOrbita.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
