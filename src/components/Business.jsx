import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div data-aos="fade-up" data-aos-delay={`${index * 100}`} className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="Sobre" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 data-aos="fade-right" className={styles.heading2}>
        Você cuida dos pacientes, <br className="sm:block hidden" /> nós cuidamos da gestão.
      </h2>
      <p data-aos="fade-right" data-aos-delay="100" className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Com o sistema certo, você pode otimizar o gerenciamento do seu consultório, 
        agilizando o cadastro e acompanhamento de pacientes. Facilitamos a gestão para 
        que você possa focar no que realmente importa.
      </p>

      <Button data-aos="fade-right" data-aos-delay="200" styles={`mt-10`} />
    </div>

    <div data-aos="fade-left" className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
