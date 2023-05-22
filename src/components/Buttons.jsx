import styled from 'styled-components';
import turn from '../assets/seta_virar.png'

export default function Buttons() {
    function chooseAnswer(){

    }

    return (
        <SCButtons>
            <img onClick={chooseAnswer} src={turn}/>
            <button>Não Lembrei</button>
            <button>Quase não Lembrei</button>
            <button>Zap!</button>
        </SCButtons>
    );
}

const SCButtons = styled.div`
    display: flex;
    justify-content: space-between;

    position: absolute;
    

    button{
        width: 85.17px;
        height: 37.17px;

        background-color: #2FBE34;
        border-radius: 5px;
        border: none;

        font-family: 'Recursive', sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: #ffffff;
    }
    img{
        display: none;
        width: 30px;
        height: 20px; 
    }
`