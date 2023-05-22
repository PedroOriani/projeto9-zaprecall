import styled from 'styled-components';
import play from '../assets/seta_play.png'

export default function Front(props){

//     const {front, setFront, setBack} = props;

//     function showBack(){
//         setFront('none')
//         setBack('block')
//     }

//     return(
//         <SCFront
//             front={front}
//         >
//             <p>Pergunta 1</p>
//             <button 
//             disable={false} 
//             onClick={showBack}>
//                 <img src={play} />
//             </button>
//         </SCFront>
//     )
}

// const SCFront = styled.div`
//     padding: 23px 15px;

//     display:${(props => props.front === 'flex' ? 'flex' : 'none')};
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

// const [front, setFront] = useState([]);
// const [back, setBack] = useState('none');

// const [turn, setTurned] = useState('block')

// function showBack(i){
//     setFront(...front, i)
//     setBack('block')
// }


// return(               
//     {CARDS.map((card, i) => (
//         <SCQuestion
//         front={front}
//         >
//             <SCFront
//                 front={front.includes(i)}
//             >
//                 <p>Pergunta {i+1}</p>
//                 <button 
//                 disable={false} 
//                 onClick={() => showBack(i)}>
//                     <img src={play} />
//                 </button>
//             </SCFront>
//             <SCBack
//                 back={back}
//             >
//                 <Text />
//                 <Buttons 
//                     turn={turn}
//                     setTurned={setTurned}
//                     back={back}
//                     setFront={setFront}
//                     setBack={setBack}
//                 />
//             </SCBack>
//         </SCQuestion>
//         ))
//     }
// )
// }

// const SCQuestion = styled.div`
// width: 300px;
// height: ${(props => props.front === 'flex' ? '65px' : '131px')};

// background-color: ${(props => props.front === 'flex' ? '#FFFFFF' : '#FFFFD4')};

// margin: 12.5px auto;

// box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
// border-radius: 5px;
// `

// const SCFront = styled.div`
// padding: 23px 15px;

// display:${(props => props.front === 'flex' ? 'flex' : 'none')};
// justify-content: space-between;

// p{
//     font-family: 'Recursive', sans-serif;
//     font-weight: 700;
//     font-size: 16px;
//     line-height: 19px;
//     color: #333333
// }

// button{
//     width: 20px;
//     height: 22px;
//     background: none;
//     border: none;
//     cursor: pointer;
// }
// `

// const SCBack = styled.div`
// padding: 18px 15px 10px 12px;
// position: relative;

// display:${(props => props.back === 'block' ? 'block' : 'none')};
// flex-wrap: wrap;
// `