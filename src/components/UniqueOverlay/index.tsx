import React from "react"
import useWrapperScroll from "../Model/useWrapperScroll";
import { Container, Logo, Header, Footer, Burguer } from "./styles";
import { useTransform } from 'framer-motion'


const UniqueOverlay: React.FC = () => {

    const { scrollYProgress } = useWrapperScroll();

    const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

    return (
        <Container>
            <Header>
                <Logo/>
                <Burguer/>
            </Header>
            <Footer style={{opacity}}>
                <ul>
                    <li><a href="https://github.com/xXG4briel" target={'_blank'}>UI clone</a></li>
                    <li><a href="https://github.com/xXG4briel" target={'_blank'}>made with 🖤</a></li>
                    <li><a href="https://github.com/xXG4briel" target={'_blank'}>by Gabriel George</a></li>
                </ul>
            </Footer>
        </Container>
    ) 
}

export default UniqueOverlay;
