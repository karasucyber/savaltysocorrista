import { ContainerCenter } from '../Geral/geral/ContainerGeral';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useInView } from 'react-intersection-observer';
import { BoxVideo, ContainerLR, ContainerLeft, ContainerRight, ContainerT, Paragrafo, Titulo, TituloSub } from "../Geral/geral/ContainerGeral";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { AiFillSignal } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaHeadSideVirus } from "react-icons/fa";
import { MdWork } from "react-icons/md";

import React, { useState, useRef } from "react";
import styled from "styled-components";
import Form from './Forms';

const CarouselContainer = styled.div`
  width: 100%;
  height: 100%; 
  overflow: hidden;
  position: relative;
  touch-action: pan-y; 
  border-radius: 10px;
  `;

const LogoCarousel = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  cursor: grab; /* Muda o cursor para indicar que o componente pode ser arrastado */
  
`;

const Logo = styled.img`
  width: 300px;
  height: px; /* Defina a altura desejada para o seu logo */
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
  color: #333; 
  z-index: 1;

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
  color: #333; 
  z-index: 1;
`;


export const ContainerCenterIMG = styled.div`
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center; 
    width: 600px;
    height: 400px;
    background: white;
    flex-direction: column;
    
    /* Media query for smaller screens */
    @media only screen and (max-width: 780px) {
        width: 100%;
        height: 500px;
    }
`;
const companies: any[] = ["playball.png", "playball.png", "playball.png", "playball.png", "playball.png", "playball.png", "playball.png", "playball.png", "playball.png", "playball.png", "playball.png", "playball.png"];

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

export const Container = styled.div`
width: 100%;
height: 500px;
display: flex;
background: white;
flex-direction: column;
@media only screen and (max-width: 780px) {
    height: 1200px;
    justify-content: center;
    alingItens: center;
}
`;


export const ContainerCenter2 = styled.div` 
    width: 100%;
    height: 100%;
    background: #BDE3FF;
    display: flex;
    align-items: center;
    justify-content: center;
`;  

const Container8 = () => {
    const { ref, inView } = useInView({ threshold: 0.6 });
    return (
        <Container ref={ref}>
            <ContainerLR ref={ref}>
      
                    <Form></Form>
            </ContainerLR>
            <ContainerCenter2 style={{ background: "white" }} >
                <CiInstagram style={{ width: "70px", height: "70px" }} />
                <CiLinkedin style={{ width: "70px", height: "70px" }} />
            </ContainerCenter2>
        </Container>

    );
};

export default Container8;
