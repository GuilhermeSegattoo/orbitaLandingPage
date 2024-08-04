import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import phone from "/phone.png"

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={phone} alt="billing" className="w-[100%] h-[100%] relative z-[5]" data-aos="fade-right" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" data-aos="zoom-out-left" data-aos-delay="70" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" data-aos="zoom-out-left" data-aos-delay="150" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2} data-aos="fade-left">
        Agilidade no Processo <br className="sm:block hidden" /> de Anamnese e Confirmação via SMS
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`} data-aos="fade-left" data-aos-delay="100">
        O paciente preenche o formulário com informações da anamnese, 
        que é automaticamente encaminhado para o painel administrativo. 
        Assim que a solicitação for aprovada, um SMS é enviado ao paciente para 
        informá-lo da confirmação.
      </p>
    </div>
  </section>
);

export default Billing;
