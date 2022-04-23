import React from "react";
import styled, { css } from "styled-components";
import { Section } from "../components/Containers"
import { Navbar } from "../components/Navbar/Navbar";

const SuperFrame = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: start;
    margin: auto;
    width:  100%;
    max-width: 1400px;
    height: 100%;
    margin-top: 60px;
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    height: auto;
        
`

const SocialNetwork = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: auto;
    height: auto;
`

const Powered = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 50px;
    column-gap: 15px;
`

const Logo = styled.img`
    width: 52px;
    height: 52px;
`

const IconSocials = styled.img`
    width:30px;
    height:30px;
`

const Button = styled.button<{ secondary?: boolean }>`
    display: flex;
    width: fit-content;
    border: 0;
    padding: 15px 20px;
    border-radius: 10px 0 0 10px;
    color: #272727;
    cursor: pointer;
    ${props => props.secondary && css`
    border: 1px solid white;
    border-radius: 0 10px 10px 0;
    background-color: rgba(255,255,255,.3);
    color:  white;
    h4{
        font-weight: 400;
    }
    `}
`

const ButtonContainer = styled.div`
    display: flex;
    padding: 20px;
    margin: 50px 30px 30px 0;
    border: 3px solid ;
    border-image: linear-gradient(90deg, #fff,rgba(255,255,255,0)) 1;
`

const Social = styled.div`
    display: flex;
    place-content: center;
    border: solid 2px #fff;
    border-radius: 999px;
    padding: 10px;
    background-color: rgba(255,255,255,0.3);
    transition: .1s ease-in-out;
    &:hover{
        filter: brightness(1.2);
    }
`

const HeroSection = () => {
    return (
        <Section style={{ background: 'rgb(14,127,215)' }}>
            <Navbar />
            <SuperFrame>
                <Content>
                    <h1 className="title">MOUNTAIN NODES</h1>
                    <h3 className="subtitle">The peaks of the strongest <br /> and highest yields.</h3>
                    <Powered> <h4 >Powered by</h4> <IconSocials src={process.env.PUBLIC_URL + "/img/avax.png"} /></Powered>
                    <ButtonContainer>
                        <Button><h4>Launch dAPP</h4> <Logo src={process.env.PUBLIC_URL + "/img/rightarrow.png"} /> </Button>
                        <Button secondary><h4>Know More</h4> <Logo src={process.env.PUBLIC_URL + "/img/downarrow.png"} /></Button>
                    </ButtonContainer>
                </Content>
                <SocialNetwork>
                    <Social><IconSocials src={process.env.PUBLIC_URL + "/img/discord.png"} /></Social>
                    <Social><IconSocials src={process.env.PUBLIC_URL + "/img/instagram.png"} /></Social>
                    <Social><IconSocials src={process.env.PUBLIC_URL + "/img/Twitter.png"}/></Social>
                </SocialNetwork>
            </SuperFrame>
        </Section>
    )
}

export default HeroSection;