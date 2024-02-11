import React from "react";
import styled from "styled-components";

export const Container = styled.div({
    width: "100%",
    height: "1000px",
    display: "flex",
    justifyContent: "center",
    background: "#BDE3FF",
    '@media only screen and (min-width: 780px)': {
    }
});
export const ContainerLeft = styled.div({
    display: "flex",
    justifyItems: "flex-start",
    width: "500px",
    height: "500px",
    padding: "10px",
    '@media only screen and (min-witdh: 780px)':{

    }
})
export const ContainerRight = styled.div({
    display: "flex",
    justifyItems: "flex-end",
    width: "500px",
    height: "500px",
    padding: "10px",
    '@media only screen and (min-witdh: 780px)':{

    }
})
export const Titulo = styled.h1({
    fontSize: "90px",
    color: "Background",
    marginBottom: "20px",
    '@media only screen and (min-witdh: 780px)':{
        fontSize: "20px",

    }
})
export const Paragrafo = styled.p({
    fontSize: "25px",
    background: "black",
    '@media only screen and (min-witdh: 780px)':{

    }
})
export const BoxShaw = styled.div({
    width: "500px",
    height: "500px",
    boxShadow: "",
    padding: "10px",
    margin: "10px",
    '@media only screen and (min-witdh: 780px)':{

    }
})

