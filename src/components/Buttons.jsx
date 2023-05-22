import styled from 'styled-components';
import turn from '../assets/seta_virar.png';

export default function Buttons(props) {

    const {back, setFront, setBack, turn, setTurned} = props;

    function showAnswer(){
        setTurned('none');
    }

    function chooseAnswer() {
        setFront('flex');
        setBack('none');
    }

    return (
        <SCButtons
            turn={turn}
        >
            <img onClick={showAnswer} src={turn} />
            <button status={'Não lembrei'} onClick={() => chooseAnswer()}>Não Lembrei</button>
            <button status={'Quase não lembrei'} onClick={() => chooseAnswer()}>Quase não Lembrei</button>
            <button status={'Zap!'} onClick={() => chooseAnswer()}>Zap!</button>
        </SCButtons>
    );
}

const SCButtons = styled.div`
    display: flex;
    justify-content: space-between;

    button{
        width: 85.17px;
        height: 37.17px;

        display: ${(props) => props.turn === 'block' ? 'none' : 'block'};

        cursor: pointer;
        border-radius: 5px;
        border: none;

        font-family: 'Recursive', sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: #ffffff;
    }

    img{
        width: 30px;
        height: 20px;
        cursor: pointer;
    }
`