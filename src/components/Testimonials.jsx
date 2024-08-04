import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="Clientes" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" data-aos="fade-up"/>

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]" data-aos="fade-up">
      <h2 className={styles.heading2} data-aos="fade-right">
        O que as clínicas <br className="sm:block hidden" /> estão dizendo sobre nós
      </h2>
      <div className="w-full md:mt-0 mt-6" data-aos="fade-left">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Reduza o tempo de espera com agendamentos e atendimentos mais ágeis.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]" data-aos="zoom-in-up">
      {feedback.map((card, index) => (
        <FeedbackCard key={card.id} {...card} data-aos="fade-up" data-aos-delay={`${index * 100}`} />
      ))}
    </div>
  </section>
);

export default Testimonials;
