import React from 'react';
import Slider from "react-slick"; // Importa o componente Slider
import "slick-carousel/slick/slick.css"; // Importa o CSS principal do Slick
import "slick-carousel/slick/slick-theme.css"; // Importa o tema CSS do Slick
import { clients } from "../constants"; // Importa os dados dos clientes
import styles from "../style"; // Importa seus estilos personalizados

// Configurações do Slick Slider
const settings = {
  dots: true, // Mostra pontos de navegação na parte inferior do carrossel
  infinite: true, // Ativa o looping infinito do carrossel
  speed: 500, // Velocidade da animação ao mudar de slide
  slidesToShow: 4, // Número de slides a mostrar de uma vez
  slidesToScroll: 4, // Número de slides a rolar de uma vez
  autoplay: true, // Ativa a reprodução automática
  responsive: [ // Configurações responsivas para diferentes tamanhos de tela
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <Slider {...settings} className="w-full">
      {clients.map((client) => (
        <div key={client.id} className="flex justify-center p-5">
          <img src={client.logo} alt={client.name} className="sm:w-[192px] w-[100px] object-contain" />
        </div>
      ))}
    </Slider>
  </section>
);

export default Clients;
