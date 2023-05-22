// import styled from 'styled-components';
// import certo from '../assets/icone_certo.png';
// import quase from '../assets/icone_quase.png';
// import erro from '../assets/icone_erro.png';

// export default function Buttons(props) {

//     const buttons =[
//         {
//             id : 0,
//             text : 'Não Lembrei',
//             color : '#FF3030',
//             img: erro
//         },
//         {
//             id : 1,
//             text : 'Quase não Lembrei',
//             color :  '#FF922E',
//             img: quase
//         },
//         {
//             id : 2,
//             text : 'Zap!',
//             color :  '#2FBE34',
//             img: certo
//         }
//     ]


//     return (
//         <SCButtons
//             text={text}
//         >
//             {buttons.map((button, i) => (
//                 <button
//                     key={i}
//                     onClick={()}
//                 >
                    
//                 </button>
//             ))}
//         </SCButtons>
//     );
// }

// const SCButtons = styled.div`
//     display: flex;
//     justify-content: space-between;

//     button{
//         width: 85.17px;
//         height: 37.17px;

//         display: ${(props) => props.turn === 'block' ? 'none' : 'block'};

//         cursor: pointer;
//         border-radius: 5px;
//         border: none;

//         font-family: 'Recursive', sans-serif;
//         font-weight: 400;
//         font-size: 12px;
//         line-height: 14px;
//         color: #ffffff;
//     }
// `