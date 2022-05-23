import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle `

body { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    background-color:#EFEFEF;
 
}
`

export const Container = styled.div`
    width: 100%;
    height:100vh;
    
`
export const Main = styled.div`
    width: 100%;
    height:100vh;
    display: grid;
    grid-template-columns: 2fr 4fr;

    @media screen and (max-width: 960px){
            display: flex;
            flex-direction: column;
    }
    
`

export const SectionRight = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media screen and (max-width: 960px){
            display: flex;
            flex-direction: column;
            margin-top: 600px;
    }
    ul{        
        
        width: 65%;
        height: 70vh;
        display: grid;
        padding: 5px;
        grid-template-columns: repeat(auto-fit, minmax(100px, 4fr));
        align-content: center;
        justify-content: center;
        justify-items: center;

        
        @media screen and (max-width: 960px){
            display: grid;
            width: 100%;
            height: 20vh;

        }
    }

    li{         
        display: flex;
        background-color: #ffffff;
        list-style: none;
        border: 0;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        justify-content: center;
        align-items: center;
        margin: 5px;
    }    
`
export const Mensagem = styled.p`
    
`
export const SelectSorteios = styled.select`
    color: black;
    padding: 10px;
    border-radius: 5px;
    border: 0;
    outline: none;
    width: 70%;
`
export const InfoSorteios = styled.div`
    position: absolute;
    left: 30px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
   
.logoAlign {
        display: flex;
        flex-direction: row;
        align-items: center; 
        
        @media screen and (max-width: 960px){

            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 50px;
            padding: 30px;
            
    }
       
    }

    .logoAlign img {
       width: 2.5rem;   
       margin-right: 10px;

       @media screen and (max-width: 960px){
        width: 4.5rem;
      }
       
    }

    .logoAlign span {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 37px;
        color: #FFFFFF;
        
        @media screen and (max-width: 960px){
            margin: 10px;
        }
       
    }

    .rodapeStyle  p { 
        font-style: normal;
        font-weight: 500;
        font-size: 0.8rem;
        line-height: 17px;
        letter-spacing: 0.135em;
        color: #FFFFFF;
        
    }

    .rodapeStyle  span {
        font-style: normal;
        font-weight: 700;
        font-size: 1rem;
        line-height: 24px;
        color: #FFFFFF;
    }

    @media screen and (max-width: 960px){
            width: 100%;
            height: 0;
            position: absolute;
            left: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding: 20px;
            
    }
    
`