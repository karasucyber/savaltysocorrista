import React from "react";
import styled from "styled-components";
import { BoxVideo, Container, ContainerCenter2, ContainerLR, ContainerLeft, ContainerRight, ContainerT, Paragrafo, Titulo, TituloSub } from "../Geral/geral/ContainerGeral";
import { useInView } from 'react-intersection-observer';
import ReactPlayer from 'react-player'; 

const Container4 = () => {
    const { ref, inView } = useInView({ threshold: 0.6 });
    return (
        <Container style={{ background: "white", }} ref={ref}>
            
            <ContainerT>
                <Titulo style={{ color: "black" }} isVisible={inView}> Nossas ambulâncias !</Titulo>
            </ContainerT>

        
        </Container>
    )
}

export default Container4;