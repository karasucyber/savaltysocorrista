import { Container, ContainerCenter, ContainerCenterIMG } from '../Geral/geral/ContainerGeral';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useInView } from 'react-intersection-observer';
import { BoxVideo, ContainerCenter2, ContainerLR, ContainerLeft, ContainerRight, ContainerT, Paragrafo, Titulo, TituloSub } from "../Geral/geral/ContainerGeral";



import React, { useState, useRef } from "react";
import styled from "styled-components";
import Form from './Forms';

const CarouselContainer = styled.div`
  width: 100%;
  height: 400px; /* Ajuste a altura conforme necessário */
  overflow: hidden;
  position: relative;
  touch-action: pan-y; /* Permite o movimento de arrastar vertical */
  border-radius: 10px;
  background: white;
  `;

const LogoCarousel = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  cursor: grab; /* Muda o cursor para indicar que o componente pode ser arrastado */
`;

const Logo = styled.img`
  width: 400px;
  height: 400px; /* Defina a altura desejada para o seu logo */
  margin-right: 20px; /* Espaçamento entre os logos, ajuste conforme necessário */
`;

const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #333; /* Cor do botão, ajuste conforme necessário */
`;

const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #333; /* Cor do botão, ajuste conforme necessário */
`;

const companies: any[] = ["playball.png", "playball.png", "playball.png", "playball.png", "playball.png", "playball.png","playball.png", "playball.png", "playball.png", "playball.png", "playball.png", "playball.png"];

const FooterCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [startX, setStartX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const carouselRef = useRef(null);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === companies.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? companies.length - 1 : prevIndex - 1));
    };

    const handleDragStart = (e: any) => {
        setIsDragging(true);
        setStartX(e.clientX || e.touches[0].clientX);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    const handleDragMove = (e: any) => {
        if (!isDragging) return;

        const currentX = e.clientX || e.touches[0].clientX;
        const deltaX = startX - currentX;

        if (deltaX > 50) {
            handleNext();
        } else if (deltaX < -50) {
            handlePrev();
        }
    };

    return (
        <CarouselContainer
            ref={carouselRef}
            onMouseDown={handleDragStart}
            onTouchEnd={handleDragEnd}
            onTouchMove={handleDragMove}
        >
            <PrevButton onClick={handlePrev}>&#9665;</PrevButton>
            <LogoCarousel style={{ transform: `translateX(-${currentIndex * 420}px)` }}>
                {companies.map((company, index) => (
                    <Logo key={index} src={company} alt={`Logo ${index + 1}`} />
                ))}
            </LogoCarousel>
            <NextButton onClick={handleNext}>&#9655;</NextButton>
        </CarouselContainer>
    );
};


const Container8 = () => {
    const { ref, inView } = useInView({ threshold: 0.6 });
    return (
             <Container style={{ background: "#EE8338",}} ref={ref}>
<div style={{background: "white", height: "400px", padding: "10px"}}>
<FooterCarousel/>

</div>
<ContainerLR ref={ref}>
                    
                    <ContainerLeft>
                        <TituloSub isVisible={inView}> Nossa história </TituloSub>
                        <ContainerCenterIMG>
                           <h1> logo </h1>
                        </ContainerCenterIMG>
                    </ContainerLeft>
                    
                    <ContainerRight>
                        <ContainerCenterIMG>
                            <Form></Form>


                        </ContainerCenterIMG>
                    </ContainerRight>
                </ContainerLR>
             </Container>
      
    );
};

export default Container8;
