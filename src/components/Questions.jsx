import styled from 'styled-components';
import Question from "./Question";

export default function Questions(){
    return(
        <SCQuestions>
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
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