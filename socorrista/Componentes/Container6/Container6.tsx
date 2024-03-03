"use client";
import React from "react";
import styled from "styled-components";
import { Container, Container2, ContainerCenter, ContainerCenterIMG, ContainerIMG1, ContainerImg, ContainerLR, ContainerLeft, ContainerRight, ContainerSocial, ContainerT, Containericons, Paragrafo, Titulo, TituloSub } from "../Geral/geral/ContainerGeral";
import { useInView } from 'react-intersection-observer';
import { IoLogoWhatsapp } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";


const Container6 = () => {
    const { ref, inView } = useInView({ threshold: 0.6 });

    return (
        <>
            <Container2 style={{ background: "#BDE3FF", }} ref={ref}>
                <ContainerT>
                    <h1> Nossa galeria !!</h1>
                </ContainerT>
                <ContainerImg>
                    <ContainerIMG1 src="2.jpeg" alt="" />
                    <ContainerIMG1 src="3.jpeg" alt="" />
                    <ContainerIMG1 src="4.jpeg" alt="" />
                    <ContainerIMG1 src="5.jpeg" alt="" />
                    <ContainerIMG1 src="6.jpeg" alt="" />
                    <ContainerIMG1 src="7.jpeg" alt="" />
                    <ContainerIMG1 src="8.jpeg" alt="" />
                    <ContainerIMG1 src="10.jpeg" alt="" />
                    <ContainerIMG1 src="11.jpeg" alt="" />
                    <ContainerIMG1 src="12.jpeg" alt="" />
                    <ContainerIMG1 src="13.jpeg" alt="" />
                    <ContainerIMG1 src="14.jpeg" alt="" />
                    <ContainerIMG1 src="15.jpeg" alt="" />
                    <ContainerIMG1 src="16.jpeg" alt="" />
                    <ContainerIMG1 src="17.jpeg" alt="" />
                </ContainerImg>
                <ContainerSocial>

                    <Containericons>
                        <h1> Faça seu orçamento</h1>
                    </Containericons>
                    <Containericons>
                    <FaWhatsapp href="https://react-icons.github.io/react-icons/search/#q=whats" style={{ width: "100px", height: "100px", color: "green",}} />
                    <FaWhatsapp href="https://react-icons.github.io/react-icons/search/#q=whats" style={{ width: "100px", height: "100px", color: "green",}} />
                    </Containericons>

                </ContainerSocial>

            </Container2>
        </>
    );
};

export default Container6;
