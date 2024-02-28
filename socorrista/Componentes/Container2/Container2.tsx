import React from "react";
import styled from "styled-components";
import { Container, ContainerCenter, ContainerCenterIMG, ContainerLR, ContainerLeft, ContainerRight, ContainerT, Paragrafo, Titulo, TituloSub } from "../Geral/geral/ContainerGeral";
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from "@react-hook/media-query";



const ContainerR = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const LeftContent = () => {
    const { inView, ref } = useInView({ threshold: 0.6 });

    return (
        <ContainerLeft style={{ marginLeft: "20px", padding: "10px", }} ref={ref}>
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
    );
};

const RightContent = () => {
    return (
        <ContainerRight>
            <ContainerCenterIMG />
        </ContainerRight>
    );
};

const Container2 = () => {
    const { ref, inView } = useInView({ threshold: 0.6 });
    const isMobileDevice = useMediaQuery("(max-width: 780px)"); 
    return (
        <>
          {isMobileDevice ? (
           <> 
           <ContainerR>
           <ContainerT>
            <Titulo isVisible={inView} ref={ref}>Um pouco sobre nós!</Titulo>
          </ContainerT>            <ContainerCenter>
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
            <ContainerCenterIMG />

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
            
           </ContainerR>
           </>
          ) :     
          <Container style={{ background: "#BDE3FF", marginBottom: "100px", padding: "0px", }}ref={ref}>
          <ContainerT>
            <Titulo isVisible={inView}>Um pouco sobre nós!</Titulo>
          </ContainerT>
          <ContainerLR>
            <LeftContent />
            <RightContent />
          </ContainerLR>
          <ContainerLR>
            <LeftContent />
            <LeftContent />
          </ContainerLR>
        </Container>
        
        }
        </>
      );
    };
    

export default Container2;
