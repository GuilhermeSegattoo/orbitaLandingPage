import styles from "../style";
import Navbar from "./Navbar";

const PolicyAndPrivacy  = () => (
  <div className="min-h-screen bg-primary text-dimWhite font-poppins">
  <Navbar />
  <div className="flex justify-center items-center p-8">
    <div className="bg-white text-black p-8 rounded-lg shadow-md max-w-4xl w-full">
      <h1 className="text-3xl font-bold text-center">Políticas de Privacidade</h1>
      <p className="mt-4 text-lg">
        <strong>1. Introdução</strong><br />
        A orbitaSH valoriza a sua privacidade. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais ao utilizar nosso sistema de gestão de agendamentos de filas.
      </p>
      <p className="mt-4 text-lg">
        <strong>2. Informações que Coletamos</strong><br />
        Podemos coletar as seguintes informações pessoais quando você utiliza nosso serviço:
        <ul className="list-disc list-inside">
          <li>Informações de contato, como nome, endereço de e-mail e número de telefone.</li>
          <li>Informações de login, como nome de usuário e senha.</li>
          <li>Dados de uso, como agendamentos feitos, datas e horários de acesso ao sistema.</li>
          <li>Informações técnicas, como endereço IP, tipo de navegador e sistema operacional.</li>
        </ul>
      </p>
      <p className="mt-4 text-lg">
        <strong>3. Uso das Informações</strong><br />
        Utilizamos suas informações pessoais para:
        <ul className="list-disc list-inside">
          <li>Prover e melhorar nossos serviços.</li>
          <li>Gerenciar e processar seus agendamentos.</li>
          <li>Comunicar com você sobre seu uso do sistema e atualizações importantes.</li>
          <li>Personalizar sua experiência com nosso sistema.</li>
          <li>Proteger a segurança e integridade de nossos serviços.</li>
        </ul>
      </p>
      <p className="mt-4 text-lg">
        <strong>4. Compartilhamento de Informações</strong><br />
        Não compartilhamos suas informações pessoais com terceiros, exceto:
        <ul className="list-disc list-inside">
          <li>Quando necessário para prestar o serviço solicitado por você.</li>
          <li>Para cumprir obrigações legais ou regulatórias.</li>
          <li>Com prestadores de serviços que trabalham em nosso nome, seguindo rigorosas normas de confidencialidade.</li>
        </ul>
      </p>
      <p className="mt-4 text-lg">
        <strong>5. Segurança das Informações</strong><br />
        Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações pessoais contra acesso não autorizado, perda ou destruição. No entanto, nenhuma transmissão de dados pela internet é totalmente segura, e não podemos garantir a segurança absoluta das informações transmitidas ao nosso sistema.
      </p>
      <p className="mt-4 text-lg">
        <strong>6. Retenção de Dados</strong><br />
        Retemos suas informações pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletadas, incluindo para satisfazer quaisquer requisitos legais, contábeis ou de relatório.
      </p>
      <p className="mt-4 text-lg">
        <strong>7. Seus Direitos</strong><br />
        Você tem o direito de acessar, corrigir ou excluir suas informações pessoais que possuímos. Para exercer esses direitos, entre em contato conosco pelo e-mail suporte@orbitash.com.
      </p>
      <p className="mt-4 text-lg">
        <strong>8. Alterações nesta Política de Privacidade</strong><br />
        Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer mudanças significativas, publicando a nova política em nosso site.
      </p>
      <p className="mt-4 text-lg">
        <strong>9. Contato</strong><br />
        Se você tiver quaisquer perguntas sobre esta Política de Privacidade, entre em contato conosco pelo e-mail atendimentoorbitash@gmail.com.
      </p>
      <p className="mt-4 text-lg">
        Ao usar o sistema orbitaSH, você reconhece que leu, compreendeu e concorda com esta Política de Privacidade.
      </p>
    </div>
  </div>
</div>
  );
  
  export default PolicyAndPrivacy ;
  