import { useState } from 'react'
import styled from 'styled-components';
import play from '../assets/seta_play.png';
import turn from '../assets/seta_virar.png';
import certo from '../assets/icone_certo.png';
import quase from '../assets/icone_quase.png';
import erro from '../assets/icone_erro.png';


export default function Questions(props){

    const {cards, count, setCount} = props;
    const {question, answer} = cards;

    let teste = [];
    let testeStr;
    let arrFinal = [];

    for (let i = 0; i < cards.length; i++){
        teste.push(i)
    }

    const [turned, setTurned] = useState([]);
    const [disable, setDisable] = useState([]);
    const [unturned, setUnturned] = useState([]);
    const [text, setText] = useState([]);
    const [green, setGreen] = useState([]);
    const [red, setRed] = useState([]);
    const [yellow, setYellow] = useState([]);

    function changeCardType(i){
        const newArrTurn = [...turned, i]
        setTurned(newArrTurn);
        const newArrDis = [...disable, i]
        setDisable(newArrDis);
    }

    function showAnswer(i) {
        const newArrAnsw = [...text, i]
        setText(newArrAnsw);
    }

    function unturn(i) {
        testeStr = turned.join('')
        let newStr = testeStr.replace(i, '');
        let strArr = newStr.split('')
        for (let i = 0; i < strArr.length; i++){
            strArr[i] = parseInt(strArr[i])
        }
        setTurned(strArr)
        returnIcon(i);
    }

    function returnIcon(i){
        if (green.includes(i)){
            return certo;
        }else if(red.includes(i)){
            return erro
        }else if(yellow.includes(i)){
            return quase
        }else{
            return play
        }
    }

    return(
        <SCQuestions>
            {cards.map((card,i) => (
            <>
            <SCQuestion
                turned={turned.includes(i)}
                unturned={unturned.includes(i)}
                disable={disable.includes(i)}
            >
                <p>Pergunta {i+1}</p>
                <button 
                    disabled={disable.includes(i) ? true : false}
                    onClick={() => changeCardType(i)} 
                >
                    <img src={returnIcon(i)} />
                </button>
            </SCQuestion>
            <SCAnswer
                turned={turned.includes(i)}
                text={text.includes(i)}
                disable={disable.includes(i)}
            >
                <p>
                    {text.includes(i) ? card.answer : card.question}
                </p>
                <img 
                    src={turn} 
                    onClick={(() => showAnswer(i))} 
                    text={text.includes(i)}
                />
                <SCButtons>
                    <SCButton
                        text={text.includes(i)}
                        id={0}
                        onClick={(() => unturn(i))}
                        color={'#FF3030'}
                    >
                        Não Lembrei
                    </SCButton>
                    <SCButton
                        text={text.includes(i)}
                        id={1}
                        onClick={(() => unturn(i))}
                        color={'#FF922E'} 
                    >
                        Quase não Lembrei
                    </SCButton>
                    <SCButton
                        text={text.includes(i)}
                        id={2}
                        onClick={(() => unturn(i))}
                        color={'#2FBE34'}
                    >
                        Zap!
                    </SCButton>

                </SCButtons>
            </SCAnswer>
            </>
            ))
        }
        </SCQuestions>
    )
}

const SCQuestions = styled.div `
    width: 100%;
    height: auto;
        
    background-color: #fb6b6b;

    padding-top: 140px;
    padding-bottom: 70px;

    display:flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
`

const SCQuestion = styled.div`
    width: 300px;
    height: 65px;

    background-color: #FFFFFF;

    margin: 12.5px auto;

    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    padding: 23px 15px;

    display: ${(props => props.turned ? 'none' : 'flex')};

    justify-content: space-between;

    p{
        font-family: 'Recursive', sans-serif;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333
        text-decoration: ${(props => props.disable ? 'line-through' : 'none')};
    }

    button{
        width: 20px;
        height: 22px;
        background: none;
        border: none;
        cursor: pointer;
    }
`

const SCAnswer = styled.div`
    width: 300px;
    height: 131px;

    background-color: #FFFFD4;

    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding: 18px 15px 10px 12px;

    margin: 12.5px auto;

    display: ${(props => props.turned ? 'flex' : 'none')};
    justify-content: space-between;
    flex-direction: column;

    p{
        font-family: 'Recursive', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333
    }
    
    img{
        width: 30px;
        height: 20px;
        display: ${(props => props.text ? 'none' : '')};
        margin-left: 250px;
        margin-top: 65px;
    }

`
const SCButtons = styled.div`
    display: flex;
    justify-content: space-between;
`

const SCButton = styled.button`
        width: 85.17px;
        height: 37.17px;

        cursor: pointer;
        border-radius: 5px;
        border: none;

        font-family: 'Recursive', sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: #ffffff;

        display:${(props => props.text ? 'flex' : 'none')};
        justify-content: center;
        align-items: center;
        text-align: center;

        background-color: ${(props => props.color)}
`