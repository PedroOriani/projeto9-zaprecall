// import React from 'react'
// import { useState } from 'react'
// import styled from 'styled-components';
// // import Back from "./Back";
// // import Front from "./Front";
// // import Buttons from "./Buttons";
// // import Text from "./Text"
// // import play from '../assets/seta_play.png'

// export default function Question(props){

//     const {cards} = props

//     return(
//         <SCQuestion>
//         {cards.map((card,i) => (
//             <SCFront>
//                 pergunta {i+1}
//             </SCFront>))
//         }
//         </SCQuestion>
//         );

// }

// const SCQuestion = styled.div`
//     width: 300px;
//     height: 131px;

//     background-color: #FFFFFF;

//     margin: 12.5px auto;

//     box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
//     border-radius: 5px;
// `

// const SCFront = styled.div`
//     padding: 23px 15px;

//     display: flex;
//     justify-content: space-between;

//     p{
//         font-family: 'Recursive', sans-serif;
//         font-weight: 700;
//         font-size: 16px;
//         line-height: 19px;
//         color: #333333
//     }

//     button{
//         width: 20px;
//         height: 22px;
//         background: none;
//         border: none;
//         cursor: pointer;
//     }
// `