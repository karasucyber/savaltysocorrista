import React from "react";
import styled from "styled-components";
import { Container, ContainerCenterIMG, ContainerLR, ContainerLeft, ContainerRight, ContainerT, Paragrafo, Titulo, TituloSub } from "../Geral/geral/ContainerGeral";
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from "@react-hook/media-query";



const ContainerR = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const ContainerCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 70%;
    background: #EE8338;
    border-radius: 20px;
    box-shadow: 20px 20px #ffff;

    @media only screen and (max-width: 780px) {
        width: 90%;
        height: 300px;
        margin: 50px;
    }
`;


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
                                Somos a Salvaty Socorrista, uma empresa consolidada com mais de 5 anos de experiência no mercado. Desde o início, nos dedicamos a oferecer serviços de socorro e suporte em eventos de todos os tipos e tamanhos. O que começou como trabalho freelance rapidamente evoluiu para uma operação profissional e dedicada, à medida que ganhamos a confiança de nossos clientes e expandimos nossos serviços. Hoje, somos reconhecidos por nossa excelência, rapidez e compromisso com a segurança e bem-estar de todos os envolvidos em cada evento que atendemos. Estamos ansiosos para continuar a crescer, inovar e servir nossa comunidade com o mais alto padrão de cuidado e profissionalismo.
                            </Paragrafo>
                        </ContainerCenter>

                        <ContainerCenter>
                            <Paragrafo>
                                Somos a Salvaty Socorrista, uma empresa consolidada com mais de 5 anos de experiência no mercado. Desde o início, nos dedicamos a oferecer serviços de socorro e suporte em eventos de todos os tipos e tamanhos. O que começou como trabalho freelance rapidamente evoluiu para uma operação profissional e dedicada, à medida que ganhamos a confiança de nossos clientes e expandimos nossos serviços. Hoje, somos reconhecidos por nossa excelência, rapidez e compromisso com a segurança e bem-estar de todos os envolvidos em cada evento que atendemos. Estamos ansiosos para continuar a crescer, inovar e servir nossa comunidade com o mais alto padrão de cuidado e profissionalismo.
                            </Paragrafo>
                        </ContainerCenter>
                        <ContainerCenter>
                            <Paragrafo>
                                Somos a Salvaty Socorrista, uma empresa consolidada com mais de 5 anos de experiência no mercado. Desde o início, nos dedicamos a oferecer serviços de socorro e suporte em eventos de todos os tipos e tamanhos. O que começou como trabalho freelance rapidamente evoluiu para uma operação profissional e dedicada, à medida que ganhamos a confiança de nossos clientes e expandimos nossos serviços. Hoje, somos reconhecidos por nossa excelência, rapidez e compromisso com a segurança e bem-estar de todos os envolvidos em cada evento que atendemos. Estamos ansiosos para continuar a crescer, inovar e servir nossa comunidade com o mais alto padrão de cuidado e profissionalismo.
                            </Paragrafo>
                        </ContainerCenter>

                    </ContainerR>
                </>
            ) :
                <Container style={{ background: "#BDE3FF", marginBottom: "100px", padding: "0px",height: "1200px" }} ref={ref}>
                    <ContainerT>
                        <Titulo isVisible={inView}>Um pouco sobre nós!</Titulo>
                    </ContainerT>

                    <ContainerLR>
                    <ContainerLeft style={{ marginLeft: "20px", padding: "10px", }} ref={ref}>
            <TituloSub isVisible={inView}> Nossa história </TituloSub>
            <ContainerCenter>
                <Paragrafo>
                 Somos a Salvaty Socorrista, uma empresa consolidada com mais de 5 anos de experiência no mercado. Desde o início, nos dedicamos a oferecer serviços de socorro e suporte em eventos de todos os tipos e tamanhos. O que começou como trabalho freelance rapidamente evoluiu para uma operação profissional e dedicada, à medida que ganhamos a confiança de nossos clientes e expandimos nossos serviços. Hoje, somos reconhecidos por nossa excelência, rapidez e compromisso com a segurança e bem-estar de todos os envolvidos em cada evento que atendemos. Estamos ansiosos para continuar a crescer, inovar e servir nossa comunidade com o mais alto padrão de cuidado e profissionalismo.
                </Paragrafo>
            </ContainerCenter>
            
        </ContainerLeft>
                        <ContainerRight>
                            <ContainerCenterIMG />
                        </ContainerRight>
                    </ContainerLR>
                    <ContainerLR>
                        <ContainerLeft style={{ marginLeft: "20px", padding: "10px", }} ref={ref}>
                            <TituloSub isVisible={inView}> Quem somos </TituloSub>
                            <ContainerCenter>
                                <Paragrafo>
                                    Somos a Salvaty Socorrista, uma empresa consolidada com mais de 5 anos de experiência no mercado. Desde o início, nos dedicamos a oferecer serviços de socorro e suporte em eventos de todos os tipos e tamanhos. O que começou como trabalho freelance rapidamente evoluiu para uma operação profissional e dedicada, à medida que ganhamos a confiança de nossos clientes e expandimos nossos serviços. Hoje, somos reconhecidos por nossa excelência, rapidez e compromisso com a segurança e bem-estar de todos os envolvidos em cada evento que atendemos. Estamos ansiosos para continuar a crescer, inovar e servir nossa comunidade com o mais alto padrão de cuidado e profissionalismo.
                                </Paragrafo>
                            </ContainerCenter>

                        </ContainerLeft>
                        <ContainerLeft style={{ marginLeft: "20px", padding: "10px", }} ref={ref}>
                            <TituloSub isVisible={inView}> Atendimento </TituloSub>
                            <ContainerCenter>
                                <Paragrafo>
                                    Somos a Salvaty Socorrista, uma empresa consolidada com mais de 5 anos de experiência no mercado. Desde o início, nos dedicamos a oferecer serviços de socorro e suporte em eventos de todos os tipos e tamanhos. O que começou como trabalho freelance rapidamente evoluiu para uma operação profissional e dedicada, à medida que ganhamos a confiança de nossos clientes e expandimos nossos serviços. Hoje, somos reconhecidos por nossa excelência, rapidez e compromisso com a segurança e bem-estar de todos os envolvidos em cada evento que atendemos. Estamos ansiosos para continuar a crescer, inovar e servir nossa comunidade com o mais alto padrão de cuidado e profissionalismo.
                                </Paragrafo>
                            </ContainerCenter>
                        </ContainerLeft>
                    </ContainerLR>
                </Container>

            }
        </>
    );
};


export default Container2;
