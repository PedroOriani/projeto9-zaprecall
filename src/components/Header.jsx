import styled from 'styled-components';
import logo from '../assets/logo.png'

export default function Header(){
    return(
        <SCHeader>
            <img src={logo}></img>
            ZapRecall
        </SCHeader>
    )
}

const SCHeader  = styled.div`
    width: 100%;
    height: 140px;

    background-color: #fb6b6b;

    font-family: 'Righteous', cursive;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF;

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0px;
    z-index: 10;

    img{
        width: 52px;
        height: 60px;
        margin-right: 15px;
    }
`;