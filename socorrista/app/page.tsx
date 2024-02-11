'use client'
import styled from "styled-components";
import Container1 from "@/Componentes/Container1/Container1";
import Container2 from "@/Componentes/Container2/Container2";
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
    </Body>
  );
}
