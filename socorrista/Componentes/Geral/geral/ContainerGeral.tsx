import React from "react";
import {styled, keyframes} from "styled-components";
import { useInView } from 'react-intersection-observer';


export const Container = styled.div({
    width: "100%",
    height: "1000px",
    display: "flex",
    flexDirection: "column",
    '@media only screen and (max-width: 780px)': {
        width: "100%",
        height: "1200px",
        justifyContent: "center",
    }
});

export const ContainerLR = styled.div({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height : "1500px",
    marginBottom: "100px",
    '@media only screen and (max-width: 780px)':{
        flexDirection: "column",
        width: "100%",
        height: "100%",
    }
})

export const BoxVideo = styled.div({
    width: "100%", 
    height: "500px", 
    margin: "15px",
    '@media only screen and (max-width: 780px)':{
        width: "200px",
        height: "200px",    
    }
})

export const ContainerCenter = styled.div({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "550px",
    height: "200px",
    background: "#EE8338",
    borderRadius: "20px",
    boxShadow: "20px 20px #ffff",
    '@media only screen and (max-width: 780px)':{
        width: "250px",
        height: "150px",
    }
});

export const ContainerCenter2 = styled.div({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "550px",
    height: "500px",
    background: "#BDE3FF",
    borderRadius: "20px",
    boxShadow: "20px 20px ",
    '@media only screen and (max-width: 780px)':{
        width: "250px",
        height: "150px",
    }
});


export const ContainerCenterIMG = styled.div({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "600px",
    height: "300px",
    background: "white",
    boxShadow: "40px 40px 0px #EE8338;",
    '@media only screen and (max-width: 780px)':{
        width: "200px",
        height: "200px",    
    }
})

export const ContainerLeft = styled.div({
    width: "50%", 
    height: "250px", 
    '@media only screen and (max-width: 780px)':{
        width: "200px",
        height: "200px",    
    }
});

export const ContainerRight = styled.div({
    width: "700px", 
    height: "250px", 
    padding: "10px",
    margin: "10px",
    '@media only screen and (max-width: 780px)':{
        width: "200px",
        height: "200px",  
      }
});

interface TituloProps {
    isVisible: boolean;
}

export const ContainerT = styled.div({
    display: "flex",
    justifyContent: "center",    
    width: "100%",
    marginBottom: "10px",
})

export const Titulo = styled.h1<TituloProps>`
    font-size: 80px;
    color: Background;
    opacity: ${props => props.isVisible ? '1' : '0'};
    transition: opacity 0.5s ease;
    @media only screen and (max-width: 780px) {
        font-size: 40px;
    }
`;

export const TituloSub = styled.h1<TituloProps>`
    font-size: 50px;
    color: black;
    margin-bottom: 20px;
    opacity: ${props => props.isVisible ? '1' : '0'};
    transition: opacity 0.5s ease;
    @media only screen and (max-width: 780px) {
        font-size: 30px;
    }
`;

export const Paragrafo = styled.p({
    fontSize: "15px",
    '@media only screen and (max-width: 780px)': {
        fontSize: "10px",
    }
});

