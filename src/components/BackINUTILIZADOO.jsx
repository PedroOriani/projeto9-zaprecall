import styled from 'styled-components';
import { useState } from 'react'
import Buttons from "./Buttons";
import Text from "./Text"

export default function Back(props){

    const {back, setFront, setBack} = props;

    const [turn, setTurned] = useState('block')

    return(
        <SCBack
            back={back}
        >
            <Text />
            <Buttons 
                turn={turn}
                setTurned={setTurned}
                back={back}
                setFront={setFront}
                setBack={setBack}
            />
        </SCBack>
    );
}

const SCBack = styled.div`
padding: 18px 15px 10px 12px;
position: relative;

display:${(props => props.back === 'block' ? 'block' : 'none')};
flex-wrap: wrap;
`