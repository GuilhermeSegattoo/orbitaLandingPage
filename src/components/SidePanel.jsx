import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SidePanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário de recarregar a página

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_EMAIL_KEY,
          ...formData
        })
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Mensagem enviada com sucesso. Logo entraremos em contato com você.");
        setFormData({ name: '', email: '', message: '' }); // Limpa o formulário
      } else {
        throw new Error(data.message || "Erro ao enviar a mensagem.");
      }
    } catch (error) {
      toast.error("Erro ao enviar a mensagem: " + error.message);
    }
  };

  return (
    <>
      <ToastContainer />
      {!isOpen && (
        <button onClick={togglePanel} className="fixed top-5 right-5 z-30 text-primary bg-blue-gradient hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-lg transition duration-300 ease-in-out">
          Enviar e-mail
        </button>
      )}
      <div className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} fixed top-0 right-0 h-full w-80 bg-primary p-6 transition-transform duration-300 ease-in-out z-20 shadow-xl`}>
        <button onClick={togglePanel} className="text-white absolute top-5 right-5 text-2xl hover:text-red-500">
          ×
        </button>
        <h2 className="text-white font-bold text-lg mb-4">Envie um e-mail de dúvida</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Seu nome" required className="w-full p-3 rounded bg-white/10 text-white placeholder-white/70 focus:placeholder-white focus:bg-white/20 focus:outline-none" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Seu e-mail" required className="w-full p-3 rounded bg-white/10 text-white placeholder-white/70 focus:placeholder-white focus:bg-white/20 focus:outline-none" />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Mensagem" required className="w-full p-3 h-32 rounded bg-white/10 text-white placeholder-white/70 focus:placeholder-white focus:bg-white/20 focus:outline-none"></textarea>
          <button type="submit" className="py-4 px-6 font-poppins font-medium text-[18px] bg-blue-gradient rounded-[10px] text-primary shadow-md transition duration-300 ease-in-out hover:bg-blue-800">
            Enviar agora
          </button>
        </form>
      </div>
    </>
  );
};

export default SidePanel;
