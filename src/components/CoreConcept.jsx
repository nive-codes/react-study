import './CoreConcept.css';
// function CoreConcept(props){
//   return (
//     <li>
//       <img src={props.image} alt="..."/>
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>

//     </li>
//   );
// }

// 구조 분해 예시 (props로 넘겨준 key로 세팅 data.js -> app()의 CoreConcept의 props)
export default function CoreConcept({image, title, description}){
  return (
    <li>
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <p>{description}</p>

    </li>
  );
}