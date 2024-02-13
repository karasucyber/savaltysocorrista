"use client";
import React from "react";
import styled from "styled-components";
import { Container, ContainerCenter, ContainerCenterIMG, ContainerLR, ContainerLeft, ContainerRight, ContainerT, Paragrafo, Titulo, TituloSub } from "../Geral/geral/ContainerGeral";
import { useInView } from 'react-intersection-observer';

const Container2 = () => {
    const { ref, inView } = useInView({ threshold: 0.6 });
    
    return (
        <>
            <Container style={{background: "#BDE3FF",}} ref={ref}>
                <ContainerT>
                    <Titulo isVisible={inView}> Um pouco sobre nós! </Titulo>
                </ContainerT>
                <ContainerLR ref={ref}>
                    
                    <ContainerLeft>
                        <TituloSub isVisible={inView}> Nossa história </TituloSub>
                        <ContainerCenter>
                            <Paragrafo>
                                Is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type 
                                specimen book. It has survived not only five centuries, but also the leap into 
                                electronic typesetting, remaining essentially unchanged. It was popularised in 
                                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                and more recently with desktop publishing software like Aldus PageMaker including 
                                versions of Lorem Ipsum.
                            </Paragrafo>
                        </ContainerCenter>
                    </ContainerLeft>
                    <ContainerRight>
                        <ContainerCenterIMG>

                        </ContainerCenterIMG>
                    </ContainerRight>
                </ContainerLR>
                <ContainerLR ref={ref}>
                    <ContainerLeft>
                        <TituloSub isVisible={inView}> Quem somos! </TituloSub>
                        <ContainerCenter>
                            <Paragrafo>
                                Is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type 
                                specimen book. It has survived not only five centuries, but also the leap into 
                                electronic typesetting, remaining essentially unchanged. It was popularised in 
                                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                and more recently with desktop publishing software like Aldus PageMaker including 
                                versions of Lorem Ipsum.
                            </Paragrafo>
                        </ContainerCenter>
                    </ContainerLeft>
                    <ContainerRight>
                        <TituloSub isVisible={inView}> Atendimento </TituloSub>
                        <ContainerCenter>
                            <Paragrafo>
                                Is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type 
                                specimen book. It has survived not only five centuries, but also the leap into 
                                electronic typesetting, remaining essentially unchanged. It was popularised in 
                                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                and more recently with desktop publishing software like Aldus PageMaker including 
                                versions of Lorem Ipsum.
                            </Paragrafo>
                        </ContainerCenter>
                    </ContainerRight>
                </ContainerLR>
            </Container>
        </>
    );
};

export default Container2;
