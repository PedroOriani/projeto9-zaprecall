import styled from 'styled-components';
import Back from "./Back";
import Front from "./Front";

export default function Question(){
    return(
        <SCQuestion>
            <Front />
            <Back />
        </SCQuestion>
    )
}

const SCQuestion = styled.div`
    width: 300px;
    height: 131px;

    background-color: #FFFFD5;

    margin: 12.5px auto;

    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
`