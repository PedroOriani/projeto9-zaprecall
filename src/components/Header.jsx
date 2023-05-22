import styled from 'styled-components';
import logo from '../assets/logo.png'

export default function Header(props){

    const {count, setCount} = props

    function reload(){
        window.location.reload();
    }

    return(
        <SCHeader>
            <img onClick={reload} src={logo}></img>
            <p onClick={reload}>ZapRecall</p>
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
        cursor: pointer;
    }

    p{
        cursor: pointer;
    }
`;