// 변수로 받은걸 바로 속성을 추출해서 활용 가능
export default function TabButton({children,  isSelected, ...props}) {

        
    console.log('TAB BUTTON COMPONENT EXECUTING');
    
    //onclick은 함수를 호출한다
    return <li><button className={isSelected && 'active'} {...props}>{children}</button></li>;
}
