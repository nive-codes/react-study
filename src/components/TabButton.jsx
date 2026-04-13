// export default function TabButton(props) {
//     return <li><button>{props.children}</button></li>;
// }

// 변수로 받은걸 바로 속성을 추출해서 활용 가능
export default function TabButton({children, onSelect}) {
    // function handleClick() {
    //     console.log("Hello World!");
    // }

    // 리액트는 이런 명령형으로 상호작용을 지정하지 않음.
    // document.querySelector('button').addEventListener('click', () => {})
    
    //onclick은 함수를 호출한다
    return <li><button onClick={onSelect}>{children}</button></li>;
}

//label로 받아서 처리도 가능
// export default function TabButton({label}) {
    // return <li><button>{label}</button></li>;
// }