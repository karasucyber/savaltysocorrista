import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 900px;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 780px) {
        height: 1200px;
        justify-content: center;
    }
`;

export const ContainerLR = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 500px;
    margin-bottom: 100px;

    @media only screen and (max-width: 780px) {
        flex-direction: column;
        height: 100%;
    }
`;

export const ContainerAmbulance = styled.div`
    width: 50%; 
    height: 100%; 
    margin-bottom: 200px;

    @media only screen and (max-width: 780px) {
        width: 100%;
        height: 50%
    }
`;

export const BoxVideo = styled.div`
    width: 100%; 
    height: 500px; 
    margin: 15px;

    @media only screen and (max-width: 780px) {
        width: 80%;
        height: 100%;
    }
`;

export const ContainerCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 550px;
    height: 200px;
    background: #EE8338;
    border-radius: 20px;
    box-shadow: 20px 20px #ffff;

    @media only screen and (max-width: 780px) {
        width: 90%;
        height: 300px;
        margin: 50px;
    }
`;

export const ContainerCenter2 = styled(ContainerCenter)`
    height: 500px;
    background: #BDE3FF;
`;

export const ContainerCenterIMG = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 600px;
    height: 300px;
    background: white;
    box-shadow: 40px 40px 0px #EE8338;

    @media only screen and (max-width: 780px) {
        width: 350px;
        height: 300px;
        margin: 50px;
    }
`;

export const ContainerLeft = styled.div`
    width: 50%; 
    height: 100%; 

    @media only screen and (max-width: 780px) {
        width: 100%;
        height: auto;
    }
`;

export const ContainerRight = styled.div`
    width: 700px; 
    height: 250px; 
    padding: 10px;
    margin: 10px;

    @media only screen and (max-width: 780px) {
        width: 100%;
        height: auto;
    }
`;

interface TituloProps {
    isVisible: boolean;
}

export const ContainerT = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const Titulo = styled.h1<TituloProps>`
    font-size: 80px;
    color: Background;
    opacity: ${(props) => (props.isVisible ? '1' : '0')};
    transition: opacity 0.5s ease;

    @media only screen and (max-width: 780px) {
        font-size: 40px;
    }
`;

export const TituloSub = styled.h1<TituloProps>`
    font-size: 50px;
    color: black;
    margin-bottom: 20px;
    opacity: ${(props) => (props.isVisible ? '1' : '0')};
    transition: opacity 0.5s ease;

    @media only screen and (max-width: 780px) {
        font-size: 30px;
    }
`;

export const Paragrafo = styled.p`
    font-size: 15px;

    @media only screen and (max-width: 780px) {
        font-size: 10px;
    }
`;


export const ContainerImg = styled.div`
    column-count: 4;
    column-gap: 10px;

    @media only screen and (max-width: 780px) {
        column-count: 2; /* Altera para duas colunas em telas menores que 780px */
    }

    @media only screen and (max-width: 480px) {
        column-count: 1; /* Altera para uma coluna em telas menores que 480px */
    }
`;

export const ContainerIMG1 = styled.img`
    background-color: #ccc;
    width: 100%;
    border-radius: 10px;
    margin-bottom: 10px;

    @media only screen and (max-width: 780px) {
        width: 100%; /* Define a largura para ocupar toda a largura da coluna */
        margin-bottom: 10px; /* Mantém o espaçamento entre as imagens */
    }
`;



export const Container2 = styled.div`
    width: 100%;
    height: 1750px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 780px) {
        height: 1200px;
        justify-content: center;
    }
`;

export const ContainerSocial = styled.div`
    width: 50%;
    padding: 50px;
    background: white;
    justify-content: center;
    border-radius: 50px;
`;

export const Containericons = styled.div`
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
`;
