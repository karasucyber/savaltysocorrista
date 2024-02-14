"use client";
import React from "react";
import styled from "styled-components";
import { Container, Container2, ContainerCenter, ContainerCenterIMG, ContainerIMG1, ContainerImg, ContainerLR, ContainerLeft, ContainerRight, ContainerSocial, ContainerT, Containericons, Paragrafo, Titulo, TituloSub } from "../Geral/geral/ContainerGeral";
import { useInView } from 'react-intersection-observer';
import { IoLogoWhatsapp } from "react-icons/io";


const Container6 = () => {
    const { ref, inView } = useInView({ threshold: 0.6 });

    return (
        <>
            <Container2 style={{ background: "#BDE3FF", }} ref={ref}>
                <ContainerT>
                    <Titulo isVisible={inView}> Nossa galeria ! </Titulo>
                </ContainerT>
                <ContainerImg>
                <ContainerIMG1 src="https://images.unsplash.com/photo-1662100598399-a72981bd84d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MzI2NTUzMg&ixlib=rb-1.2.1&q=80&w=1080" alt=""/>
  <ContainerIMG1 src="https://images.unsplash.com/photo-1660576333511-6fc34a718191?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MzI2NTU1Ng&ixlib=rb-1.2.1&q=80&w=1080" alt=""/>
  <ContainerIMG1 src="https://images.unsplash.com/photo-1653579636217-0a062a1390ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MzI2NTU3Mw&ixlib=rb-1.2.1&q=80&w=1080" alt=""/>
  <ContainerIMG1 src="https://images.unsplash.com/photo-1660675772110-4b8ed828fdb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MzI2NTU4Nw&ixlib=rb-1.2.1&q=80&w=1080" alt=""/>
  <ContainerIMG1 src="https://images.unsplash.com/photo-1661101571617-8fdd3b258199?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MzI2NTU5Mw&ixlib=rb-1.2.1&q=80&w=1080" alt=""/>
  <ContainerIMG1 src="https://images.unsplash.com/photo-1662199513934-5be245dcb32c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MzI2NTYxMw&ixlib=rb-1.2.1&q=80&w=1080" alt=""/>
  <ContainerIMG1 src="https://images.unsplash.com/photo-1661761980951-b5c479c18b7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MzI2NTYyMg&ixlib=rb-1.2.1&q=80&w=1080" alt=""/>
  <ContainerIMG1 src="https://images.unsplash.com/photo-1662947077803-b92386fafd92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MzI2NTY1NA&ixlib=rb-1.2.1&q=80&w=1080" alt=""/>
  <ContainerIMG1 src="https://images.unsplash.com/photo-1660534793910-1236bb34e667?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MzI2NTY1OQ&ixlib=rb-1.2.1&q=80&w=1080" alt=""/>
                </ContainerImg>
                <ContainerSocial>

                <Containericons>
                    <h1> Faça seu orçamento</h1>                    
                    </Containericons>
                    <Containericons>
                    <IoLogoWhatsapp href="https://react-icons.github.io/react-icons/search/#q=whats" style={{ width: "100px", height: "100px", color: "green",}} />
                     <IoLogoWhatsapp href="https://react-icons.github.io/react-icons/search/#q=whats" style={{ width: "100px", height: "100px", color: "green",}} />
                    </Containericons>
                    
                </ContainerSocial>       

            </Container2>
        </>
    );
};

export default Container6;
