import React from 'react';
import styled from 'styled-components';

const Main = styled.div`

@media screen and (max-width: 960px){
    transform: rotate(90deg);
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;

}
`
const Background = (props) => (
    <Main>
        <svg min-width="100%" height="100vh" viewBox="0 0 613 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M613 0C613 0 361.26 475.032 613 1024H0V0H613Z" fill={props.color}/>
        </svg>
    </Main>
)

export default Background;
