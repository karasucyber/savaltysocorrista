import React from "react";
import styled from "styled-components";
import { BoxVideo, Container, ContainerCenter2, ContainerLR, ContainerLeft, ContainerRight, ContainerT, Paragrafo, Titulo, TituloSub } from "../Geral/geral/ContainerGeral";
import { useInView } from 'react-intersection-observer';
import ReactPlayer from 'react-player';
import { useMediaQuery } from "@react-hook/media-query";
const ContainerR = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
`;

const Container3 = () => {
    const { ref, inView } = useInView({ threshold: 0.6 });
    const isMobileDevice = useMediaQuery("(max-width: 780px)")
    return (<>
        {isMobileDevice ? (
            <>
                <ContainerR>
                    <ContainerT>
                        <Titulo style={{ color: "black" }} isVisible={inView}> Nossos serviços !</Titulo>
                    </ContainerT>

                    <BoxVideo>
                        <Titulo isVisible={inView}> Primeiro Socorros. </Titulo>
                        <ReactPlayer url="https://www.youtube.com/watch?v=E0iYzxiWxtA" width="100%" height="400px" />
                    </BoxVideo>

                    <BoxVideo>
                    <Titulo isVisible={inView} ref={ref}>Um pouco sobre nós!</Titulo>  
                        <ReactPlayer url="https://www.youtube.com/watch?v=E0iYzxiWxtA" width="100%" height="400px" />
                    </BoxVideo>

                    <BoxVideo>
                        <Titulo isVisible={inView}> Ambulâncias </Titulo>
                        <ReactPlayer url="https://www.youtube.com/watch?v=E0iYzxiWxtA" width="100%" height="400px" />
                    </BoxVideo>

                </ContainerR>
            </>
        ) :

            <Container style={{ background: "white", }} ref={ref}>
                <ContainerT>
                    <Titulo style={{ color: "black" }} isVisible={inView}> Nossos serviços !</Titulo>
                </ContainerT>
                <ContainerLR>
                    <BoxVideo>
                        <TituloSub isVisible={inView}> Primeiro Socorros. </TituloSub>
                        <ContainerCenter2>
                            <ReactPlayer url="https://www.youtube.com/watch?v=E0iYzxiWxtA" width="95%" height="95%" />
                        </ContainerCenter2>
                    </BoxVideo>
                    <BoxVideo>
                        <ContainerCenter2>
                            <ReactPlayer url="https://www.youtube.com/watch?v=E0iYzxiWxtA" width="95%" height="95%" />
                        </ContainerCenter2>
                    </BoxVideo>
                    <BoxVideo>
                        <TituloSub isVisible={inView}> Ambulâncias </TituloSub>
                        <ContainerCenter2>
                            <ReactPlayer url="https://www.youtube.com/watch?v=E0iYzxiWxtA" width="95%" height="95%" />
                        </ContainerCenter2>
                    </BoxVideo>
                </ContainerLR>
            </Container>

        }</>

    )
}

export default Container3;

