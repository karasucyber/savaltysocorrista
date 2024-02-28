import React from "react";
import styled from "styled-components";
import { BoxVideo, Container, ContainerAmbulance, ContainerCenter, ContainerCenter2, ContainerLR, ContainerLeft, ContainerRight, ContainerT, Paragrafo, Titulo, TituloSub } from "../Geral/geral/ContainerGeral";
import { useInView } from 'react-intersection-observer';
import ReactPlayer from 'react-player';
import Container5 from "../Container5/Container5";
import { IoLogoWhatsapp } from "react-icons/io";


const ContainerR = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
`;


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';


// import required modules
import { EffectCreative } from 'swiper/modules';
import { useMediaQuery } from "@react-hook/media-query";

export function Carrousel() {
  return ( 
    <>
     <Swiper style={{
      boxShadow: "20px 20px #EE8338",
      borderRadius:"50px",
      width: "600px",
      height: "400px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "22px",
      fontWeight: "bold",
      color: "#fff",
      background: "black",
      padding: "10px",
      
    }}
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper1"
      >
        <SwiperSlide style={{ background: "black", }}>Slide 1</SwiperSlide>
        <SwiperSlide style={{ background: "black"}}>Slide 2</SwiperSlide>
        <SwiperSlide style={{ background: "black"}}>Slide 3</SwiperSlide>
        <SwiperSlide style={{ background: "black"}}>Slide 4</SwiperSlide>
        <SwiperSlide style={{ background: "black"}}>Slide 5</SwiperSlide>
        <SwiperSlide style={{ background: "black"}}>Slide 6</SwiperSlide>
        <SwiperSlide style={{ background: "black"}}>Slide 7</SwiperSlide>
        <SwiperSlide style={{ background: "black"}}>Slide 8</SwiperSlide>
        <SwiperSlide style={{ background: "black"}}>Slide 9</SwiperSlide>
      </Swiper>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-120%', 0, -500],
          },
          next: {
            shadow: true,
            translate: ['120%', 0, -500],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper1"
      >
      </Swiper>
    </>
  );
}

export function Carrousel2() {
  return ( 
    <>
     <Swiper style={{
      boxShadow: "20px 20px #EE8338",
      borderRadius:"50px",
      width: "90%",
      height: "400px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "22px",
      fontWeight: "bold",
      color: "#fff",
      background: "black",
      
    }}
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper1"
      >
        <SwiperSlide style={{ background: "black", }}>Slide 1</SwiperSlide>
        <SwiperSlide style={{ background: "black"}}>Slide 2</SwiperSlide>
        <SwiperSlide style={{ background: "black"}}>Slide 3</SwiperSlide>
        <SwiperSlide style={{ background: "black"}}>Slide 4</SwiperSlide>
        <SwiperSlide style={{ background: "black"}}>Slide 5</SwiperSlide>
        <SwiperSlide style={{ background: "black"}}>Slide 6</SwiperSlide>
        <SwiperSlide style={{ background: "black"}}>Slide 7</SwiperSlide>
        <SwiperSlide style={{ background: "black"}}>Slide 8</SwiperSlide>
        <SwiperSlide style={{ background: "black"}}>Slide 9</SwiperSlide>
      </Swiper>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-120%', 0, -500],
          },
          next: {
            shadow: true,
            translate: ['120%', 0, -500],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper1"
      >
      </Swiper>
    </>
  );
}

const Container4 = () => {
    const { ref, inView } = useInView({ threshold: 0.6 });
    const isMobileDevice = useMediaQuery("(max-width: 780px)")

    return (<>
     {isMobileDevice ? (
            <>
                <ContainerR>
                <ContainerT>
            <Titulo style={{ color: "black" }} isVisible={inView}> Nossas ambulâncias !</Titulo>
        </ContainerT>
        <ContainerLR>
            <ContainerLeft>
            <ContainerT>
            <Titulo style={{ color: "black", fontSize: "50px"}} isVisible={inView}> Porquê nossas ambulâncias !</Titulo>
        </ContainerT>
        <Carrousel2/>
            </ContainerLeft>
            <ContainerAmbulance>
            <IoLogoWhatsapp href="https://react-icons.github.io/react-icons/search/#q=whats" style={{ width: "100px", height: "100px", color: "green", padding: "20px"}} />

              <Container5></Container5>
            </ContainerAmbulance>
            
        </ContainerLR>
                </ContainerR>
            </>
        ) :

        <Container style={{ background: "white", height: "1000px"}} ref={ref}>
        <ContainerT>
            <Titulo style={{ color: "black" }} isVisible={inView}> Nossas ambulâncias !</Titulo>
        </ContainerT>
        <ContainerLR>
            <ContainerLeft>
            <ContainerT>
            <Titulo style={{ color: "black", fontSize: "50px"}} isVisible={inView}> Porquê nossas ambulâncias !</Titulo>
        </ContainerT>
        <Carrousel/>
            </ContainerLeft>
            <ContainerAmbulance>
              <Container5></Container5>
            </ContainerAmbulance>
        </ContainerLR>
        <IoLogoWhatsapp href="https://react-icons.github.io/react-icons/search/#q=whats" style={{ width: "100px", height: "px", color: "green",}} />
        </Container>

        }
    
    </>
    )
}

export default Container4;


