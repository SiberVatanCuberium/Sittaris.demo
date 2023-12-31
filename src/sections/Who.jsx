import React, { Suspense } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "../components/Cube";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  margin-right: 50px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  @media only screen and (max-width: 768px) {
    font-size: 50px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  font-weight: bolder;
  color: #191970;
`;

const Desc = styled.p`
  font-size: 24px;
  color: black;
  font-weight: lighter;
`;

const Button = styled.button`
  background: linear-gradient(to right, #191970, #008000);
  font-family: monospace;
  color: white;
  font-weight: 500;
  width: 220px;
  padding: 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 26px;
`;


const Who = () => {
  return (
    <Section>
      <Container>
      <div id={"about"}/>
        <Left>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </Left> 

        <Right>
          <Title><p style={{fontSize:"40px"}}>Think outside the Carbon Emission</p></Title>
          <WhatWeDo>
            
            <Subtitle>Who we Are</Subtitle>
          </WhatWeDo>
          <Desc>
            A creative group of blockchain company and developers with a passion for the
            NATURE.
          </Desc>
          <Button>SOLAIRE</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;