import React from "react";
import styled from "styled-components";
import { BoxVideo, Container, ContainerCenter2, ContainerLR, ContainerLeft, ContainerRight, ContainerT, Paragrafo, Titulo, TituloSub } from "../Geral/geral/ContainerGeral";
import { useInView } from 'react-intersection-observer';
import ReactPlayer from 'react-player'; 

const Container3 = () => {
    const { ref, inView } = useInView({ threshold: 0.6 });
    return (
        <Container style={{ background: "white", }} ref={ref}>
            <ContainerT>
                <Titulo style={{ color: "black" }} isVisible={inView}> Nossos serviços !</Titulo>
            </ContainerT>
            <ContainerLR>
                    <BoxVideo>
                    <TituloSub isVisible={inView}> Primeiro Socorros. </TituloSub>
                    <ContainerCenter2>
                    <ReactPlayer url="https://www.youtube.com/watch?v=3fDlLEbVJWs" width="95%" height="95%" />    
                        </ContainerCenter2>
                    </BoxVideo>
                    <BoxVideo>
                    <ContainerCenter2>
                    <ReactPlayer url="https://www.youtube.com/watch?v=3fDlLEbVJWs" width="95%" height="95%" />    
                        </ContainerCenter2>
                    </BoxVideo>
                    <BoxVideo>
                    <TituloSub isVisible={inView}> Ambulâncias </TituloSub>
                    <ContainerCenter2>
                        <ReactPlayer url="https://www.youtube.com/watch?v=3fDlLEbVJWs" width="95%" height="95%" />    
                        </ContainerCenter2>
                    </BoxVideo>
            </ContainerLR>
        </Container>
    )
}

export default Container3;