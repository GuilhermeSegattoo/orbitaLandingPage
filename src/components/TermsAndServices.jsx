import React from 'react';
import Navbar from './Navbar';
import styles from '../style';

const TermsAndServices = () => (
  <div className="min-h-screen bg-primary text-dimWhite font-poppins">
    <Navbar />
    <div className="flex justify-center items-center p-8">
      <div className="bg-white text-black p-8 rounded-lg shadow-md max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center">Termos e Condições de Uso</h1>
        <p className="mt-4 text-lg">
          <strong>1. Introdução</strong><br />
          Bem-vindo ao orbitaSH, um sistema dedicado à gestão de agendamentos de filas via site. Ao acessar ou usar o nosso serviço, você concorda em cumprir e estar sujeito aos seguintes Termos e Condições de Uso. Por favor, leia-os atentamente antes de utilizar nosso sistema.
        </p>
        <p className="mt-4 text-lg">
          <strong>2. Definições</strong><br />
          <strong>Sistema:</strong> Refere-se ao orbitaSH, que proporciona a gestão de agendamentos de filas.<br />
          <strong>Usuário:</strong> Qualquer pessoa que acessa e utiliza o sistema orbitaSH.<br />
          <strong>Nós/Nosso:</strong> Refere-se à empresa orbitaSH.<br />
          <strong>Serviço:</strong> A totalidade das funcionalidades oferecidas pelo sistema orbitaSH.
        </p>
        <p className="mt-4 text-lg">
          <strong>3. Aceitação dos Termos</strong><br />
          Ao acessar e utilizar o sistema orbitaSH, você aceita e concorda em cumprir estes Termos e Condições de Uso. Se você não concorda com algum destes termos, por favor, não utilize nossos serviços.
        </p>
        <p className="mt-4 text-lg">
          <strong>4. Modificações nos Termos</strong><br />
          Nós reservamos o direito de modificar estes Termos e Condições de Uso a qualquer momento. Quaisquer alterações serão publicadas no nosso site e, ao continuar a usar o nosso sistema após tais alterações, você concorda em cumprir os termos atualizados.
        </p>
        <p className="mt-4 text-lg">
          <strong>5. Uso do Serviço</strong><br />
          <strong>5.1. Cadastro</strong><br />
          Para utilizar o sistema orbitaSH, você pode ser solicitado a criar uma conta fornecendo informações pessoais verídicas e completas. Você é responsável por manter a confidencialidade dos dados de login e por todas as atividades que ocorrem sob sua conta.<br />
          <strong>5.2. Agendamentos</strong><br />
          O usuário é responsável por verificar a precisão dos agendamentos feitos pelo sistema. Nós não nos responsabilizamos por quaisquer consequências resultantes de agendamentos incorretos ou não realizados.<br />
          <strong>5.3. Conduta do Usuário</strong><br />
          Ao usar o sistema, você concorda em:
          <ul className="list-disc list-inside">
            <li>Não utilizar o serviço para quaisquer fins ilegais ou não autorizados.</li>
            <li>Não interferir no funcionamento do sistema ou tentar acessar dados de outros usuários.</li>
            <li>Respeitar todas as leis e regulamentações aplicáveis.</li>
          </ul>
        </p>
        <p className="mt-4 text-lg">
          <strong>6. Propriedade Intelectual</strong><br />
          Todo o conteúdo e funcionalidades do sistema orbitaSH, incluindo, mas não se limitando a, software, design, texto, gráficos, e logotipos, são de nossa propriedade exclusiva ou licenciados e estão protegidos por leis de propriedade intelectual.
        </p>
        <p className="mt-4 text-lg">
          <strong>7. Privacidade</strong><br />
          A utilização do sistema está sujeita à nossa Política de Privacidade, que descreve como coletamos, usamos e protegemos suas informações pessoais.
        </p>
        <p className="mt-4 text-lg">
          <strong>8. Limitação de Responsabilidade</strong><br />
          Nós não seremos responsáveis por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais resultantes do uso ou da incapacidade de usar o sistema orbitaSH. Não garantimos que o serviço será ininterrupto, seguro ou livre de erros.
        </p>
        <p className="mt-4 text-lg">
          <strong>9. Rescisão</strong><br />
          Nós nos reservamos o direito de rescindir ou suspender seu acesso ao sistema a qualquer momento, sem aviso prévio, se acreditarmos que você violou estes Termos e Condições de Uso.
        </p>
        <p className="mt-4 text-lg">
          <strong>10. Lei Aplicável</strong><br />
          Estes Termos e Condições de Uso serão regidos e interpretados de acordo com as leis do Brasil, e você concorda em se submeter à jurisdição exclusiva dos tribunais brasileiros para resolver quaisquer disputas decorrentes destes termos.
        </p>
        <p className="mt-4 text-lg">
          <strong>11. Contato</strong><br />
          Se você tiver quaisquer perguntas sobre estes Termos e Condições de Uso, entre em contato conosco pelo e-mail atendimentoorbitash@gmail.com
        </p>
        <p className="mt-4 text-lg">
          Ao usar o sistema orbitaSH, você reconhece que leu, compreendeu e concorda em ficar vinculado a estes Termos e Condições de Uso.
        </p>
      </div>
    </div>
  </div>
);

export default TermsAndServices;
