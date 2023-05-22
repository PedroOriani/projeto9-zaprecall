import styled from 'styled-components';

export default function Footer(props){

    const {count, cards} = props;

    return(
        <SCFooter data-test="footer">
            {count.length}/{cards.length} Concluidos
        </SCFooter>
    );
}

const SCFooter = styled.div`
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;

    font-family: 'Recursive', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    bottom: 0;
    z-index: 10;
`;