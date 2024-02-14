'use client'
import styled from "styled-components";
import Container1 from "@/Componentes/Container1/Container1";
import Container2 from "@/Componentes/Container2/Container2";
import Container3 from "@/Componentes/Container3/Container3";
import Container4 from "@/Componentes/Container4/Container4";
import Container6 from "@/Componentes/Container6/Container6";
import Container7 from "@/Componentes/Container7/Container7";

const Body = styled.body({
  width: "100%",
  height: "100%",
  padding: "0px",
  margin: "0px",
  left: "0px",
  background: "#BDE3FF",
})

export default function Home() {
  return (
    <Body>
      <Container1/> 
      <Container2/>
      <Container3/>   
      <Container4/>
      <Container6/>
      <Container7/>
    </Body>
  );
}
