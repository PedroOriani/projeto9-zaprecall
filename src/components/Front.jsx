import styled from 'styled-components';
import play from '../assets/seta_play.png'

export default function Front(){
    function showBack(){

    }

    return(
        <SCFront>
            <p>Pergunta 1</p>
            <button onClick={showBack}><img src={play} /></button>
        </SCFront>
    )
}

const SCFront = styled.div`
    padding: 23px 15px;

    display:flex;
    justify-content: space-between;
    display: none;

    p{
        font-family: 'Recursive', sans-serif;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333
    }

    button{
        width: 20px;
        height: 22px;
        background: none;
        border: none;
    }
`