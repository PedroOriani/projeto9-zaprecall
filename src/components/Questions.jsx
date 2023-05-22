import { useState } from 'react'
import styled from 'styled-components';
import play from '../assets/seta_play.png'
import Buttons from './Buttons.jsx'


export default function Questions(props){

    const {cards} = props;
    const {question, answer} = cards;

    const [turned, setTurned] = useState([])
    const [text, setText] = useState(0)

    function changeCardType(i){
        setTurned([...turned, i]);
    }

    console.log(turned)

    return(
        <SCQuestions>
            {cards.map((card,i) => (
            <>
            <SCQuestion
                turned={turned.includes(i)}
            >
                <p>Pergunta {i+1}</p>
                <button 
                    disable={'false'}
                    onClick={() => changeCardType(i)} 
                >
                    <img src={play} />
                </button>
            </SCQuestion>
            <SCAnswer
                turned={turned.includes(i)}
            >
                <p>
                    {text === 0 ? card.question : card.answer}
                </p>
                
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

    display:${(props => props.turned ? 'block' : 'none')};

    p{
        font-family: 'Recursive', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333
    }

`