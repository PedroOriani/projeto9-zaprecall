import styled from 'styled-components';
import Buttons from "./Buttons";
import Text from "./Text"

export default function Back(){
    return(
        <SCBack>
            <Text />
            <Buttons />
        </SCBack>
    );
}

const SCBack = styled.div`
padding: 18px 15px 10px 12px;
position: relative;
`