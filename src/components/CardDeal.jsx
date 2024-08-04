import mockup from "/mkp.png"
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section id="Produto" className={layout.section}>
    <div className={layout.sectionInfo} data-aos="fade-right">
      <h2 className={styles.heading2}>
        Faça o controle<br className="sm:block hidden" />pelo painel de administrador!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`} data-aos="fade-right" data-aos-delay="100">
        Junte-se a mais de 500 clínicas que já estão gerenciando melhor com nosso sistema!
      </p>
      
      {/* Consider adding a Button here if needed */}
      <Button styles="mt-10" data-aos="fade-right" data-aos-delay="200"/>
    </div>

    <div className={layout.sectionImg} data-aos="fade-left">
      <img src={mockup} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
