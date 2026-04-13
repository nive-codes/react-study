// Section.jsx와 비슷한 warraper Component 
export default function Tabs({children, buttons, buttonsContainer}){
    const ButtonsContainer = buttonsContainer;      
    //buttonsContainer = 'menu' 인것을 커스텀 컴포넌트로 인식 시키기 위한 대문자 처리 
    
    return <>
        <ButtonsContainer>
            {buttons}
        </ButtonsContainer>
        {children}
    </>
}