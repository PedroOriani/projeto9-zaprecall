import { useState } from 'react'
import styled from 'styled-components';
import play from '../assets/seta_play.png';
import turn from '../assets/seta_virar.png';
import certo from '../assets/icone_certo.png';
import quase from '../assets/icone_quase.png';
import erro from '../assets/icone_erro.png';


export default function Questions(props){

    const {cards, count, setcount} = props;
    const {question, answer} = cards;

    let teste = [];
    let testestr;

    for (let i = 0; i < cards.length; i++){
        teste.push(i)
    }

    const [turned, setturned] = useState([]);
    const [disable, setdisable] = useState([]);
    const [text, settext] = useState([]);
    const [green, setgreen] = useState([]);
    const [red, setred] = useState([]);
    const [yellow, setyellow] = useState([]);

    function changeCardType(i){
        const newArrTurn = [...turned, i]
        setturned(newArrTurn);
        const newArrDis = [...disable, i]
        setdisable(newArrDis);
    }

    function showAnswer(i) {
        const newArrAnsw = [...text, i]
        settext(newArrAnsw);
    }

    function correct(i){
        const newArrGreen = [...green, i]
        setgreen(newArrGreen);
        unturn(i);
    }

    function almost(i){
        const newArrYellow = [...yellow, i]
        setyellow(newArrYellow);
        unturn(i);
    }

    function wrong (i){
        const newArrRed = [...red, i]
        setred(newArrRed);
        unturn(i);
    }

    function unturn(i) {
        testestr = turned.join('')
        let newStr = testestr.replace(i, '');
        let strArr = newStr.split('')
        for (let i = 0; i < strArr.length; i++){
            strArr[i] = parseInt(strArr[i])
        }
        setturned(strArr)
        const newArrCount = [...count, i]
        setcount(newArrCount);
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

    function returnDataTest(i){
        if (green.includes(i)){
            return "zap-icon";
        }else if(red.includes(i)){
            return "no-icon";
        }else if(yellow.includes(i)){
            return "partial-icon";
        }else{
            return "play-btn";
        }
    }

    return(
        <SCQuestions >
            {cards.map((card,i) => (
            <div data-test="flashcard">
            <SCQuestion
                turned={turned.includes(i)}
                disable={disable.includes(i)}
                green={green.includes(i)}
                yellow={yellow.includes(i)}
                red={red.includes(i)}
            >
                <SCTexto
                    green={green.includes(i)}
                    yellow={yellow.includes(i)}
                    red={red.includes(i)}
                    data-test="flashcard-text"
                >
                    Pergunta {i+1}
                </SCTexto>
                <button 
                    disabled={disable.includes(i) ? true : false}
                    onClick={() => changeCardType(i)}
                    data-test={returnDataTest(i)} 
                >
                    <img src={returnIcon(i)} />
                </button>
            </SCQuestion>
            <SCAnswer
                turned={turned.includes(i)}
                text={text.includes(i)}
                disable={disable.includes(i)}
            >
                <p data-test="flashcard-text">
                    {text.includes(i) ? card.answer : card.question}
                </p>
                <img 
                    src={turn} 
                    onClick={(() => showAnswer(i))} 
                    text={text.includes(i)}
                    data-test="turn-btn"
                />
                <SCButtons>
                    <SCButton
                        text={text.includes(i)}
                        id={0}
                        onClick={(() => wrong(i))}
                        color={'#FF3030'}
                        data-test="no-btn"
                    >
                        Não Lembrei
                    </SCButton>
                    <SCButton
                        text={text.includes(i)}
                        id={1}
                        onClick={(() => almost(i))}
                        color={'#FF922E'}
                        data-test="partial-btn"
                    >
                        Quase não Lembrei
                    </SCButton>
                    <SCButton
                        text={text.includes(i)}
                        id={2}
                        onClick={(() => correct(i))}
                        color={'#2FBE34'}
                        data-test="zap-btn"
                    >
                        Zap!
                    </SCButton>

                </SCButtons>
            </SCAnswer>
            </div>
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

    text-decoration: ${(props => props.disable ? 'line-through' : 'none')};

    button{
        width: 20px;
        height: 22px;
        background: none;
        border: none;
        cursor: pointer;
    }

    text-decoration-color: ${(props => {
            if(props.red){
                return '#FF3030';
            }else if(props.yellow){
                return '#FF922E';
            }else if(props.green){
                return '#2FBE34';
            }
    })} 
`

const SCTexto = styled.p`
    font-family: 'Recursive', sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: ${(props => {
            if(props.red){
                return '#FF3030';
            }else if(props.yellow){
                return '#FF922E';
            }else if(props.green){
                return '#2FBE34';
            }else{
                return '#333333';
            }
    })}
`

const SCAnswer = styled.div`
    width: 300px;
    min-height: 131px;
    height: auto;

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
        margin-top: 60px;
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

        margin-top: 30px;

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